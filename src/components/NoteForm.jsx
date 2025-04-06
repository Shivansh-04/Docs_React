import React, { useState } from "react";

const NoteForm = ({ tagColors, onSave, onCancel }) => {
  const [formData, setFormData] = useState({
    desc: "",
    tag: "Code",
  });

  const handleSubmit = () => {
    if (!formData.desc.trim()) return;
    onSave({
      id: Date.now(),
      desc: formData.desc,
      tag: {
        title: formData.tag,
        color: tagColors[formData.tag],
      },
    });
    setFormData({ desc: "", tag: "Code" });
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-black-500 p-5 rounded-lg shadow-lg w-80">
        <h2 className="text-lg font-semibold mb-3">Add New Note</h2>

        <label className="block text-sm font-medium">Description:</label>
        <input
          type="text"
          value={formData.desc}
          onChange={(e) => setFormData({ ...formData, desc: e.target.value })}
          className="w-full p-2 border rounded-md mb-3"
        />

        <label className="block text-sm font-medium">Tag:</label>
        <select
          value={formData.tag}
          onChange={(e) => setFormData({ ...formData, tag: e.target.value })}
          className="w-full p-2 border rounded-md mb-4 bg-black text-white"
        >
          <option value="" disabled>
            Select a Tag
          </option>
          {Object.keys(tagColors).map((tag) => (
            <option key={tag} value={tag}>
              {tag}
            </option>
          ))}
        </select>

        <div className="flex justify-end gap-2">
          <button
            onClick={onCancel}
            className="px-3 py-2 bg-gray-300 rounded-md"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            className="px-3 py-2 bg-green-500 text-white rounded-md"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default NoteForm;
