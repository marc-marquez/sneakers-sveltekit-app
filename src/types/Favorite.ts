import type { VariantType } from './Variant';

export type FavoriteType = {
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