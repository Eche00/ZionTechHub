
import { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import { Outlet, useNavigate } from "react-router-dom";
import {
  onAuthStateChanged,
  sendEmailVerification,
  reload,
} from "firebase/auth";
import { auth } from "../lib/Config/firebase";
import { MarkEmailUnreadSharp } from "@mui/icons-material";

function DashContainer() {
  const [compress, setCompress] = useState(false);
  const [notVerified, setNotVerified] = useState(false);
  const [emailSent, setEmailSent] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    let isMounted = true;

    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (!user) {
        if (isMounted) {
          setNotVerified(false);
          setEmailSent(false);
          navigate("/signin", { replace: true });
        }
        return;
      }

      try {
        // Get the latest email verification status from Firebase
        await reload(user);

        if (!isMounted) return;

        if (!user.emailVerified) {
          setNotVerified(true);

          // Send one verification email for this session
          if (!emailSent) {
            try {
              await sendEmailVerification(user);

              if (isMounted) {
                setEmailSent(true);
                console.log("Verification email sent.");
              }
            } catch (error) {
              console.error(
                "Failed to send verification email:",
                error
              );
            }
          }
        } else {
          setNotVerified(false);
          setEmailSent(false);
        }
      } catch (error) {
        console.error("Failed to refresh authentication:", error);
      }
    });

    return () => {
      isMounted = false;
      unsubscribe();
    };
  }, [navigate, emailSent]);

  return (
    <div className="h-[100vh] relative sm:h-full bg-[#1F1F1F] w-full">

      {notVerified && (
        <div className="fixed left-0 top-0 w-full h-full bg-black/95 backdrop-blur-sm text-white flex items-center justify-center z-50">
          <div className="bg-[#034FE3] border-2 border-[#034FE3] font-normal text-[16px] px-6 sm:px-20 py-[30px] rounded-[10px] backdrop-blur-sm flex flex-col items-center justify-center gap-[15px] max-w-[90%]">

            <span className="border-2 border-white h-[50px] w-[50px] rounded-full flex items-center justify-center">
              <MarkEmailUnreadSharp />
            </span>

            <span className="text-center">
              Your email is not verified yet.
              <br />
              {emailSent
                ? "We've sent you a verification email."
                : "Please wait while we send your verification email."}
              <br />
              Please check your inbox and spam folder.
            </span>

            <button
              type="button"
              onClick={async () => {
                try {
                  const user = auth.currentUser;

                  if (!user) return;

                  await reload(user);

                  if (user.emailVerified) {
                    setNotVerified(false);
                    setEmailSent(false);
                    window.location.reload();
                  }
                } catch (error) {
                  console.error("Verification check failed:", error);
                }
              }}
              className="bg-white text-blue-700 px-5 py-2 rounded-lg text-sm font-semibold hover:bg-gray-100 transition-colors"
            >
              I've verified my email
            </button>

          </div>
        </div>
      )}

      <section className="w-full flex relative bg-white dark:bg-[rgb(31,31,31)]">
        <div className="flex fixed left-0 z-50">
          <Sidebar compress={compress} setCompress={setCompress} />
        </div>

        <div
          className={
            compress
              ? "ml-0 md:ml-[70px] flex-1 h-[100vh] bg-[#1F1F1F]"
              : "ml-0 md:ml-[245px] flex-1 h-[100vh] bg-[#1F1F1F]"
          }
        >
          <Outlet />
        </div>
      </section>
    </div>
  );
}

export default DashContainer;
