
import { DemoContainer } from '@mui/x-date-pickers/internals/demo'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from "@mui/x-date-pickers"
import { DatePicker } from "@mui/x-date-pickers"


type MuiDatePickerProps = {
    value: any;
    label: string;
    onChange: (e: any) => void;
}

const MuiDatePicker = ({ value, label, onChange }: MuiDatePickerProps) => {

    return (
        <>
            <LocalizationProvider dateAdapter={AdapterDayjs} >
                <DemoContainer components={['DatePicker']}  >
                    <DatePicker value={value} label={label} onChange={onChange} sx={{ width: '100%' }} />
                </DemoContainer>
            </LocalizationProvider>
        </>
    )
}

export default MuiDatePicker