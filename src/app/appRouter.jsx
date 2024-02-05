import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";

export const AppRouter = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
    </Routes>
  )
}

export const ROUTES = {
  HOME: "/",
  CART: "/cart",
  PROFILE: "/profile",
  PRODUCT: "/products/:id",
  CATEGORY: "/categories/:id",
};