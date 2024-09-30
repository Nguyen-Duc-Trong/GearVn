import RoutesProps from '@/interface/route';
import DefaultLayout from '@/layout/DefaultLayout';
import Home from '@/views/page/client/Home';

const publicRoute: RoutesProps[] = [
  {
    path: '/',
    layout: DefaultLayout,
    page: Home,
  },
  {
    path: '/product_detail',
    layout: DefaultLayout,
    page: () => 'day la trang chi tiet san pham',
  },
  {
    path: '/product',
    layout: DefaultLayout,
    page: () => 'day la trang san pham',
  },
];
export default publicRoute;
