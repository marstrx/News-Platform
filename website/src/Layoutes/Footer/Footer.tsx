import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-[#132440] text-[#FDB5CE] font-mono">
      <div className="max-w-7xl mx-auto px-4 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <div className="col-span-1 sm:col-span-2 lg:col-span-1">
            <Link to="/" className="inline-block mb-4">
              <svg
                width="40"
                height="40"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#FFFFFF"
                  d="M23 2v4h-1v6h-1v5h-1v1h-2v1h-2v1h-2v1h-2v-1h-1v-2h-1v-2H9v-2H8v1H7v1H6v1H5v2H4v1H3v1H2v1H1v-3h1v-4h1v-4h1V7h1V6h2V5h2V4h2V3h2v2h1v2h1v2h1v2h2V9h1V7h1V5h1V3h1V2z"
                />
              </svg>
            </Link>
            <p className="text-sm leading-relaxed">
              Your source for the latest tech news and insights. Stay informed
              with our curated articles.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold mb-4 text-lg">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/news" className="hover:text-white">
                  News
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-white font-bold mb-4 text-lg">Categories</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/technology" className="hover:text-white">
                  Technology
                </Link>
              </li>
              <li>
                <Link to="/business" className="hover:text-white">
                  Business
                </Link>
              </li>
              <li>
                <Link to="/science" className="hover:text-white">
                  Science
                </Link>
              </li>
              <li>
                <Link to="/innovation" className="hover:text-white">
                  Innovation
                </Link>
              </li>
            </ul>
          </div>

          {/* Social*/}
          <div>
            <h3 className="text-white font-bold mb-4 text-lg">Connect</h3>
            <div className="flex gap-4 mb-6">
              {/* Twitter */}
              <a href="https://x.com/marstrx0" className="hover:opacity-80">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="#FDB5CE"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26l8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              {/* GitHub */}
              <a href="https://github.com/marstrx" className="hover:opacity-80">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="#FDB5CE"
                >
                  <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2" />
                </svg>
              </a>
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/marstrx/"
                className="hover:opacity-80"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="#FDB5CE"
                >
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z" />
                </svg>
              </a>
            </div>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/privacy" className="hover:text-white">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="hover:text-white">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#FDB5CE]/20 mt-8 pt-6">
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 text-sm">
            <p>&copy; {new Date().getFullYear()} Nex . All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
