import "./myButton.css";

interface IMyButtonProps {
  type: "button" | "submit" | "reset";
  text: string;
  func: () => void;
}

function MyButton({ text, func, type }: IMyButtonProps) {
  return(
  <button className="myButton" type={type} onClick={func}>
    {text}
  </button>);
}
export default MyButton;
