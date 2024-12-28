import { useState, type FormEvent } from "react";
import Footer from "../components/Footer";

function NewPost() {
  const [uploadedFiles, setUploadedFiles] = useState<string[]>([]);
  const [tags, setTags] = useState<string[]>([]);

  // New state for form fields and errors
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    location: "",
  });
  const [errors, setErrors] = useState({
    title: "",
    description: "",
    location: "",
    images: "",
    tags: "",
  });

  // State to store uploadedFiles
  const filePath: string[] = [];

  function removeFile(index: number) {
    uploadedFiles.splice(index, 1);
    setUploadedFiles([...uploadedFiles]);
  }

  function removeTag(index: number) {
    tags.splice(index, 1);
    setTags([...tags]);
  }

  function setPreview(files: FileList | null) {
    // Reset image error
    setErrors((prev) => ({ ...prev, images: "" }));

    // Validate image count
    if (files && files.length + uploadedFiles.length > 5) {
      setErrors((prev) => ({
        ...prev,
        images: "You can only upload up to 5 images",
      }));
      return;
    }

    // biome-ignore lint/style/noNonNullAssertion: <explanation>
    for (let i = 0; i < files!.length; i++) {
      // biome-ignore lint/style/noNonNullAssertion: <explanation>
      filePath.push(URL.createObjectURL(files![i]));
    }
    if (files && files.length > 0) {
      setUploadedFiles([...uploadedFiles, ...filePath]);
    }
  }

  const validateForm = () => {
    const newErrors = {
      title: "",
      description: "",
      location: "",
      images: "",
      tags: "",
    };

    // Title validation
    if (!formData.title.trim()) {
      newErrors.title = "Title is required";
    } else if (formData.title.trim().length < 3) {
      newErrors.title = "Title must be at least 3 characters long";
    }

    // Description validation
    if (!formData.description.trim()) {
      newErrors.description = "Description is required";
    } else if (formData.description.trim().length < 10) {
      newErrors.description = "Description must be at least 10 characters long";
    }

    // Location validation
    if (!formData.location.trim()) {
      newErrors.location = "Location is required";
    } else if (formData.location.trim().length < 2) {
      newErrors.location = "Location must be at least 2 characters long";
    }

    // Images validation
    if (uploadedFiles.length === 0) {
      newErrors.images = "At least one image is required";
    }

    // Tags validation (optional, but limit to 5 tags)
    if (tags.length > 5) {
      newErrors.tags = "Maximum of 5 tags allowed";
    }

    setErrors(newErrors);

    // Return true if no errors
    return Object.values(newErrors).every((error) => error === "");
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validate the form
    if (validateForm()) {
      // Form is valid, proceed with submission
      const postData = {
        ...formData,
        tags,
        images: uploadedFiles,
      };

      // TODO: Implement actual form submission logic
      console.log("Form submitted:", postData);

      // Optional: Reset form after successful submission
      // setFormData({ title: '', description: '', location: '' });
      // setUploadedFiles([]);
      // setTags([]);
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear the specific error when user starts typing
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  return (
    <div className="rounded-lg shadow-xl pb-8 flex justify-center items-center">
      <div className="flex w-3/4 pb-10">
        <div className="w-2/4 mt-10">
          <span className="text-4xl font-bold text-pink-500 uppercase">
            New Post
          </span>
          <form
            onSubmit={handleSubmit}
            className="w-full bg-sky-950 p-10 rounded-lg bg-opacity-70 shadow-md"
          >
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-full px-3 mb-6">
                <label
                  className="block uppercase tracking-wide text-pink-500 text-sm font-bold mb-2"
                  htmlFor="title"
                >
                  Title
                </label>
                <input
                  className={`appearance-none block w-full bg-[#B3E5FC] text-gray-900 font-medium border ${
                    errors.title ? "border-red-500" : "border-gray-400"
                  } rounded-lg py-3 px-3 leading-tight focus:outline-none focus:border-[#98c01d]`}
                  type="text"
                  name="title"
                  placeholder="Title"
                  value={formData.title}
                  onChange={handleInputChange}
                />
                {errors.title && (
                  <p className="mt-1 text-lg text-red-300">{errors.title}</p>
                )}
              </div>
              <div className="w-full px-3 mb-6">
                <label
                  className="block uppercase tracking-wide text-pink-500 text-sm font-bold mb-2"
                  htmlFor="description"
                >
                  Description
                </label>
                <textarea
                  rows={4}
                  className={`appearance-none block w-full bg-[#B3E5FC] text-gray-900 font-medium border ${
                    errors.description ? "border-red-500" : "border-gray-400"
                  } rounded-lg py-3 px-3 leading-tight focus:outline-none focus:border-[#98c01d]`}
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                />
                {errors.description && (
                  <p className="mt-1 text-lg text-red-300">
                    {errors.description}
                  </p>
                )}
              </div>
              <div className="w-full md:w-full px-3 mb-6">
                <label
                  className="block uppercase tracking-wide text-pink-500 text-sm font-bold mb-2"
                  htmlFor="location"
                >
                  Location
                </label>
                <input
                  className={`appearance-none block w-full bg-[#B3E5FC] text-gray-900 font-medium border ${
                    errors.location ? "border-red-500" : "border-gray-400"
                  } rounded-lg py-3 px-3 leading-tight focus:outline-none focus:border-[#98c01d]`}
                  type="text"
                  name="location"
                  placeholder="Helsinki"
                  value={formData.location}
                  onChange={handleInputChange}
                />
                {errors.location && (
                  <p className="mt-1 text-lg text-red-300">{errors.location}</p>
                )}
              </div>
              <div className="w-full md:w-full px-3 mb-6">
                <label
                  className="block uppercase tracking-wide text-pink-500 text-sm font-bold mb-2"
                  htmlFor="tags"
                >
                  Tags
                </label>
                <input
                  className="appearance-none block w-full bg-[#B3E5FC] text-gray-900 font-medium border border-gray-400 rounded-lg py-3 px-3 leading-tight focus:outline-none focus:border-[#98c01d]"
                  type="text"
                  name="tags"
                  placeholder="Type and press enter"
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      e.preventDefault();
                      // Prevent adding duplicate or empty tags
                      const newTag = e.currentTarget.value.trim();
                      if (newTag && !tags.includes(newTag)) {
                        setTags([...tags, newTag]);
                        e.currentTarget.value = "";
                      }
                    }
                  }}
                />
                {errors.tags && (
                  <p className="mt-1 text-lg text-red-300">{errors.tags}</p>
                )}
                <div className="flex flex-wrap mt-1">
                  {tags.map((tag) => (
                    <span
                      key={tag}
                      className="flex gap-1 bg-blue-200 rounded-md px-3 py-1 text-sm font-semibold text-pink-500 mr-2 mb-2"
                    >
                      <span>{tag}</span>
                      {/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
                      <span
                        className="cursor-pointer"
                        onClick={() => removeTag(tags.indexOf(tag))}
                      >
                        x
                      </span>
                    </span>
                  ))}
                </div>
              </div>

              <div className="w-full px-3 mb-8">
                <label
                  className="mx-auto cursor-pointer flex w-full max-w-lg flex-col items-center justify-center rounded-xl border-2 border-dashed border-blue-400 bg-[#B3E5FC] p-6 text-center"
                  htmlFor="dropzone-file"
                >
                  {/* biome-ignore lint/a11y/noSvgWithoutTitle: <explanation> */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-10 w-10 text-blue-800"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                    />
                  </svg>

                  <h2 className="mt-4 text-xl font-medium text-pink-500 tracking-wide">
                    Post images
                  </h2>

                  <p className="mt-2 text-gray-500 tracking-wide">
                    Upload or drag & drop your Images. Max 5 images{" "}
                  </p>

                  <input
                    id="dropzone-file"
                    type="file"
                    className="hidden"
                    name="post_images[]"
                    multiple
                    max={5}
                    accept="image/png, image/jpeg"
                    onChange={(e) => setPreview(e.target.files)}
                  />
                </label>
                {errors.images && (
                  <p className="mt-1 text-lg text-red-300 text-center">
                    {errors.images}
                  </p>
                )}
              </div>
              <div className="w-full md:w-full px-3 mb-6">
                <button
                  type="submit"
                  className="appearance-none block w-full items-center uppercase bg-purple-400 bg-opacity-70 border border-white hover:bg-pink-400 hover:bg-opacity-70 text-white px-4 py-2 rounded text-sm space-x-2 transition duration-100"
                >
                  Add Post
                </button>
              </div>
            </div>
          </form>
        </div>
        <div className="w-2/4 mt-10">
          {uploadedFiles.length > 0 && (
            <div className="bg-[#B3E5FC] text-white rounded-lg w-full mx-5 md:w-[40rem] space-y-6 p-10">
              <div className="grid grid-cols-6 col-span-2 gap-2 justify-center items-center">
                {uploadedFiles.length > 0 && (
                  <div className="overflow-hidden rounded-xl col-span-3 max-h-[14rem]">
                    {/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
                    <img
                      className="transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 h-full w-full object-cover cursor-pointer"
                      src={uploadedFiles[0]}
                      alt=""
                      onClick={() => removeFile(0)}
                    />
                  </div>
                )}
                {uploadedFiles.length > 1 && (
                  <div className="overflow-hidden rounded-xl col-span-3 max-h-[14rem]">
                    {/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
                    <img
                      className="transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300h-full w-full object-cover cursor-pointer"
                      src={uploadedFiles[1]}
                      alt=""
                      onClick={() => removeFile(1)}
                    />
                  </div>
                )}
                {uploadedFiles.length > 2 && (
                  <div className=" overflow-hidden rounded-xl col-span-2 max-h-[10rem]">
                    {/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
                    <img
                      className="transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 h-full w-full object-cover cursor-pointer"
                      src={uploadedFiles[2]}
                      alt=""
                      onClick={() => removeFile(2)}
                    />
                  </div>
                )}
                {uploadedFiles.length > 3 && (
                  <div className=" overflow-hidden rounded-xl col-span-2 max-h-[10rem]">
                    {/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
                    <img
                      className="transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 h-full w-full object-cover cursor-pointer"
                      src={uploadedFiles[3]}
                      alt=""
                      onClick={() => removeFile(3)}
                    />
                  </div>
                )}
                {uploadedFiles.length > 4 && (
                  <div className="relative overflow-hidden rounded-xl col-span-2 max-h-[10rem]">
                    {/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
                    <img
                      className="transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 h-full w-full object-cover cursor-pointer"
                      src={uploadedFiles[4]}
                      alt=""
                      onClick={() => removeFile(4)}
                    />
                  </div>
                )}
              </div>
              <div className="text-center">
                {uploadedFiles.length > 0 && (
                  <span className="text-sm text-black font-bold pt-1">
                    Click on the image to remove
                  </span>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default NewPost;
