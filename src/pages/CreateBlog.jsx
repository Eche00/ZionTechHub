import React, { useRef, useState, useEffect } from "react";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { useNavigate } from "react-router-dom";
import { db, storageF } from "../lib/Config/firebase";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

function CreateBlog() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    creator: "Ndoma Godsent",
    slug: "Blog-Slug",
    metadescription: "Meta Description",
    alt: "Image Alt",
    category: "",
    details: "",
    image: [],
    toc: [],
    createdAt: "",
  });
  const [files, setFiles] = useState([]);
  const imageRef = useRef();

  const [error, setError] = useState(false);
  const [imgError, setImgError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [success, setSucesss] = useState(false);

  const [toc, setToc] = useState([]);

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
          setSucesss(false);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setFormData((prevData) => ({
              ...prevData,
              image: [{ file: selectedFile, url: downloadURL }],
            }));
            setFiles([{ url: downloadURL, file: selectedFile }]);
            setImgError(false);
            setSucesss(false);
          });
        }
      );
    }
  };

  const handleChange = (e) => {
    setError(false);
    setSucesss(false);
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleEditorChange = (value) => {
    const tocHeaders = [];
    const doc = new DOMParser().parseFromString(value, "text/html");
    const h2Elements = doc.querySelectorAll("h2");

    h2Elements.forEach((header, index) => {
      tocHeaders.push({
        id: `toc-${index}`,
        title: header.innerText,
      });
    });

    setFormData((prev) => ({
      ...prev,
      details: value,
      toc: tocHeaders, //  store TOC inside formData
    }));

    setToc(tocHeaders); // (optional) if you still want it in a separate state
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(false);
    setImgError(false);
    setSucesss(false);

    if (
      !formData.image ||
      formData.image.length === 0 ||
      !formData.image[0].url
    ) {
      console.error("Image upload failed or not completed.");
      setImgError(true);
      setLoading(false);
      return;
    }

    try {
      const docRef = await addDoc(collection(db, "blogs"), {
        title: formData.title,
        slug: formData.slug,
        metadescription: formData.metadescription,
        alt: formData.alt,
        creator: formData.creator,
        category: formData.category,
        details: formData.details,
        toc: formData.toc,
        imageUrl: formData.image[0].url,
        createdAt: serverTimestamp(),
      });

      console.log("Document written with ID: ", docRef.id);
      setFormData({
        title: "",
        slug: "",
        metadescription: "",
        alt: "",
        creator: "",
        category: "",
        details: "",
        image: [],
        toc: [],
      });
      setFiles([]);
      setLoading(false);
      setError(false);
      setSucesss(true);
      setTimeout(() => {
        setSucesss(false);
        setProgress(null);
      }, 2000);
      // navigate("/blog");
    } catch (e) {
      console.error("Error adding document: ", e);
      setError(true);
      setSucesss(false);
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
            <div>
              <img
                src={files[0].url}
                alt={files[0].file.name}
                className="w-full h-[300px] rounded-[10px] object-cover"
              />
            </div>
          )}

          <div className="flex flex-col gap-[5px] my-5">
            <p>Title</p>
            <input
              className="bg-transparent border-3 border-[#034FE3] w-full rounded-[10px] px-5 py-2 outline-none"
              type="text"
              name="title"
              id="title"
              onChange={handleChange}
              value={formData.title}
              required
            />
          </div>
          <div className="flex flex-col gap-[5px] my-5">
            <p>Slug</p>
            <input
              className="bg-transparent border-3 border-[#034FE3] w-full rounded-[10px] px-5 py-2 outline-none"
              type="text"
              name="slug"
              id="slug"
              onChange={handleChange}
              value={formData.slug}
              required
            />
          </div>
          <div className="flex flex-col gap-[5px] my-5">
            <p>Meta Description</p>
            <input
              className="bg-transparent border-3 border-[#034FE3] w-full rounded-[10px] px-5 py-2 outline-none"
              type="text"
              name="metadescription"
              id="metadescription"
              onChange={handleChange}
              value={formData.metadescription}
              required
            />
          </div>
          <div className="flex flex-col gap-[5px] my-5">
            <p>Image alt</p>
            <input
              className="bg-transparent border-3 border-[#034FE3] w-full rounded-[10px] px-5 py-2 outline-none"
              type="text"
              name="alt"
              id="alt"
              onChange={handleChange}
              value={formData.alt}
              required
            />
          </div>

          <div className="flex flex-col gap-[5px] my-5">
            <p>Creator</p>
            <input
              className="bg-transparent border-3 border-[#034FE3] w-full rounded-[10px] px-5 py-2 outline-none"
              type="text"
              name="creator"
              id="creator"
              onChange={handleChange}
              value={formData.creator}
              required
            />
          </div>

          <div className="flex flex-col gap-[5px] my-5">
            <p>Category</p>
            <select
              className="bg-transparent border-3 border-[#034FE3] w-full rounded-[10px] px-5 py-2 outline-none"
              required
              id="category"
              name="category"
              onChange={handleChange}
              value={formData.category}>
              <option value="" disabled>
                Select a Category
              </option>
              <option value="Data Analytics">Data Analytics</option>
              <option value="Data Science">Data Science</option>
              <option value="Web Development">Web Development</option>
              <option value="Cloud Computing & DevOps">
                Cloud Computing & DevOps
              </option>
              <option value="Machine Learning">Machine Learning</option>
            </select>
          </div>

          {toc.length > 0 && (
            <div className="my-5">
              <h2 className="text-xl font-semibold mb-4">Table of Contents</h2>
              <ul>
                {toc.map((item, index) => (
                  <li key={index}>
                    <a
                      href={`#${item.id}`}
                      className="text-[#034FE3] font-medium">
                      {item.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="flex flex-col gap-[5px] sm:mb-20 mb-32">
            <p>Details</p>
            <ReactQuill
              value={formData.details}
              onChange={handleEditorChange}
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
              className="border-3 border-[#034FE3] w-full rounded-[10px] px-5 py-2 outline-none h-80 text-black bg-transparent"
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
              <span className="text-sm text-white">please try again!</span>
            </p>
          )}
          {success && (
            <div className="flex items-center justify-center h-[100vh] fixed top-0 w-full bg-gray-900">
              <p className="text-lg py-[5px] text-green-400 text-center font-bold">
                Successfully uploaded form
              </p>
            </div>
          )}
        </form>
      </main>
    </div>
  );
}

export default CreateBlog;
