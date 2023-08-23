import React from "react";
import Blogs from "../Data/BlogData";
import { useNavigate } from "react-router-dom";

export default function AllBlogs() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center gap-5">
      {Blogs.map((_, index) => {
        return (
          <React.Fragment key={index}>
            <div
              onClick={() => {
                navigate(`/ReadFull/${_.Tittle}`);
              }}
              className="flex flex-col justify-start gap-5 p-6 shadow-md lg:max-w-4xl lg:flex-row md:items-center"
            >
              <div>
                <img
                  src={_.image}
                  alt={_.image + index}
                  className="rounded-lg"
                />
              </div>
              <div className="space-y-3">
                <h1 className="text-[#ff602b] font-semibold text-lg">
                  {_.Tittle}
                </h1>
                <h2 className="text-[#777777] font-semibold">{_.SubTittle}</h2>
                <p className="text-[#849bb7]">{_.Para}</p>
              </div>
            </div>
          </React.Fragment>
        );
      })}
    </div>
  );
}
