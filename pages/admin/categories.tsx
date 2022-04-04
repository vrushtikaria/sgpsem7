import{
  PlusIcon,
  FilterIcon,
  PencilIcon,
  TrashIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
}from "@heroicons/react/outline";
import dbConnect from "../../lib/dbConnect";
import Category from "../../models/categorySchema";
import Image from "next/image";
import Sidebar from "../../components/Admin/Sidebar";

const categories = ({cats}) => {
  
    const deleteCategory = async(e) => {
    const response = await fetch('../api/admin/categories.ts/${categoryID}', {
        method: 'DELETE'
    });
    const del = await response.json()
    console.log(del)
  }

  return(
    <div className="flex">
      <div className="m-0">
        <Sidebar/>
      </div>
      <div className="flex-1">
        <div className="flex items-center justify-between py-7 px-10">
          <div>
            <h1 className="text-2xl font-semibold leading-relaxed text-gray-800">
              Categories
            </h1>
            <p className="text-sm font-medium text-gray-500">
              Let&aposs grow to your business! Create your product and upload
              here
            </p>
          </div>
          <button className="inline-flex gap-x-2 items-center py-2.5 px-6 text-white bg-indigo-600 rounded-xl hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-1">
            <PlusIcon className="w-6 h-6 fill-current" />
            <span className="text-sm font-semibold tracking-wide">
              Create Category
            </span>
          </button>
        </div>
        <table className="w-full border-b border-gray-200">
          <thead>
            <tr className="text-sm font-medium text-gray-700 border-b border-gray-200">
              <td className="pl-10">
                <span> {"  "}</span>
                <div className="flex items-center gap-x-4">
                  <span>Categories</span>
                </div>
              </td>
              <td className="py-4 pr-10 pl-4 text-center">
                <FilterIcon className="w-6 h-6 fill-current" />
              </td>
            </tr>
          </thead>
          <tbody>
            {cats.map((cat) => {
              return (
                <tr
                  key={cat._id}
                  //loop for diff products
                  className="hover:bg-gray-100 transition-colors group"
                >
                  <td className="flex gap-x-4 items-center py-4 pl-10">
                    <input
                      type="checkbox"
                      className="w-6 h-6 text-indigo-600 rounded-md border-gray-300"
                    />
                    <div>
                      <a
                        href="#"
                        className="text-lg font-semibold text-gray-700"
                      >
                        {cat.title}
                      </a>
                    </div>
                  </td>
                  <td>
                    <span className="inline-block w-20 group-hover:hidden">
                      category.createdAt
                    </span>
                    <div className="hidden group-hover:flex group-hover:w-20 group-hover:items-center group-hover:text-gray-500 group-hover:gap-x-2">
                      <button className="p-2 hover:rounded-md hover:bg-gray-200">
                        <PencilIcon className="w-6 h-6 fill-current" />
                      </button>
                      <button onClick={deleteCategory} className="p-2 hover:rounded-md hover:bg-gray-200">
                        <TrashIcon className="w-6 h-6 fill-current" />
                      </button>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default categories;

export async function getServerSideProps(){
  //connect to database
  await dbConnect();
  //get initial products
  const categories = await Category.find({});
  const cats = categories.map((doc) => {
    const cat = doc.toObject();
    cat._id = cat._id.toString();
    cat._id;
    return cat;
  }
  );
  return { props: { cats: cats } };
};
