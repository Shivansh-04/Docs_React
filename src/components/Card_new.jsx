import React, { useState } from "react";
import { FaRegFileLines } from "react-icons/fa6";
import { MdOutlineFileDownload } from "react-icons/md";
import { IoCloseSharp } from "react-icons/io5";
import { FiEdit } from "react-icons/fi";

const Card = ({ data, onDelete, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(data.desc);

  const handleSave = () => {
    onEdit(data.id, editedText);
    setIsEditing(false);
  };

  return (
    <div className="w-60 flex-shrink-0 relative h-80 rounded-[30px] py-10 px-5 overflow-hidden bg-zinc-900/90">
      <FaRegFileLines />
      
      {isEditing ? (
        <input
          type="text"
          value={editedText}
          onChange={(e) => setEditedText(e.target.value)}
          className="mt-5 p-2 w-full bg-gray-800 text-white rounded-md"
        />
      ) : (
        <p className="text-sm leading-tight mt-5 font-semibold">{data.desc}</p>
      )}

      <div className="footer absolute bottom-0 w-full left-0 flex flex-col justify-between">
        <div className="flex items-center justify-between px-4 py-2 mb-3">
          <h5>{data.filesize}</h5>
          <div className="flex gap-2">
            {isEditing ? (
              <button onClick={handleSave} className="text-green-400">Save</button>
            ) : (
              <FiEdit className="cursor-pointer" onClick={() => setIsEditing(true)} />
            )}
            <span className="w-5 h-5 bg-zinc-500 rounded-full flex items-center justify-center">
              {data.close ? (
                <IoCloseSharp size=".8rem" color="#000" onClick={onDelete} />
              ) : (
                <MdOutlineFileDownload size=".8rem" color="#000" />
              )}
            </span>
          </div>
        </div>

        {data.tag.isOpen && (
          <div
            className="tag w-full h-13 flex items-center justify-center py-4"
            style={{ backgroundColor: data.tag.tagColor }}
          >
            <p className="text-center text-white">{data.tag.tagTitle}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;
