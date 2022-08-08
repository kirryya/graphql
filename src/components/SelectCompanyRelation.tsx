import React from 'react';
import {CustomSelect} from "./CustomSelect";
import {useGetRelationsQuery} from "../generated";

export const SelectCompanyRelation = () => {

    const {data, loading} = useGetRelationsQuery();

    if (loading) return <h3>Loading...</h3>;

    let users = data && data.applicantIndividualCompanyRelations?.data

    return (
        <div>
            <CustomSelect users={users} label={"Relation"} multiple={true} />
        </div>
    );
};
