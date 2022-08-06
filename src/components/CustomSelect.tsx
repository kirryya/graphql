import React from 'react';
import {Autocomplete, TextField} from "@mui/material";

type CustomSelectPropsType = {
    users: UsersType[]
    label: string
}

type UsersType = {
    name: string
    id: number
}


export const CustomSelect = (props: CustomSelectPropsType) => {
    return (
        <Autocomplete
            disablePortal
            id="combo-box"
            options={props.users}
            sx={{ width: 300 }}
            renderInput={(params) => <TextField {...params} label={props.label} />}
            getOptionLabel={option => option.name}
        />
    );
};


