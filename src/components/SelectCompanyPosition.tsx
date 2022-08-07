import {useLazyQuery} from '@apollo/client';
import React, {useState} from 'react';
import {GET_POSITION} from '../queries/GetPosition';
import {CustomSelect, UsersType} from "./CustomSelect";


export const SelectCompanyPosition = () => {

    const [users, setUsers] = useState<UsersType[]>([{id: 1, name: "Vitya"}])

    const [getUsers, {data, error, loading}] = useLazyQuery<any, any>(
        GET_POSITION
    );

    return (
        <div>
            <CustomSelect users={users} label={"Position"}/>
        </div>
    );

};
