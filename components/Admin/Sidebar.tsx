import Image from "next/image";

const Sidebar = () => {
  return (
    <div>
      <aside className="py-6 px-10 w-64 border-r border-gray-200">
        <Image
          src="/images/logo.jpg"
          width="150px"
          height={48}
          alt="Logo"
          className="w-28"
        />
        <ul
          //loop here for sidebar
          className="flex flex-col gap-y-6 pt-20"
        >
          <li>
            <a
              href="#"
              className="flex gap-x-4 items-center py-2 text-gray-500 hover:text-indigo-600 group"
            >
              <span className="absolute w-1.5 h-8 bg-indigo-600 rounded-r-full left-0 scale-y-0 -translate-x-full group-hover:scale-y-100 group-hover:translate-x-0 transition-transform ease-in-out" />
              {/* <Component className="w-6 h-6 fill-current" /> */}
              <span> Products </span>
            </a>
            <a
              href="#"
              className="flex gap-x-4 items-center py-2 text-gray-500 hover:text-indigo-600 group"
            >
              <span className="absolute w-1.5 h-8 bg-indigo-600 rounded-r-full left-0 scale-y-0 -translate-x-full group-hover:scale-y-100 group-hover:translate-x-0 transition-transform ease-in-out" />
              {/* <Component className="w-6 h-6 fill-current" /> */}
              <span> Categories </span>
            </a>
          </li>
        </ul>
      </aside>
    </div>
  );
};

export default Sidebar;
