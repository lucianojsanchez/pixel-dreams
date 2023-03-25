import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { preview } from "../../assets";
import getRandomPrompts from "../../utils/RandomPrompts";
import { FormField, Loader } from "../../components";

const CreatePost = () => {
  //------------------------------------------//

  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    prompt: "",
    photo: "",
  });
  const [generatingImg, setGeneratingImg] = useState(false);
  const [loading, setLoading] = useState(false);

  //------------------------------------------//

  const handleSubmit = async () => {
    if (form.prompt && form.photo) {
      setLoading(true);
      try {
        const response = await fetch("http://localhost/api/v1/post", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(form),
        });
        await response.json;
        navigate("/");
      } catch (error) {
        alert(error);
      } finally {
        setLoading(false);
      }
    } else {
      alert("Enter a prompt");
    }
  };
  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;
    setForm({ ...form, [name]: value });
  };
  const handleSurpriseMe = () => {
    const randomPrompt = getRandomPrompts([form.prompt]);
    setForm({ ...form, prompt: randomPrompt });
  };
  const generateImage = async () => {
    if (form.prompt) {
      try {
        setGeneratingImg(true);
        const response = await fetch("http://localhost:8080/api/v1/dalle", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ prompt: form.prompt }),
        });
        const data = await response.json();
        setForm({ ...form, photo: `data:image/jpeg;base64,${data.photo}` });
      } catch (error) {
        alert(error);
      } finally {
        setGeneratingImg(false);
      }
    } else {
      alert("Enter a prompt");
    }
  };
  //------------------------------------------//

  return (
    <section className="max-w-7x1 mx-auto">
      <div>
        <h1 className="font-extrabold text-[#333333] text-[32px]">
          Create ur Image
        </h1>
        <p className="mt-2 text-[#6f6f6f] text-[14px] max-w-[500px]">
          Create imaginative and visual stunning
        </p>
      </div>

      <form className="mt-16 max-w-3x1" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-5">
          <FormField
            labelName="Your Name"
            type="text"
            name="name"
            placeHolder="John Doe"
            value={form.name}
            handleChange={handleChange}
            isSurpriseMe={false}
            handleSurpriseMe={function (): void {
              throw new Error("Function not implemented.");
            }}
          />
          <FormField
            labelName="Prompt"
            type="text"
            name="prompt"
            placeHolder="Amazing Logo"
            value={form.prompt}
            handleChange={handleChange}
            isSurpriseMe
            handleSurpriseMe={handleSurpriseMe}
          />
          <div
            className="relative bg-gray-50 border
          border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 w-64 p-3 h-64 flex justify-center 
          items-center"
          >
            {form.photo ? (
              <img
                src={form.photo}
                alt={form.prompt}
                className="w-full h-full object-contain"
              />
            ) : (
              <img
                src={preview}
                alt="preview"
                className="w-1/2 h-1/2 opacity-50"
              />
            )}
            {generatingImg && (
              <div className="absolute inset-0 z-0 flex justify-center items-center bg-[rgba(0,0,0,0.5)] rounded-lg">
                <Loader />
              </div>
            )}
          </div>
        </div>
        <div className="mt-5 flex gap-5">
          <button
            type="button"
            className="rounded-md bg-green-500 text-sm w-full sm:w-auto px-5 py-2.5 text-center text-white "
            onClick={generateImage}
          >
            {generatingImg ? "Generating..." : "Generate Image"}
          </button>
        </div>
        <div className="mt-10">
          <button
            className="rounded-md bg-[#5f89fc] text-sm w-full sm:w-auto px-5 py-2.5 text-center text-white"
            type="submit"
          >
            {loading ? "Sharing..." : "Share with the community"}
          </button>
        </div>
      </form>
    </section>
  );
};

export default CreatePost;
