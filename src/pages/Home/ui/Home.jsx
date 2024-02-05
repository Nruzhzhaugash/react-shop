import { useSelector } from "react-redux"
import { ProductList } from "../../../widgets/ProductList"
import { Poster } from "../../../widgets/poster/ui/poster"

export const Home = () => {
  const { list } = useSelector(({ products }) => products)

  return (
    <>
      <Poster />
      <ProductList products={list} amount={5} title='Trending'/>
    </>
  )
}