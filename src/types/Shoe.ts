import type { VariantType } from './Variant';

export type ShoeType = {
    age_group: string;
    brand: string;
    title: string;
    rating: number;
    gender: string;
    id: string;
    base_price: number;
    description: string;
    image: string;
    variants: VariantType[];
};