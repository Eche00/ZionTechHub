// regLogic to handle the registration process
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { auth, db } from "./Config/firebase";

export const handleRegistration = async (formData) => {
  const { username, email, password, role, createdAt } = formData;

  try {
    // create User  in firebase
    const userCresidentials = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCresidentials.user;

    // send email verification
    await sendEmailVerification(user);
    // Store additional user details in Firestore
    await setDoc(doc(db, "users", user.uid), {
      username,
      email,
      role,
      createdAt,
    });
    console.log("User registered successfully:");
  } catch (error) {
    console.error("Registeration  failed:", error);
    throw new Error("Registeration  Failed. Please try again !!");
  }
};
