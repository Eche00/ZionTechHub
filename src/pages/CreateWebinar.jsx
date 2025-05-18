import React, { useRef, useState } from "react";
import { serverTimestamp, setDoc, doc } from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { useNavigate } from "react-router-dom";
import { db, storageF } from "../lib/Config/firebase";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

function CreateWebinar() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    link: "Webinar link",
    hackathonlink: "hackathonlink link",
    speaker: "Eche_Codes",
    category: "Pricing Data Scientist",
    details: "Speaker info",
    image: [],
    event: "25th of March 10:30 AM PDT (5:30 pm GMT+1)",
  });

  const [files, setFiles] = useState([]);
  const imageRef = useRef();
  const [error, setError] = useState(false);
  const [imgError, setImgError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [success, setSuccess] = useState(false);

  const handleImageChange = (e) => {
    setImgError(false);
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      const storageRef = ref(storageF, `images/${selectedFile.name}`);
      const previewUrl = URL.createObjectURL(selectedFile);
      setFiles([{ url: previewUrl, file: selectedFile }]);

      const uploadTask = uploadBytesResumable(storageRef, selectedFile);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progressPercentage =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setProgress(progressPercentage.toFixed(0));
        },
        (error) => {
          console.error(error);
          setImgError(true);
          setSuccess(false);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setFormData((prevData) => ({
              ...prevData,
              image: [{ file: selectedFile, url: downloadURL }],
            }));
            setFiles([{ url: downloadURL, file: selectedFile }]);
            setImgError(false);
          });
        }
      );
    }
  };

  const handleChange = (e) => {
    setError(false);
    setSuccess(false);
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleQuillChange = (value) => {
    setFormData({
      ...formData,
      details: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(false);
    setImgError(false);
    setSuccess(false);

    if (
      !formData.image ||
      formData.image.length === 0 ||
      !formData.image[0].url
    ) {
      setImgError(true);
      setLoading(false);
      return;
    }

    try {
      const docRef = doc(db, "webinarinfo", "main");

      await setDoc(docRef, {
        link: formData.link,
        hackathonlink: formData.hackathonlink,
        speaker: formData.speaker,
        category: formData.category,
        details: formData.details,
        imageUrl: formData.image[0].url,
        event: formData.event,
        updatedAt: serverTimestamp(),
      });

      setFormData({
        link: "",
        hackathonlink: "",
        speaker: "",
        category: "",
        details: "",
        image: [],
        event: "",
      });
      setFiles([]);
      setSuccess(true);
      setProgress(0);
      setLoading(false);
      setTimeout(() => setSuccess(false), 2000);
      // navigate("/blog");
    } catch (e) {
      console.error("Error adding document: ", e);
      setError(true);
      setSuccess(false);
      setLoading(false);
    }
  };

  return (
    <div className="h-fit pt-32">
      <main className="relative mb-[50px]">
        {success && (
          <div className="fixed top-0 w-full h-full bg-black/20 backdrop-blur-sm text-white flex items-center justify-center">
            <p className="bg-black border-3 border-[#034FE3] font-bold text-[20px] px-[30px] py-[10px] rounded-[10px] backdrop-blur-sm">
              Product Added!
            </p>
          </div>
        )}

        <form
          className="md:w-[70%] sm:w-[40%] w-[90%] mx-auto overflow-scroll h-fit pb-[100px]"
          onSubmit={handleSubmit}>
          <div className="flex items-center my-5 gap-[10px]">
            <label
              htmlFor="image"
              className="border-5 w-fit rounded-full py-1 px-3 border-2 border-[#034FE3] cursor-pointer"
              ref={imageRef}>
              A
            </label>

            <p className="text-[14px] font-[400]">
              Add Photo <br />
              {progress > 0 && (
                <span className="text-sm">
                  Upload Progress:{" "}
                  <span className="text-green-600">{progress}%</span>
                </span>
              )}
              {imgError && (
                <span className="text-sm text-red-600">Upload Failed</span>
              )}
            </p>

            <input
              type="file"
              accept="image/*"
              style={{ display: "none" }}
              name="image"
              id="image"
              onChange={handleImageChange}
            />
          </div>

          {files.length > 0 && (
            <img
              src={files[0].url}
              alt={files[0].file.name}
              className="w-full h-[300px] rounded-[10px] object-cover"
            />
          )}

          <div className="flex flex-col gap-[5px] my-5">
            <p>Webinar Link</p>
            <input
              className="bg-transparent border-3 border-[#034FE3] w-full rounded-[10px] px-5 py-2 outline-none"
              type="text"
              name="link"
              onChange={handleChange}
              value={formData.link}
              required
            />
          </div>
          <div className="flex flex-col gap-[5px] my-5">
            <p>Hackathon Link</p>
            <input
              className="bg-transparent border-3 border-[#034FE3] w-full rounded-[10px] px-5 py-2 outline-none"
              type="text"
              name="hackathonlink"
              onChange={handleChange}
              value={formData.hackathonlink}
              required
            />
          </div>

          <div className="flex flex-col gap-[5px] my-5">
            <p>Speaker</p>
            <input
              className="bg-transparent border-3 border-[#034FE3] w-full rounded-[10px] px-5 py-2 outline-none"
              type="text"
              name="speaker"
              onChange={handleChange}
              value={formData.speaker}
              required
            />
          </div>

          <div className="flex flex-col gap-[5px] my-5">
            <p>Event Time</p>
            <input
              className="bg-transparent border-3 border-[#034FE3] w-full rounded-[10px] px-5 py-2 outline-none"
              type="text"
              name="event"
              onChange={handleChange}
              value={formData.event}
              required
            />
          </div>

          <div className="flex flex-col gap-[5px] my-5">
            <p>Category</p>
            <input
              className="bg-transparent border-3 border-[#034FE3] w-full rounded-[10px] px-5 py-2 outline-none"
              type="text"
              name="category"
              onChange={handleChange}
              value={formData.category}
              required
            />
          </div>

          <div className="flex flex-col gap-[5px] sm:mb-20 mb-32">
            <p>Speaker info</p>
            <ReactQuill
              value={formData.details}
              onChange={handleQuillChange}
              modules={{
                toolbar: [
                  [{ header: "1" }, { header: "2" }, { font: [] }],
                  [{ list: "ordered" }, { list: "bullet" }],
                  ["bold", "italic", "underline"],
                  ["link"],
                  ["blockquote"],
                  [{ direction: "rtl" }],
                  [{ align: [] }],
                  ["image"],
                ],
              }}
              className="border-3 border-[#034FE3] w-full rounded-[10px] px-5 py-2 outline-none h-80 text-black"
            />
          </div>

          <button
            className="bg-[#034FE3] py-[15px] text-[16px] font-bold text-white rounded-[10px] my-[10px] w-full"
            type="submit">
            {loading ? "Creating..." : "Create Blog"}
          </button>

          {error && (
            <p className="text-lg py-[5px] text-red-600 text-center font-bold">
              Error uploading form <br />
              <span className="text-sm text-white">Please try again!</span>
            </p>
          )}
        </form>
      </main>
    </div>
  );
}

export default CreateWebinar;
