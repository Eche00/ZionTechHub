import React, { useRef, useState } from "react";
import { serverTimestamp, setDoc, doc } from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { Link, useNavigate } from "react-router-dom";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { db, storageF } from "../../lib/Config/firebase";
import {
  Check,
  CloudUpload,
  Add,
  Delete,
} from "@mui/icons-material";
import toast from "react-hot-toast";
import { CircularProgress } from "@mui/material";



function CreateWebinar() {
  const navigate = useNavigate();
  const imageRef = useRef();

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
  const [currentAim, setCurrentAim] = useState("");

  const [loading, setLoading] = useState(false);
  const [uploadingImage, setUploadingImage] = useState(false);

  const [error, setError] = useState(false);
  const [imgError, setImgError] = useState(false);
  const [success, setSuccess] = useState(false);

  const [progress, setProgress] = useState(0);

  // =========================
  // IMAGE UPLOAD
  // =========================
  const handleImageChange = (e) => {
    setImgError(false);

    const selectedFile = e.target.files[0];

    if (!selectedFile) return;

    setUploadingImage(true);

    const storageRef = ref(
      storageF,
      `images/${Date.now()}-${selectedFile.name}`
    );

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

        setUploadingImage(false);
        setImgError(true);

        toast.error("Failed to upload image");
      },

      async () => {
        try {
          const downloadURL = await getDownloadURL(
            uploadTask.snapshot.ref
          );

          setFormData((prev) => ({
            ...prev,
            image: [downloadURL],
          }));

          setUploadingImage(false);

          toast.success("Image uploaded successfully");
        } catch (error) {
          console.error(error);

          setUploadingImage(false);

          toast.error("Error getting uploaded image");
        }
      }
    );
  };

  // =========================
  // INPUT CHANGE
  // =========================
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // =========================
  // QUILL
  // =========================
  const handleQuillChange = (value) => {
    setFormData({
      ...formData,
      details: value,
    });
  };

  // =========================
  // ADD AIM
  // =========================
  const handlePush = () => {
    if (!currentAim.trim()) {
      toast.warning("Please enter a learning aim");
      return;
    }

    setFormData((prev) => ({
      ...prev,
      aim: [...prev.aim, currentAim],
    }));

    setCurrentAim("");

    toast.success("Aim added");
  };

  // =========================
  // REMOVE AIM
  // =========================
  const removeAim = (index) => {
    const updatedAims = formData.aim.filter((_, i) => i !== index);

    setFormData((prev) => ({
      ...prev,
      aim: updatedAims,
    }));

    toast.info("Aim removed");
  };

  // =========================
  // SUBMIT
  // =========================
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (loading) return;

    setLoading(true);
    setError(false);

    if (!formData.image?.[0]) {
      setImgError(true);
      setLoading(false);

      toast.error("Please upload a speaker image");

      return;
    }

    if (formData.type === "Select Type") {
      setLoading(false);

      toast.error("Please select webinar type");

      return;
    }

    try {
      const docRef = doc(db, "workshopinfo", "main");

      await setDoc(docRef, {
        ...formData,
        imageUrl: formData.image[0],
        updatedAt: serverTimestamp(),
      });

      setSuccess(true);

      toast.success(`${formData.type} updated successfully`);

      setTimeout(() => {
        navigate("/dashboard/home");
      }, 2000);
    } catch (error) {
      console.error(error);

      setError(true);

      toast.error("Error updating webinar");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="h-screen overflow-y-auto bg-[#050814] text-white p-4 md:p-6 space-y-6">

      {/* SUCCESS MODAL */}
      {success && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-blue-600 rounded-2xl p-8 flex flex-col items-center gap-4">
            <div className="w-16 h-16 rounded-full border border-white flex items-center justify-center">
              <Check />
            </div>

            <p className="text-xl font-bold">
              {formData.type} Updated!
            </p>
          </div>
        </div>
      )}

      {/* HEADER */}
      <div className="rounded-2xl p-6 bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-white/10">
        <div className="flex flex-col md:flex-row justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold">
              Create Webinar / Workshop
            </h2>

            <p className="text-gray-400 text-sm">
              Create and manage webinar sessions
            </p>
          </div>

          <Link
            to="/zion-tech-hub-workshop-webinar"
            className="px-4 py-2 h-fit bg-[#0b1220] border border-white/10 rounded-full text-sm hover:bg-[#131d33] transition"
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
          <li>H2 tags automatically generate your table of contents.</li>
        </ul>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* IMAGE */}
        <div className="bg-[#0b1220] border border-white/10 rounded-2xl p-5">
          <div className="flex flex-wrap items-center gap-3">
            <label
              htmlFor="image"
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-full cursor-pointer text-sm transition ${uploadingImage
                ? "bg-gray-600 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700"
                }`}
            >
              {uploadingImage ? (
                <>
                  <CircularProgress
                    size={16}
                    sx={{ color: "white" }}
                  />
                  Uploading...
                </>
              ) : (
                <>
                  <CloudUpload fontSize="small" />
                  Upload Speaker Image
                </>
              )}
            </label>

            <input
              type="file"
              id="image"
              hidden
              accept="image/*"
              ref={imageRef}
              onChange={handleImageChange}
            />
          </div>

          {progress > 0 && uploadingImage && (
            <div className="mt-4">
              <div className="w-full h-3 bg-[#1b2335] rounded-full overflow-hidden">
                <div
                  className="h-full bg-green-500 transition-all duration-300"
                  style={{ width: `${progress}%` }}
                />
              </div>

              <p className="text-green-400 mt-2 text-sm">
                Upload Progress: {progress}%
              </p>
            </div>
          )}

          {imgError && (
            <p className="text-red-500 text-sm mt-3">
              Please upload an image
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
              className="bg-[#0b1220] border border-white/10 px-4 py-3 rounded-xl outline-none focus:border-blue-500"
            />
          ))}

          <select
            name="type"
            value={formData.type}
            onChange={handleChange}
            className="bg-[#0b1220] border border-white/10 px-4 py-3 rounded-xl outline-none focus:border-blue-500"
          >
            <option value="Select Type">Select Type</option>
            <option value="Webinar">Webinar</option>
            <option value="Workshop">Workshop</option>
          </select>
        </div>

        {/* AIMS */}
        <div className="bg-[#0b1220] border border-white/10 rounded-2xl p-5 space-y-4">
          <h3 className="font-semibold">
            What attendees will learn
          </h3>

          <textarea
            value={currentAim}
            onChange={(e) => setCurrentAim(e.target.value)}
            className="w-full bg-[#050814] border border-white/10 rounded-xl p-4 outline-none focus:border-blue-500"
            placeholder="Enter learning objective"
          />

          <button
            type="button"
            onClick={handlePush}
            className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-xl transition"
          >
            <Add fontSize="small" />
            Add Aim
          </button>

          <div className="grid md:grid-cols-2 gap-3">
            {formData.aim.map((item, index) => (
              <div
                key={index}
                className="bg-[#050814] border border-white/10 rounded-xl p-3 text-gray-300 flex items-start justify-between gap-3"
              >
                <p>{item}</p>

                <button
                  type="button"
                  onClick={() => removeAim(index)}
                  className="text-red-400 hover:text-red-500"
                >
                  <Delete fontSize="small" />
                </button>
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
          className="w-full bg-[#0b1220] border border-white/10 rounded-xl p-4 outline-none focus:border-blue-500"
        />

        {/* QUILL */}
        <div className="bg-white rounded-2xl overflow-hidden">
          <ReactQuill
            value={formData.details}
            onChange={handleQuillChange}
            className="h-96 text-black"
          />
        </div>

        {/* SUBMIT BUTTON */}
        <button
          type="submit"
          disabled={loading || uploadingImage}
          className={`w-full py-4 rounded-2xl font-bold transition flex items-center justify-center gap-3 ${loading || uploadingImage
            ? "bg-blue-400 cursor-not-allowed"
            : "bg-blue-600 hover:bg-blue-700"
            }`}
        >
          {loading ? (
            <>
              <CircularProgress
                size={20}
                sx={{ color: "white" }}
              />
              Updating...
            </>
          ) : (
            "Update Page"
          )}
        </button>

        {/* ERROR */}
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