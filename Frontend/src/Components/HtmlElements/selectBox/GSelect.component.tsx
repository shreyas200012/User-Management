import styled from "styled-components"


const SelectStyle = styled.select`
    height: 36px;
    padding: 6px 10px;
    width: 100%;
    border: 1px solid gray;
    box-sizing: border-box;
    &:focus{
        outline-color: #3498db;
        box-shadow: 0 0 5px 0 rgba(52, 152, 219, 0.5);
    }

    &::placeholder{
        color: #999;
        font-family: Verdana, Geneva, Tahoma, sans-serif;
    }
    border-radius: 4px;
    font-size: 14px;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
`


type GSelectProps = {
    name: string;
    value: any;
    onChange: (e: any) => void;
    options: {
        label: string;
        value: any;
    }[];
    placeholder?: string;
}

const GSelect = ({ name, value, onChange, options, placeholder }: GSelectProps) => {
    return (
        <SelectStyle name={name} value={value} onChange={onChange}>
            {placeholder && (
                <option value="" disabled hidden>
                    {placeholder}
                </option>
            )}
            {options.map(({ label, value }) => (
                <option key={value} value={value}>
                    {label}
                </option>
            ))}
        </SelectStyle>
    );
};

export default GSelect;