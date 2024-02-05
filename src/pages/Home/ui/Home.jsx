import { useSelector } from "react-redux"
import { ProductList } from "../../../widgets/ProductList"
import { Poster } from "../../../widgets/poster/ui/poster"
import { Category } from "../../../widgets/Category"

export const Home = () => {
  const { products, categories } = useSelector((state) => state);

  return (
    <>
      <Poster />
      <ProductList products={products.list} amount={5} title='Trending'/>
      <Category products={categories.list} amount={5} title='Worth seeing'/>
    </>
  )
}