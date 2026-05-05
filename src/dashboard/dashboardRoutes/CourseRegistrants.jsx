import React, { useState, useEffect } from 'react';
import {
  collection,
  query,
  getDocs,
  orderBy,
  doc,
  updateDoc,
  deleteDoc,
  serverTimestamp
} from 'firebase/firestore';
import { db } from '../../lib/Config/firebase';
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TablePagination,
  Box,
  Typography,
  Button,
  TextField,
  IconButton,
  Chip,
  Tooltip,
  InputAdornment,
  Menu,
  MenuItem,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Select,
  FormControl,
  InputLabel,
  Alert,
  Snackbar,
  Card,
  CardContent,
  Grid
} from '@mui/material';
import {
  Download as DownloadIcon,
  Search as SearchIcon,
  WhatsApp as WhatsAppIcon,
  Edit as EditIcon,
  Delete as DeleteIcon,
  FilterList as FilterListIcon,
  Visibility as VisibilityIcon,
  Refresh as RefreshIcon,
  People as PeopleIcon,
  School as SchoolIcon,
  Today as TodayIcon,
  Link as LinkIcon,
  ContentCopy as CopyIcon,
  Share as ShareIcon
} from '@mui/icons-material';
import { format } from 'date-fns';
import toast from 'react-hot-toast';

