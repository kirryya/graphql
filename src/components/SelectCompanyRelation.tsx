import {useQuery} from '@apollo/client';
import React from 'react';
import { GET_RELATION } from '../queries/GetRelation';

import {CustomSelect} from "./CustomSelect";

export const SelectCompanyRelation = () => {

    const {data, loading, error} = useQuery(GET_RELATION)

    const users = [
        {name: "Artsyom", id: 3},
        {name: "Dasha", id: 4},
    ]

    return (
        <div>
            <CustomSelect users={users} label={"Relation"}/>
        </div>
    );
};
