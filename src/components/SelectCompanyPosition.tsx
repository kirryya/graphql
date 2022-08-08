import React from 'react';
import {CustomSelect} from "./CustomSelect";
import {useGetPositionsQuery} from "../generated";

export const SelectCompanyPosition = () => {

    const {data, loading} = useGetPositionsQuery();

    if (loading) return <h3>Loading...</h3>;

    let users = data && data.applicantIndividualCompanyPositions?.data

    return (
        <div>
            <CustomSelect users={users} label={"Position"}/>
        </div>
    );

};