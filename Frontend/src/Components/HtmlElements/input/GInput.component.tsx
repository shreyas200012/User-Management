import styled from "styled-components"

const InputStyle = styled.input`
    height: 36px;
    padding: 6px;
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

type GInputProps = {
    name: string;
    value: any;
    onChange: (e: any) => void;
    type?: 'button' | 'checkbox' | 'color' | 'date' | 'datetime-local' | 'email' | 'file' | 'hidden' | 'image' | 'month' | 'number' | 'password' | 'radio' | 'range' | 'reset' | 'search' | 'submit' | 'tel' | 'text' | 'time' | 'url' | 'week'
    placeholder?: string;

}

const GInput = ({ name, value, onChange, type, placeholder }: GInputProps) => {

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (type === 'date') {
            // Format the date from "MM/DD/YYYY" to "YYYY-MM-DD" before passing it to the onChange function
            // const originalDate = e.target.value;
            // const dateParts = originalDate.split('/');
            // const newDateFormat = `${dateParts[2]}-${dateParts[0]}-${dateParts[1]}`;
            onChange(e);
        } else {
            onChange(e);
        }
    };

    return (
        <>
            <InputStyle placeholder={placeholder} type={type} name={name} value={value} onChange={handleChange} />
        </>
    )
}

export default GInput