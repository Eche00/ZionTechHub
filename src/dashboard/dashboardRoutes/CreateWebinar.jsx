import React, { useRef, useState } from "react";
import { serverTimestamp, setDoc, doc } from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { Link, useNavigate } from "react-router-dom";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { db, storageF } from "../../lib/Config/firebase";

function CreateWebinar() {
  // Hooks and refs
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    link: "Webinar link",
    title: "Title",
    hackathonlink: "hackathonlink link",
    speaker: "Eche_Codes",
    category: "Pricing Data Scientist",
    type: "Select Type",
    details: "Speaker info",
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
  const [typee, setType] = useState(false);

  // Handle image upload and preview
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

  // Handle input field changes
  const handleChange = (e) => {
    setError(false);
    setSuccess(false);
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle pushing text to "aim" array
  const [currentAim, setCurrentAim] = useState(""); // Aim to push to array state

  const handlePush = (e) => {
    e.preventDefault();
    try {
      if (currentAim.trim() !== "") {
        setFormData((prevFormData) => ({
          ...prevFormData,
          aim: [...prevFormData.aim, currentAim],
        }));
        setCurrentAim(""); // Clear textarea
      }
    } catch (error) {
      console.error(error);
    } finally {
      console.log(formData.aim);
    }
  };

  // Handle rich text input change
  const handleQuillChange = (value) => {
    setFormData({
      ...formData,
      details: value,
    });
  };

  // Submit form data to Firestore
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(false);
    setImgError(false);
    setSuccess(false);

    // Validate image upload
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
      const docRef = doc(db, "workshopinfo", "main");

      await setDoc(docRef, {
        title: formData.title,
        type: formData.type,
        subtitle: formData.subtitle,
        aim: formData.aim,
        link: formData.link,
        hackathonlink: formData.hackathonlink,
        speaker: formData.speaker,
        category: formData.category,
        details: formData.details,
        imageUrl: formData.image[0].url,
        event: formData.event,
        updatedAt: serverTimestamp(),
      });

      // Reset form after success
      setFormData({
        title: "",
        subtitle: "",
        type: "",
        aim: [],
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

      // Clear success state after 2s
      setTimeout(() => {
        setSuccess(false);
        navigate("/dashboard/home");
      }, 2000);
      // navigate("/blog"); // Uncomment if redirection is needed
    } catch (e) {
      console.error("Error adding document: ", e);
      setError(true);
      setSuccess(false);
      setLoading(false);
    }
  };

  // Available types
  const type = [{ name: "Webinar" }, { name: "Workshop" }];

  return (
    <div className="h-fit pt-10">
      <main className="relative mb-[50px]">
        {success && (
          <div className="fixed left-0 top-0 w-full h-full bg-black/20 backdrop-blur-sm text-white flex items-center justify-center">
            <p className="bg-black border-3 border-[#034FE3] font-bold text-[20px] px-[30px] py-[10px] rounded-[10px] backdrop-blur-sm">
              {formData.type} Added!
            </p>
          </div>
        )}
        <div className="flex items-center gap-[20px] border-b-2 border-gray-700 py-[10px]">
          <h1 className="text-3xl font-bold text-white">Create Webinar</h1>
          <Link
            to="/dashboard/webinar"
            className="bg-transparent text-gray-500 border-2 border-gray-700 px-4 py-2 rounded-full hover:scale-[102%] transition">
            View webinar / workshop
          </Link>
          <button className="bg-transparent text-gray-500 border-2 border-gray-700 px-4 py-2 rounded-full cursor-default">
            Create Webinar / Workshop
          </button>
        </div>
        {/* message  */}
        <p className="text-gray-500 ">
          H2's are the table of contents and would appear when selected.. <br />
          Do Not Use H1 inthe details input.
        </p>
        <form
          className="md:w-[70%] sm:w-[60%] w-[90%] mx-auto overflow-scroll h-[100vh] pb-[400px] mt-10 "
          onSubmit={handleSubmit}>
          <div className="flex items-center my-5 gap-[10px]">
            <label
              htmlFor="image"
              className="bg-transparent text-gray-500 border-2 border-gray-700 px-4 py-2 rounded-full hover:scale-[102%] transition cursor-pointer"
              ref={imageRef}>
              Add Image
            </label>

            <p className="text-[14px] font-[400] text-gray-500">
              Click to add Photo <br />
              {progress > 0 && (
                <span className="text-sm">
                  Upload Progress:{" "}
                  <span className="text-green-600">{progress}%</span>
                </span>
              )}
              {imgError > 0 && (
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

          {/* type and links  */}
          <div className=" flex items-center gap-[10px]">
            {/* type  */}
            <section className=" flex flex-1 flex-col gap-[5px] my-5  w-full relative">
              <p className=" text-gray-500  ">Type</p>
              <div
                className="flex items-center justify-between gap-2 bg-black border-2 border-gray-700  w-full px-3 py-4 rounded-[10px]  text-white   z-50"
                type="button">
                <p
                  className="flex items-center gap-2 text-gray-500  w-full cursor-pointer"
                  onClick={() => setType(!typee)}>
                  <span className=" text-gray-500  border-r border-gray-500 pr-2">
                    @
                  </span>{" "}
                  {formData.type}
                </p>
                {typee && (
                  <div
                    className=" absolute  -left-[1px] -right-[1px] top-[70px]  bg-black border-2 border-gray-700  w-full  text-gray-500  text-[12px] font-[500]  rounded-b-[10px]  p-3  h-fit overflow-scroll "
                    onClick={() => setType(!type)}>
                    {type.map((type) => (
                      <button
                        key={type.name}
                        value={type.name}
                        type="button"
                        className="  flex gap-[12px] py-[14px] px-[18px]  hover:text-white cursor-pointer w-full rounded-[10px]"
                        onClick={(e) =>
                          setFormData({ ...formData, type: e.target.value })
                        }>
                        {type.name}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </section>
            {/* webinar link  */}
            <div className="flex flex-1 flex-col gap-[5px] my-5">
              <p className="text-gray-500 ">Webinar Link</p>
              <input
                className=" border-3 bg-black border-2  border-gray-700 w-full rounded-[10px] px-5 py-4 outline-none text-gray-500"
                type="text"
                name="link"
                onChange={handleChange}
                value={formData.link}
                required
              />
            </div>
            {/* hackathon link  */}
            <div className="flex flex-1 flex-col gap-[5px] my-5">
              <p className="text-gray-500 ">Hackathon Link</p>
              <input
                className=" border-3 bg-black border-2  border-gray-700 w-full rounded-[10px] px-5 py-4 outline-none text-gray-500"
                type="text"
                name="hackathonlink"
                onChange={handleChange}
                value={formData.hackathonlink}
                required
              />
            </div>
          </div>
          {/* speaker name / category  */}
          <div className=" flex items-center gap-[10px]">
            {/* speaker name  */}
            <div className="flex flex-1 flex-col gap-[5px] my-5">
              <p className="text-gray-500 ">Speaker</p>
              <input
                className=" border-3 bg-black border-2  border-gray-700 w-full rounded-[10px] px-5 py-4 outline-none text-gray-500"
                type="text"
                name="speaker"
                onChange={handleChange}
                value={formData.speaker}
                required
              />
            </div>

            {/* speaker category  */}
            <div className="flex flex-1 flex-col gap-[5px] my-5">
              <p className="text-gray-500 ">Category</p>
              <input
                className=" border-3 bg-black border-2  border-gray-700 w-full rounded-[10px] px-5 py-4 outline-none text-gray-500"
                type="text"
                name="category"
                onChange={handleChange}
                value={formData.category}
                required
              />
            </div>
          </div>
          {/* speaker Aim  */}
          <div className="flex flex-1 flex-col gap-[5px] my-5">
            <p className="text-gray-500 ">Aim</p>

            <section>
              <textarea
                name="aim"
                className=" border-3 bg-black border-2  border-gray-700 w-full rounded-[10px] px-5 py-4 outline-none text-gray-500"
                onChange={(e) => setCurrentAim(e.target.value)}
                value={currentAim}></textarea>
              <button
                className="bg-[#034FE3] text-white px-4 py-2 rounded-[10px] flex items-center gap-5 cursor-pointer"
                type="button"
                onClick={handlePush}>
                Add <span>+</span>
              </button>
              {/* Optional: Show added aims */}
              <ul className="text-white mt-4 list-disc list-inside flex flex-wrap w-full overflow-scroll gap-[10px]">
                {formData.aim.map((item, index) => (
                  <li
                    key={index}
                    className=" border-3 bg-black border-2  border-gray-700 w-[40%] rounded-[10px] px-5 py-4 outline-none text-gray-500 ">
                    {item}
                  </li>
                ))}
              </ul>
            </section>
          </div>
          {/* title / event schedule  */}
          <section className=" flex items-center gap-[10px]">
            {/* Title  */}
            <div className="flex flex-1 flex-col gap-[5px] my-5">
              <p className="text-gray-500 ">Title</p>
              <input
                className=" border-3 bg-black border-2  border-gray-700 w-full rounded-[10px] px-5 py-4 outline-none text-gray-500"
                type="text"
                name="title"
                onChange={handleChange}
                value={formData.title}
                required
              />
            </div>
            {/* Event time  */}

            <div className="flex flex-1 flex-col gap-[5px] my-5">
              <p className="text-gray-500 ">Event Time</p>
              <input
                className=" border-3 bg-black border-2  border-gray-700 w-full rounded-[10px] px-5 py-4 outline-none text-gray-500"
                type="text"
                name="event"
                onChange={handleChange}
                value={formData.event}
                required
              />
            </div>
          </section>
          {/* subtitle  */}
          <div className="flex flex-1 flex-col gap-[5px] my-5">
            <p className="text-gray-500 ">Subtitle</p>

            <section>
              <textarea
                name="subtitle"
                className=" border-3 bg-black border-2  border-gray-700 w-full rounded-[10px] px-5 py-4 outline-none text-gray-500"
                onChange={handleChange}
                value={formData.subtitle}
                required></textarea>
            </section>
          </div>
          <div className="flex flex-col gap-[5px] sm:mb-20 mb-32 text-black">
            <p className="text-gray-500 ">Speaker info</p>
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
              className="border-3 bg-white border-2  border-gray-700 w-full rounded-[10px] px-5 py-4 pb-20 outline-none  h-96 text-black overflow-hidden "
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
