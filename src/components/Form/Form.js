import Input from "../Input/Input";
import ButtonSegmentControl from "../ButtonSegmentControl/ButtonSegmentControl";
import "./Form.css";

export default function Form ({
    activeButton,
    inputValue,
    onChange,
    buttonValues,
    onClick
}) {
    return (
        <div className="form">
            <ButtonSegmentControl 
                buttonValues={buttonValues}
                activeButton={activeButton}
                onClick={onClick}
                />
            <Input inputValue={inputValue} onChange={onChange}  />
        </div>      
    );
}