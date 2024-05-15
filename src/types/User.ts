import type { ToastType } from './Toast';

export type UserType = {
    displayFormat: string;
    isMenuOpen: boolean;
    isDetailsDrawerOpen: boolean;
    toast: ToastType[];
};