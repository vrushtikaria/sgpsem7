const Nav2 = () => {
  // function for toggling dropdown menu
  function dropdownClick() {
    let state = document.getElementById("dropdown").className;
    let btn = document.getElementById("toggler");

    if (state == "hidden md:hidden") {
      document.getElementById("dropdown").className = "flex md:hidden";
      btn.className = "bg-[#34A19C] rounded-md md:hidden";
    } else {
      document.getElementById("dropdown").className = "hidden md:hidden";
      btn.className =
        "bg-[#00a59c] rounded-md shadow-sm shadow-gray-500 md:hidden";
    }
  }

  return (
    <>
      <div className="bg-medi absolute sm:static bottom-0 right-0 left-0 w-100 md:px-6 h-15 flex flex-grow items-center text-lg text-white text-center overflow-hidden">
        <h3 className="cursor-pointer px-4 py-2 w-1/5 relative hover:text-white link_line ">
          Medicines
        </h3>
        <h3 className="cursor-pointer px-4 py-2 w-1/5 relative hover:text-white link_line ">
          Covid Care
        </h3>
        <h3 className="cursor-pointer px-4 py-2 w-1/5 relative hover:text-white link_line">
          Health Care
        </h3>
        <h3 className="cursor-pointer px-4 py-2 w-1/5 relative hover:text-white link_line">
          Devices
        </h3>
        <h3 className="cursor-pointer px-4 py-2 w-1/5 relative hover:text-white link_line">
          Baby Care
        </h3>
      </div>
    </>
  );
};

export default Nav2;
