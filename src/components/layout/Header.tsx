import Link from "next/link";

const Header = () => {
  return (
    <div className="bg-primary-dark flex justify-between items-center px-6 sm:px-8 py-4 w-full fixed top-0 left-1/2 -translate-x-1/2 z-50 shadow-lg">
      {/* Logo and Brand Name */}
      <h1 className="font-extrabold text-white text-lg sm:text-2xl tracking-wide">
        <Link href={"/"}>Syed Ahmed.</Link>
      </h1>

      {/* Navigation Links */}
      <div>
        <ul className="flex gap-6 sm:gap-8 items-center">
          <li className="text-white text-base sm:text-lg hover:text-primary-yellow transition duration-300 ease-in-out">
            <Link href={"/"}>Home</Link>
          </li>
          <li className="text-white text-base sm:text-lg hover:text-primary-yellow transition duration-300 ease-in-out">
            <Link href={"/#featured"}>Featured</Link>
          </li>
          <li className="text-white text-base sm:text-lg hover:text-primary-yellow transition duration-300 ease-in-out">
            <Link href={"/#contact"}>Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
