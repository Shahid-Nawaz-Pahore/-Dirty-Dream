import { useState } from "react";
import { FaRegImage } from "react-icons/fa";

const AddNewsForm = ({
  newItem,
  setNewItem,
  saveNews,
  closeModal,
  editingIndex,
}) => {
  const [preview, setPreview] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setNewItem({ ...newItem, img: file });

      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div
      className="max-w-3xl mx-auto flex flex-col gap-3 
    bg-[rgba(255,255,255,0.2)] backdrop-blur-[20px] p-8 rounded-2xl border border-white/20 shadow-xl mt-10"
    >
      <h2 className="text-xl font-semibold text-white">
        {editingIndex !== null ? "Update News" : "Add News"}
      </h2>

      <div>
        <label className="text-sm text-white">Title</label>
        <input
          type="text"
          placeholder="Enter title..."
          value={newItem.head}
          onChange={(e) => setNewItem({ ...newItem, head: e.target.value })}
          className="w-full mt-1 p-3 rounded-lg bg-white/20 text-white border border-white/30 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      <div>
        <label className="text-sm text-white">Description</label>
        <textarea
          rows="3"
          placeholder="Enter description..."
          value={newItem.desc}
          onChange={(e) => setNewItem({ ...newItem, desc: e.target.value })}
          className="w-full mt-1 p-3 rounded-lg bg-white/20 text-white border border-white/30 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      <div>
        <div className="flex flex-row gap-4">
          <label className="text-sm text-white">Upload Image</label>
          <span className="text-white font-semibold mt-1">
            <FaRegImage />
          </span>
        </div>
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="w-full mt-2 text-white"
        />

        {preview && (
          <img
            src={preview}
            alt="Preview"
            className="mt-3 h-40 rounded-lg object-cover border border-white/30"
          />
        )}
      </div>

      <div className="flex gap-4">
        <div className="w-full">
          <label className="text-sm text-gray-200">Date</label>
          <input
            type="date"
            value={newItem.date}
            onChange={(e) => setNewItem({ ...newItem, date: e.target.value })}
            className="w-full mt-1 p-3 rounded-lg bg-white/20 text-white border border-white/30"
          />
        </div>

        <div className="w-full">
          <label className="text-sm text-white">Time</label>
          <input
            type="time"
            value={newItem.time}
            onChange={(e) => setNewItem({ ...newItem, time: e.target.value })}
            className="w-full mt-1 p-3 rounded-lg bg-white/20 text-white border border-white/30"
          />
        </div>
      </div>

      <button
        onClick={() => {
          saveNews();
          closeModal();
        }}
        className="mt-2 py-3 rounded-xl font-medium 
        bg-btn  transition-all duration-300 cursor-pointer
        text-white shadow-lg hover:scale-[1.02]"
      >
        {editingIndex !== null ? "Update News" : "Publish News"}
      </button>
    </div>
  );
};

export default AddNewsForm;
