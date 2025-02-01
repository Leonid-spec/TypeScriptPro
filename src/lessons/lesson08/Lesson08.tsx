import { useEffect, useState } from "react";
import MyButton from "../../components/myButton/MyButton";
import Lesson05 from "../lesson05/Lesson05";

export default function Lesson08(): JSX.Element {
  // изменения переменных состояния приведет к обновления и перерендру компонента Lesson08
  const [count, setCount] = useState<number>(0);
  const [dog, setDog] = useState<string>('');
  const [toggle, setToggle] = useState<boolean>(true);

  // эта функция произведет ререндер компонента
  // потому что она меняет переменную состояния
  // (мы меняем count просто как пример для обновления компонента и нигде не выводим его)
  const handleIncrease = (): void => {
    setCount(prev => prev + 1);
  };

  const handleToggle = () => {
    setToggle(prev => !prev)
  }

  // мы можем использовать useEffect, чтобы изолировать действия от многократного повторения при ререндере компонента
  // компонент обновляется в двух случаях:
  // 1. обновления состояния внутри него
  // 2. обновление его входящих пропсов
  // если мы не хотим чтобы действие внутри тела функции компонента сработало заново
  // мы можем обернуть его в useEffect()
  useEffect(() => {
    fetch('https://dog.ceo/api/breeds/image/random')
      .then(res => res.json())
      // если обновлять состояние в fetch запросе без useEffect() мы попадем в бесконечный цикл
      .then(data => setDog(data.message));
  }, []);


  // * эта строчка будет выводиться в консоль при каждом обновлении компонента
  console.log('lesson 8 render', dog);

  return (
    <div>
      <h2>UseEffect + migrate components ⚡️</h2>
      {/* чтобы использовать типизированный компонент нужно передать все обязательные props, которые указаны в его interface  */}
      <p>чтобы использовать типизированный компонент нужно передать все обязательные props, которые указаны в его interface </p>
      <MyButton
        text={`${toggle ? 'hide': 'show'} component`}
        func={handleToggle}
        type="button"
      />
      <MyButton
        text="rerender component"
        func={handleIncrease}
        type="button"
      />

{toggle && (
  <Lesson05 />
)}


    </div>
  );
}