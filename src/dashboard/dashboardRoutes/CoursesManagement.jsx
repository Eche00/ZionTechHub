import React, { useState, useEffect } from "react";
import { db } from "../../lib/Config/firebase";
import { collection, getDocs, doc, updateDoc } from "firebase/firestore";
import { Box, Typography, Paper, Grid, Card, CardContent, Button, Chip, TextField, Dialog, DialogTitle, DialogContent, DialogActions } from "@mui/material";
import { School as SchoolIcon, Edit as EditIcon } from "@mui/icons-material";
import toast from "react-hot-toast";

function CoursesManagement() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editDialog, setEditDialog] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);

  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    try {
      const snapshot = await getDocs(collection(db, "course-registrants"));
      const courseCount = {};
      snapshot.forEach(doc => {
        const data = doc.data();
        if (data.course) {
          courseCount[data.course] = (courseCount[data.course] || 0) + 1;
        }
      });
      
      const defaultCourses = [
        { id: 1, name: "Healthcare Data Analytics", students: courseCount["Healthcare Data Analytics"] || 0, price: 99, status: "active", duration: "12 weeks" },
        { id: 2, name: "Financial Data Analytics", students: courseCount["Financial Data Analytics"] || 0, price: 99, status: "active", duration: "12 weeks" },
        { id: 3, name: "Sales and Marketing Data Analytics", students: courseCount["Sales and Marketing Data Analytics"] || 0, price: 99, status: "active", duration: "12 weeks" },
        { id: 4, name: "Supply Chain Analytics", students: courseCount["Supply Chain Analytics"] || 0, price: 99, status: "active", duration: "12 weeks" },
        { id: 5, name: "Data Science and AI", students: courseCount["Data Science and AI"] || 0, price: 99, status: "active", duration: "24 weeks" },
        { id: 6, name: "AI Automation", students: courseCount["AI Automation"] || 0, price: 99, status: "active", duration: "12 weeks" }
      ];
      
      setCourses(defaultCourses);
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleUpdateCourse = async () => {
    toast.success("Course updated successfully!");
    setEditDialog(false);
    fetchCourses();
  };

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom sx={{ color: "white", mb: 3 }}>
        📚 Course Management
      </Typography>
      
      <Grid container spacing={3}>
        {courses.map((course) => (
          <Grid item xs={12} md={6} lg={4} key={course.id}>
            <Card sx={{ bgcolor: "#1a1a1a", color: "white" }}>
              <CardContent>
                <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
                  <SchoolIcon sx={{ color: "#3b82f6" }} />
                  <Chip label={course.status} size="small" sx={{ bgcolor: "#10b981", color: "white" }} />
                </Box>
                <Typography variant="h6" gutterBottom>{course.name}</Typography>
                <Typography variant="body2" color="gray">Students: {course.students}</Typography>
                <Typography variant="body2" color="gray">Duration: {course.duration}</Typography>
                <Typography variant="body2" color="gray">Price: ${course.price}</Typography>
                <Button startIcon={<EditIcon />} sx={{ mt: 2 }} onClick={() => { setSelectedCourse(course); setEditDialog(true); }}>
                  Edit Course
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      
      <Dialog open={editDialog} onClose={() => setEditDialog(false)}>
        <DialogTitle>Edit Course</DialogTitle>
        <DialogContent>
          <TextField fullWidth label="Course Name" value={selectedCourse?.name || ""} margin="normal" />
          <TextField fullWidth label="Price" type="number" value={selectedCourse?.price || ""} margin="normal" />
          <TextField fullWidth label="Duration" value={selectedCourse?.duration || ""} margin="normal" />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setEditDialog(false)}>Cancel</Button>
          <Button onClick={handleUpdateCourse} variant="contained">Save</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}

export default CoursesManagement;
