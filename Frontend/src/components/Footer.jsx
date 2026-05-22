import { Phone, Mail, MapPin } from "lucide-react";

function Footer() {
  return (
    <footer className="bg-[#1C1917] text-[#E7E5E4] mt-auto">

      <div className="max-w-7xl mx-auto px-8 py-12 grid md:grid-cols-3 gap-10">

        {/* COMPANY */}
        <div>

          <h2 className="text-2xl font-bold text-amber-500 mb-4">
            Wholesale Inventory
          </h2>

          <p className="text-stone-400 leading-7">
            Professional inventory and billing management system for
            wholesalers and retail businesses with modern efficiency.
          </p>

        </div>

        {/* CONTACT */}
        <div>

          <h3 className="text-xl font-semibold mb-4 text-white">
            Contact Us
          </h3>

          <div className="space-y-4 text-stone-400">

            <p className="flex items-center gap-2 hover:text-amber-400 transition">
              <Phone size={18} />
              +91 9876543210
            </p>

            <p className="flex items-center gap-2 hover:text-amber-400 transition">
              <Mail size={18} />
              support@wholesaleinventory.com
            </p>

            <p className="flex items-center gap-2 hover:text-amber-400 transition">
              <MapPin size={18} />
              Hyderabad, India
            </p>

          </div>

        </div>

        {/* QUICK LINKS */}
        <div>

          <h3 className="text-xl font-semibold mb-4 text-white">
            Quick Links
          </h3>

          <div className="flex flex-col gap-3 text-stone-400">

            <a
              href="/"
              className="hover:text-amber-400 transition"
            >
              Home
            </a>

            <a
              href="/dashboard"
              className="hover:text-amber-400 transition"
            >
              Dashboard
            </a>

            <a
              href="/products"
              className="hover:text-amber-400 transition"
            >
              Products
            </a>

          </div>

        </div>

      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-stone-800 py-5 text-center text-stone-500 text-sm">

        © 2026{" "}
        <span className="text-amber-500 font-medium">
          Wholesale Inventory & Billing System
        </span>
        . All Rights Reserved.

      </div>

    </footer>
  );
}

export default Footer;