"use client";

import Link from "next/link";

export default function MobileBottomNav() {
  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-neutral-200 shadow-lg">
      <ul className="flex items-center justify-around py-1">
        {/* Home */}
        <li className="flex-1">
          <Link 
            href="https://deenfashionbd.com" 
            className="flex flex-col items-center py-1 text-neutral-700 hover:text-indigo-600 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-house w-6 h-6 mb-1" viewBox="0 0 16 16">
              <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5z"></path>
            </svg>
            <p className="text-xs font-medium">Home</p>
          </Link>
        </li>

        {/* Call */}
        <li className="flex-1">
          <Link 
            href="tel:01942888583" 
            className="flex flex-col items-center py-1 text-neutral-700 hover:text-indigo-600 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 mb-1">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
            </svg>
            <p className="text-xs font-medium">Call</p>
          </Link>
        </li>

        {/* Cart */}
        <li className="flex-1">
          <Link 
            href="#" 
            className="flex flex-col items-center py-1 text-neutral-700 hover:text-indigo-600 transition-colors relative"
          >
            <div className="relative">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-bag-check w-6 h-6 mb-1" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M10.854 8.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L7.5 10.793l2.646-2.647a.5.5 0 0 1 .708 0"></path>
                <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z"></path>
              </svg>
              <span className="absolute -top-2 -right-2 bg-indigo-800 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-medium">0</span>
            </div>
            <p className="text-xs font-medium">cart</p>
          </Link>
        </li>

        {/* User */}
        <li className="flex-1">
          <Link 
            href="https://deenfashionbd.com/login" 
            className="flex flex-col items-center py-1 text-neutral-700 hover:text-indigo-600 transition-colors"
          >
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mb-1">
              <path d="M12.1992 12C14.9606 12 17.1992 9.76142 17.1992 7C17.1992 4.23858 14.9606 2 12.1992 2C9.43779 2 7.19922 4.23858 7.19922 7C7.19922 9.76142 9.43779 12 12.1992 12Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
              <path d="M3 22C3.57038 20.0332 4.74796 18.2971 6.3644 17.0399C7.98083 15.7827 9.95335 15.0687 12 15C16.12 15 19.63 17.91 21 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
            </svg>
            <p className="text-xs font-medium">user</p>
          </Link>
        </li>
      </ul>
    </div>
  );
}
