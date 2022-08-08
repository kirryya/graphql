import {gql} from '@apollo/client'

export const positionQueryDocument = gql`
  query getPositions {
  applicantIndividualCompanyPositions {
    data {
      id
      name
    }
  }
}
`