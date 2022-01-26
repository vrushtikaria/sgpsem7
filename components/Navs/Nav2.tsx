import Arrow from "@heroicons/react/outline/ArrowNarrowUpIcon";

const Nav2 = () => {
  return (
    <>
      <div className="bg-medi fixed sm:sticky bottom-0 right-0 left-0  md:px-6 h-15 flex  items-center text-lg text-white text-center">
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
      <div className="fixed w-10 right-10 bottom-20 ring-2 ring-medi rounded-full">
        <a href="#">
          <Arrow className="text-medi" />
        </a>
      </div>
    </>
  );
};

export default Nav2;
