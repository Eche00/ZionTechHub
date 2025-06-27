import React, { useEffect, useState } from "react";
import { onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import { EmailOutlined, Lock, LockOpen } from "@mui/icons-material";
import { auth } from "../../lib/Config/firebase";
import { techhublogo } from "../../assets";

function Signin() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  // password visibility
  const [visible, setVisible] = useState(false);
  // error states
  const [error, setError] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const navigate = useNavigate();

  // user
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        navigate("/dashboard/home");
      }
    });
    return () => unsubscribe();
  }, [navigate]);

  // error switching
  const handleErrorMessage = (errorCode) => {
    switch (errorCode) {
      case "auth/invalid-email":
        return "Invalid email address format. Please check your email.";
      case "auth/user-disabled":
        return "This account has been disabled. Please contact support.";
      case "auth/user-not-found":
      case "auth/wrong-password":
        return "Invalid email or password. Please try again.";
      case "auth/too-many-requests":
        return "Too many login attempts. Please try again later.";
      case "auth/network-request-failed":
        return "Network error. Please check your internet connection.";
      default:
        return "An unexpected error occurred. Please try again.";
    }
  };

  // handling change function
  const handleChange = (e) => {
    e.preventDefault();
    // error reset
    setError("");
    setEmailError(false);
    setPasswordError(false);

    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  // handle submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    // error handling
    setError("");
    if (!formData.email.includes("@")) {
      setEmailError(true);
      return;
    } else if (formData.password.length <= 0) {
      setPasswordError(true);
      return;
    }

    try {
      await signInWithEmailAndPassword(auth, formData.email, formData.password);
      navigate("/dashboard/home");
    } catch (error) {
    } finally {
      const customErrMessage = handleErrorMessage(error.code);
      setError(customErrMessage);
      setLoading(false);
    }
  };

  return (
    <div className=" sm:flex sm:items-center sm:justify-center h-[100vh] bg-[#1F1F1F] overflow-hidden overscroll-none ">
      {/* mobile container   */}
      <main className=" relative flex flex-col  sm:shadow-2xl   sm:rounded-2xl  sm:h-fit h-screen  sm:w-[700px] w-full p-[20px] sm:border-2 border-gray-700">
        {/* exit page */}
        <Link to="/" className="rounded-full p-2 ">
          <img
            src={techhublogo}
            alt="logo"
            className="w-[50px] h-[50px] object-cover border-gray-500 border-2 rounded-full "
          />
        </Link>

        {/* subcontainer  */}
        <div className=" w-[90%] mx-auto md:w-[60%]">
          <h1 className=" text-start text-white font-bold  my-[30px]  text-[20px]">
            Login to Dashboard
          </h1>
          {/* form container  */}
          <form className="w-full" onSubmit={handleSubmit}>
            {error && <p className=" text-red-500 ">{error}</p>}
            <div className=" flex flex-col gap-[5px] my-5 ">
              <p className=" text-gray-500">Email:</p>
              <div className="flex items-center gap-2 bg-black border-2 border-gray-700  w-full px-3 py-4 rounded-[10px] text-white">
                <span className=" text-gray-500 border-r border-gray-500 pr-2">
                  <EmailOutlined />
                </span>
                <input
                  className="  outline-none text-white flex-1 bg-transparent placeholder:text-gray-500 border-black "
                  type="text"
                  name="email"
                  onChange={handleChange}
                  placeholder="Enter your email"
                />
              </div>
              {emailError && (
                <p className=" text-red-500 ">email missing '@'</p>
              )}
            </div>
            <div className=" flex flex-col gap-[5px] my-5 ">
              <p className=" text-gray-500">Password:</p>
              <div className="flex items-center gap-2 bg-black border-2 border-gray-700  w-full px-3 py-4 rounded-[10px] text-white">
                <span
                  className=" text-gray-500 border-r border-gray-500 pr-2 cursor-pointer"
                  onClick={() => setVisible(!visible)}>
                  {visible ? <Lock fontSize="" /> : <LockOpen fontSize="" />}
                </span>
                <input
                  className="  outline-none text-white flex-1 bg-transparent placeholder:text-gray-500 border-black "
                  type={visible ? "text" : "password"}
                  name="password"
                  placeholder="Enter your password"
                  onChange={handleChange}
                />
              </div>
              {passwordError && (
                <p className=" text-red-500 ">Type in Your Password</p>
              )}
            </div>
            <div className="  flex items-center gap-[10px] ">
              <span className="flex-1 bg-gray-300 dark:bg-gray-700 h-[0.2px] "></span>
              <span className=" text-gray-400 dark:text-gray-700"> *</span>
              <span className="flex-1 bg-gray-300 dark:bg-gray-700 h-[0.2px] "></span>
            </div>
            <div className=" w-full flex items-center justify-center flex-col">
              <button
                className="bg-blue-600 w-full py-[10px] text-[12px] font-bold text-white rounded-[10px] my-[10px] cursor-pointer"
                type="submit">
                {loading ? (
                  <div role="status">
                    <svg
                      aria-hidden="true"
                      className="inline w-4 h-4 text-gray-200 animate-spin dark:text-gray-600 fill-[#1e222b]"
                      viewBox="0 0 100 101"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                        fill="currentColor"
                      />
                      <path
                        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                        fill="currentFill"
                      />
                    </svg>
                    <span className="sr-only">Loading...</span>
                  </div>
                ) : (
                  "Sign in"
                )}
              </button>
            </div>
            <p className="text-sm font-bold text-center dark:text-white text-black">
              <Link to="/" className=" underline text-blue-600">
                Home
              </Link>
            </p>
          </form>
        </div>
      </main>
    </div>
  );
}

export default Signin;
