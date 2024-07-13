import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IoCartOutline, IoSearchOutline } from "react-icons/io5";
import { MdOutlineShoppingBag } from "react-icons/md";
import { HiOutlineUser, HiX, HiOutlineSearchCircle } from "react-icons/hi";
import { HiBars3 } from "react-icons/hi2";
import { HiLogout } from "react-icons/hi";
import { useSelector } from "react-redux";
const navbarItems = [
  {
    id: 2,
    path: "/products",
    nav: "Products",
  },
  {
    id: 3,
    path: "/",
    nav: "Collections",
  },
  {
    id: 4,
    path: "/",
    nav: "Gifts",
  },
  {
    id: 5,
    path: "/",
    nav: "Special Deals",
  },
  {
    id: 6,
    path: "/contact",
    nav: "Contact",
  },
];

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [sticky, setSticky] = useState(false);

  //const cart = useSelector((state) => state.cart.data);
  const {totalItems} = useSelector(
    (state) => state.cart)
  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <div
        className={`relative ${
          sticky
            ? "header py-1 sticky !bg-black/50 !text-white top-0 z-50 shadow-xl"
            : ""
        }`}
      >
        <div className="flex justify-between items-center w-11/12 m-auto py-4">
          <Link to="/">
            <div className="text-3xl font-bold !font-logo uppercase">
              Jereng
            </div>
          </Link>

          {/* Desktop navigation */}
          <div className="hidden md:flex space-x-6">
            {navbarItems.map((nav, key) => (
              <Link
                key={key}
                className="active text-sm hover:font-semibold text-text-Clr transition-all"
                to={nav.path}
              >
                {nav.nav}
              </Link>
            ))}
          </div>

          {/* Icons */}
          <div className="flex items-center space-x-5">
            <Link
              to="/"
              className="text-lg border w-7 h-7 rounded-full flex-center"
            >
              <IoSearchOutline />
            </Link>

            <Link
              to="/cart"
              className="relative text-lg border w-7 h-7 rounded-full flex-center"
            >
              <IoCartOutline />
              {
                totalItems !== 0 &&
              <div className="absolute -top-2 -right-2 h-5 w-5 rounded-full bg-red-500 text-white text-sm flex items-center justify-center">
                {totalItems}
              </div>
               }
            </Link>
            <div className="hidden md:flex items-center justify-center text-lg border w-6 h-6 rounded-full ">
              <HiBars3 />
            </div>
            {/* Mobile menu button */}

            <div className="md:hidden flex items-center">
              <div
                onClick={toggleMobileMenu}
                className="text-lg border w-6 h-6 rounded-full flex items-center justify-center"
              >
                <HiBars3 />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile navigation menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden w-full h-full fixed transition-all delay-150 duration-200 top-0 z-[99] py-5 bg-white text-black/90 ">
          <div className="flex items-center justify-between px-5 ">
            <Link to="/">
              <div className="text-3xl font-bold !font-logo uppercase">
                Jereng
              </div>
            </Link>
            <span className="text-[1.5rem]" onClick={toggleMobileMenu}>
              <HiX />
            </span>
          </div>
          <div className="flex flex-col gap-y-4 p-4 my-5">
            {navbarItems.map((nav, key) => (
              <Link
                key={key}
                className="text-lg"
                to={nav.path}
                onClick={toggleMobileMenu}
              >
                {nav.nav}
              </Link>
            ))}
            <hr className="pb-4" />

            <Link to="/" className="text-lg flex items-center space-x-2">
              <HiOutlineUser />
              <span>My Account</span>
            </Link>

            <Link
              to="/"
              className="text-lg flex items-center space-x-2"
              onClick={toggleMobileMenu}
            >
              <HiLogout />
              <span>Logout</span>
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
