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
  Delete as DeleteIcon,
  FilterList as FilterListIcon,
  Visibility as VisibilityIcon,
  Refresh as RefreshIcon,
  People as PeopleIcon,
  School as SchoolIcon,
  Today as TodayIcon,
  Link as LinkIcon,
  ContentCopy as CopyIcon,
  Share as ShareIcon,
  PictureAsPdf as PdfIcon,
  FileDownload as FileDownloadIcon
} from '@mui/icons-material';
import { format } from 'date-fns';
import toast from 'react-hot-toast';
import jsPDF from 'jspdf';

function CourseRegistrants() {
  const [registrations, setRegistrations] = useState([]);
  const [filteredRegistrations, setFilteredRegistrations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCourse, setFilterCourse] = useState('all');
  const [anchorEl, setAnchorEl] = useState(null);
  const [pdfMenuAnchor, setPdfMenuAnchor] = useState(null);
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

  // Manual PDF Table Generation (without jspdf-autotable)
  const generatePDFTable = (doc, data, startY, title) => {
    const headers = ['Name', 'Email', 'Mobile', 'Course', 'Referral Code', 'Referral Link', 'Date', 'Status'];
    const columnWidths = [30, 40, 30, 35, 35, 50, 30, 20];
    let y = startY;
    
    // Headers
    doc.setFillColor(59, 130, 246);
    doc.setTextColor(255, 255, 255);
    doc.setFont('helvetica', 'bold');
    let x = 14;
    headers.forEach((header, i) => {
      doc.rect(x, y, columnWidths[i], 8, 'F');
      doc.text(header, x + 2, y + 5);
      x += columnWidths[i];
    });
    
    // Rows
    doc.setTextColor(0, 0, 0);
    doc.setFont('helvetica', 'normal');
    y += 8;
    
    data.forEach((row, rowIndex) => {
      let xPos = 14;
      const rowData = [
        row.name || '',
        row.email || '',
        row.mobile || '',
        row.course || '',
        row.generatedReferralCode || '',
        getReferralLink(row.generatedReferralCode || '').substring(0, 35),
        row.registeredAt?.toDate() ? format(row.registeredAt.toDate(), 'dd/MM/yy') : 'N/A',
        row.status || 'active'
      ];
      
      // Alternate row colors
      if (rowIndex % 2 === 0) {
        doc.setFillColor(245, 245, 245);
        doc.rect(14, y, 270, 8, 'F');
      }
      
      rowData.forEach((value, i) => {
        doc.text(String(value), xPos + 2, y + 5);
        xPos += columnWidths[i];
      });
      y += 8;
      
      // Add new page if needed
      if (y > 280) {
        doc.addPage();
        y = 20;
      }
    });
    
    return y;
  };

  const generatePDF = (data, title, isSingle = false) => {
    const doc = new jsPDF('landscape');
    let yPos = 20;
    
    // Add header
    doc.setFontSize(22);
    doc.setTextColor(59, 130, 246);
    doc.text('ZION TECH HUB', 105, yPos, { align: 'center' });
    
    yPos += 10;
    doc.setFontSize(16);
    doc.setTextColor(33, 33, 33);
    doc.text(title, 105, yPos, { align: 'center' });
    
    yPos += 8;
    doc.setFontSize(10);
    doc.setTextColor(100, 100, 100);
    doc.text(`Generated: ${format(new Date(), 'dd/MM/yyyy HH:mm:ss')}`, 105, yPos, { align: 'center' });
    
    yPos += 8;
    doc.setFontSize(12);
    doc.setTextColor(0, 0, 0);
    doc.text(`Total Registrations: ${data.length}`, 14, yPos);
    
    yPos += 8;
    doc.line(14, yPos, 296, yPos);
    yPos += 8;
    
    // Generate table
    generatePDFTable(doc, data, yPos, title);
    
    // Footer
    const pageCount = doc.internal.getNumberOfPages();
    for (let i = 1; i <= pageCount; i++) {
      doc.setPage(i);
      doc.setFontSize(8);
      doc.setTextColor(150, 150, 150);
      doc.text('Zion Tech Hub - Partnership Program Report', 105, 285, { align: 'center' });
      doc.text(`Page ${i} of ${pageCount}`, 280, 285);
    }
    
    // Save PDF
    const fileName = `${title.replace(/\s/g, '_')}_${format(new Date(), 'yyyy-MM-dd')}.pdf`;
    doc.save(fileName);
    
    showSnackbar(`PDF downloaded successfully!`, 'success');
  };

  const generateSingleRegistrationPDF = (reg) => {
    const doc = new jsPDF();
    let yPos = 20;
    
    // Header
    doc.setFontSize(22);
    doc.setTextColor(59, 130, 246);
    doc.text('ZION TECH HUB', 105, yPos, { align: 'center' });
    
    yPos += 10;
    doc.setFontSize(16);
    doc.setTextColor(33, 33, 33);
    doc.text('Registration Details', 105, yPos, { align: 'center' });
    
    yPos += 8;
    doc.setFontSize(10);
    doc.setTextColor(100, 100, 100);
    doc.text(`Generated: ${format(new Date(), 'dd/MM/yyyy HH:mm:ss')}`, 105, yPos, { align: 'center' });
    
    yPos += 8;
    doc.line(20, yPos, 190, yPos);
    yPos += 10;
    
    // Registration Details
    const addField = (label, value) => {
      doc.setFontSize(11);
      doc.setTextColor(80, 80, 80);
      doc.text(label + ':', 20, yPos);
      doc.setTextColor(0, 0, 0);
      doc.text(value || 'N/A', 70, yPos);
      yPos += 8;
    };
    
    addField('Full Name', reg.name);
    addField('Email Address', reg.email);
    addField('Mobile Number', reg.mobile);
    addField('Course', reg.course);
    addField('Generated Referral Code', reg.generatedReferralCode);
    addField('Used Referral ID', reg.referralId || 'None');
    addField('Registration ID', reg.registrationId || 'N/A');
    addField('Status', reg.status || 'active');
    addField('Payment Status', reg.paymentStatus || 'pending');
    addField('Registration Date', reg.registeredAt?.toDate() ? format(reg.registeredAt.toDate(), 'dd/MM/yyyy HH:mm:ss') : 'N/A');
    
    yPos += 5;
    doc.setFontSize(11);
    doc.setTextColor(59, 130, 246);
    doc.text('Referral Link:', 20, yPos);
    yPos += 6;
    doc.setFontSize(9);
    doc.setTextColor(0, 0, 0);
    const link = getReferralLink(reg.generatedReferralCode || '');
    const splitLink = doc.splitTextToSize(link, 170);
    doc.text(splitLink, 20, yPos);
    
    // Footer
    const pageHeight = doc.internal.pageSize.height;
    doc.setFontSize(8);
    doc.setTextColor(150, 150, 150);
    doc.text('Zion Tech Hub - Partnership Program', 105, pageHeight - 10, { align: 'center' });
    
    // Save PDF
    const fileName = `${reg.name?.replace(/\s/g, '_') || 'Registration'}_${format(new Date(), 'yyyy-MM-dd')}.pdf`;
    doc.save(fileName);
    
    showSnackbar('Registration PDF downloaded successfully!', 'success');
  };

  const handlePDFDownload = (type) => {
    if (type === 'all') {
      generatePDF(registrations, 'All_Registrations_Report');
    } else if (type === 'filtered') {
      generatePDF(filteredRegistrations, 'Filtered_Registrations_Report');
    } else if (type === 'today') {
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      const todayRegs = registrations.filter(reg => {
        const date = reg.registeredAt?.toDate();
        return date && date >= today;
      });
      generatePDF(todayRegs, 'Today_Registrations_Report');
    } else if (type === 'week') {
      const weekAgo = new Date();
      weekAgo.setDate(weekAgo.getDate() - 7);
      const weekRegs = registrations.filter(reg => {
        const date = reg.registeredAt?.toDate();
        return date && date >= weekAgo;
      });
      generatePDF(weekRegs, 'Weekly_Registrations_Report');
    }
    setPdfMenuAnchor(null);
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
          <Box display="flex" gap={2} flexWrap="wrap">
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
            
            {/* PDF Download Button */}
            <Button
              variant="contained"
              startIcon={<PdfIcon />}
              onClick={(e) => setPdfMenuAnchor(e.currentTarget)}
              sx={{ bgcolor: '#dc2626', '&:hover': { bgcolor: '#b91c1c' } }}
            >
              Download PDF
            </Button>
            <Menu
              anchorEl={pdfMenuAnchor}
              open={Boolean(pdfMenuAnchor)}
              onClose={() => setPdfMenuAnchor(null)}
            >
              <MenuItem onClick={() => handlePDFDownload('all')}>
                <FileDownloadIcon fontSize="small" sx={{ mr: 1 }} /> All Registrations
              </MenuItem>
              <MenuItem onClick={() => handlePDFDownload('filtered')}>
                <FileDownloadIcon fontSize="small" sx={{ mr: 1 }} /> Current View
              </MenuItem>
              <MenuItem onClick={() => handlePDFDownload('today')}>
                <FileDownloadIcon fontSize="small" sx={{ mr: 1 }} /> Today's Registrations
              </MenuItem>
              <MenuItem onClick={() => handlePDFDownload('week')}>
                <FileDownloadIcon fontSize="small" sx={{ mr: 1 }} /> This Week
              </MenuItem>
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
                        <Tooltip title="Download PDF">
                          <IconButton 
                            size="small" 
                            onClick={() => generateSingleRegistrationPDF(reg)}
                          >
                            <PdfIcon fontSize="small" sx={{ color: '#dc2626' }} />
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

      {/* Details Dialog */}
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
          {selectedReg && (
            <Button 
              onClick={() => generateSingleRegistrationPDF(selectedReg)} 
              startIcon={<PdfIcon />}
              sx={{ color: '#dc2626' }}
            >
              Download PDF
            </Button>
          )}
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
