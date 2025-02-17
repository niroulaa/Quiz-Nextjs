import React from "react";

const Navbar = () => {
  const navItems = [
    {
      label: "Home",
      href: "#",
    },
    {
      label: "About",
      href: "#",
    },
    {
      label: "Contact",
      href: "#",
    },
    {
      label: "Login ",
      href: "#",
    },
  ];
  return (
    <nav className=" bg-amber-200 flex justify-between p-5   ">
      <div className="text-3xl select-none">NIROULA</div>

      <div className="flex   w-[30vw] justify-between h-[5vh] items-center ">
        {navItems.map((item, index) => (
          <div className="text-2xl" key={index}>
            <a href={item.href}>{item.label}</a>
          </div>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
