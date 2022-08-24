
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Card from './components/Card';
import imagenes from './assests/imagenes';




function App() {
  return (
    <div>
      <Header />
      <Card
        img={imagenes.img1}
        titulo='Vino Casillero del Diablo Dark Red 750cc.'
        descripcion='Vino tinto ensambale de color rojo intenso y profundo, especial para carnes rojas y comidas picantes.' />
      <Card
        img={imagenes.img2}
        titulo='Vino Toro de Piedra Gran Reserva Carmenere'
        descripcion='Vino con maduración de 12 años en barricas de roble americano y frances. Especial para carnes rojas. Final largo sobre notas tostadas' />
      <Card
        img={imagenes.img3}
        titulo='Vino Casas Patronales Reserva Carmenere 750cc.'
        descripcion='Vino con origen en el Valle del Maule. Color rojo púrpura profundo, con aroma a pimienta, frutal y achocolatado. Especial para carnes blancas y quesos maduros.

        ' />
      <Card
        img={imagenes.img4}
        titulo='Vino Misiones de Rengo Reserva Carmenere Botella 750cc.'
        descripcion='Carmenere del valle de Rapel de color rojo ciruela muy profundo e intenso. Exquisito e intenso aroma. Exhibe aromas a especias, paprika roja, pimienta blanca, y chocolate negro, con notas de café y vainilla.' />
      <Card
        img={imagenes.img5}
        titulo='Vino Tarapaca Gran Reserva Etiqueta Negra Carmenere Botella 750cc'
        descripcion='Valle: Valle del Maipo Maridaje: Recomendamos disfrutar este Vino con Pastas y salsas cremosas, vegetales y pescados como atún y salmón Temperatura: 16º- 18º' />
      <Card
        img={imagenes.img6}
        titulo='Vino Tarapaca Reserva Carmenere Botella 750cc'
        descripcion='Valle: Valle Central Maridaje: Recomendamos disfrutar este Vino con pescados grasos, quesos fuertes y legumbres Temperatura: 16º' />

      <Footer />
    </div>
  );
}
export default App;