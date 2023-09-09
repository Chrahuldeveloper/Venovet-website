import React from "react";
import { AiOutlineFilePdf } from "react-icons/ai";

export default function Brochure() {
  const DownloadPdf = () => {
    const pdflink =
      "https://www.iitianacademy.com/assets/Syllabus/SYLLABUS%20for%20JEE%20(Main)-2021%20%20Syllabus%20for%20Paper-1.pdf";
    const aTag = document.createElement("a");
    aTag.href = pdflink;
    aTag.download = "venovet";
    document.body.append(aTag);
    aTag.click();
    aTag.remove();
  };

  return (
    <div className="bg-[#f8f8f9] p-6 border-[1px] border-gray-100 max-w-xs space-y-5 text-center shadow-lg">
      <h1 className="font-semibold md:text-xl">Download Brochures</h1>
      <button
        onClick={DownloadPdf}
        className="bg-orange-500 tex-white font-semibold rounded-lg  text-white px-8 py-4 flex items-center space-x-2.5 hover:brightness-95 duration-300 ease-in-out"
      >
        <h1>Download Brochures</h1>
        <AiOutlineFilePdf size={25} color="white" />
      </button>
    </div>
  );
}
