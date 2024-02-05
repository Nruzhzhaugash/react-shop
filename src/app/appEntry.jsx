import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { AppRouter } from "./appRouter";
import { getCategories } from "../shared/model/categoriesSlice";
import { Header } from "../widgets/header/ui/header";
import { Sidebar } from "../widgets/sidebar/ui/sidebar";
import { Footer } from "../widgets/footer/ui/footer";

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories())
  }, [dispatch]);

  return (
    <div className="app">
      <Header />

      <div className="container">
        <Sidebar />
        <AppRouter />
      </div>

      <Footer />
    </div>
  )
}