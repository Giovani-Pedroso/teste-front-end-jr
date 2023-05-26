import { useEffect } from "react";
import "./App.scss";
import Navbar from "./components/Navegation/Navbar";
import Footer from "./components/Navegation/Footer";
import Hero from "./components/HomeScreen/Hero";
import Marcas from "./components/HomeScreen/Marcas";
import Mercadorias from "./components/HomeScreen/Mercadorias";
import Produtos1 from "./components/HomeScreen/Produtos1";
import Parceiros from "./components/HomeScreen/Cards1";
import ProdutosHomeCards from "./components/HomeScreen/Cards2";
import ProdutosRelacionados from "./components/HomeScreen/ProdutosRelacionados";
import ProdutosRelacionados2 from "./components/HomeScreen/ProdutosRelacionados2";

function App() {
  useEffect(() => {
    document.title = "Teste tecnico econverse";
  }, []);

  return (
    <div className="">
      <Navbar />
      <Hero />
      <Mercadorias />
      <Produtos1 />
      <Parceiros />
      <ProdutosRelacionados />
      <ProdutosHomeCards />
      <Marcas />
      <ProdutosRelacionados2 />
      <Footer />
    </div>
  );
}

export default App;
