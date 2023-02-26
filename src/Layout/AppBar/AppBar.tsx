import { FaAccessibleIcon } from "react-icons/fa";

export const AppBar: React.FC = () => {
  return (
    <div className="fixed top-0 left-0 w-full transition-all duration-300 bg-transparent z-10">
      <div className="mx-auto  sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 text-white text-3xl font-bold">
            <a
              href="/"
              style={{
                backgroundImage: "linear-gradient(to right, #ff50b3, #21abe1)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              XYZ
            </a>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a
                href="/"
                className="text-white hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium"
              >
                Home
              </a>

              <a
                href="/about"
                className="text-white hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
              >
                About
              </a>

              <a
                href="/"
                className="text-white hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
