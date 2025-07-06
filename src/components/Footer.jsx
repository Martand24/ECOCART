import React from "react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full bg-[#232f3e] text-white text-sm">
      <div
        onClick={scrollToTop}
        className="text-center py-4 text-xs bg-[#374658] hover:bg-[#465461] cursor-pointer"
      >
        Back to top
      </div>

      <div className="flex flex-wrap justify-evenly px-4 py-10">
        <div className="mb-6">
          <h3 className="text-base font-bold mb-3">Get to Know Us</h3>
          <ul className="space-y-1 text-gray-300">
            <li>About Us</li>
            <li>Careers</li>
            <li>Press Releases</li>
            <li>Amazon Cares</li>
            <li>Gift a Smile</li>
          </ul>
        </div>

        <div className="mb-6">
          <h3 className="text-base font-bold mb-3">Connect with Us</h3>
          <ul className="space-y-1 text-gray-300">
            <li>Facebook</li>
            <li>Twitter</li>
            <li>Instagram</li>
          </ul>
        </div>

        <div className="mb-6">
          <h3 className="text-base font-bold mb-3">Make Money with Us</h3>
          <ul className="space-y-1 text-gray-300">
            <li>Sell on Amazon</li>
            <li>Sell under Amazon Accelerator</li>
            <li>Amazon Global Selling</li>
            <li>Become an Affiliate</li>
            <li>Amazon Pay on Merchants</li>
            <li>Advertise Your Products</li>
          </ul>
        </div>

        <div className="mb-6">
          <h3 className="text-base font-bold mb-3">Let Us Help You</h3>
          <ul className="space-y-1 text-gray-300">
            <li>COVID-19 and Amazon</li>
            <li>Your Account</li>
            <li>Returns Centre</li>
            <li>100% Purchase Protection</li>
            <li>Amazon App Download</li>
            <li>Help</li>
          </ul>
        </div>
      </div>

      <div className="text-center py-3 text-xs bg-[#1a232f] text-gray-400">
        © 2025 | Team Runtime Terror. All rights reserved. HackOn with Amazon Season 5
      </div>
    </footer>
  );
};

export default Footer;
