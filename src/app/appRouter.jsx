import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { SingleProduct } from "@/pages/SingleProduct";
import { ErrorPage } from "@/pages/ErrorPage";
import { SingleCategory } from "../pages/SingleCategory";

export const AppRouter = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path={ROUTES.PRODUCT} element={<SingleProduct />}/>
      <Route path={ROUTES.ERROR} element={<ErrorPage />} />
      <Route path={ROUTES.CATEGORY} element={<SingleCategory />}/>
    </Routes>
  )
}

export const ROUTES = {
  HOME: "/",
  CART: "/cart",
  PROFILE: "/profile",
  PRODUCT: "/products/:id",
  CATEGORY: "/categories/:id",
  ERROR: "/error",
};