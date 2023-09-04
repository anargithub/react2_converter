import "./Input.css";

export default function Input({ inputValue, onChange }){
    return <input 
        value={inputValue}
        onChange={onChange}
/> 
    
}