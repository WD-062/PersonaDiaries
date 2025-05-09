import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <div className="navbar w-full flex items-center justify-between mt-3 px-20 py-2 bg-base-300 shadow-sm h-20">
      <img src={logo} alt="logo" className="h-25 w-43" />
      <div className="flex item-center gap-4">
        <img
          src="https://cdn-icons-png.flaticon.com/128/149/149071.png"
          className="h-12 w-12 btn btn-ghost btn-circle"
        />
        <a className="btn btn-ghost text-base">Logout</a>
      </div>
    </div>
  );
};
export default Navbar;
