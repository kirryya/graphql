import {useLazyQuery} from '@apollo/client';
import React, {useEffect} from 'react';
import {GET_RELATION} from '../queries/GetRelation';
import {CustomSelect} from "./CustomSelect";

export const SelectCompanyRelation = () => {

    /*const [getRelation, {data, loading, error}] = useLazyQuery(GET_RELATION)

    useEffect(() => {
        if (!loading) {
            getRelation({
                    variables: {
                        id: 1
                    }
                }
            )

        }
    }, [getRelation])*/

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
