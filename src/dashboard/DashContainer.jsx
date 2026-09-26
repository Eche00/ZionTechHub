import { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import { Outlet, useNavigate } from "react-router-dom";
import {
  onAuthStateChanged,
  sendEmailVerification,
  signOut,
} from "firebase/auth";
import { auth } from "../lib/Config/firebase";
import { MarkEmailUnreadSharp } from "@mui/icons-material";

function DashContainer() {
  const [compress, setCompress] = useState(false);
  const [notVerified, setNotVerified] = useState(false);
  const [emailSent, setEmailSent] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user) {
        navigate("/signin");
        setNotVerified(false);
        setEmailSent(false);
      } else if (!user.emailVerified) {
        setNotVerified(true);

        // Send email verification if not already sent
        if (!emailSent) {
          sendEmailVerification(user)
            .then(() => {
              console.log("Verification email resent.");
              setEmailSent(true);
            })
            .catch((error) => {
              console.error("Failed to send verification email:", error);
            });
        }

        // Log out after 10 seconds
        setTimeout(() => {
          setNotVerified(false);
          setEmailSent(false);
          signOut(auth);
          navigate("/signin");
        }, 10000);
      } else {
        setNotVerified(false);
        setEmailSent(false);
      }
    });

    return () => unsubscribe();
  }, [navigate, emailSent]);
  return (
    <div className="h-[100vh] relative sm:h-full bg-[#1F1F1F] w-full">
      {/* outlet for pages and sidebar  */}
      {notVerified && (
        <div className="fixed left-0 top-0 w-full h-full bg-black/95 backdrop-blur-sm text-white flex items-center justify-center z-50  ">
          <p className="bg-[#034FE3] border-3 border-[#034FE3] font-[400] text-[16px] px-20 py-[30px] rounded-[10px] backdrop-blur-sm flex flex-col items-center justify-center gap-[15px] ">
            <span className=" border-2 border-white h-[50px] w-[50px] rounded-full  flex items-center justify-center">
              <MarkEmailUnreadSharp />
            </span>
            <span className="  text-center">
              Your email is not verified. <br />
              We just sent you another verification email. <br /> Please check
              your inbox.
            </span>
          </p>
        </div>
      )}
      <section className=" w-full flex  relative bg-white dark:bg-[rgb(31,31,31)]">
        <div className="flex fixed left-0 z-50">
          <Sidebar compress={compress} setCompress={setCompress} />
        </div>
        <div
          className={
            compress
              ? "ml-0 md:ml-[80px] flex-1  h-[100vh] bg-[#1F1F1F] "
              : "ml-0 md:ml-[300px] flex-1  h-[100vh] bg-[#1F1F1F] "
          }>
          <Outlet />
        </div>
      </section>
    </div>
  );
}

export default DashContainer;
