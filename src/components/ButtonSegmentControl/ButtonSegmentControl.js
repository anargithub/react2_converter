import Button from "../Button/Button";

export default function ButtonSegmentControl({
  buttonValues,
  activeButton,
  onClick
}) {
  return (
    <div className="buttonSegmentControl">
      {buttonValues.map((currency) => {
        return (
          <Button
            key={currency}
            onClick={() => onClick(currency)}
            buttonValue={currency}
            activeButton={activeButton}
          />
        );
      })}
    </div>
  );
}
