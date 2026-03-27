import { useNavigate } from "react-router";
import { FiTrash2 } from "react-icons/fi";
import { IoArrowBack } from "react-icons/io5";
import useDeleteModalStore from "../store/useDeleteModalStore";

const DeleteNews = ({ news, index, onDelete }) => {
  const navigate = useNavigate();
  const { closeDeleteModal } = useDeleteModalStore();

  if (!news)
    return (
      <div className="min-h-screen flex items-center justify-center text-white">
        <p>No article found.</p>
      </div>
    );

  const handleDelete = () => {
    onDelete(index);
    closeDeleteModal();
  };

  return (
    <div className="flex items-center justify-center px-4 pt-16">
      <div
        className="w-full max-w-md rounded-2xl border border-gray-200
        bg-[rgba(255,255,255,0.2)] backdrop-blur-[20px] p-8 flex flex-col gap-6"
      >
        <div>
        <div className="flex justify-center">
          <div className="p-4 rounded-full bg-[rgba(255,0,0,0.15)] border border-red-400/40">
            <FiTrash2 className="w-8 h-8 text-red-400" />
          </div>
        </div>

        <div className="text-center flex flex-col gap-2">
          <h1 className="text-2xl font-bold text-white">Delete Article?</h1>
          <p className="text-white font-semibold text-sm">
            This action cannot be undone.
          </p>
        </div>
        </div>

        <div className="rounded-xl border border-gray-200 bg-[rgba(255,255,255,0.1)] p-4 flex flex-col gap-2">
          {news.img && (
            <img
              src={news.img}
              className="w-full h-32 object-cover rounded-lg"
            />
          )}
          <p className="text-white font-bold text-sm">{news.head}</p>
          <p className="text-white text-xs">
            {news.date} · {news.time}
          </p>
        </div>

        <div className="flex gap-4">
          <button
            onClick={closeDeleteModal}
            className="flex-1 flex items-center justify-center gap-2 py-3 rounded-2xl
               bg-btn text-white font-semibold cursor-pointer
              transition-all duration-200 hover:scale-105 active:scale-95"
          >
            <IoArrowBack className="w-4 h-4" />
            Cancel
          </button>

          <button
            onClick={handleDelete}
            className="flex-1 flex items-center justify-center gap-2 py-3 rounded-2xl
              border border-red-400/40 bg-[rgba(255,0,0,0.2)] text-red-400 font-semibold
              transition-all cursor-pointer duration-200 hover:scale-105 hover:text-white active:scale-95 hover:bg-[rgba(255,0,0,0.35)]"
          >
            <FiTrash2 className="w-4 h-4" />
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteNews;
