import Link from "next/link";
import React from "react";
import Button from "./button";
import SearchIcon from "./assets";
import SearchInput from "./SearchInput";

const navItems = [
  { title: "Home", id: "#home" },
  { title: "About Us", id: "#aboutus" },
  { title: "Pricing", id: "#pricing" },
  { title: "Demo", id: "#demo" },
];

const Navbar = () => {
  return (
    <nav className="container mx-auto my-[34px]">
      <div className="flex justify-between items-center gap-[100px]">
        <div className="flex-1">
          <h4 className="text-[34px] font-semibold text-primaryColor">
            Newsify
          </h4>
        </div>

        <ul className="flex items-center gap-[40px]">
          {navItems.map((link) => (
            <li key={link.id}>
              <Link href={link.id}>{link.title}</Link>
            </li>
          ))}
        </ul>

        <div className="flex gap-[9px] items-center relative">
          <SearchInput placeholder="Search" />
          <Button
            title="Register"
            className="text-[16px] font-bold leading-0.2 px-[47px] py-[20px]"
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
