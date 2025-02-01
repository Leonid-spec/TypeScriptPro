import React, { useEffect, useState } from "react";

export default function PlayGround(): JSX.Element {
  const [numberOfDogs, setNumberOfDogs] = useState<number>(0);
  const [numberOfBirds, setNumberOfBirds] = useState<number>(10);

  function handleAddDog(): void {
    setNumberOfDogs(numberOfDogs + 1);
  }
  function handleAddBirds(): void {
    setNumberOfBirds(numberOfBirds + 1);
  }
  // Component lifcycle - жизненный цикл компонента
  // Этапы жизненого цикла:
  // Mount - первая отрисовка компонента на странице
  // Update - изменение
  // Unmount - когда перестает отрисовываться

  // useEffect
  // позволяет вызвать функцию
  // на каком-нибудь из этапов жизни компонента
  // - принимает колбек функцию и второй опиональный параметр -
  // массив зависимостей

  useEffect(() => {
    console.log("useEffect 1 - только при первой отрисовке === mount");
  }, []);

  // пример 2 - без массива зависимостей(вообще)
  useEffect(() => {
    console.log("UseEffect 2 - только при маунте и при любых изменениях");
  });

  // пример 3 - с указанием зависимостей

  useEffect(() => {
    console.log(
      "UseEffect 3 - при первичной отрисовке при изменении переменной"
    );
  }, [numberOfDogs]);

  return (
    <div>
      <h1>PlayGround</h1>
      <p>Number of Dogs:{numberOfDogs}</p>
      <p>Number of Birds: {numberOfBirds}</p>
      <button type="button" onClick={handleAddDog}>
        Let the dog in
      </button>
      <button type="button" onClick={handleAddBirds}>
        KFC
      </button>
    </div>
  );
}
