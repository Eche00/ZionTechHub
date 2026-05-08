import React, { useRef, useState } from "react";
import { serverTimestamp, setDoc, doc } from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { Link, useNavigate } from "react-router-dom";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { db, storageF } from "../../lib/Config/firebase";
import { Check } from "@mui/icons-material";

function CreateWebinar() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    link: "",
    title: "",
    hackathonlink: "",
    speaker: "",
    category: "",
    type: "Select Type",
    details: "",
    subtitle: "",
    image: [],
    event: "25th of March 10:30 AM PDT (5:30 pm GMT+1)",
    aim: [],
  });

  const [files, setFiles] = useState([]);
  const imageRef = useRef();
  const [error, setError] = useState(false);
  const [imgError, setImgError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [success, setSuccess] = useState(false);
  const [currentAim, setCurrentAim] = useState("");

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
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setFormData((prev) => ({
              ...prev,
              image: [{ file: selectedFile, url: downloadURL }],
            }));
          });
        }
      );
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handlePush = (e) => {
    e.preventDefault();

    if (currentAim.trim()) {
      setFormData((prev) => ({
        ...prev,
        aim: [...prev.aim, currentAim],
      }));

      setCurrentAim("");
    }
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

    if (!formData.image?.[0]?.url) {
      setImgError(true);
      setLoading(false);
      return;
    }

    try {
      const docRef = doc(db, "workshopinfo", "main");

      await setDoc(docRef, {
        ...formData,
        imageUrl: formData.image[0].url,
        updatedAt: serverTimestamp(),
      });

      setSuccess(true);
      setLoading(false);

      setTimeout(() => {
        navigate("/dashboard/home");
      }, 2000);
    } catch (error) {
      console.error(error);
      setError(true);
      setLoading(false);
    }
  };

  return (
    <div className="h-screen overflow-y-auto bg-[#050814] text-white p-4 md:p-6 space-y-6">
      {success && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-blue-600 rounded-2xl p-8 flex flex-col items-center gap-4">
            <div className="w-16 h-16 rounded-full border border-white flex items-center justify-center">
              <Check />
            </div>
            <p className="text-xl font-bold">{formData.type} Updated!</p>
          </div>
        </div>
      )}

      {/* HEADER */}
      <div className="rounded-2xl p-6 bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-white/10">
        <div className="flex flex-col md:flex-row justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold">Create Webinar / Workshop</h2>
            <p className="text-gray-400 text-sm">
              Create and manage webinar sessions
            </p>
          </div>

          <Link
            to="/zion-tech-hub-workshop-webinar"
            className="px-4 py-2 h-fit bg-[#0b1220] border border-white/10 rounded-full text-sm"
          >
            View Webinar
          </Link>
        </div>
      </div>

      {/* INFO CARD */}
      <div className="bg-[#0b1220] border border-white/10 rounded-2xl p-4 text-sm text-gray-400">
        <ul className="list-disc pl-5 space-y-2">
          <li>Upload only one speaker image.</li>
          <li>Add learning aims before publishing.</li>
          <li>Use proper event time format.</li>
        </ul>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">

        {/* IMAGE */}
        <div className="bg-[#0b1220] border border-white/10 rounded-2xl p-5">
          <label
            htmlFor="image"
            className="inline-block px-4 py-2 bg-blue-600 rounded-full cursor-pointer text-sm"
          >
            Upload Speaker Image
          </label>

          <input
            type="file"
            id="image"
            hidden
            accept="image/*"
            onChange={handleImageChange}
          />

          {progress > 0 && (
            <p className="text-green-400 mt-3 text-sm">
              Upload Progress: {progress}%
            </p>
          )}

          {files.length > 0 && (
            <img
              src={files[0].url}
              alt="preview"
              className="w-full h-[300px] object-cover rounded-xl mt-4"
            />
          )}
        </div>

        {/* INPUT GRID */}
        <div className="grid md:grid-cols-2 gap-4">
          {[
            "title",
            "speaker",
            "category",
            "link",
            "hackathonlink",
            "event",
          ].map((field) => (
            <input
              key={field}
              name={field}
              value={formData[field]}
              onChange={handleChange}
              placeholder={field}
              className="bg-[#0b1220] border border-white/10 px-4 py-3 rounded-xl"
            />
          ))}

          <select
            name="type"
            value={formData.type}
            onChange={handleChange}
            className="bg-[#0b1220] border border-white/10 px-4 py-3 rounded-xl"
          >
            <option value="Select Type">Select Type</option>
            <option value="Webinar">Webinar</option>
            <option value="Workshop">Workshop</option>
          </select>
        </div>

        {/* AIMS */}
        <div className="bg-[#0b1220] border border-white/10 rounded-2xl p-5 space-y-4">
          <h3 className="font-semibold">What attendees will learn</h3>

          <textarea
            value={currentAim}
            onChange={(e) => setCurrentAim(e.target.value)}
            className="w-full bg-[#050814] border border-white/10 rounded-xl p-4"
            placeholder="Enter learning objective"
          />

          <button
            type="button"
            onClick={handlePush}
            className="px-4 py-2 bg-blue-600 rounded-xl"
          >
            Add Aim
          </button>

          <div className="grid md:grid-cols-2 gap-3">
            {formData.aim.map((item, index) => (
              <div
                key={index}
                className="bg-[#050814] border border-white/10 rounded-xl p-3 text-gray-300"
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* SUBTITLE */}
        <textarea
          name="subtitle"
          value={formData.subtitle}
          onChange={handleChange}
          placeholder="Subtitle"
          className="w-full bg-[#0b1220] border border-white/10 rounded-xl p-4"
        />

        {/* QUILL */}
        <div className="bg-white rounded-2xl overflow-hidden">
          <ReactQuill
            value={formData.details}
            onChange={handleQuillChange}
            className="h-96 text-black"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full py-4 bg-blue-600 rounded-2xl font-bold"
        >
          {loading ? "Updating..." : "Update Page"}
        </button>

        {error && (
          <p className="text-red-500 text-center">
            Error updating webinar. Please try again.
          </p>
        )}
      </form>
    </div>
  );
}

export default CreateWebinar;
