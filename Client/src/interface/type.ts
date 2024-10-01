import { IconType } from 'react-icons';

export interface MenuLinkProps {
  icon: IconType;
  text: string;
  href: string;
}

export interface CategoryState {
  hoveredCategory: string | null;
}
