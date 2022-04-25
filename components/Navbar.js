import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoMdClose } from 'react-icons/io';

function Navbar({ title, menu, showMenu, setShowMenu }) {
  return (
    <div className="bg-[#bbe0fb] w-full flex justify-between items-center p-4">
      <h1 className="text-lg text-black font-semibold">{title}  </h1>
      {menu &&
        <div className="md:hidden text-md text-black" onClick={() => setShowMenu(!showMenu)}>
          {showMenu ? <IoMdClose /> : <GiHamburgerMenu />}
        </div>
      }
    </div>
  )
}

export default Navbar;