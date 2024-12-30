import { IoClose, IoMenu } from "react-icons/io5";

// eslint-disable-next-line react/prop-types
const MenuToggle = ({ menuOpen, toggleMenu }) => {
  return (
    <div className="flex lg:hidden text-[50px] cursor-pointer">
      {menuOpen ? (
        <IoClose onClick={() => toggleMenu(false)} />
      ) : (
        <IoMenu onClick={() => toggleMenu(true)} />
      )}
    </div>
  );
};

export default MenuToggle;
