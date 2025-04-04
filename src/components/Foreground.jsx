import React, { useState, useEffect } from "react";
import Card from "./Card";
import Card_new from "./Card_new";

const Foreground = () => {
  
  const [notes, setNotes] = useState(() => {
    const savedNotes = localStorage.getItem("notes");
    return savedNotes ? JSON.parse(savedNotes) : [];
  });

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const addNote = () => {
    const newNote = {
      id: Date.now(), // Unique ID for each note
      desc: "New Note",
      filesize: "0.0mb",
      close: true,
      tag: { isOpen: false, tagTitle: "New", tagColor: "green" },
    };
    setNotes([...notes, newNote]);
  };

  const deleteNote = (id) => {
    const updatedNotes = notes.filter((note) => note.id !== id);
    // setNotes(updatedNotes);
  };

  const editNote = (id, newText) => {
    setNotes(
      notes.map((note) => (note.id === id ? { ...note, desc: newText } : note))
    );
  };

  return (
    <>
      <div className="w-full fixed z-[3] p-5 top-0 left-0 h-screen flex gap-8 flex-wrap overflow-y-auto">
        {notes.map((item, index) => (
          // <Card data={item} key={index}/>
          <Card_new
            data={item}
            key={item.id}
            onDelete={() => deleteNote(item.id)}
            onEdit={editNote}
          />
        ))}
        <button
          onClick={addNote}
          className="p-3 bg-green-600 text-white rounded-lg fixed bottom-5 right-5"
        >
          + Add Note
        </button>
      </div>
    </>
  );
};

export default Foreground;
