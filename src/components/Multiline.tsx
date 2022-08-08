import * as React from 'react';
import {ChangeEvent, KeyboardEvent, useState} from 'react';
import TextField from '@mui/material/TextField';

export const Multiline = () => {
    const [value, setValue] = useState<string>("")
    const [error, setError] = useState<boolean>(false)
    const [errorMessage, setErrorMessage] = useState<string>("")


    const onClickAddTask = () => {
        if (value.length >= 5 && value.length < 10) {
            console.log(value)
            setValue("")
            setErrorMessage("")
        } else {
            if (value.length < 4) {
                setError(true)
                setErrorMessage("Must be more than 5")
            } else {
                setError(true)
                setErrorMessage("Must be less than 10")
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
                id="outlined-multiline-static"
                label={error ? errorMessage : "TextArea"}
                multiline
                rows={4}
                error={!!errorMessage}
                onChange={onChangeSetTitle}
                onKeyPress={onKeyPressSetTitle}
            />
        </div>
    );
}