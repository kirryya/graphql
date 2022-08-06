import React from 'react';
import {CustomSelect} from "./CustomSelect";

export const SelectCompanyPosition = () => {

    const users = [
        { name: "Andrei", id:1 },
        { name: "Iryna", id:2 },
    ]

    return (
        <div>
            <CustomSelect users={users} label={"Parents"}/>
        </div>
    );
};
