import { create } from "zustand";

export type PropertyType = "apartment" | "house" | "villa" | "studio" | null;

interface filterState {
  search: string;
  type: PropertyType;
  bedrooms: number | null;
  minPrice: number | null;
  maxPrice: number | null;

  setSearch: (value: string) => void;
  setType: (value: PropertyType) => void;
  setBedrooms: (vlaue: number | null) => void;
  setMinPrice: (vlaue: number | null) => void;
  setMaxPrice: (vlaue: number | null) => void;
  resetFilters: () => void;
}

export const useFilterStore = create<filterState>((set) => ({
  search: "",
  type: null,
  bedrooms: null,
  minPrice: null,
  maxPrice: null,

  setSearch: (value) => set({ search: value }),
  setType: (value) => set({ type: value }),
  setBedrooms: (value) => set({ bedrooms: value }),
  setMinPrice: (value) => set({ minPrice: value }),
  setMaxPrice: (value) => set({ maxPrice: value }),

  resetFilters: () =>
    set({
      search: "",
      type: null,
      bedrooms: null,
      minPrice: null,
      maxPrice: null,
    }),
}));
