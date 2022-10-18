import { Head } from "$fresh/runtime.ts";

interface InputProps {
    label: string;
    type?: string;
}

const Input = ({ label, type } : InputProps) => {
    return (<div style={{display: "flex", flexDirection: "column", gap: 2}}>
        <Head>
            <link href="/stylesheets/Input.css" rel="stylesheet" />
        </Head>
        
        <input type={type ?? "text"} name="input" className="input" />
        <label className="input__label" for="input">{label}</label>
    </div>);
}

export default Input;