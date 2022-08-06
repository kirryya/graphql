import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export const Multiline = () => {
   /* const [value, setValue] = React.useState('Controlled');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
    };*/

    return (
        <Box
            component="form"
            sx={{
                '& .MuiTextField-root': {m: 1, width: '300px'},
            }}
            noValidate
            autoComplete="off"
        >
            <div>
                <TextField
                    id="outlined-multiline-static"
                    label="TextArea"
                    multiline
                    rows={4}
                />
            </div>
        </Box>
    );
}