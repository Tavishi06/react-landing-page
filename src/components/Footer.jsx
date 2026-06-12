import {
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaFacebook,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-black text-white mt-20">

      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

          {/* Company */}

          <div>
            <h3 className="text-xl font-semibold mb-5">
              Company
            </h3>

            <ul className="space-y-3 text-gray-400">
              <li className="hover:text-white cursor-pointer">
                About Us
              </li>

              <li className="hover:text-white cursor-pointer">
                Services
              </li>

              <li className="hover:text-white cursor-pointer">
                Careers
              </li>

              <li className="hover:text-white cursor-pointer">
                Contact
              </li>
            </ul>
          </div>

          {/* Terms & Policies */}

          <div>
            <h3 className="text-xl font-semibold mb-5">
              Terms & Policies
            </h3>

            <ul className="space-y-3 text-gray-400">
              <li className="hover:text-white cursor-pointer">
                Privacy Policy
              </li>

              <li className="hover:text-white cursor-pointer">
                Terms of Service
              </li>

              <li className="hover:text-white cursor-pointer">
                Cookie Policy
              </li>

              <li className="hover:text-white cursor-pointer">
                Refund Policy
              </li>
            </ul>
          </div>

          {/* Follow Us */}

          <div>
            <h3 className="text-xl font-semibold mb-5">
              Follow Us
            </h3>

            <div className="flex gap-5 text-2xl">

              <FaInstagram className="cursor-pointer hover:scale-110 transition" />

              <FaLinkedin className="cursor-pointer hover:scale-110 transition" />

              <FaTwitter className="cursor-pointer hover:scale-110 transition" />

              <FaFacebook className="cursor-pointer hover:scale-110 transition" />

            </div>
          </div>

        </div>

        {/* Bottom Line */}

        <div className="border-t border-gray-800 mt-12 pt-6 text-center text-gray-400">

          © 2026 Your Company. All rights reserved.

        </div>

      </div>

    </footer>
  );
}

export default Footer;