function CourseRegistrants() {
  const [registrations, setRegistrations] = useState([]);
  const [filteredRegistrations, setFilteredRegistrations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCourse, setFilterCourse] = useState('all');
  const [anchorEl, setAnchorEl] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedReg, setSelectedReg] = useState(null);
  const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: 'success' });
  const [stats, setStats] = useState({
    total: 0,
    today: 0,
    thisWeek: 0,
    byCourse: {}
  });

  useEffect(() => {
    fetchRegistrations();
  }, []);

  const fetchRegistrations = async () => {
    setLoading(true);
    try {
      const q = query(
        collection(db, 'course-registrants'),
        orderBy('registrationTimestamp', 'desc')
      );
      const snapshot = await getDocs(q);
      const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setRegistrations(data);
      calculateStats(data);
      applyFilters(data);
    } catch (error) {
      console.error('Error fetching registrations:', error);
      showSnackbar('Error fetching data', 'error');
    }
    setLoading(false);
  };

  const calculateStats = (data) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    const weekAgo = new Date();
    weekAgo.setDate(weekAgo.getDate() - 7);

    const todayRegs = data.filter(reg => {
      const date = reg.registeredAt?.toDate();
      return date && date >= today;
    }).length;

    const weekRegs = data.filter(reg => {
      const date = reg.registeredAt?.toDate();
      return date && date >= weekAgo;
    }).length;

    const courseCount = {};
    data.forEach(reg => {
      courseCount[reg.course] = (courseCount[reg.course] || 0) + 1;
    });

    setStats({
      total: data.length,
      today: todayRegs,
      thisWeek: weekRegs,
      byCourse: courseCount
    });
  };

  const applyFilters = (data) => {
    let filtered = data;
    
    if (searchTerm) {
      filtered = filtered.filter(reg =>
        reg.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        reg.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        reg.mobile?.includes(searchTerm) ||
        reg.generatedReferralCode?.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    if (filterCourse !== 'all') {
      filtered = filtered.filter(reg => reg.course === filterCourse);
    }
    
    setFilteredRegistrations(filtered);
  };

  useEffect(() => {
    applyFilters(registrations);
  }, [searchTerm, filterCourse, registrations]);

  const showSnackbar = (message, severity) => {
    setSnackbar({ open: true, message, severity });
  };

  const handleUpdateStatus = async (id, status) => {
    try {
      const docRef = doc(db, 'course-registrants', id);
      await updateDoc(docRef, { status, updatedAt: serverTimestamp() });
      showSnackbar('Status updated successfully', 'success');
      fetchRegistrations();
    } catch (error) {
      showSnackbar('Error updating status', 'error');
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this registration?')) {
      try {
        await deleteDoc(doc(db, 'course-registrants', id));
        showSnackbar('Registration deleted successfully', 'success');
        fetchRegistrations();
      } catch (error) {
        showSnackbar('Error deleting registration', 'error');
      }
    }
  };

  const copyToClipboard = (text, type) => {
    navigator.clipboard.writeText(text);
    toast.success(`${type} copied to clipboard!`);
  };

  const getReferralLink = (referralCode) => {
    return `https://ziontechhub.com/enroll?affliate=${referralCode}`;
  };

  const exportToCSV = () => {
    const headers = ['Name', 'Email', 'Mobile', 'Course', 'Referral Code', 'Referral Link', 'Registration Date', 'Status', 'Payment Status'];
    const csvData = filteredRegistrations.map(reg => [
      reg.name,
      reg.email,
      reg.mobile,
      reg.course,
      reg.generatedReferralCode,
      getReferralLink(reg.generatedReferralCode),
      reg.registeredAt?.toDate() ? format(reg.registeredAt.toDate(), 'yyyy-MM-dd HH:mm:ss') : 'N/A',
      reg.status || 'active',
      reg.paymentStatus || 'pending'
    ]);
    
    const csvContent = [headers, ...csvData].map(row => row.join(',')).join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `course-registrations-${format(new Date(), 'yyyy-MM-dd')}.csv`;
    a.click();
    URL.revokeObjectURL(url);
    showSnackbar('Export completed', 'success');
  };

  const getCourseColor = (course) => {
    const colors = {
      'Healthcare Data Analytics': '#10b981',
      'Financial Data Analytics': '#3b82f6',
      'Sales and Marketing Data Analytics': '#f59e0b',
      'Supply Chain Analytics': '#8b5cf6',
      'Data Science and AI': '#ef4444',
      'AI Automation': '#06b6d4'
    };
    return colors[course] || '#6b7280';
  };

  // Share referral link via WhatsApp
  const shareViaWhatsApp = (referralCode, name) => {
    const link = getReferralLink(referralCode);
    const message = `🎉 Join me at Zion Tech Hub! 🎉%0a%0aUse my referral link to register:%0a${link}%0a%0aReferral Code: ${referralCode}%0a%0aDon't miss this opportunity!`;
    window.open(`https://wa.me/?text=${message}`, '_blank');
  };

  return (
    <div className="p-6">
      <Typography variant="h4" gutterBottom className="mb-6">
        Course Registrations Management
      </Typography>

      {/* Stats Cards */}
      <Grid container spacing={3} className="mb-6">
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Box display="flex" justifyContent="space-between" alignItems="center">
                <Box>
                  <Typography color="textSecondary" variant="caption">
                    Total Registrations
                  </Typography>
                  <Typography variant="h4">{stats.total}</Typography>
                </Box>
                <PeopleIcon sx={{ fontSize: 40, color: '#3b82f6' }} />
              </Box>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Box display="flex" justifyContent="space-between" alignItems="center">
                <Box>
                  <Typography color="textSecondary" variant="caption">
                    Today's Registrations
                  </Typography>
                  <Typography variant="h4">{stats.today}</Typography>
                </Box>
                <TodayIcon sx={{ fontSize: 40, color: '#10b981' }} />
              </Box>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Box display="flex" justifyContent="space-between" alignItems="center">
                <Box>
                  <Typography color="textSecondary" variant="caption">
                    This Week
                  </Typography>
                  <Typography variant="h4">{stats.thisWeek}</Typography>
                </Box>
                <SchoolIcon sx={{ fontSize: 40, color: '#f59e0b' }} />
              </Box>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Box display="flex" justifyContent="space-between" alignItems="center">
                <Box>
                  <Typography color="textSecondary" variant="caption">
                    Unique Courses
                  </Typography>
                  <Typography variant="h4">{Object.keys(stats.byCourse).length}</Typography>
                </Box>
                <VisibilityIcon sx={{ fontSize: 40, color: '#8b5cf6' }} />
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Filters and Actions */}
      <Paper className="mb-6 p-4">
        <Box display="flex" justifyContent="space-between" alignItems="center" flexWrap="wrap" gap={2}>
          <TextField
            size="small"
            placeholder="Search by name, email, phone or referral code..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
            sx={{ minWidth: 300 }}
          />
          <Box display="flex" gap={2}>
            <Button
              variant="outlined"
              startIcon={<FilterListIcon />}
              onClick={(e) => setAnchorEl(e.currentTarget)}
            >
              {filterCourse === 'all' ? 'All Courses' : filterCourse}
            </Button>
            <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={() => setAnchorEl(null)}>
              <MenuItem onClick={() => { setFilterCourse('all'); setAnchorEl(null); }}>All Courses</MenuItem>
              {Object.keys(stats.byCourse).map(course => (
                <MenuItem key={course} onClick={() => { setFilterCourse(course); setAnchorEl(null); }}>
                  {course}
                </MenuItem>
              ))}
            </Menu>
            <Button
              variant="contained"
              startIcon={<DownloadIcon />}
              onClick={exportToCSV}
            >
              Export CSV
            </Button>
            <Button
              variant="outlined"
              startIcon={<RefreshIcon />}
              onClick={fetchRegistrations}
            >
              Refresh
            </Button>
          </Box>
        </Box>
      </Paper>

      {/* Registrations Table */}
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow sx={{ bgcolor: '#f3f4f6' }}>
              <TableCell><strong>Name</strong></TableCell>
              <TableCell><strong>Email</strong></TableCell>
              <TableCell><strong>Mobile</strong></TableCell>
              <TableCell><strong>Course</strong></TableCell>
              <TableCell><strong>Referral Code</strong></TableCell>
              <TableCell><strong>Referral Link</strong></TableCell>
              <TableCell><strong>Registration Date</strong></TableCell>
              <TableCell><strong>Status</strong></TableCell>
              <TableCell><strong>Payment</strong></TableCell>
              <TableCell><strong>Actions</strong></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredRegistrations
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((reg) => {
                const referralLink = getReferralLink(reg.generatedReferralCode);
                return (
                  <TableRow key={reg.id} hover>
                    <TableCell>{reg.name}</TableCell>
                    <TableCell>{reg.email}</TableCell>
                    <TableCell>{reg.mobile}</TableCell>
                    <TableCell>
                      <Chip
                        label={reg.course}
                        size="small"
                        sx={{ bgcolor: getCourseColor(reg.course), color: 'white' }}
                      />
                    </TableCell>
                    <TableCell>
                      <Box display="flex" alignItems="center" gap={1}>
                        <Chip
                          label={reg.generatedReferralCode}
                          variant="outlined"
                          size="small"
                          sx={{ fontFamily: 'monospace' }}
                        />
                        <Tooltip title="Copy Referral Code">
                          <IconButton 
                            size="small" 
                            onClick={() => copyToClipboard(reg.generatedReferralCode, 'Referral Code')}
                          >
                            <CopyIcon fontSize="small" />
                          </IconButton>
                        </Tooltip>
                      </Box>
                    </TableCell>
                    <TableCell>
                      <Box display="flex" alignItems="center" gap={1}>
                        <Chip
                          label={referralLink.substring(0, 35) + '...'}
                          size="small"
                          variant="outlined"
                          sx={{ fontFamily: 'monospace', fontSize: '0.7rem' }}
                        />
                        <Tooltip title="Copy Referral Link">
                          <IconButton 
                            size="small" 
                            onClick={() => copyToClipboard(referralLink, 'Referral Link')}
                          >
                            <LinkIcon fontSize="small" sx={{ color: '#3b82f6' }} />
                          </IconButton>
                        </Tooltip>
                        <Tooltip title="Share on WhatsApp">
                          <IconButton 
                            size="small" 
                            onClick={() => shareViaWhatsApp(reg.generatedReferralCode, reg.name)}
                          >
                            <ShareIcon fontSize="small" sx={{ color: '#25D366' }} />
                          </IconButton>
                        </Tooltip>
                      </Box>
                    </TableCell>
                    <TableCell>
                      {reg.registeredAt?.toDate() ? format(reg.registeredAt.toDate(), 'dd/MM/yyyy HH:mm') : 'N/A'}
                    </TableCell>
                    <TableCell>
                      <Select
                        size="small"
                        value={reg.status || 'active'}
                        onChange={(e) => handleUpdateStatus(reg.id, e.target.value)}
                        sx={{ minWidth: 100 }}
                      >
                        <MenuItem value="active">Active</MenuItem>
                        <MenuItem value="completed">Completed</MenuItem>
                        <MenuItem value="cancelled">Cancelled</MenuItem>
                      </Select>
                    </TableCell>
                    <TableCell>
                      <Chip
                        label={reg.paymentStatus || 'pending'}
                        color={reg.paymentStatus === 'paid' ? 'success' : reg.paymentStatus === 'failed' ? 'error' : 'warning'}
                        size="small"
                      />
                    </TableCell>
                    <TableCell>
                      <Tooltip title="WhatsApp">
                        <IconButton size="small" href={`https://wa.me/${reg.mobile}`} target="_blank">
                          <WhatsAppIcon fontSize="small" sx={{ color: '#25D366' }} />
                        </IconButton>
                      </Tooltip>
                      <Tooltip title="Delete">
                        <IconButton size="small" onClick={() => handleDelete(reg.id)}>
                          <DeleteIcon fontSize="small" sx={{ color: '#ef4444' }} />
                        </IconButton>
                      </Tooltip>
                    </TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
        <TablePagination
          rowsPerPageOptions={[10, 25, 50, 100]}
          component="div"
          count={filteredRegistrations.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={(e, newPage) => setPage(newPage)}
          onRowsPerPageChange={(e) => {
            setRowsPerPage(parseInt(e.target.value, 10));
            setPage(0);
          }}
        />
      </TableContainer>

      {/* Details Dialog with Referral Link */}
      <Dialog open={openDialog} onClose={() => setOpenDialog(false)} maxWidth="md" fullWidth>
        <DialogTitle>Registration Details</DialogTitle>
        <DialogContent>
          {selectedReg && (
            <Box sx={{ p: 2 }}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <Typography variant="subtitle2" color="textSecondary">Name</Typography>
                  <Typography variant="body1">{selectedReg.name}</Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Typography variant="subtitle2" color="textSecondary">Email</Typography>
                  <Typography variant="body1">{selectedReg.email}</Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Typography variant="subtitle2" color="textSecondary">Mobile</Typography>
                  <Typography variant="body1">{selectedReg.mobile}</Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Typography variant="subtitle2" color="textSecondary">Course</Typography>
                  <Typography variant="body1">{selectedReg.course}</Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="subtitle2" color="textSecondary">Referral Code</Typography>
                  <Box display="flex" alignItems="center" gap={1}>
                    <Typography variant="body1" sx={{ fontFamily: 'monospace' }}>{selectedReg.generatedReferralCode}</Typography>
                    <IconButton size="small" onClick={() => copyToClipboard(selectedReg.generatedReferralCode, 'Referral Code')}>
                      <CopyIcon fontSize="small" />
                    </IconButton>
                  </Box>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="subtitle2" color="textSecondary">Referral Link</Typography>
                  <Box display="flex" alignItems="center" gap={1} flexWrap="wrap">
                    <Typography variant="body2" sx={{ fontFamily: 'monospace', wordBreak: 'break-all' }}>
                      {getReferralLink(selectedReg.generatedReferralCode)}
                    </Typography>
                    <IconButton size="small" onClick={() => copyToClipboard(getReferralLink(selectedReg.generatedReferralCode), 'Referral Link')}>
                      <CopyIcon fontSize="small" />
                    </IconButton>
                    <IconButton size="small" onClick={() => shareViaWhatsApp(selectedReg.generatedReferralCode, selectedReg.name)}>
                      <WhatsAppIcon fontSize="small" sx={{ color: '#25D366' }} />
                    </IconButton>
                  </Box>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="subtitle2" color="textSecondary">Registration Date</Typography>
                  <Typography variant="body1">
                    {selectedReg.registeredAt?.toDate() ? format(selectedReg.registeredAt.toDate(), 'dd/MM/yyyy HH:mm:ss') : 'N/A'}
                  </Typography>
                </Grid>
              </Grid>
            </Box>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenDialog(false)}>Close</Button>
        </DialogActions>
      </Dialog>

      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={() => setSnackbar({ ...snackbar, open: false })}
      >
        <Alert severity={snackbar.severity} onClose={() => setSnackbar({ ...snackbar, open: false })}>
          {snackbar.message}
        </Alert>
      </Snackbar>
    </div>
  );
}

export default CourseRegistrants;
