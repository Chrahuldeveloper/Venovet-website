import React from "react";
import { AiOutlineFilePdf } from "react-icons/ai";

export default function Brochure() {
  const DownloadPdf = async () => {
    const pdflink =
      "https://firebasestorage.googleapis.com/v0/b/venovet-78743.appspot.com/o/pdf%2Fassets_Forenoon%20Session%20Schedule.pdf?alt=media&token=2a3138ce-951c-4726-af70-f081def045db";
    try {
      const aTag = document.createElement("a");
      aTag.href = pdflink;
      aTag.download = "venovet.pdf";
      aTag.target = "_blank";
      document.body.append(aTag);
      aTag.click();
      aTag.remove();
    } catch (error) {
      console.log(error);
    }
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
