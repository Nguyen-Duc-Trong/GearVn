import React, { useState, useMemo } from 'react';
import { ChevronRight } from 'lucide-react';
import {
  MdLaptop,
  MdOutlineCable,
  MdMonitor,
  MdKeyboard,
  MdMouse,
  MdHeadphones,
  MdChair,
  MdMemory,
} from 'react-icons/md';
import { GiLaptop, GiPc, GiMicrophone } from 'react-icons/gi';
import { FaHdd } from 'react-icons/fa';

type CategoryItem = {
  icon: JSX.Element;
  label: string;
  data: (string | { brand: string; series: string[] })[];
};

const categoryData: CategoryItem[] = [
  { icon: <MdLaptop />, label: 'Laptop', data: [] },
  { icon: <GiLaptop />, label: 'Laptop Gaming', data: [] },
  { icon: <GiPc />, label: 'PC GVN', data: [] },
  { icon: <MdOutlineCable />, label: 'Main, CPU, VGA', data: [] },
  { icon: <MdOutlineCable />, label: 'Case, Nguồn, Tản', data: [] },
  { icon: <FaHdd />, label: 'Ổ cứng, RAM, Thẻ nhớ', data: [] },
  { icon: <GiMicrophone />, label: 'Loa, Micro, Webcam', data: [] },
  { icon: <MdMonitor />, label: 'Màn hình', data: [] },
  { icon: <MdKeyboard />, label: 'Bàn phím', data: [] },
  { icon: <MdMouse />, label: 'Chuột + Lót chuột', data: [] },
  { icon: <MdHeadphones />, label: 'Tai Nghe', data: [] },
  { icon: <MdChair />, label: 'Ghế - Bàn', data: [] },
  { icon: <MdMemory />, label: 'Phần mềm, mạng', data: [] },
  { icon: <GiLaptop />, label: 'Handheld, Console', data: [] },
  { icon: <MdOutlineCable />, label: 'Phụ kiện (Hub, sạc, cáp...)', data: [] },
];

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

const cpuTypes = [
  'Intel Core i3',
  'Intel Core i5',
  'Intel Core i7',
  'AMD Ryzen',
];
const priceRanges = ['Dưới 15 triệu', 'Từ 15 đến 20 triệu', 'Trên 20 triệu'];

export const Category: React.FC = () => {
  const [hoveredCategory, setHoveredCategory] = useState<CategoryItem | null>(
    null
  );

  const categories = useMemo(() => {
    return categoryData.map((category) => {
      let data;
      if (category.label.includes('Laptop')) {
        data = laptopBrands;
      } else if (
        category.label.includes('CPU') ||
        category.label.includes('PC')
      ) {
        data = cpuTypes;
      } else {
        data = priceRanges;
      }
      return { ...category, data };
    });
  }, []);

  return (
    <aside className="w-full lg:w-1/4 bg-white rounded-lg overflow-hidden md:hidden xl:block max-sm:hidden">
      <nav className="p-2">
        <ul
          className="space-y-2"
          // style={{ marginRight: '-8px' }}

          onMouseLeave={() => setHoveredCategory(null)}
        >
          {categories.map((category, index) => (
            <li
              key={index}
              className="hover:bg-gray-100 rounded-lg transition duration-200"
              onMouseEnter={() => setHoveredCategory(category)}
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
                <ChevronRight className="h-4 w-4 mr-4" />
              </a>

              {hoveredCategory === category && (
                <div className="bg-white p-4 rounded-lg z-[50] absolute right-0 top-0 w-custom-calc h-full">
                  <h3 className="text-md font-semibold mb-2">
                    {category.label}
                  </h3>
                  <ul className="space-y-1 grid grid-cols-5 gap-2">
                    {category.data.map((item: any, subIndex: number) => (
                      <li key={subIndex} className="text-sm text-gray-700">
                        {item.brand || item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};
