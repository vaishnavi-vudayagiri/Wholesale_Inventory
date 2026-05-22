import {
  Phone,
  Mail,
  MapPin,
} from "lucide-react";

function Footer() {

  return (
    <footer className="bg-gray-900 text-white mt-auto">

      <div className="max-w-7xl mx-auto px-8 py-10 grid md:grid-cols-3 gap-8">

        {/* Company */}
        <div>

          <h2 className="text-2xl font-bold text-indigo-400 mb-4">
            Wholesale Inventory
          </h2>

          <p className="text-gray-400 leading-7">
            Professional inventory and billing management
            system for wholesalers and retail businesses.
          </p>

        </div>



        {/* Contact */}
        <div>

          <h3 className="text-xl font-semibold mb-4">
            Contact Us
          </h3>

          <div className="space-y-3 text-gray-400">

            <p className="flex items-center gap-2">
              <Phone size={18} />
              +91 9876543210
            </p>

            <p className="flex items-center gap-2">
              <Mail size={18} />
              support@wholesaleinventory.com
            </p>

            <p className="flex items-center gap-2">
              <MapPin size={18} />
              Hyderabad, India
            </p>

          </div>

        </div>



        {/* Quick Links */}
        <div>

          <h3 className="text-xl font-semibold mb-4">
            Quick Links
          </h3>

          <div className="flex flex-col gap-3 text-gray-400">

            <a
              href="/"
              className="hover:text-white transition"
            >
              Home
            </a>

            <a
              href="/dashboard"
              className="hover:text-white transition"
            >
              Dashboard
            </a>

            <a
              href="/products"
              className="hover:text-white transition"
            >
              Products
            </a>

          </div>

        </div>

      </div>



      {/* Bottom */}
      <div className="border-t border-gray-800 py-4 text-center text-gray-500 text-sm">

        © 2026 Wholesale Inventory & Billing System.
        All Rights Reserved.

      </div>

    </footer>
  );
}

export default Footer;