import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import Carousel from "../components/Carousel";
import Footer from "../components/Footer/Footer";
import Nav from "../components/Navs/Nav";
import Nav2 from "../components/Navs/Nav2";
import dbConnect from "../lib/dbConnect";
import Category from "../models/categorySchema";
import Product from "../models/productSchema";

export default function Home({ prods, cats }) {
  const [products, setProds] = useState(prods);

  return (
    <>
      <Head>
        <title>MediCare2.0</title>
        <link rel="icon" href="/images/logo.jpg" />
      </Head>
      <div className="w-fit lg:w-full">
        <nav className="m-0">
          <Nav />
          <Nav2 filter={setProds} cats={cats} />
        </nav>
        <Carousel />
        <div className="container mx-auto py-10 md:py-20  max-w-8xl min-w-[484px]">
          <div className="p-5 md:p-0 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 items-start transition-all duration-500">
            {products.map((prod) => {
              return (
                <div
                  key={prod._id}
                  className="p-5 py-12 text-left transform duration-500 hover:-translate-y-2 hover:shadow-2xl cursor-pointer bg-gray-200 rounded-xl hover:ring-medi hover:ring-2"
                >
                  <span>
                    <Image
                      className="p-5"
                      src={prod.image}
                      alt={prod.slug}
                      width={60}
                      height={60}
                      layout="responsive"
                    />
                  </span>
                  <h1 className="text-base h-16 mt-4">{prod.title}</h1>
                  <h2 className="font-semibold mb-4 mt-3">₹{prod.price}</h2>
                  <button className="p-2 px-6 bg-blue-500 text-white rounded-md hover:bg-red-600">
                    Add To Cart
                  </button>
                </div>
              );
            })}
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}

export async function getServerSideProps() {
  await dbConnect();

  const products = await Product.find({}).limit(20);

  const prods = products.map((doc) => {
    const prod = doc.toObject();
    prod._id = prod._id.toString();
    prod.image = "/images/product_images/" + prod._id + "/" + prod.image;
    return prod;
  });

  const category = await Category.find({});
  const cats = category.map((doc) => {
    const cat = doc.toObject();
    cat._id = cat._id.toString();
    return cat;
  });

  return { props: { prods: prods, cats: cats } };
}
