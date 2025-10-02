"use client";

export default function StickyCart() {
  return (
    <a
      href="#"
      className="hidden lg:block fixed right-0 top-1/2 -translate-y-1/2 z-50 bg-white shadow-lg min-w-[70px] overflow-hidden -mt-4"
      id="fly_image_destination_id"
    >
      <div className="p-2 flex flex-col items-center gap-2">
        <div className="flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16" className="w-6 h-6 text-indigo-800">
            <path fillRule="evenodd" d="M10.854 8.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L7.5 10.793l2.646-2.647a.5.5 0 0 1 .708 0"></path>
            <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z"></path>
          </svg>
        </div>
        
        <div className="text-center">
          <p className="text-sm text-neutral-700">
            ৳<span className="cartSubTotal"> 0</span>
          </p>
        </div>
      </div>
      
      <div className="bg-indigo-800 text-white py-1 text-sm w-full text-center">
        <p><span className="cartQty">0</span> Items</p>
      </div>
    </a>
  );
}
