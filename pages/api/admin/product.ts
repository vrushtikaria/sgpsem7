import dbConnect from "../../../lib/dbConnect";
import Product from "../../../models/productSchema";

export default async function handler(req, res) {
  await dbConnect();
  const product = req.body;

  const { title, desc, category, price, image } = product;
  const productData = await Product.findOne({ slug: title });
  let active_ids = (await Product.countDocuments({})) + 1;
  if (productData) {
    return res.status(401).json({
      message: "Product already exists",
    });
  } else {
    const newProduct = await new Product({
      id: active_ids++,
      title: title,
      desc: desc,
      category: category,
      price: price,
      image: image,
    });
    await newProduct.save();
    const resProductData = {
      title: newProduct.title,
      desc: newProduct.desc,
      category: newProduct.category,
      price: newProduct.price,
      image: newProduct.image,
    };
    return res.status(200).json({
      message: "Product created successfully",
      product: resProductData,
      success: true,
    });
  }
  return res.status(400).json({
    message: "Product not created",
    success: false,
  })
}
