import { Category } from './Category';

export const Hero = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 ">
      <div className="flex flex-col lg:flex-row gap-6 relative">
        <Category />
        <main className="flex-1 space-y-2 cursor-pointer">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <img
                src="/layout_web_-02.webp"
                alt="Main promotional banner"
                width={650}
                height={325}
                className="rounded-lg object-cover w-full h-full transition-transform duration-300 hover:scale-105"
              />
            </div>
            <div className="space-y-2">
              <img
                src="/layout_web_-02.webp"
                alt="Side promotional banner 1"
                width={317}
                height={158}
                className="rounded-lg object-cover w-full transition-transform duration-300 hover:scale-105"
              />
              <img
                src="/layout_web_-02.webp"
                alt="Side promotional banner 2"
                width={317}
                height={158}
                className="rounded-lg object-cover w-full transition-transform duration-300 hover:scale-105"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-1">
            {[1, 2, 3].map((_, index) => (
              <img
                key={index}
                src={`/layout_web_-02.webp`}
                alt={`Bottom promotional banner ${index + 1}`}
                width={317}
                height={158}
                className="rounded-lg object-cover w-full transition-transform duration-300 hover:scale-105"
              />
            ))}
          </div>
        </main>
      </div>
    </section>
    // <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
    //   <div className="flex flex-col lg:flex-row gap-6">
    //     <Category />
    //     {/* <aside className="w-full lg:w-64 bg-white rounded-lg shadow">
    //       <nav className="p-4">
    //         <h2 className="text-lg font-semibold mb-4">Categories</h2>
    //         <ul>
    //           {categories.map((category, index) => (
    //             <li
    //               key={index}
    //               className="py-2 hover:bg-gray-100 cursor-pointer"
    //             >
    //               <a
    //                 href="#"
    //                 className="flex justify-between items-center text-gray-700 hover:text-gray-900"
    //               >
    //                 <span>{category}</span>
    //                 <ChevronRight className="h-4 w-4" />
    //               </a>
    //             </li>
    //           ))}
    //         </ul>
    //       </nav>
    //     </aside> */}

    //     <main className="flex-1 space-y-1">
    //       <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
    //         <div className="lg:col-span-2">
    //           <img
    //             src="/public/layout_web_-02.webp"
    //             alt="Main promotional banner"
    //             width={650}
    //             height={325}
    //             className="rounded-lg object-cover w-full h-full"
    //           />
    //         </div>
    //         <div className="space-y-4">
    //           <img
    //             src="/public/layout_web_-02.webp"
    //             alt="Side promotional banner 1"
    //             width={317}
    //             height={158}
    //             className="rounded-lg object-cover w-full"
    //           />
    //           <img
    //             src="/public/layout_web_-02.webp"
    //             alt="Side promotional banner 2"
    //             width={317}
    //             height={158}
    //             className="rounded-lg object-cover w-full"
    //           />
    //         </div>
    //       </div>

    //       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
    //         {[1, 2, 3].map((_, index) => (
    //           <img
    //             key={index}
    //             src={`/public/layout_web_-02.webp`}
    //             alt={`Bottom promotional banner ${index + 1}`}
    //             width={317}
    //             height={158}
    //             className="rounded-lg object-cover w-full"
    //           />
    //         ))}
    //       </div>
    //     </main>
    //   </div>
    // </section>
  );
};
