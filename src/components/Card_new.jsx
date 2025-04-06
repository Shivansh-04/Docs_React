import React, { useState } from "react";
import { FaRegFileLines } from "react-icons/fa6";
import { FiEdit } from "react-icons/fi";
import { IoCloseSharp } from "react-icons/io5";
import { motion } from "framer-motion";

const Card = ({ data, onDelete, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(data.desc);

  const handleSave = () => {
    onEdit(data.id, editedText);
    setIsEditing(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }} // Fade-in & scale-up
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }} // Fade-out & scale-down when deleted
      whileHover={{ scale: 1.05 }}
      className="w-60 flex-shrink-0 relative h-80 rounded-[30px] py-10 px-5 overflow-hidden bg-zinc-900/90"
      style={{ borderBottom: `5px solid ${data.tag.color}` }} // Set border color dynamically
    >
      <FaRegFileLines />

      {/* Editable or Static Text */}
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

      {/* Footer Section */}
      <div className="footer absolute bottom-0 w-full left-0 flex flex-col justify-between">
        <div className="flex items-center justify-between px-4 py-2 mb-3">
          <div className="flex gap-2">
            {isEditing ? (
              <button onClick={handleSave} className="text-green-400">
                Save
              </button>
            ) : (
              <FiEdit
                className="cursor-pointer"
                onClick={() => setIsEditing(true)}
              />
            )}
            <span
              className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center cursor-pointer"
              onClick={() => onDelete(data.id)} // Pass correct ID to delete function
            >
              <IoCloseSharp size=".8rem" color="#fff" />
            </span>
          </div>
        </div>

        {/* Tag Display */}
        <div
          className="tag w-full h-13 flex items-center justify-center py-4"
          style={{ backgroundColor: data.tag.color }}
        >
          <p className="text-center underline font-semibold text-white">
            {data.tag.title}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default Card;
