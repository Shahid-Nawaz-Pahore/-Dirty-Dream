import useDeleteModalStore from "../store/useDeleteModalStore";

const DeleteModal = ({ children }) => {
  const { isOpen, closeDeleteModal } = useDeleteModalStore();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-md">
      <div className="w-full h-full p-6 overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={closeDeleteModal}
          className="text-white text-2xl absolute top-4 right-6"
        >
          ✖
        </button>

        {children}
      </div>
    </div>
  );
};

export default DeleteModal;
