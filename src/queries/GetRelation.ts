import {gql, useQuery} from '@apollo/client'

interface RelationQuery {
    id: number
    name: string
}


export const GET_RELATION = gql`
  query getUsers ($id: ID) {
  applicantIndividualCompanyRelation (id: $id) {
    id
    name
  }
}
`

const Relations = () => {
    const {data} = useQuery<RelationQuery>(GET_RELATION)
}

