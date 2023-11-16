import { TextField } from "@mui/material"
import { styled } from "@mui/material";


const CssTextField = styled(TextField)({
    '& label.Mui-focused': {
        color: '#A0AAB4',
    },
    '& .MuiInput-underline:after': {
        borderBottomColor: '#B2BAC2',
    },
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: '#E0E3E7',
        },
        '&:hover fieldset': {
            borderColor: '#B2BAC2',
        },
        '&.Mui-focused fieldset': {
            borderColor: '#6F7E8C',
        },
    },
});


type InputProps = {
    name: string;
    value: string;
    label?: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    size?: 'small' | 'medium'
    type?: 'button' | 'checkbox' | 'color' | 'date' | 'datetime-local' | 'email' | 'file' | 'hidden' | 'image' | 'month' | 'number' | 'password' | 'radio' | 'range' | 'reset' | 'search' | 'submit' | 'tel' | 'text' | 'time' | 'url' | 'week'
    error?: boolean;
    helperText?: string;
    style?: React.CSSProperties
}

const Input = ({ name, value, label, onChange, size, type, error, helperText, style }: InputProps) => {

    return (
        <>
            <CssTextField
                sx={style}
                name={name}
                value={value}
                label={label}
                onChange={onChange}
                size={size ? size : 'small'}
                id="margin-none"
                type={type}
                helperText={helperText}
                error={error}

            />
        </>
    )
}


export default Input