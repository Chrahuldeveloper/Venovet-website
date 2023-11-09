import React from "react";

function Youtube() {
  return (
    // <div className="fixed inset-0 z-50 flex items-center w-full justify-center h-full bg-black bg-opacity-75 backdrop-blur-sm animate__animated animate__fadeIn">
    <div className="fixed inset-0 z-50 flex w-[100vw] items-center justify-center h-full bg-black bg-opacity-75 backdrop-blur-sm">
      <div className="bg-white rounded-md">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/6EDCnhbUpgE?si=LMydvYs7JTrwvTnx"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
}

export default Youtube;
