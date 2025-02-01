import { useEffect, useState } from "react";
import MyButton from "../myButton/MyButton";
import "./fetchFox.css";
import Loader from "../loader/Loader";

// * типизация данных с сервера
interface IFoxData {
  image: string;
  link: string;
}

export default function FetchFox(): JSX.Element {
  // * переменная состояния для хранения полученной с сервера ссылки на картинку
  const [foxImg, setFoxImg] = useState<string>("");

  // = переменная переключатель лоадинг

  const [isLoading, setIsLoading] = useState<boolean>(true);

  // * асинхронная функция для получения данных с сервера
  const fetchFox = async (): Promise<void> => {
    const res = await fetch("https://randomfox.ca/floof/");
    const data: IFoxData = await res.json();
    setFoxImg(data.image);
    setIsLoading(false);
  };

  // * оборачиваем fetch запрос в useEffect, чтобы он вызывался только один раз в начале жизненного цикла
  useEffect(() => {
    fetchFox();
  }, []);

  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <div className="fox-wrapper">
            <img src={foxImg} alt="" />
          </div>
          <MyButton func={fetchFox} text="get new fox" type={"button"} />
        </>
      )}
      ;
    </div>
  );
}
