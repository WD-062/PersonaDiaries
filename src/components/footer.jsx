import { FaInstagram, FaXTwitter, FaFacebook } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-green-900 text-white flex justify-between pl-2 pr-2 items-center">
      <p>© 2025 John Doe, All Rights Reserved.</p>
      <nav>
        <ul className="flex gap-4">
          <li>
            <a
              href="https://www.instagram.com/"
              className="flex items-center gap-2 hover:text-red-600"
            >
              <FaInstagram />
              Instagram
            </a>
          </li>
          <li>
            <a
              href="https://x.com/"
              className="flex items-center gap-2 hover:text-red-600 mt-1"
            >
              <FaXTwitter />
            </a>
          </li>
          <li>
            <a
              href="https://www.facebook.com/"
              className="flex items-center gap-2 hover:text-red-600"
            >
              <FaFacebook />
              Facebook
            </a>
          </li>
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;
