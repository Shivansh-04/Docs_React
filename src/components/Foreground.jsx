import React, { useState } from "react";
import Card from "./Card";

const Foreground = () => {
  const data = [
    {
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
      filesize: "0.9mb",
      close: true,
      tag: { isOpen: false, tagTitle: "Download Now", tagColor: "#28a745" }, // Hex color
    },
    {
      desc: "Sed ut perspiciatis unde omnis iste natus error sit.",
      filesize: "1.2mb",
      close: false,
      tag: {
        isOpen: true,
        tagTitle: "Start Download",
        tagColor: "rgba(0, 123, 255, 0.8)",
      }, // RGBA color
    },
    {
      desc: "Excepteur sint occaecat cupidatat non proident.",
      filesize: "2.5mb",
      close: false,
      tag: { isOpen: true, tagTitle: "Download Now", tagColor: "red" }, // Named color
    },
    {
      desc: "Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
      filesize: "1.7mb",
      close: true,
      tag: { isOpen: false, tagTitle: "Start Download", tagColor: "#ffcc00" }, // Hex color
    },
    {
      desc: "Duis aute irure dolor in reprehenderit in voluptate velit.",
      filesize: "3.1mb",
      close: true,
      tag: { isOpen: true, tagTitle: "Download Available", tagColor: "purple" }, // Named color
    },
  ];


  return (
    <div className="w-full fixed z-[3] p-5 top-0 left-0 h-full flex gap-8 flex-wrap ">
      {data.map((item, index) => (
        <Card data={item} key={index}/>
      ))}
    </div>
  );
};

export default Foreground;
