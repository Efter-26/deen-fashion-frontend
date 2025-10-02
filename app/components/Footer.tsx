import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faTiktok, faYoutube } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
  return (
    <footer className="text-white mt-12 bg-black">
      <div className="mx-auto max-w-8xl px-8 md:px-12 lg:px-16 py-10 md:py-12 grid gap-8 md:grid-cols-4">
        <div>
          <div className="mb-4">
            <Image
              src="https://deenfashionbd.com/public/storage/images/general_setting/nnJNDqhW3gtQkMKg5UligH7kU70ssUxYRRS6ZrES.png"
              alt="Deen Fashion Logo"
              width={200}
              height={60}
              className="h-auto"
            />
          </div>
          <p className="text-sm text-white leading-6">
            Deen Fashion BD is your go-to destination for premium Islamic and modest clothing in Bangladesh. We bring you elegant abayas, stylish panjabis, comfortable kurtas, hijabs, and more — all designed to reflect your values with fashion. Experience reliable service, affordable prices, and fast delivery across the country.
          </p>
        </div>

        <div>
          <h3 className="font-semibold mb-3 text-white">INFORMATION</h3>
          <ul className="space-y-2 text-white text-sm">
            <li><Link href="#" className="hover:underline">Shipment Policy</Link></li>
            <li><Link href="#" className="hover:underline">Care Instructions</Link></li>
            <li><Link href="#" className="hover:underline">Terms and Conditions</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-3 text-white">QUICK LINK</h3>
          <ul className="space-y-2 text-white text-sm">
            <li><Link href="#" className="hover:underline">Contact Us</Link></li>
            <li><Link href="#" className="hover:underline">New Arrival</Link></li>
            <li><Link href="#" className="hover:underline">Offer</Link></li>
            <li><Link href="#" className="hover:underline">Shop</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-3 text-white">PROFILE</h3>
          <ul className="space-y-2 text-white text-sm">
            <li><Link href="#" className="hover:underline">Order Tracking</Link></li>
            <li><Link href="#" className="hover:underline">Wishlist</Link></li>
            <li><Link href="#" className="hover:underline">Login</Link></li>
            <li><Link href="#" className="hover:underline">Register</Link></li>
          </ul>
        </div>
      </div>

      {/* Payment, Shipping, and Social Links Section */}
      <div className="border-t border-white">
        <div className="mx-auto max-w-7xl px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Payment System */}
            <div>
              <h4 className="text-white text-lg font-semibold mb-4 text-center">Payment System:</h4>
              <ul className="flex flex-wrap gap-3 justify-center">
                <li>
                  <img 
                    src="https://i.ibb.co.com/FnPHgdL/bkash.png" 
                    alt="bKash" 
                    className="w-16 h-10 object-contain bg-white rounded p-1"
                  />
                </li>
                <li>
                  <img 
                    src="https://i.ibb.co.com/MV7F1ty/nagad.png" 
                    alt="Nagad" 
                    className="w-16 h-10 object-contain bg-white rounded p-1"
                  />
                </li>
                <li>
                  <img 
                    src="https://i.ibb.co.com/jW8bW1C/rocket.png" 
                    alt="Rocket" 
                    className="w-16 h-10 object-contain bg-white rounded p-1"
                  />
                </li>
                <li>
                  <img 
                    src="https://i.ibb.co.com/brVKzvx/visa.png" 
                    alt="VISA" 
                    className="w-16 h-10 object-contain bg-white rounded p-1"
                  />
                </li>
              </ul>
            </div>

            {/* Shipping Partner */}
            <div>
              <h4 className="text-white text-lg font-semibold mb-4 text-center">Shipping Partner:</h4>
              <ul className="flex flex-wrap gap-3 justify-center">
                <li>
                  <img 
                    src="https://i.ibb.co.com/VjnfDGR/pathao.jpg" 
                    alt="Pathao" 
                    className="w-16 h-10 object-contain bg-white rounded p-1"
                  />
                </li>
                <li>
                  <img 
                    src="https://i.ibb.co.com/xhcfGJh/redx.png" 
                    alt="REDX" 
                    className="w-16 h-10 object-contain bg-white rounded p-1"
                  />
                </li>
                <li>
                  <img 
                    src="https://i.ibb.co.com/NLxRSRJ/steadfast.png" 
                    alt="SteadFast Courier" 
                    className="w-16 h-10 object-contain bg-white rounded p-1"
                  />
                </li>
              </ul>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-white text-lg font-semibold mb-4 text-center">Our Social Links:</h4>
              <ul className="flex gap-3 justify-center">
                <li>
                  <a 
                    href="https://www.facebook.com/deenfashion.com" 
                    className="w-10 h-10 bg-blue-600 flex items-center justify-center hover:bg-blue-700 transition-colors"
                  >
                    <FontAwesomeIcon icon={faFacebookF} className="text-white" style={{ width: '18px', height: '18px' }} />
                  </a>
                </li>
                <li>
                  <a 
                    href="https://www.instagram.com/deenfashionbd" 
                    className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center hover:from-purple-600 hover:to-pink-600 transition-colors"
                  >
                    <FontAwesomeIcon icon={faInstagram} className="text-white" style={{ width: '18px', height: '18px' }} />
                  </a>
                </li>
                <li>
                  <a 
                    href="https://www.tiktok.com" 
                    className="w-10 h-10 bg-black flex items-center justify-center hover:bg-gray-800 transition-colors"
                  >
                    <FontAwesomeIcon icon={faTiktok} className="text-white" style={{ width: '18px', height: '18px' }} />
                  </a>
                </li>
                <li>
                  <a 
                    href="https://www.youtube.com/@DeenFashion-l7w" 
                    className="w-10 h-10 bg-red-600 flex items-center justify-center hover:bg-red-700 transition-colors"
                  >
                    <FontAwesomeIcon icon={faYoutube} className="text-white" style={{ width: '18px', height: '18px' }} />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white">
        <div className="mx-auto max-w-7xl px-4 py-6 text-center">
          <p className="text-white text-sm">© {new Date().getFullYear()} Shop.deenfashionbd.com | All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}


