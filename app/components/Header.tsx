"use client";

import Link from "next/link";
import { useState } from "react";

// Mobile Menu Item Component
function MobileMenuItem({ 
  title, 
  href, 
  hasSubmenu = false, 
  submenuItems = [] 
}: {
  title: string;
  href: string;
  hasSubmenu?: boolean;
  submenuItems?: { title: string; href: string }[];
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-neutral-200">
      <div className="flex items-center justify-between p-4">
        <Link 
          href={href} 
          className="flex-1 text-neutral-900 font-medium hover:text-indigo-600 transition-colors"
          onClick={() => !hasSubmenu && setIsOpen(false)}
        >
          {title}
        </Link>
        {hasSubmenu && (
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-1 hover:bg-neutral-100 rounded transition-colors"
            aria-label={`Toggle ${title} submenu`}
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
            >
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </button>
        )}
      </div>
      
      {/* Submenu */}
      {hasSubmenu && isOpen && (
        <div className="bg-neutral-50 border-t border-neutral-200">
          {submenuItems.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="block px-6 py-3 text-sm text-neutral-700 hover:bg-neutral-100 hover:text-indigo-600 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {item.title}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <header className="w-full bg-white text-neutral-900 shadow-sm sticky top-0 z-40 lg:static">
      {/* Top info bar (promo + utilities) */}
      <div className="hidden md:block text-sm bg-neutral-300">
        <div className="px-2 py-0">
          <div className="grid grid-cols-[auto_1fr_auto] items-stretch gap-3">
            {/* Left purple promo */}
            <div className="bg-indigo-800 text-white flex items-center pl-3 pr-2">
                <a href="https://deenfashionbd.com/shop" className="flex items-center gap-2">
                 <img src="https://i.postimg.cc/vmYyYxJM/flash.png" alt="" className="w-7 h-7 object-contain" />
                <span className="py-2 whitespace-nowrap font-semibold">EXCLUSIVE T-SHIRTS ON SALE | Limited time only</span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 16 16 12 12 8"></polyline>
                  <line x1="8" y1="12" x2="16" y2="12"></line>
                </svg>
              </a>
            </div>

            {/* Middle quick links */}
            <div className="flex items-stretch gap-1 justify-self-end mr-4">
              <a href="https://deenfashionbd.com/order-bulk/index" className="bg-indigo-800 text-white px-3 flex items-center gap-2 font-light" target="_blank" rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16" className="w-4 h-4"><path d="M8.186 1.113a.5.5 0 0 0-.372 0L1.846 3.5 8 5.961 14.154 3.5zM15 4.239l-6.5 2.6v7.922l6.5-2.6V4.24zM7.5 14.762V6.838L1 4.239v7.923zM7.443.184a1.5 1.5 0 0 1 1.114 0l7.129 2.852A.5.5 0 0 1 16 3.5v8.662a1 1 0 0 1-.629.928l-7.185 2.874a.5.5 0 0 1-.372 0L.63 13.09a1 1 0 0 1-.63-.928V3.5a.5.5 0 0 1 .314-.464z"/></svg>
                <span>Order Bulk / Corporate Sales</span>
              </a>
              <a href="https://deenfashionbd.com/store-location/index" className="bg-indigo-800 text-white px-3 flex items-center gap-2 font-light" target="_blank" rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                <span>Store Locations</span>
              </a>
            </div>

            {/* Right profile utilities */}
            <nav className="flex items-center gap-10 text-neutral-700 font-semibold pr-6 justify-self-end">
              <a href="https://deenfashionbd.com/order/order/tracking" className="flex items-center gap-2 hover:text-neutral-700">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><rect x="1" y="3" width="15" height="13"></rect><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon><circle cx="5.5" cy="18.5" r="2.5"></circle><circle cx="18.5" cy="18.5" r="2.5"></circle></svg>
                <span>Order Tracking</span>
              </a>
              <a href="https://deenfashionbd.com/login" className="flex items-center gap-2 hover:text-neutral-700">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path><polyline points="10 17 15 12 10 7"></polyline><line x1="15" y1="12" x2="3" y2="12"></line></svg>
                <span>Login</span>
              </a>
            </nav>
          </div>
        </div>
      </div>

      {/* Header middle (matches provided structure) */}
      <div className="mx-auto max-w-8xl px-10 py-4">
        {/* Mobile Layout */}
        <div className="lg:hidden flex items-center justify-between w-full">
          {/* Left: Hamburger Menu */}
          <button
            className="p-2 rounded border border-neutral-200"
            aria-label="Toggle menu"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
          </button>

          {/* Center: Logo */}
          <a href="https://deenfashionbd.com" className="flex-1 flex justify-center">
            <img src="https://deenfashionbd.com/public/storage/images/general_setting/Qla2KGQyTH6HzukE0AW0nApHFrSWRMiCc5O2tRrT.png" alt="logo" className="h-9 w-auto" />
          </a>

          {/* Right: Search Icon */}
          <button
            onClick={() => setSearchOpen(!searchOpen)}
            className="p-2 inline-flex items-center text-indigo-900"
            aria-label="Toggle search"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.35-4.35"></path></svg>
          </button>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:grid grid-cols-12 items-center gap-4">
          {/* Left: menu + logo + Shop link */}
          <div className="col-span-3 flex items-center gap-4 shrink-0">
            <a href="https://deenfashionbd.com" className="shrink-0">
              <img src="https://deenfashionbd.com/public/storage/images/general_setting/Qla2KGQyTH6HzukE0AW0nApHFrSWRMiCc5O2tRrT.png" alt="logo" className="h-9 w-auto ml-12" />
            </a>
            <div className="relative group ml-14">
              <a href="https://deenfashionbd.com/shop" className="inline-flex items-center text-[19px] gap-1 text-neutral-800 font-semibold">
                <span>Shop</span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><polyline points="6 9 12 15 18 9"></polyline></svg>
              </a>
              {/* Dropdown mega menu: categories side-by-side with items below */}
              <div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-150 absolute -left-60 mt-3 w-[1128.25px] h-[231px] bg-white shadow-lg z-40">
                <div className="grid grid-cols-7 gap-0 text-[13px] h-full">
                  <div className="w-[160px] h-full bg-white p-4">
                    <a href="https://deenfashionbd.com/category/mens-fashion" className="block font-semibold text-neutral-900 mb-2 text-sm">MENS FASHION</a>
                    <ul className="space-y-1 text-neutral-700">
                      <li><a href="https://deenfashionbd.com/category/mens-fashion/half-sleeve-t-shirt" className="hover:underline">Half Sleeve T-Shirt</a></li>
                      <li><a href="https://deenfashionbd.com/category/mens-fashion/polo-t-shirt" className="hover:underline">Polo T-Shirt</a></li>
                      <li><a href="https://deenfashionbd.com/category/mens-fashion/calligraphy-t-shirt" className="hover:underline">Calligraphy T-Shirt</a></li>
                      <li><a href="https://deenfashionbd.com/category/mens-fashion/sports-t-shirt" className="hover:underline">Sports T- Shirt</a></li>
                      <li><a href="https://deenfashionbd.com/category/mens-fashion/sports-polo-t-shirt" className="hover:underline">Sports Polo T-Shirt</a></li>
                      <li><a href="https://deenfashionbd.com/category/mens-fashion/sports-trouser" className="hover:underline">Sports Trouser</a></li>
                      <li><a href="https://deenfashionbd.com/category/mens-fashion/joggers" className="hover:underline">Joggers</a></li>
                      <li><a href="https://deenfashionbd.com/category/mens-fashion/winter-collection" className="hover:underline">Winter Collection</a></li>
                    </ul>
                  </div>
                  <div className="w-[170px] h-full bg-gray-100 p-4">
                    <a href="https://deenfashionbd.com/category/womens-fashion" className="block font-semibold text-neutral-900 mb-2 text-sm">WOMEN'S FASHION</a>
                  </div>
                  <div className="w-[160px] h-full bg-white p-4">
                    <a href="https://deenfashionbd.com/category/kids-boys" className="block font-semibold text-neutral-900 mb-2 text-sm">KIDS (BOYS)</a>
                    <ul className="space-y-1 text-neutral-700">
                      <li><a href="https://deenfashionbd.com/category/kids-boys/kids-t-shirt" className="hover:underline">Kids T-shirt</a></li>
                    </ul>
                  </div>
                  <div className="w-[160px] h-full bg-gray-100 p-4">
                    <a href="https://deenfashionbd.com/category/kids-girls" className="block font-semibold text-neutral-900 mb-2 text-sm">KIDS (GIRLS)</a>
                  </div>
                  <div className="w-[160px] h-full bg-white p-4">
                    <a href="https://deenfashionbd.com/category/sports" className="block font-semibold text-neutral-900 mb-2 text-sm">SPORTS</a>
                    <ul className="space-y-1 text-neutral-700">
                      <li><a href="https://deenfashionbd.com/category/sports/bangladesh-jersey" className="hover:underline">Bangladesh Jersey</a></li>
                      <li><a href="https://deenfashionbd.com/category/sports/football-jersey" className="hover:underline">Football Jersey</a></li>
                    </ul>
                  </div>
                  <div className="w-[160px] h-full bg-gray-100 p-4">
                    <a href="https://deenfashionbd.com/category/accessories" className="block font-semibold text-neutral-900 mb-2 text-sm">ACCESSORIES</a>
                    <ul className="space-y-1 text-neutral-700">
                      <li><a href="https://deenfashionbd.com/category/accessories/wallet" className="hover:underline">Wallet</a></li>
                      <li><a href="https://deenfashionbd.com/category/accessories/belt" className="hover:underline">Belt</a></li>
                      <li><a href="https://deenfashionbd.com/category/accessories/cap" className="hover:underline">Cap</a></li>
                    </ul>
                  </div>
                  <div className="w-[160px] h-full bg-white p-4">
                    <a href="https://deenfashionbd.com/category/footwear" className="block font-semibold text-neutral-900 mb-2 text-sm">FOOTWEAR</a>
                    <ul className="space-y-1 text-neutral-700">
                      <li><a href="https://deenfashionbd.com/category/footwear/mens-half-shoes" className="hover:underline">Men's Half Shoe's</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Center: Search bar */}
          <div className="col-span-7">
            <div id="search_id" className="search_wrapper search_class">
              <div className="search_input_box">
                <input type="text" placeholder="Search Your Products..." className="search__product w-full border border-indigo-800/60 rounded px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-800/40" />
              </div>
              {/* header search item start */}
              <div className="header_search_item header_search_desktop_item" id="suggestProduct">
              </div>
              {/* header search item end */}
            </div>
          </div>

          {/* Right: cart and user */}
          <div className="col-span-2">
            <ul className="flex items-center justify-end gap-6">
              <li>
                <a href="#" className="relative inline-flex items-center text-indigo-900">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
                  <span className="absolute -top-2 -right-2 text-[10px] bg-indigo-800 text-white rounded-full px-1.5 py-0.5">0</span>
                </a>
              </li>
              <li>
                <a href="https://deenfashionbd.com/login" className="inline-flex items-center text-indigo-900">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Mobile Search Bar */}
      {searchOpen && (
        <div className="lg:hidden px-4 pb-4">
          <div className="search_input_box">
            <input 
              type="text" 
              placeholder="Search Your Products..." 
              className="search__product w-full border border-indigo-800/60 rounded px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-800/40" 
            />
          </div>
        </div>
      )}

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div className="lg:hidden fixed inset-0 z-50">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/50 bg-opacity-20"
            onClick={() => setMenuOpen(false)}
          ></div>
          
          {/* Menu Panel */}
          <div className="relative w-2/3 max-w-sm h-full bg-white shadow-lg">
            {/* Menu Header */}
            <div className="flex items-center justify-between p-4 border-b border-neutral-200">
              <h2 className="text-lg font-semibold text-neutral-900">Menu</h2>
              <button
                onClick={() => setMenuOpen(false)}
                className="p-2 hover:bg-neutral-100 rounded"
                aria-label="Close menu"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>
            
            {/* Menu Items */}
            <div className="py-4">
              <MobileMenuItem 
                title="HOME" 
                href="https://deenfashionbd.com"
                hasSubmenu={false}
              />
              <MobileMenuItem 
                title="SHOP" 
                href="https://deenfashionbd.com/shop"
                hasSubmenu={false}
              />
              <MobileMenuItem 
                title="NEW ARRIVAL" 
                href="#"
                hasSubmenu={false}
              />
              <MobileMenuItem 
                title="MENS FASHION" 
                href="https://deenfashionbd.com/category/mens-fashion"
                hasSubmenu={true}
                submenuItems={[
                  { title: "Half Sleeve T-Shirt", href: "https://deenfashionbd.com/category/mens-fashion/half-sleeve-t-shirt" },
                  { title: "Polo T-Shirt", href: "https://deenfashionbd.com/category/mens-fashion/polo-t-shirt" },
                  { title: "Calligraphy T-Shirt", href: "https://deenfashionbd.com/category/mens-fashion/calligraphy-t-shirt" },
                  { title: "Sports T- Shirt", href: "https://deenfashionbd.com/category/mens-fashion/sports-t-shirt" },
                  { title: "Sports Polo T-Shirt", href: "https://deenfashionbd.com/category/mens-fashion/sports-polo-t-shirt" },
                  { title: "Sports Trouser", href: "https://deenfashionbd.com/category/mens-fashion/sports-trouser" },
                  { title: "Joggers", href: "https://deenfashionbd.com/category/mens-fashion/joggers" },
                  { title: "Winter Collection", href: "https://deenfashionbd.com/category/mens-fashion/winter-collection" }
                ]}
              />
              <MobileMenuItem 
                title="WOMEN'S FASHION" 
                href="https://deenfashionbd.com/category/womens-fashion"
                hasSubmenu={false}
              />
              <MobileMenuItem 
                title="KIDS (BOYS)" 
                href="https://deenfashionbd.com/category/kids-boys"
                hasSubmenu={true}
                submenuItems={[
                  { title: "Kids T-shirt", href: "https://deenfashionbd.com/category/kids-boys/kids-t-shirt" }
                ]}
              />
              <MobileMenuItem 
                title="KIDS (GIRLS)" 
                href="https://deenfashionbd.com/category/kids-girls"
                hasSubmenu={false}
              />
              <MobileMenuItem 
                title="SPORTS" 
                href="https://deenfashionbd.com/category/sports"
                hasSubmenu={true}
                submenuItems={[
                  { title: "Bangladesh Jersey", href: "https://deenfashionbd.com/category/sports/bangladesh-jersey" },
                  { title: "Football Jersey", href: "https://deenfashionbd.com/category/sports/football-jersey" }
                ]}
              />
              <MobileMenuItem 
                title="ACCESSORIES" 
                href="https://deenfashionbd.com/category/accessories"
                hasSubmenu={true}
                submenuItems={[
                  { title: "Wallet", href: "https://deenfashionbd.com/category/accessories/wallet" },
                  { title: "Belt", href: "https://deenfashionbd.com/category/accessories/belt" },
                  { title: "Cap", href: "https://deenfashionbd.com/category/accessories/cap" }
                ]}
              />
              <MobileMenuItem 
                title="FOOTWEAR" 
                href="https://deenfashionbd.com/category/footwear"
                hasSubmenu={true}
                submenuItems={[
                  { title: "Men's Half Shoe's", href: "https://deenfashionbd.com/category/footwear/mens-half-shoes" }
                ]}
              />
              <MobileMenuItem 
                title="OFFER" 
                href="#"
                hasSubmenu={false}
              />
            </div>
          </div>
        </div>
      )}

      {/* Navigation removed per request */}
    </header>
  );
}


