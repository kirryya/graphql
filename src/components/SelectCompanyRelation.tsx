import React from 'react';
import {CustomSelect} from "./CustomSelect";

export const SelectCompanyRelation = () => {

    const users = [
        { name: "Artsyom", id:3 },
        { name: "Dasha", id:4 },
    ]

    return (
        <div>
            <CustomSelect users={users} label={"Children"}/>
        </div>
    );
};
