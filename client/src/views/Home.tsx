import React, { ChangeEvent, useEffect, useState } from "react";
import { Card, FormField, Loader } from "../components";

interface PostData {
  title: string;
  body: string;
  author: string;
  _id: number;
}

const RenderCards = ({ data, title }: { data: PostData[]; title: string }) => {
  if (data.length > 0) {
    return (
      <div>
        {data.map((post: PostData) => (
          <Card key={post._id} {...post} />
        ))}
      </div>
    );
  } else {
    return (
      <h2 className="mt-5 font-bold text-[#6449ff] text-x1 uppercase">
        {title}
      </h2>
    );
  }
};
const Home = () => {
  const [loading, setLoading] = useState(false);
  const [allPosts, setAllPosts] = useState(null);
  const [searchText, setSearchText] = useState("");

  return (
    <section className="max-w-7x1 mx-auto">
      <div>
        <h1 className="font-extrabold text-[#333333] text-[32px]">
          The Community Showcase
        </h1>
        <p className="mt-2 text-[#6f6f6f] text-[14px] max-w-[500px]">
          Browse anything
        </p>
      </div>
      <div className="mt-10">
        <FormField
          labelName={""}
          name={""}
          type={""}
          placeHolder={""}
          handleChange={function (event: ChangeEvent<HTMLInputElement>): void {
            throw new Error("Function not implemented.");
          }}
          isSurpriseMe={false}
          handleSurpriseMe={function (): void {
            throw new Error("Function not implemented.");
          }}
          value={""}
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
            <div className="grid lg:grid-cols-4 sm:grid-cols-3 xs:grid-cols-1 grid-cols-6 gap-3">
              {searchText ? (
                <RenderCards data={[]} title="No results found" />
              ) : (
                <RenderCards data={[]} title="No posts found" />
              )}
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default Home;
