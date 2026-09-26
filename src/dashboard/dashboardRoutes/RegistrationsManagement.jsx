import React, { useState, useEffect } from "react";
import { 
  collection, 
  getDocs, 
  query, 
  orderBy, 
  deleteDoc, 
  doc,
  updateDoc,
  serverTimestamp 
} from "firebase/firestore";
import { db } from "../../lib/Config/firebase";
import { 
  Box, 
  Typography, 
  Paper, 
  Table, 
  TableBody, 
  TableCell, 
  TableContainer, 
  TableHead, 
  TableRow,
  TablePagination,
  TextField,
  Button,
  Chip,
  IconButton,
  Tooltip,
  InputAdornment,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Alert,
  CircularProgress,
  Card,
  CardContent,
  Grid
} from "@mui/material";
import {
  Search as SearchIcon,
  Download as DownloadIcon,
  Delete as DeleteIcon,
  Refresh as RefreshIcon,
  Visibility as VisibilityIcon,
  WhatsApp as WhatsAppIcon,
  People as PeopleIcon,
  School as SchoolIcon,
  Today as TodayIcon,
  CheckCircle as CheckCircleIcon,
  Cancel as CancelIcon
} from "@mui/icons-material";
import { format } from "date-fns";
import toast from "react-hot-toast";

