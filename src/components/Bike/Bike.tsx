interface Props {
  gears: string;
  brand: string;
  price: string;
}

export default function Bike(props: Props): JSX.Element {
  const { gears, brand, price } = props;
  return (
    <div>
      Gears:{gears} Brand:{brand} Price:{price}
    </div>
  );
}
