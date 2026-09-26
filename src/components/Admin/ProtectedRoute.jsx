import React, { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { auth, db } from "../../lib/Config/firebase";
import { doc, getDoc } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";

function ProtectedRoute({ children }) {
  const [isAdmin, setIsAdmin] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        try {
          // Check BOTH collections for admin access
          let isUserAdmin = false;
          
          // Check admins collection
          const adminDoc = await getDoc(doc(db, "admins", user.uid));
          if (adminDoc.exists() && adminDoc.data().isActive !== false) {
            isUserAdmin = true;
          } else {
            // Check users collection with role Admin
            const userDoc = await getDoc(doc(db, "users", user.uid));
            if (userDoc.exists() && userDoc.data().role === "Admin") {
              isUserAdmin = true;
            }
          }
          
          setIsAdmin(isUserAdmin);
        } catch (error) {
          console.error("Error checking admin:", error);
          setIsAdmin(false);
        }
      } else {
        setIsAdmin(false);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-900">
        <div className="text-white text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"></div>
          <p>Checking admin credentials...</p>
        </div>
      </div>
    );
  }

  return isAdmin ? children : <Navigate to="/signin" replace />;
}

export default ProtectedRoute;
