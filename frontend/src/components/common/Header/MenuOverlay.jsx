// eslint-disable-next-line react/prop-types
const MenuOverlay = ({ menuOpen, setMenuOpen }) => {
  return (
    <>
      {menuOpen && (
        <div
          className="fixed lg:hidden z-10 inset-0 backdrop-blur-sm bg-black/30"
          onClick={() => setMenuOpen(false)}
        ></div>
      )}
    </>
  );
};

export default MenuOverlay;
