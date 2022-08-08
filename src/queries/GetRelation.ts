import {gql} from '@apollo/client'

export const relationQueryDocument = gql`
  query getRelations {
  applicantIndividualCompanyRelations {
    data {
      id
      name
    }
  }
}
`

