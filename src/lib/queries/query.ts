import { gql } from 'graphql-request';

export const GET_PSYCHOLOGIST_DETAILS = gql`query Psychologists {
    psychologists {
      name
      title
      address
      education {
        id
        university
        degree
      }
      shortBio
      services {
        id
        previewText
        slug
        title
      }
      workExperience {
        id
        work
      }
      id
      phone
      profilePicture {
        id
        url
      }
    }
  }`