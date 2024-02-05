import { Footer } from "../widgets/footer"
import { Header } from "../widgets/header"
import { Sidebar } from "../widgets/sidebar/ui/sidebar"
import { AppRouter } from "./appRouter"

function App() {

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

export default App
