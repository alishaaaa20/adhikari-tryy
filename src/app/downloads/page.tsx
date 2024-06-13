import React from "react";
import { Download } from "lucide-react";
import Image from "next/image";

export default function Page() {
  const downloadItems = [
    { title: "वित्तीय रिपोर्ट 1" },
    { title: "वित्तीय रिपोर्ट 2" },
    { title: "वित्तीय रिपोर्ट 3" },
    { title: "वित्तीय रिपोर्ट 4" },
    { title: "वित्तीय रिपोर्ट 5" },
  ];

  return (
    <div className="flex flex-col m-4 p-4 ml-6">
      <div>
        <h1 className="text-3xl lg:text-4xl font-bold p-4">Downloads</h1>
      </div>
      {downloadItems.map((item, index) => (
        <div
          key={index}
          className="flex justify-between w-full h-auto items-center p-4 mt-4 container rounded-lg bg-white shadow-md"
        >
          <div className="flex items-center cursor-pointer">
            <Image
              src="/download/download.svg"
              alt="Report"
              width={50}
              height={50}
            />
            <div className="ml-4 flex flex-col">
              <h1 className="text-xl lg:text-2xl font-medium">{item.title}</h1>
              <p className="text-sm lg:text-base text-gray-600">
                Click on the download icon to download the document
              </p>
            </div>
          </div>
          <div className="flex items-center ml-4 bg-[#0051BA] text-white p-2 rounded cursor-pointer">
            <Download size={20} className="mr-2" />
            <span className="font-medium">Download</span>
          </div>
        </div>
      ))}
    </div>
  );
}
