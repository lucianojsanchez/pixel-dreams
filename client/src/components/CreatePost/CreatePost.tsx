import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { preview } from "../../assets";
import { getRandomPrompts } from "../../utils";
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
        const response = await fetch(
          "https://pixel-dreams-9dip.onrender.com/api/v1/post",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(form),
          }
        );
        await response.json();
        navigate("/");
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    } else {
      alert("Please enter a prompt and generate an image.");
    }
  };

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSurpriseMe = () => {
    const randomPrompt = getRandomPrompts([form.prompt]);
    setForm({ ...form, prompt: randomPrompt });
  };
  const generateImage = async () => {
    if (form.prompt && form.name) {
      try {
        setGeneratingImg(true);
        const response = await fetch(
          "https://pixel-dreams-9dip.onrender.com/api/v1/dalle",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ prompt: form.prompt }),
          }
        );
        const data = await response.json();
        setForm({ ...form, photo: `data:image/jpeg;base64,${data.photo}` });
      } catch (error) {
        alert(error);
      } finally {
        setGeneratingImg(false);
      }
    } else {
      alert("Please fill all fields.");
    }
  };

  //------------------------------------------//

  return (
    <div className="flex justify-center items-center h-full">
      <section className="max-w-7xl mx-auto">
        <div className="bg-gradient-to-r from-[#fefff4] to-[#ffffff] drop-shadow-lg rounded-lg shadow-md px-5 xs:px-20 py-10 mt-20 shadow-black ">
          <div className="px-5">
            <h1 className="font-extrabold text-[#333333] text-[32px] text-center">
              Create your Image
            </h1>
            <p className="mt-2 font-roboto text-[#6f6f6f] text-[14px] text-center">
              Type in a phrase or sentence and get a unique image that visually
              represents your text.
            </p>
          </div>
          <form className="mt-16 max-w-3x1 mx-auto" onSubmit={handleSubmit}>
            <div className="font-serif flex flex-col gap-5 items-center ">
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
                className="flex justify-center item-center relative bg-gray-50 border
          border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#EA5455] w-72 p-3 h-72 shadow-inner shadow-black"
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
                    className="h-32 w-32 opacity-40 mt-[60px]"
                  />
                )}
                {generatingImg && (
                  <div className="absolute inset-0 z-0 flex justify-center items-center bg-[rgba(0,0,0,0.5)] rounded-lg">
                    <Loader />
                  </div>
                )}
              </div>
            </div>
            <div className="mt-5 flex gap-5 justify-center">
              <button
                type="button"
                className="rounded-md bg-green-500 text-sm w-full sm:w-auto px-5 py-2.5 text-center text-white font-semibold shadow-sm shadow-gray-900 hover:shadow-inner hover:shadow-gray-900 "
                onClick={generateImage}
              >
                {generatingImg ? "Generating..." : "Generate Image"}
              </button>
            </div>
            <div className="mt-10 flex gap-5 justify-center">
              <button
                className={`rounded-md bg-[#5f89fc] text-sm w-full sm:w-auto px-5 py-2.5 text-center text-white font-semibold shadow-sm shadow-gray-900 hover:shadow-inner hover:shadow-gray-900  ${
                  loading || !form.photo ? "opacity-50 cursor-not-allowed" : ""
                }`}
                type="submit"
                onClick={handleSubmit}
                disabled={!form.photo || loading}
              >
                {loading ? "Sharing..." : "Share with the community"}
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default CreatePost;
