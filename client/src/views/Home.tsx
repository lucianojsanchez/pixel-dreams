import React, { ChangeEvent, useEffect, useState } from "react";
import { Card, FormField, Loader } from "../components";

interface CardsType {
  data: any;
  title: string;
}
const RenderCards: React.FC<CardsType> = ({ data, title }) => {
  if (data?.length > 0) {
    return data.map((post: any) => <Card key={post._id} {...post} />);
  }

  return (
    <h2 className="mt-5 font-bold text-[#6469ff] text-xl uppercase">{title}</h2>
  );
};

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [allPosts, setAllPosts] = React.useState<any>(null);
  const [searchText, setSearchText] = useState("");
  const [searchedResults, setSearchedResults] = React.useState<any>(null);
  const [searchTimeout, setSearchTimeout] = React.useState<any>(null);

  useEffect(() => {
    const fetchPost = async () => {
      setLoading(true);

      try {
        const response = await fetch(
          "https://pixel-dreams-9dip.onrender.com/v1/post",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        if (response.ok) {
          // sort the last ones to be upper in the page
          const result = await response.json();
          setAllPosts(result.data.reverse());
        }
      } catch (error) {
        alert(error);
      } finally {
        setLoading(false);
      }
    };
    fetchPost();
  }, []);

  const handleSearchChange = (e: any) => {
    setSearchText(e.target.value);

    setSearchTimeout(
      setTimeout(() => {
        const searchResults = allPosts.filter(
          (item: { name: string; prompt: string }) =>
            item.name.toLowerCase().includes(searchText.toLowerCase()) ||
            item.prompt.toLowerCase().includes(searchText.toLowerCase())
        );
        setSearchedResults(searchResults);
      }, 500)
    );
  };

  return (
    <section className="max-w-7xl mx-auto">
      <div className="pt-20">
        <h1 className="font-extrabold text-[#333333] text-[32px] text-center">
          Community Creations
        </h1>
        <h2 className="mt-2 text-[#6f6f6f] text-[14px] text-center">
          Pixel Dreams is an online tool that allows you to generate unique and
          creative images based on your text input thanks to DALL·E 2 API. It's
          a fun and creative way to generate images for social media, blog
          posts, presentations, and more. Give it a try and see what kind of
          unique images you can create!
        </h2>
      </div>
      <div className="mt-16 font-extrabold">
        <FormField
          type="text"
          name="text"
          placeHolder="Search posts..."
          value={searchText}
          handleChange={handleSearchChange}
          isSurpriseMe={false}
          handleSurpriseMe={function (): void {
            throw new Error("Function not implemented.");
          }}
          labelName={""}
        />
      </div>
      <div className="mt-10">
        {loading ? (
          <div className="flex justify-center items-center">
            <Loader />
          </div>
        ) : (
          <>
            {searchText && (
              <h2 className="font-medium text-[#666e75] text-x1 mb-3">
                Showing Results For
                <span className="text-[#333333]"> {searchText}</span>
              </h2>
            )}
            <div className="grid lg:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2 grid-cols-1 gap-3">
              {searchText ? (
                <RenderCards data={searchedResults} title="No results found" />
              ) : (
                <RenderCards data={allPosts} title="No posts found" />
              )}
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default Home;
