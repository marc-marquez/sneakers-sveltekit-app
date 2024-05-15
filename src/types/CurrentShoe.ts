import type { ShoeType } from "./Shoe";

export type CurrentShoeType = {
    currentShoe: ShoeType;
    currentShoeIndex: number;
    currentShoeVariant: number | null;
};