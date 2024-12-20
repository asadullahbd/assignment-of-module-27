
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-50 text-gray-900 border-t-2 border-gray-700">
      {/* Big Footer */}
      <div className="container max-w-7xl mx-auto py-10 px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1 */}
          <div>
            <h3 className="text-2xl font-bold mb-4">AgencyBlog</h3>
            <p className="text-sm">
              Empowering your blogging journey with insightful content and
              professional guidance. We provide expert advice, proven
              strategies, and innovative tools to help you create engaging and
              impactful blog posts.
            </p>
          </div>
          {/* Column 2 */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-blue-800 transition">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-blue-800 transition">
                  About
                </Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-blue-800 transition">
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="hover:text-blue-800 transition"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-blue-800 transition"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          {/* Column 3 */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <p className="text-sm">Email: contact@agencyblog.com</p>
            <p className="text-sm">Phone: +123 456 7890</p>
          </div>
          {/* Column 4 */}
          <div>
            <h3 className="text-lg font-bold mb-4">Follow Us</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="https://facebook.com"
                  className="hover:text-blue-800 transition"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Facebook
                </Link>
              </li>
              <li>
                <Link
                  to="https://twitter.com"
                  className="hover:text-blue-800 transition"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Twitter
                </Link>
              </li>
              <li>
                <Link
                  to="https://instagram.com"
                  className="hover:text-blue-800 transition"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instagram
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Small Footer */}
      <div className="bg-gray-50 py-4 text-center text-sm border-t-2 border-gray-700">
        <p>
          &copy; {new Date().getFullYear()} AgencyBlog. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
