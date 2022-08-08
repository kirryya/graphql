import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import {ChangeEvent, KeyboardEvent, useState} from "react";

export const Multiline = () => {
    const [value, setValue] = useState<string>("")
    const [error, setError] = useState<boolean>(false)

    const onClickAddTask = () => {
        if (value.length > 5 && value.length < 10) {
            console.log(value)
            setValue(value)
        } else {
            setError(true)
        }
        /*setValue("")*/
    }

    const onChangeSetTitle = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
        setError(false)
    }
    const onKeyPressSetTitle = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            onClickAddTask()
        }
    }

    const errorMessage = error
        ? <div style={{color: "red"}}> Value is require! </div>
        : null



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