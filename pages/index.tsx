import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import Carousel from "../components/Carousel";
import Footer from "../components/Footer/Footer";
import Nav from "../components/Navs/Nav";
import Nav2 from "../components/Navs/Nav2";
import Products from "../components/Products";
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
        <Image
          src="/images/a_carousel.png"
          className="w-auto"
          layout="responsive"
          width={500}
          height={60}
        />
        {/* display prods Here  */}
        <div className="container mx-auto py-5 md:py-20 max-w-8xl min-w-[484px]">
          <div className="p-5 xl:p-0 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 items-start transition-all duration-500">
            <Products prods={products} />
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
