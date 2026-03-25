import { create } from "zustand";

const useAddModalStore = create((set) => ({
  isOpen: false,
  openModal: () => set({ isOpen: true }),
  closeModal: () => set({ isOpen: false }),
}));

export default useAddModalStore;