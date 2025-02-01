import Bike from "../../Bike/Bike";
import Car from "../Car";
import mars from "./img/марс.jpg"



export default function Carshop(): JSX.Element {
  return (
    <div>
      <h1>Car shop</h1>
      <h2>Cars</h2>
      <Car brand="mercedes" color="black" />
      <Car brand="opel" color="green" />
      <Car brand="audi" color="blue" />
      <Car brand="vw" color="red" />
      <Car brand="tesla" color="grey" />
      <h1>первый способ загрузить картинку через импорт</h1>
      <img src={mars} alt="mars" />
      <h2>второй способ из папки public без точки перед слеш</h2>
      <img src="/марс.jpg" alt="" />
      <Bike gears="manual" brand="tesla" price="low" />
      <Bike gears="manual" brand="tesla" price="low" />
      <Bike gears="manual" brand="tesla" price="low" />
      <Bike gears="manual" brand="tesla" price="low" />
      <Bike gears="manual" brand="tesla" price="low" />
    </div>
  );
}
