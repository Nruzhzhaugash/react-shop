import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { AppRouter } from "./appRouter";

import { Header } from "@/widgets/header/ui/header";
import { Sidebar } from "@/widgets/sidebar/ui/sidebar";
import { Footer } from "@/widgets/footer/ui/footer";

import { getCategories } from "@/shared/model/categoriesSlice";
import { getProducts } from "@/shared/model/productsSlice";
import { UserForm } from "@/features/authentication/userForm";

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories())
    dispatch(getProducts())
  }, [dispatch]);

  return (
    <div className="app">
      <Header />
      <UserForm/>
      <div className="container">
        <Sidebar />
        <AppRouter />
      </div>
      <Footer />
    </div>
  )
}