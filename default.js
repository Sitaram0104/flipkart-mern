import { products } from "./constants/product.js";
import Product from "./model/productSchema.js";

const DefaultData = async () => {
  try {
    await Product.deleteMany({});
    const p = await Product.insertMany(products);
    console.log("Product Data imported successfully");
  } catch (error) {
    console.log(error.message);
  }
};

export default DefaultData;
