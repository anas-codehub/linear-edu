import { create } from "zustand";

interface QuestionStore {
  selectedQuestions: number[];
  setSelectedQuestions: (ids: number[]) => void;
  addQuestion: (id: number) => void;
  removeQuestion: (id: number) => void;
}

export const useQuestionStore = create<QuestionStore>((set) => ({
  selectedQuestions: [],
  setSelectedQuestions: (ids) => set({ selectedQuestions: ids }),
  addQuestion: (id) =>
    set((state) => ({
      selectedQuestions: [...state.selectedQuestions, id],
    })),
  removeQuestion: (id) =>
    set((state) => ({
      selectedQuestions: state.selectedQuestions.filter((q) => q !== id),
    })),
}));
