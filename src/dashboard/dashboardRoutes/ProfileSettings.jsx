import React, { useState, useEffect } from "react";
import { auth } from "../../lib/Config/firebase";
import { updateProfile } from "firebase/auth";
import { toast } from "react-hot-toast";
import {
  Paper,
  Typography,
  TextField,
  Button,
  Box,
  Avatar,
  Divider,
  Grid,
  CircularProgress,
  Alert
} from "@mui/material";
import {
  Person as PersonIcon,
  Email as EmailIcon,
  Save as SaveIcon
} from "@mui/icons-material";
import ChangePassword from "./ChangePassword";

function ProfileSettings() {
  const [user, setUser] = useState(null);
  const [displayName, setDisplayName] = useState("");
  const [loading, setLoading] = useState(false);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    const currentUser = auth.currentUser;
    if (currentUser) {
      setUser(currentUser);
      setDisplayName(currentUser.displayName || "");
    }
  }, []);

  const handleUpdateProfile = async (e) => {
    e.preventDefault();
    
    if (!displayName.trim()) {
      toast.error("Please enter your display name");
      return;
    }

    setLoading(true);
    try {
      await updateProfile(user, { displayName: displayName });
      setSaved(true);
      toast.success("Profile updated successfully!");
      setTimeout(() => setSaved(false), 3000);
    } catch (error) {
      console.error("Update error:", error);
      toast.error("Failed to update profile");
    }
    setLoading(false);
  };

  if (!user) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="60vh">
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Profile Settings
      </Typography>
      
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 3 }}>
            <Box display="flex" alignItems="center" mb={3}>
              <Avatar sx={{ width: 80, height: 80, mr: 2, bgcolor: "#667eea" }}>
                <PersonIcon sx={{ fontSize: 40 }} />
              </Avatar>
              <Box>
                <Typography variant="h6">{user.email}</Typography>
                <Typography variant="body2" color="textSecondary">
                  Member since {user.metadata?.creationTime ? new Date(user.metadata.creationTime).toLocaleDateString() : 'N/A'}
                </Typography>
              </Box>
            </Box>
            
            <Divider sx={{ mb: 3 }} />
            
            {saved && (
              <Alert severity="success" sx={{ mb: 3 }}>
                Profile updated successfully!
              </Alert>
            )}
            
            <form onSubmit={handleUpdateProfile}>
              <TextField
                fullWidth
                label="Display Name"
                value={displayName}
                onChange={(e) => setDisplayName(e.target.value)}
                margin="normal"
                InputProps={{
                  startAdornment: (
                    <PersonIcon color="action" sx={{ mr: 1 }} />
                  ),
                }}
              />
              
              <TextField
                fullWidth
                label="Email Address"
                value={user.email}
                disabled
                margin="normal"
                InputProps={{
                  startAdornment: (
                    <EmailIcon color="action" sx={{ mr: 1 }} />
                  ),
                }}
              />
              
              <Button
                type="submit"
                variant="contained"
                fullWidth
                disabled={loading}
                sx={{ mt: 3, py: 1.5 }}
                startIcon={loading ? <CircularProgress size={20} /> : <SaveIcon />}
              >
                {loading ? "Saving..." : "Save Changes"}
              </Button>
            </form>
          </Paper>
        </Grid>
        
        <Grid item xs={12} md={6}>
          <ChangePassword />
        </Grid>
      </Grid>
    </Box>
  );
}

export default ProfileSettings;
