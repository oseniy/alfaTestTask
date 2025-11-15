import type { RootState } from "@/app/store";

// model/productsSelectors.ts
export const selectLastId = (state: RootState) => {
  const list = state.products.list;
  return list.length ? list[list.length - 1].id : "0";
};

export const selectProductById = (id: string | undefined) => (state: RootState) =>
  state.products.list.find((p) => p.id === id);
