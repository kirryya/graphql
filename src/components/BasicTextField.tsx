import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export const BasicTextFields = () => {
    return (
        <Box
            component="form"
            sx={{
                '& > :not(style)': {m: 1, width: '300px'},
            }}
            noValidate
            autoComplete="off"
        >
            <TextField id="outlined-basic" label="TextInput" variant="outlined"/>
        </Box>
    );
}
