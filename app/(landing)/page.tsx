import HeroSection from "./components/home/hero";
import CategoriesSection from "./components/home/categories";
import ProductsSection from "./components/home/products";
import { getAllCategories } from "../cervices/category.service";
import { getAllProducts } from "../cervices/product.service";

export default async function Home() {
  const [categories, products] = await Promise.all([
    getAllCategories(),
    getAllProducts(),
  ]);

  return (
  <main>
    <HeroSection />
    <CategoriesSection categories={categories} />
    <ProductsSection products={products}/>
  </main>
  );
};
