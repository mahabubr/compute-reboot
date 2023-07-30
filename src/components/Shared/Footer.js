const Footer = () => {
  return (
    <footer className="bg-gray-900 py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="col-span-2 md:col-span-1">
            <h2 className="text-xl font-semibold text-white">Compute Reboot</h2>
            <p className="mt-4 text-gray-300">
              Your one-stop shop for building your dream PC.
            </p>
          </div>
          <div className="col-span-2 md:col-span-1">
            <h3 className="text-lg font-semibold text-white">Contact</h3>
            <ul className="mt-4">
              <li className="mb-2">
                <a
                  href="#"
                  className="text-gray-300 hover:text-white no-underline"
                >
                  Email: info@computereboot.com
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="text-gray-300 hover:text-white no-underline"
                >
                  Phone: (123) 456-7890
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="text-gray-300 hover:text-white no-underline"
                >
                  Address: 1234 PC Street, City, Country
                </a>
              </li>
            </ul>
          </div>
          <div className="col-span-2 md:col-span-1">
            <h3 className="text-lg font-semibold text-white">Social Media</h3>
            <ul className="mt-4">
              <li className="mb-2">
                <a
                  href="#"
                  className="text-gray-300 hover:text-white no-underline"
                >
                  Facebook
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="text-gray-300 hover:text-white no-underline"
                >
                  Twitter
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="text-gray-300 hover:text-white no-underline"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </div>
          <div className="col-span-2 md:col-span-1">
            <h3 className="text-lg font-semibold text-white">Newsletter</h3>
            <p className="mt-4 text-gray-300">
              Subscribe to our newsletter for the latest updates.
            </p>
            <form className="mt-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded-md bg-gray-800 text-gray-300 focus:outline-none focus:ring focus:ring-blue-300"
              />
              <button
                type="submit"
                className="mt-4 w-full px-4 py-2 rounded-md bg-blue-500 hover:bg-blue-600 text-white focus:outline-none focus:ring focus:ring-blue-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="mt-8 text-center text-gray-500">
          <p>
            &copy; {new Date().getFullYear()} Build PC Co. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
