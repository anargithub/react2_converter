import "./Button.css";

export default function Button({ buttonValue, activeButton, onClick }) {
  return (
    <button
      className={`course__button ${
        activeButton === buttonValue ? "active" : ""
      }`}
      onClick={onClick}
    >
      {buttonValue}
    </button>
  );
}
