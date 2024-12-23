import { useState, FormEvent } from "react";

function NewPost() {
  const [uploadedFiles, setUploadedFiles] = useState<string[]>([]);
  const [tags, setTags] = useState<string[]>([]);
  
  // New state for form fields and errors
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    location: '',
  });
  const [errors, setErrors] = useState({
    title: '',
    description: '',
    location: '',
    images: '',
    tags: '',
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
    setErrors(prev => ({ ...prev, images: '' }));

    // Validate image count
    if (files && files.length + uploadedFiles.length > 5) {
      setErrors(prev => ({ ...prev, images: 'You can only upload up to 5 images' }));
      return;
    }

    for (let i = 0; i < files!.length; i++) {
      filePath.push(URL.createObjectURL(files![i]));
    }
    if (files && files.length > 0) {
      setUploadedFiles([...uploadedFiles, ...filePath]);
    }
  }

  const validateForm = () => {
    const newErrors = {
      title: '',
      description: '',
      location: '',
      images: '',
      tags: '',
    };

    // Title validation
    if (!formData.title.trim()) {
      newErrors.title = 'Title is required';
    } else if (formData.title.trim().length < 3) {
      newErrors.title = 'Title must be at least 3 characters long';
    }

    // Description validation
    if (!formData.description.trim()) {
      newErrors.description = 'Description is required';
    } else if (formData.description.trim().length < 10) {
      newErrors.description = 'Description must be at least 10 characters long';
    }

    // Location validation
    if (!formData.location.trim()) {
      newErrors.location = 'Location is required';
    } else if (formData.location.trim().length < 2) {
      newErrors.location = 'Location must be at least 2 characters long';
    }

    // Images validation
    if (uploadedFiles.length === 0) {
      newErrors.images = 'At least one image is required';
    }

    // Tags validation (optional, but limit to 5 tags)
    if (tags.length > 5) {
      newErrors.tags = 'Maximum of 5 tags allowed';
    }

    setErrors(newErrors);
    
    // Return true if no errors
    return Object.values(newErrors).every(error => error === '');
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validate the form
    if (validateForm()) {
      // Form is valid, proceed with submission
      const postData = {
        ...formData,
        tags,
        images: uploadedFiles
      };
      
      // TODO: Implement actual form submission logic
      console.log('Form submitted:', postData);
      
      // Optional: Reset form after successful submission
      // setFormData({ title: '', description: '', location: '' });
      // setUploadedFiles([]);
      // setTags([]);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear the specific error when user starts typing
    setErrors(prev => ({ ...prev, [name]: '' }));
  };

  return (
    <div className="bg-white rounded-lg shadow-xl pb-8 flex justify-center items-center">
      <div className="flex w-3/4">
        <div className="w-2/4 mt-10">
          <span className="text-2xl font-bold">New Post</span>
          <form onSubmit={handleSubmit} className="w-full bg-white shadow-md p-6">
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-full px-3 mb-6">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-sm font-bold mb-2"
                  htmlFor="title"
                >
                  Title
                </label>
                <input
                  className={`appearance-none block w-full bg-white text-gray-900 font-medium border ${errors.title ? 'border-red-500' : 'border-gray-400'} rounded-lg py-3 px-3 leading-tight focus:outline-none focus:border-[#98c01d]`}
                  type="text"
                  name="title"
                  placeholder="Title"
                  value={formData.title}
                  onChange={handleInputChange}
                />
                {errors.title && <p className="text-red-500 text-xs italic mt-1">{errors.title}</p>}
              </div>
              <div className="w-full px-3 mb-6">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-sm font-bold mb-2"
                  htmlFor="description"
                >
                  Description
                </label>
                <textarea
                  rows={4}
                  className={`appearance-none block w-full bg-white text-gray-900 font-medium border ${errors.description ? 'border-red-500' : 'border-gray-400'} rounded-lg py-3 px-3 leading-tight focus:outline-none focus:border-[#98c01d]`}
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                />
                {errors.description && <p className="text-red-500 text-xs italic mt-1">{errors.description}</p>}
              </div>
              <div className="w-full md:w-full px-3 mb-6">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-sm font-bold mb-2"
                  htmlFor="location"
                >
                  Location
                </label>
                <input
                  className={`appearance-none block w-full bg-white text-gray-900 font-medium border ${errors.location ? 'border-red-500' : 'border-gray-400'} rounded-lg py-3 px-3 leading-tight focus:outline-none focus:border-[#98c01d]`}
                  type="text"
                  name="location"
                  placeholder="Helsinki"
                  value={formData.location}
                  onChange={handleInputChange}
                />
                {errors.location && <p className="text-red-500 text-xs italic mt-1">{errors.location}</p>}
              </div>
              <div className="w-full md:w-full px-3 mb-6">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-sm font-bold mb-2"
                  htmlFor="tags"
                >
                  Tags
                </label>
                <input
                  className="appearance-none block w-full bg-white text-gray-900 font-medium border border-gray-400 rounded-lg py-3 px-3 leading-tight focus:outline-none focus:border-[#98c01d]"
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
                {errors.tags && <p className="text-red-500 text-xs italic mt-1">{errors.tags}</p>}
                <div className="flex flex-wrap mt-1">
                  {tags.map((tag) => (
                    <span key={tag} className="flex gap-1 bg-blue-200 rounded-md px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                      <span>
                        {tag}
                      </span>
                      <span className="cursor-pointer" onClick={() => removeTag(tags.indexOf(tag))}>x</span>
                    </span>
                  ))}
                </div>
              </div>

              <div className="w-full px-3 mb-8">
                <label
                  className="mx-auto cursor-pointer flex w-full max-w-lg flex-col items-center justify-center rounded-xl border-2 border-dashed border-blue-400 bg-white p-6 text-center"
                  htmlFor="dropzone-file"
                >
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

                  <h2 className="mt-4 text-xl font-medium text-gray-700 tracking-wide">
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
                {errors.images && <p className="text-red-500 text-xs italic mt-1 text-center">{errors.images}</p>}
              </div>
              <div className="w-full md:w-full px-3 mb-6">
                <button 
                  type="submit" 
                  className="appearance-none block w-full items-center bg-blue-600 hover:bg-blue-700 text-gray-100 px-4 py-2 rounded text-sm space-x-2 transition duration-100"
                >
                  Add Post
                </button>
              </div>
            </div>
          </form>
        </div>
        <div className="w-2/4 mt-10">
          <div className="bg-white text-white rounded-lg w-full mx-5 md:w-[40rem] space-y-6 p-10">
            <div className="grid grid-cols-6 col-span-2 gap-2 justify-center items-center">
              {uploadedFiles.length > 0 && (
                <div className="overflow-hidden rounded-xl col-span-3 max-h-[14rem]">
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
              <span className="text-sm text-gray-400 pt-1">Click on the image to remove</span>
            )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewPost;
