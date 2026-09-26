import { createAdmin } from "../lib/Config/firebase";

const setupFirstAdmin = async () => {
  console.log("Setting up admin account...");
  
  const result = await createAdmin(
    "admin@ziontechub.com",
    "Admin123!",
    "Super Admin"
  );
  
  if (result.success) {
    console.log("✅ Admin created successfully!");
    console.log("Email: admin@ziontechub.com");
    console.log("Password: Admin123!");
    console.log("\n⚠️ Please check your email to verify the account.");
  } else {
    console.error("❌ Failed to create admin:", result.error);
  }
};

// Run the setup
setupFirstAdmin();
