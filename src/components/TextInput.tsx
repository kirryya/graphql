import * as React from 'react';
import {ChangeEvent, KeyboardEvent, useState} from 'react';
import TextField from '@mui/material/TextField';
import {Button} from "@mui/material";

export const TextInput = () => {

    const [value, setValue] = useState<string>("")
    const [error, setError] = useState<boolean>(false)
    const [errorMessage, setErrorMessage] = useState<string>("")

    const onClickAddTask = () => {
        if (!value.length || value.charAt(0) === ' ') {
            setError(true)
            setErrorMessage("Required")
            setValue("")
        } else {
            if (value.length >= 5 && value.length <= 10) {
                console.log("TextInput: ", value)
                setValue("")
                setErrorMessage("")
            } else {
                if (value.length <= 4) {
                    setError(true)
                    setErrorMessage("Must be more than 5 symbols")
                } else {
                    setError(true)
                    setErrorMessage("Must be less than 10 symbols")
                }
            }
        }
    }

    const onChangeSetTitle = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
        setError(false)
        setErrorMessage("")
    }
    const onKeyPressSetTitle = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            onClickAddTask()
        }
    }

    return (
        <div>
        <TextField
            required
            value={value}
            id="outlined-basic"
            label={error ? errorMessage : "TextInput"}
            variant="outlined"
            error={!!errorMessage}
            onChange={onChangeSetTitle}
            onKeyPress={onKeyPressSetTitle}
            sx={{width: 300, marginTop: 1, marginLeft: 7}}
        />
            <Button variant="contained"
                    onClick={onClickAddTask}
                   style={{maxWidth: '40px', maxHeight: '40px', minWidth: '40px', minHeight: '40px', marginTop: '16px', marginLeft: '14px'}}
            >+</Button>
        </div>
    );
}
