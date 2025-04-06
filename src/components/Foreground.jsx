import React, { useState, useEffect } from "react";
import Card from "./Card";
import { motion, AnimatePresence } from "framer-motion";
import Card_new from "./Card_new";


const Foreground = () => {
  const tagColors = {
    Code: "#34D399", // Green
    Work: "#3B82F6", // Blue
    Personal: "#F97316", // Orange
    Urgent: "#EF4444", // Red
    General: "#6B7280", // Gray
  };

  const [notes, setNotes] = useState(() => {
    const savedNotes = localStorage.getItem("notes");
    return savedNotes ? JSON.parse(savedNotes) : [];
  });

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const addNote = () => {
    const newNote = {
      id: Date.now(),
      desc: "Write React Component",
      tag: {
        title: "General",
        color: tagColors["General"],
      },
    };
    setNotes([...notes, newNote]);
  };

  const deleteNote = (id) => {
    const updatedNotes = notes.filter((note) => note.id !== id);
    setNotes(updatedNotes);
  };

  const editNote = (id, newText) => {
    setNotes(
      notes.map((note) => (note.id === id ? { ...note, desc: newText } : note))
    );
  };

  return (
    <>
      <div className="w-full fixed z-[3] p-5 top-0 left-0 h-screen flex gap-8 flex-wrap overflow-y-auto">
        <AnimatePresence>
          {notes.map((item, index) => (
            // <Card data={item} key={index}/>
            <Card_new
              data={item}
              key={item.id}
              onDelete={() => deleteNote(item.id)}
              onEdit={editNote}
            />
          ))}
        </AnimatePresence>
        <motion.button
          onClick={addNote}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="p-3 bg-green-600 text-white rounded-lg fixed bottom-5 right-5"
        >
          + Add Note
        </motion.button>
      </div>
    </>
  );
};

export default Foreground;
