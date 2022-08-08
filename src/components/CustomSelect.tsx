import React from 'react';
import {Autocomplete, TextField} from "@mui/material";

type CustomSelectPropsType = {
    users: UsersType[] | undefined
    label: string
    multiple?: boolean
}

export type UsersType = {
    name: string
    id: string
    __typename?: "ApplicantIndividualCompanyRelation" | "ApplicantIndividualCompanyPosition" | undefined
}

export const CustomSelect = (props: CustomSelectPropsType) => {
    return (
        <Autocomplete
            multiple={props.multiple}
            disablePortal
            id="combo-box"
            options={props.users ? props.users : []}
            sx={{width: 300, marginTop: 1}}
            renderInput={(params) => <TextField required {...params} label={props.label}/>}
            getOptionLabel={option => option.name}
        />
    );
};


