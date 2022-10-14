
interface InputProps {
    label: string;
    type?: string;
}

const Input = ({ label, type } : InputProps) => {
    return (<div style={{display: "flex", flexDirection: "column", gap: 2}}>
        <input type={type ?? "text"} name="input" className="input" />
        <label className="input__label" for="input">{label}</label>
    </div>);
}

export default Input;