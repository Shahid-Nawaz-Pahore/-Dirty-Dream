import { create } from "zustand";

const useDeleteModalStore = create((set) => ({
  isOpen: false,
  openDeleteModal: () => set({ isOpen: true }),
  closeDeleteModal: () => set({ isOpen: false }),
}));

export default useDeleteModalStore;
