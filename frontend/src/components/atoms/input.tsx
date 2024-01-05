import { InputProps } from "../../../types";

export default function Input({ name, label, error, ...rest }: InputProps) {
    return (
        <div className="input-block">
            <label htmlFor={name}>{label}</label>
            <input type="text" id={name} {...rest} />
            {error && <span className="error">{error}</span>}
        </div>
    )
}