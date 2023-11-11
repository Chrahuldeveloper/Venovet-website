import React from "react";

function Youtube({ link, playVideo }) {
  const first = link.slice(0, 13);
  const last = link.slice(17, link.length);

  return (
    <div
      onClick={() => {
        playVideo(false);
      }}
      className="fixed inset-0 z-50 flex w-[100vw] items-center justify-center h-full bg-black bg-opacity-75 backdrop-blur-sm"
    >
      <div className="bg-white rounded-md">
        <iframe
          width="560"
          height="315"
          src={`${first}be.com/embed/${last}`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}

export default Youtube;
