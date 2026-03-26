const AddNewsForm = ({
  newItem,
  setNewItem,
  saveNews,
  editingIndex,
  closeModal,
}) => {
  return (
    <div className="max-w-3xl mx-auto flex flex-col gap-3 bg-white/20 backdrop-blur-xl p-6 rounded-xl border border-gray-200 mt-10">
      <input
        type="text"
        placeholder="Title"
        value={newItem.head}
        onChange={(e) => setNewItem({ ...newItem, head: e.target.value })}
        className="p-2 rounded border"
      />

      <input
        type="text"
        placeholder="Description"
        value={newItem.desc}
        onChange={(e) => setNewItem({ ...newItem, desc: e.target.value })}
        className="p-2 rounded border"
      />

      <input
        type="text"
        placeholder="Image URL"
        value={newItem.img}
        onChange={(e) => setNewItem({ ...newItem, img: e.target.value })}
        className="p-2 rounded border"
      />

      <input
        type="text"
        placeholder="Date"
        value={newItem.date}
        onChange={(e) => setNewItem({ ...newItem, date: e.target.value })}
        className="p-2 rounded border"
      />

      <input
        type="text"
        placeholder="Time"
        value={newItem.time}
        onChange={(e) => setNewItem({ ...newItem, time: e.target.value })}
        className="p-2 rounded border"
      />

      <button
        onClick={() => {
          saveNews();
          closeModal();
        }}
        className="mt-2 px-4 py-2 bg-[rgba(255,255,255,0.2)] backdrop-blur-[20px] text-white rounded-xl"
      >
        {editingIndex !== null ? "Update News" : "Add News"}
      </button>
    </div>
  );
};

export default AddNewsForm;
