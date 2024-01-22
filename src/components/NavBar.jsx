import { useState } from "react";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex justify-around w-full">

      <div>
        <h2>Sneakers</h2>
      </div>
      <div className=" w-6/12">

        <ul className="flex justify-evenly">
          <li>Collections</li>
          <li>Men</li>
          <li>Woman</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>

      <div className="relative flex">
        <span onClick={() => setIsOpen((prev) => !prev)} className="className=px-2">Chart</span>
        <span className="px-2">profile</span>
        {isOpen && 
        <div className="absolute top-14 flex flex-col">
          <h4>Cart</h4>
          <hr className="border-black"/>
          <p>Your cart is empty</p>
        </div>}
      </div>
    </nav>
  );
};

export default NavBar;
