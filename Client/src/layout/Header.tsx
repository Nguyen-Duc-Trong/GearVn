import { useState } from 'react';
import {
  FaBars,
  FaSearch,
  FaPhone,
  FaMapMarkerAlt,
  FaBox,
  FaShoppingCart,
  FaUser,
} from 'react-icons/fa';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MenuLinkProps } from '@/interface/type';

const MenuLink: React.FC<MenuLinkProps> = ({ icon: Icon, text, href }) => (
  <a href={href} className="flex items-center text-white hover:text-gray-300">
    <Icon className="h-4 w-4 mr-1" />
    <span>{text}</span>
  </a>
);

const MobileMenuLink: React.FC<MenuLinkProps> = ({
  icon: Icon,
  text,
  href,
}) => (
  <a
    href={href}
    className="flex items-center py-2 px-4 text-sm text-white hover:bg-slate-600"
  >
    <Icon className="h-4 w-4 mr-1" />
    <span>{text}</span>
  </a>
);

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const menuItems: MenuLinkProps[] = [
    { icon: FaPhone, text: '1900.5301', href: '/lien-he' },
    { icon: FaMapMarkerAlt, text: 'Showroom', href: '/show-room' },
    { icon: FaBox, text: 'Đơn hàng', href: '/don-hang' },
    { icon: FaShoppingCart, text: 'Giỏ hàng', href: '/gio-hang' },
    { icon: FaUser, text: 'Đăng nhập', href: '/dang-nhap' },
  ];

  return (
    <nav className="bg-gradient-to-r from-red-300 to-slate-600 shadow sticky top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="text-2xl font-bold text-white">GEARVN</div>
            <div className="hidden md:block ml-4">
              <Button variant="ghost" className="text-white hover:bg-slate-500">
                <GiHamburgerMenu className="mr-2" />
                Danh mục
              </Button>
            </div>
          </div>

          <div className="hidden md:flex flex-1 max-w-xl mx-4">
            <Input
              type="search"
              placeholder="Bạn cần tìm gì?"
              className="text-white w-full"
            />
            <Button type="submit" className="ml-2 bg-red-600 hover:bg-red-700">
              <FaSearch className="h-4 w-4" />
            </Button>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            {menuItems.map((item, index) => (
              <MenuLink key={index} {...item} />
            ))}
          </div>

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden text-white"
              >
                <FaBars className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent
              side="left"
              className="w-[300px] sm:w-[400px] bg-slate-700"
            >
              <nav className="flex flex-col gap-4">
                {menuItems.map((item, index) => (
                  <MobileMenuLink key={index} {...item} />
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Header;
