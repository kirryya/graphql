import {useLazyQuery} from '@apollo/client';
import React, {useEffect, useState} from 'react';
import {GET_POSITION} from '../queries/GetPosition';
import {CustomSelect, UsersType} from "./CustomSelect";


export const SelectCompanyPosition = () => {

    const [users, setUsers] = useState<UsersType[]>([{id: 1, name: "Vitya"}])

    const [getPosition, {data, error, loading}] = useLazyQuery<any, any>(
        GET_POSITION
    );

   /* useEffect(() => {
        if (!loading) {
            setUsers(data.name({
                    variables: {
                        id: 1
                    }
                }
            )
            )
        }
    }, [])*/

    return (
        <div>
            <CustomSelect users={users} label={"Position"}/>
        </div>
    );

};
