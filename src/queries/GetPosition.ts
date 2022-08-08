import {gql, useQuery} from '@apollo/client'

interface PositionQuery {
    id: number
    name: string
}

export const GET_POSITION = gql`
  query 
  getPosition ($id: ID) {
  applicantIndividualCompanyPosition (id: $id) {
    id
    name
  }
}
`

const Positions = () => {
    const {data} = useQuery<PositionQuery>(GET_POSITION)
}