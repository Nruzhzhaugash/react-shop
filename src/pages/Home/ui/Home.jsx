import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { ProductList } from "@/widgets/ProductList";
import { Poster } from "@/widgets/poster/ui/poster";
import { Banner } from "@/widgets/Banner";
import { Categories } from "@/widgets/Categories/ui/Category";

import { filterByPrice } from "@/shared/model/productsSlice";

export const Home = () => {
  const dispatch = useDispatch();
  const { 
    products: { list, filtered }, 
    categories, 
  } = useSelector((state) => state);

  useEffect(() => {
    if (!list.length) return;

    dispatch(filterByPrice(100))
  }, [dispatch, list.length])

  return (
    <>
      <Poster />
      <ProductList products={list} amount={5} title='Trending'/>
      <Categories products={categories.list} amount={5} title='Worth seeing'/>
      <Banner />
      <ProductList products={filtered} amount={5} title='Less than 100$' />
    </>
  )
}