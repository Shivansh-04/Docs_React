import React from "react";
import { FaRegFileLines } from "react-icons/fa6";
import { MdOutlineFileDownload } from "react-icons/md";
import { IoCloseSharp } from "react-icons/io5";

const Card = ({ data }) => {
  return (
    <div className="w-60 flex-shrink-0 relative h-80 rounded-[30px] py-10 px-5 overflow-hidden bg-zinc-900/90 hover:scale-105 hover:shadow-2xl transition-transform duration-300">
      <FaRegFileLines />
      <p className="text-sm leading-tight mt-5 font-semibold line-clamp-3">{data.desc}</p>
      <div className="footer absolute bottom-0 w-full left-0 flex flex-col justify-between"> {/* Added flex and justify-between */}
        <div className="flex items-center justify-between px-4 py-2 mb-3">
          <h5>{data.filesize}</h5>
          <span className="w-5 h-5 bg-zinc-500 rounded-full flex items-center justify-center">
            {data.close ? (
              <IoCloseSharp size=".8rem" color="#000" />
            ) : (
              <MdOutlineFileDownload size=".8rem" color="#000" />
            )}
          </span>
        </div>
        {/* Conditionally render the tag div */}
        {data.tag.isOpen && (
          <div className="tag w-full h-13 flex items-center justify-center animate-fadeIn   py-4" style={{backgroundColor:data.tag.tagColor}}>
            <p className="text-center text-white ">{data.tag.tagTitle}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;