function RegistrationsManagement() {
  const [registrations, setRegistrations] = useState([]);
  const [filteredRegistrations, setFilteredRegistrations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterCourse, setFilterCourse] = useState("all");
  const [selectedReg, setSelectedReg] = useState(null);
  const [openDetailsDialog, setOpenDetailsDialog] = useState(false);
  const [stats, setStats] = useState({
    total: 0,
    today: 0,
    thisWeek: 0,
    byCourse: {}
  });

  // Fetch registrations
  const fetchRegistrations = async () => {
    setLoading(true);
    try {
      const q = query(
        collection(db, "course-registrants"),
        orderBy("registrationTimestamp", "desc")
      );
      const snapshot = await getDocs(q);
      const data = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setRegistrations(data);
      calculateStats(data);
      applyFilters(data);
    } catch (error) {
      console.error("Error fetching registrations:", error);
      toast.error("Failed to load registrations");
    } finally {
      setLoading(false);
    }
  };

  // Calculate statistics
  const calculateStats = (data) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    const weekAgo = new Date();
    weekAgo.setDate(weekAgo.getDate() - 7);

    const todayRegs = data.filter(reg => {
      const date = reg.registeredAt?.toDate?.() || new Date(reg.registeredAt);
      return date >= today;
    }).length;

    const weekRegs = data.filter(reg => {
      const date = reg.registeredAt?.toDate?.() || new Date(reg.registeredAt);
      return date >= weekAgo;
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

  // Apply filters
  const applyFilters = (data) => {
    let filtered = [...data];
    
    if (searchTerm) {
      filtered = filtered.filter(reg =>
        reg.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        reg.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        reg.mobile?.includes(searchTerm) ||
        reg.generatedReferralCode?.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    if (filterCourse !== "all") {
      filtered = filtered.filter(reg => reg.course === filterCourse);
    }
    
    setFilteredRegistrations(filtered);
  };

  useEffect(() => {
    fetchRegistrations();
  }, []);

  useEffect(() => {
    applyFilters(registrations);
  }, [searchTerm, filterCourse, registrations]);

  // Handle delete
  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this registration?")) {
      try {
        await deleteDoc(doc(db, "course-registrants", id));
        toast.success("Registration deleted successfully");
        fetchRegistrations();
      } catch (error) {
        console.error("Error deleting:", error);
        toast.error("Failed to delete registration");
      }
    }
  };

  // Export to CSV
  const exportToCSV = () => {
    const headers = [
      "Name", "Email", "Mobile", "Course", "Referral Code", 
      "Referral ID", "Registration Date", "Registration ID"
    ];
    
    const csvData = filteredRegistrations.map(reg => [
      reg.name,
      reg.email,
      reg.mobile,
      reg.course,
      reg.generatedReferralCode,
      reg.referralId || "None",
      reg.registeredAt?.toDate?.() ? format(reg.registeredAt.toDate(), "yyyy-MM-dd HH:mm:ss") : "N/A",
      reg.registrationId || "N/A"
    ]);
    
    const csvContent = [headers, ...csvData].map(row => row.join(",")).join("\n");
    const blob = new Blob([csvContent], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `registrations-${format(new Date(), "yyyy-MM-dd")}.csv`;
    a.click();
    URL.revokeObjectURL(url);
    toast.success("Export completed!");
  };

  const getCourseColor = (course) => {
    const colors = {
      "Healthcare Data Analytics": "#10b981",
      "Financial Data Analytics": "#3b82f6",
      "Sales and Marketing Data Analytics": "#f59e0b",
      "Supply Chain Analytics": "#8b5cf6",
      "Data Science and AI": "#ef4444",
      "AI Automation": "#06b6d4"
    };
    return colors[course] || "#6b7280";
  };

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="60vh">
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Box sx={{ p: 3, bgcolor: "#0a0a0a", minHeight: "100vh" }}>
      {/* Header */}
      <Typography variant="h4" gutterBottom sx={{ color: "white", mb: 3 }}>
        Partnership Program Registrations
      </Typography>

      {/* Stats Cards */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        <Grid item xs={12} sm={6} md={3}>
          <Card sx={{ bgcolor: "#1a1a1a", color: "white" }}>
            <CardContent>
              <Box display="flex" justifyContent="space-between" alignItems="center">
                <Box>
                  <Typography color="gray" variant="caption">Total Registrations</Typography>
                  <Typography variant="h4">{stats.total}</Typography>
                </Box>
                <PeopleIcon sx={{ fontSize: 40, color: "#3b82f6", opacity: 0.7 }} />
              </Box>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card sx={{ bgcolor: "#1a1a1a", color: "white" }}>
            <CardContent>
              <Box display="flex" justifyContent="space-between" alignItems="center">
                <Box>
                  <Typography color="gray" variant="caption">Today's Registrations</Typography>
                  <Typography variant="h4">{stats.today}</Typography>
                </Box>
                <TodayIcon sx={{ fontSize: 40, color: "#10b981", opacity: 0.7 }} />
              </Box>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card sx={{ bgcolor: "#1a1a1a", color: "white" }}>
            <CardContent>
              <Box display="flex" justifyContent="space-between" alignItems="center">
                <Box>
                  <Typography color="gray" variant="caption">This Week</Typography>
                  <Typography variant="h4">{stats.thisWeek}</Typography>
                </Box>
                <SchoolIcon sx={{ fontSize: 40, color: "#f59e0b", opacity: 0.7 }} />
              </Box>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card sx={{ bgcolor: "#1a1a1a", color: "white" }}>
            <CardContent>
              <Box display="flex" justifyContent="space-between" alignItems="center">
                <Box>
                  <Typography color="gray" variant="caption">Unique Courses</Typography>
                  <Typography variant="h4">{Object.keys(stats.byCourse).length}</Typography>
                </Box>
                <SchoolIcon sx={{ fontSize: 40, color: "#8b5cf6", opacity: 0.7 }} />
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Filters */}
      <Paper sx={{ p: 2, mb: 3, bgcolor: "#1a1a1a" }}>
        <Box display="flex" justifyContent="space-between" alignItems="center" flexWrap="wrap" gap={2}>
          <TextField
            size="small"
            placeholder="Search by name, email, phone or referral code..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon sx={{ color: "gray" }} />
                </InputAdornment>
              ),
            }}
            sx={{ minWidth: 300, input: { color: "white" }, label: { color: "gray" } }}
          />
          <Box display="flex" gap={2}>
            <FormControl size="small" sx={{ minWidth: 150 }}>
              <InputLabel sx={{ color: "gray" }}>Course</InputLabel>
              <Select
                value={filterCourse}
                onChange={(e) => setFilterCourse(e.target.value)}
                label="Course"
                sx={{ color: "white" }}
              >
                <MenuItem value="all">All Courses</MenuItem>
                {Object.keys(stats.byCourse).map(course => (
                  <MenuItem key={course} value={course}>{course}</MenuItem>
                ))}
              </Select>
            </FormControl>
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
      <TableContainer component={Paper} sx={{ bgcolor: "#1a1a1a" }}>
        <Table>
          <TableHead>
            <TableRow sx={{ bgcolor: "#333" }}>
              <TableCell sx={{ color: "white", fontWeight: "bold" }}>Name</TableCell>
              <TableCell sx={{ color: "white", fontWeight: "bold" }}>Email</TableCell>
              <TableCell sx={{ color: "white", fontWeight: "bold" }}>Mobile</TableCell>
              <TableCell sx={{ color: "white", fontWeight: "bold" }}>Course</TableCell>
              <TableCell sx={{ color: "white", fontWeight: "bold" }}>Referral Code</TableCell>
              <TableCell sx={{ color: "white", fontWeight: "bold" }}>Registration Date</TableCell>
              <TableCell sx={{ color: "white", fontWeight: "bold" }}>Referral ID</TableCell>
              <TableCell sx={{ color: "white", fontWeight: "bold" }}>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredRegistrations
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((reg) => (
                <TableRow key={reg.id} hover sx={{ "&:hover": { bgcolor: "#2a2a2a" } }}>
                  <TableCell sx={{ color: "#ccc" }}>{reg.name}</TableCell>
                  <TableCell sx={{ color: "#999" }}>{reg.email}</TableCell>
                  <TableCell sx={{ color: "#999" }}>{reg.mobile}</TableCell>
                  <TableCell>
                    <Chip
                      label={reg.course}
                      size="small"
                      sx={{ bgcolor: getCourseColor(reg.course), color: "white" }}
                    />
                  </TableCell>
                  <TableCell>
                    <Chip
                      label={reg.generatedReferralCode}
                      variant="outlined"
                      size="small"
                      sx={{ color: "#3b82f6", borderColor: "#3b82f6" }}
                    />
                  </TableCell>
                  <TableCell sx={{ color: "#999", fontSize: "0.75rem" }}>
                    {reg.registeredAt?.toDate?.() 
                      ? format(reg.registeredAt.toDate(), "dd/MM/yyyy HH:mm")
                      : reg.registeredAt 
                        ? format(new Date(reg.registeredAt), "dd/MM/yyyy HH:mm")
                        : "N/A"}
                  </TableCell>
                  <TableCell>
                    {reg.referralId ? (
                      <Chip label={reg.referralId} size="small" sx={{ bgcolor: "#f59e0b", color: "white" }} />
                    ) : (
                      <Chip label="None" size="small" variant="outlined" sx={{ color: "#666" }} />
                    )}
                  </TableCell>
                  <TableCell>
                    <Tooltip title="View Details">
                      <IconButton size="small" onClick={() => {
                        setSelectedReg(reg);
                        setOpenDetailsDialog(true);
                      }}>
                        <VisibilityIcon fontSize="small" sx={{ color: "#3b82f6" }} />
                      </IconButton>
                    </Tooltip>
                    <Tooltip title="Send WhatsApp">
                      <IconButton size="small" href={`https://wa.me/${reg.mobile}`} target="_blank">
                        <WhatsAppIcon fontSize="small" sx={{ color: "#25D366" }} />
                      </IconButton>
                    </Tooltip>
                    <Tooltip title="Delete">
                      <IconButton size="small" onClick={() => handleDelete(reg.id)}>
                        <DeleteIcon fontSize="small" sx={{ color: "#ef4444" }} />
                      </IconButton>
                    </Tooltip>
                  </TableCell>
                </TableRow>
              ))}
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
          sx={{ color: "white" }}
        />
      </TableContainer>

      {/* Details Dialog */}
      <Dialog open={openDetailsDialog} onClose={() => setOpenDetailsDialog(false)} maxWidth="md" fullWidth>
        <DialogTitle sx={{ bgcolor: "#1a1a1a", color: "white" }}>
          Registration Details
        </DialogTitle>
        <DialogContent sx={{ bgcolor: "#1a1a1a" }}>
          {selectedReg && (
            <Box sx={{ p: 2 }}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <Typography variant="subtitle2" color="gray">Full Name</Typography>
                  <Typography variant="body1" color="white" sx={{ mb: 2 }}>{selectedReg.name}</Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Typography variant="subtitle2" color="gray">Email</Typography>
                  <Typography variant="body1" color="white" sx={{ mb: 2 }}>{selectedReg.email}</Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Typography variant="subtitle2" color="gray">Mobile Number</Typography>
                  <Typography variant="body1" color="white" sx={{ mb: 2 }}>{selectedReg.mobile}</Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Typography variant="subtitle2" color="gray">Course</Typography>
                  <Typography variant="body1" color="white" sx={{ mb: 2 }}>{selectedReg.course}</Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Typography variant="subtitle2" color="gray">Generated Referral Code</Typography>
                  <Typography variant="body1" color="#3b82f6" sx={{ mb: 2 }}>{selectedReg.generatedReferralCode}</Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Typography variant="subtitle2" color="gray">Used Referral ID</Typography>
                  <Typography variant="body1" color="white" sx={{ mb: 2 }}>{selectedReg.referralId || "None"}</Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Typography variant="subtitle2" color="gray">Registration ID</Typography>
                  <Typography variant="body2" color="gray" sx={{ mb: 2, fontFamily: "monospace" }}>{selectedReg.registrationId}</Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Typography variant="subtitle2" color="gray">Registration Date</Typography>
                  <Typography variant="body1" color="white" sx={{ mb: 2 }}>
                    {selectedReg.registeredAt?.toDate?.() 
                      ? format(selectedReg.registeredAt.toDate(), "dd/MM/yyyy HH:mm:ss")
                      : selectedReg.registeredAt 
                        ? format(new Date(selectedReg.registeredAt), "dd/MM/yyyy HH:mm:ss")
                        : "N/A"}
                  </Typography>
                </Grid>
              </Grid>
            </Box>
          )}
        </DialogContent>
        <DialogActions sx={{ bgcolor: "#1a1a1a" }}>
          <Button onClick={() => setOpenDetailsDialog(false)} variant="contained">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}

export default RegistrationsManagement;
