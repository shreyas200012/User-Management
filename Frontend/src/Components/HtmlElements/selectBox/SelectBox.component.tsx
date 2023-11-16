import { InputLabel, Select, MenuItem, FormControl } from "@mui/material"

type SelectBoxProps = {
    label: string;
    value: any;
    onChange: (e: any) => void;
    options: {
        label: string;
        value: string;
    }[];
    size?: 'small' | 'medium'
}

const SelectBox = ({ label, value, onChange, options, size }: SelectBoxProps) => {

    return (
        <>
            <FormControl fullWidth>

                <InputLabel id="demo-simple-select-label">{label}</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={value}
                    label={label}
                    onChange={onChange}
                    size={size}
                >
                    {options.map((option) => (
                        <>

                            <MenuItem value={option.value}>{option.label}</MenuItem>
                        </>
                    ))}

                </Select>
            </FormControl>
        </>
    )
}

export default SelectBox