"use client";
import React from "react";
import { Search } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function Page() {
  const Impnotices = [
    {
      title: "केन्द्रिय कार्य समिती वैठक, साधारणसभा सूचना",
      date: "2024-05-10",
    },
    {
      title: "केन्द्रिय कार्य समिती वैठक, साधारणसभा सूचना",
      date: "2024-05-10",
    },
    {
      title: "केन्द्रिय कार्य समिती वैठक, साधारणसभा सूचना",
      date: "2024-05-10",
    },
    {
      title: "केन्द्रिय कार्य समिती वैठक, साधारणसभा सूचना ",
      date: "2024-05-10",
    },
    { title: "Notice 5", date: "2024-05-10" },
    { title: "Notice 6", date: "2024-05-10" },
    { title: "Notice 7", date: "2024-05-10" },
    { title: "Notice 8", date: "2024-05-10" },
  ];

  const notices = [
    {
      title: " जिल्ला अस्पतालमा सुधारको अवस्था",
      decription:
        "जिल्ला अस्पतालमा आधुनिक औषधालयको निर्माण भइरहेको छ। यसका लागि सरकारले विशेष ध्यान दिएको छ। जिल्ला अस्पतालमा आधुनिक औषधालयको निर्माण भइरहेको छ। यसका लागि सरकारले विशेष ध्यान दिएको छ।",
    },
    {
      title: " जिल्ला अस्पतालमा सुधारको अवस्था",
      decription:
        "जिल्ला अस्पतालमा आधुनिक औषधालयको निर्माण भइरहेको छ। यसका लागि सरकारले विशेष ध्यान दिएको छ। जिल्ला अस्पतालमा आधुनिक औषधालयको निर्माण भइरहेको छ। यसका लागि सरकारले विशेष ध्यान दिएको छ।",
    },
    {
      title: " जिल्ला अस्पतालमा सुधारको अवस्था",
      decription:
        "जिल्ला अस्पतालमा आधुनिक औषधालयको निर्माण भइरहेको छ। यसका लागि सरकारले विशेष ध्यान दिएको छ। जिल्ला अस्पतालमा आधुनिक औषधालयको निर्माण भइरहेको छ। यसका लागि सरकारले विशेष ध्यान दिएको छ।",
    },
    {
      title: " जिल्ला अस्पतालमा सुधारको अवस्था",
      decription:
        "जिल्ला अस्पतालमा आधुनिक औषधालयको निर्माण भइरहेको छ। यसका लागि सरकारले विशेष ध्यान दिएको छ। जिल्ला अस्पतालमा आधुनिक औषधालयको निर्माण भइरहेको छ। यसका लागि सरकारले विशेष ध्यान दिएको छ।",
    },
    {
      title: " जिल्ला अस्पतालमा सुधारको अवस्था",
      decription:
        "जिल्ला अस्पतालमा आधुनिक औषधालयको निर्माण भइरहेको छ। यसका लागि सरकारले विशेष ध्यान दिएको छ। जिल्ला अस्पतालमा आधुनिक औषधालयको निर्माण भइरहेको छ। यसका लागि सरकारले विशेष ध्यान दिएको छ।",
    },
  ];

  return (
    <div className="2xl:container mx-auto px-3 sm:px-8 py-8">
      <div>
        <h1 className="text-3xl font-semibold mb-6 lg:text-left ">Notices</h1>
      </div>
      <div className="items-center justify-center flex lg:justify-start md:justify-start ">
        <div className="flex justify-start sm:items-center items-start sm:flex-row flex-col gap-2">
          <Select>
            <SelectTrigger className="w-[250px] sm:w-[250px] h-10 bg-white rounded-lg border-0 text-md text-gray-400 shadow-lg">
              <SelectValue placeholder="Select a Notice" className="text-md" />
            </SelectTrigger>
            <SelectContent className="bg-white rounded-lg shadow-lg">
              <SelectGroup>
                <SelectLabel>Notices</SelectLabel>
                <SelectItem value="apple">Notice 1</SelectItem>
                <SelectItem value="banana">Notice 2</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          <div>
            <div className="w-[250px] sm:w-[250px] flex items-center p-2 rounded-md bg-white shadow-lg">
              <input
                className="outline-none rounded-lg px-2 text-md bg-white w-full"
                placeholder="Search"
              />
              <Search className="text-blue-800" size={18} />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row mt-8 gap-8">
        <div className="w-full lg:w-1/2">
          {notices.map((item, index) => (
            <div
              key={index}
              className="flex flex-col lg:flex-row justify-between w-full h-auto items-center p-4 mt-4 rounded-lg bg-white shadow-md"
            >
              <div className="flex flex-col gap-1 leading-relaxed">
                <h1 className="text-xl lg:text-xl font-medium">{item.title}</h1>
                <p className="text-sm lg:text-[16px] text-gray-600">
                  {item.decription}
                </p>
                <p className="text-sm lg:text-base mt-6 justify-end flex">
                  <a href="#" className="text-[#183760] hover:underline">
                    Read More
                  </a>
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="w-full lg:w-1/3 bg-white rounded-lg shadow-lg lg:ml-32   h-full p-4">
          <h1 className="text-2xl font-semibold mb-6 lg:text-left">
            Important Notices
          </h1>
          <div className="xl:mx-6 xl:py-8 md:m-2  overflow-y-auto h-[500px]">
            {Impnotices.slice(0, 4).map((item, index) => (
              <Card
                key={index}
                className="h-[100px] lg:h-[120px] md:h-[120px] w-full bg-white shadow-lg rounded mb-4"
              >
                <CardContent className="flex flex-col justify-between p-4 mb-4 lg:mb-0 h-full">
                  <div>
                    <h2 className="text-lg font-medium mb-2">{item.title}</h2>
                  </div>
                  <div className="flex justify-between  items-center">
                    <span className="text-gray-500">{item.date}</span>
                    <a href="#" className="text-[#183760] hover:underline">
                      Read More
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
            {Impnotices.length > 4 && (
              <div className="text-center mt-4">
                <a href="#" className="text-[#183760] hover:underline">
                  View More
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
