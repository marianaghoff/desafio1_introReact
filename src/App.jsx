import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css"; // importar estilos de css de bootstrap
import Header from "./components/Header";
import MyCard from "./components/MyCard";
import Footer from "./components/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header className="header"></Header>
      <div style={{ display: "flex", flexDirection: "row", gap: "10px" }}>
        <MyCard
          nombre="Bartolo"
          descrip="Lleno de energía y listo para jugar ¡Dale a Bartolo el hogar amoroso que se merece!"
          raza="Husky"
          imagen="https://www.elmueble.com/medio/2022/10/10/husky-siberiano_2b8d1a29_1000x666.jpg"
          color="primary"
        ></MyCard>
        <MyCard
          nombre="Messi"
          descrip="Es juguetón, amigable y se lleva bien con niños y otros animales ¡Haz de Messi parte de tu familia hoy mismo!"
          raza="Bobtail"
          imagen="https://www.zooplus.es/magazine/wp-content/uploads/2020/05/Bobtail-o-antiguo-perro-de-pastor-ingles.jpg"
          color="danger"
        ></MyCard>
        <MyCard
          nombre="Gohan"
          descrip="Un perro de tamaño mediano con un coorazón gigante. Hazte amigo de Gohan y experimenta un amor incondicional."
          raza="Shar Pei"
          imagen="https://images.hola.com/imagenes/mascotas/20200925176067/razas-perro-shar-pei-gt/0-870-859/shar-pei-adulto-t.jpg"
          color="warning"
        ></MyCard>
        <MyCard
          nombre="Princesa"
          descrip="Es una compañera leal y cariñosa que adora los mimos y los abrazos ¡Ayuda a Princesa a encontrar su final feliz!"
          raza="Beagle"
          imagen="https://www.nunpet.es/blog/wp-content/uploads/2021/12/beagle1.jpg"
          color="success"
        ></MyCard>
      </div>
      <Footer></Footer>
    </>
  );
}

export default App;
