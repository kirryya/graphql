import * as React from 'react';
import {ChangeEvent, KeyboardEvent, useState} from 'react';
import TextField from '@mui/material/TextField';

export const BasicTextFields = () => {

    const [value, setValue] = useState<string>("")
    const [error, setError] = useState<boolean>(false)

    const onClickAddTask = () => {
        if (value.length > 5 && value.length < 10) {
            console.log(value)
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
        <TextField
            value={value}
            id="outlined-basic"
            label={error ? errorMessage : "TextInput"}
            variant="outlined"
            error={!!errorMessage}
            onChange={onChangeSetTitle}
            onKeyPress={onKeyPressSetTitle}
        />

    );
}
