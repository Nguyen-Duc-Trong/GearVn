import { ChevronRight } from 'lucide-react';
import * as React from 'react';
import { GiLaptop, GiPc, GiMicrophone } from 'react-icons/gi';

import {
  MdLaptop,
  MdMemory,
  MdMonitor,
  MdKeyboard,
  MdMouse,
  MdHeadphones,
  MdChair,
  MdOutlineCable,
} from 'react-icons/md';
import { FaHdd } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store/reducer';
import { setHoveredCategory } from '@/store/categorySlice';

export const Category: React.FC = () => {
  const dispath = useDispatch();
  const brands = [
    'ASUS',
    'ACER',
    'MSI',
    'LENOVO',
    'DELL',
    'HP - Pavilion',
    'LG - Gram',
  ];
  const priceRanges = ['Dưới 15 triệu', 'Từ 15 đến 20 triệu', 'Trên 20 triệu'];
  const cpuTypes = [
    'Intel Core i3',
    'Intel Core i5',
    'Intel Core i7',
    'AMD Ryzen',
  ];
  const usageScenarios = [
    'Đồ họa - Studio',
    'Học sinh - Sinh viên',
    'Mỏng nhẹ cao cấp',
  ];
  const accessories = ['Ram laptop', 'SSD laptop', 'Ổ cứng di động'];

  const laptopBrands = [
    {
      brand: 'Laptop ASUS',
      series: [
        'ASUS OLED Series',
        'Vivobook Series',
        'Zenbook Series',
        'ProArt StudioBook Series',
      ],
    },
    { brand: 'Laptop ACER', series: ['Aspire Series', 'Swift Series'] },
    {
      brand: 'Laptop MSI',
      series: ['Modern Series', 'Prestige Series', 'Summit Series'],
    },
    {
      brand: 'Laptop LENOVO',
      series: [
        'ThinkBook Series',
        'IdeaPad Series',
        'IdeaPad Pro Series',
        'ThinkPad Series',
        'Yoga Series',
      ],
    },
    {
      brand: 'Laptop DELL',
      series: [
        'Inspiron Series',
        'Vostro Series',
        'Latitude Series',
        'XPS Series',
      ],
    },
  ];
  const categories = [
    { icon: <MdLaptop />, label: 'Laptop', data: laptopBrands },
    { icon: <GiLaptop />, label: 'Laptop Gaming', data: laptopBrands },
    { icon: <GiPc />, label: 'PC GVN', data: cpuTypes },
    { icon: <MdOutlineCable />, label: 'Main, CPU, VGA', data: cpuTypes },
    { icon: <MdOutlineCable />, label: 'Case, Nguồn, Tản', data: priceRanges },
    { icon: <FaHdd />, label: 'Ổ cứng, RAM, Thẻ nhớ', data: priceRanges },
    { icon: <GiMicrophone />, label: 'Loa, Micro, Webcam', data: cpuTypes },
    { icon: <MdMonitor />, label: 'Màn hình', data: laptopBrands },
    { icon: <MdKeyboard />, label: 'Bàn phím', data: priceRanges },
    { icon: <MdMouse />, label: 'Chuột + Lót chuột', data: priceRanges },
    { icon: <MdHeadphones />, label: 'Tai Nghe', data: laptopBrands },
    { icon: <MdChair />, label: 'Ghế - Bàn', data: priceRanges },
    { icon: <MdMemory />, label: 'Phần mềm, mạng', data: cpuTypes },
    { icon: <GiLaptop />, label: 'Handheld, Console', data: laptopBrands },
    {
      icon: <MdOutlineCable />,
      label: 'Phụ kiện (Hub, sạc, cáp...)',
      data: priceRanges,
    },
  ];
  // const hoveredCategory = useSelector(
  //   (state: RootState) => state.category.hoveredCategory
  // );
  const [isOpenCategory, setIsOpenCategory] = React.useState(false);
  const [currentCategory, setCurrentCategory] = React.useState();
  console.log(currentCategory);

  return (
    <aside className="w-full lg:w-1/4 bg-white rounded-lg shadow-lg overflow-hidden md:hidden xl:block max-sm:hidden ">
      <nav className="p-2">
        <ul className="space-y-2">
          {categories.map((category, index) => (
            <li
              key={index}
              className="hover:bg-gray-100 rounded-lg transition duration-200 "
              onMouseEnter={() => {
                setCurrentCategory(categories[index]);
                setIsOpenCategory(true);
              }}

              // onMouseLeave={() => dispath(setHoveredCategory(null))}
            >
              <a
                href="#"
                className="flex justify-between items-center text-gray-700 hover:text-gray-900"
              >
                <span className="flex items-center gap-2">
                  <span className="text-xl">{category.icon}</span>
                  <span className="text-sm font-medium text-[13px]">
                    {category.label}
                  </span>
                </span>
                <ChevronRight className="h-4 w-4" />
              </a>
              {/* {hoveredCategory === category.label && ( */}
              <div>
                <div className=" bg-white shadow-lg p-4 rounded-lg z-[50] absolute right-0 top-0 w-custom-calc h-full ">
                  <h3 className="text-md font-semibold mb-2">
                    {category.label}
                  </h3>
                  <ul className="space-y-1">
                    {category.data.map((item: any, subIndex: number) => (
                      <React.Fragment key={subIndex}>
                        <div className="flex justify-between gap-2">
                          <li className="text-sm text-gray-700">
                            {item.brand || item}
                          </li>
                          <li className="text-sm text-gray-700">
                            {item.brand || item}
                          </li>
                          <li className="text-sm text-gray-700">
                            {item.brand || item}
                          </li>
                          <li className="text-sm text-gray-700">
                            {item.brand || item}
                          </li>
                          <li className="text-sm text-gray-700">
                            {item.brand || item}
                          </li>
                        </div>
                      </React.Fragment>
                    ))}
                  </ul>
                </div>
              </div>
              {/* )} */}
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};
