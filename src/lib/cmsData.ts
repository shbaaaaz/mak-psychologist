import { GraphQLClient } from "graphql-request";
import { GET_PSYCHOLOGIST_DETAILS } from './queries/query'

const client = new GraphQLClient(process.env.NEXT_PUBLIC_CMS_ENDPOINT ?? '')

interface ApiResponse {
    psychologists: { name: string, title: string, shortBio:string, about:string, profilePicture: {
        id: string,
        url: string
    } }[]
}

export const fetchPsychologistDetails = async () => {
    try {
        const response: ApiResponse = await client.request(GET_PSYCHOLOGIST_DETAILS)
        if ( response?.psychologists?.length > 0 ) {
            console.log(response.psychologists)
            return response.psychologists[0]
        } else {
            throw new Error('Unexpected response format')
        }
    } catch (error: any) {
        if (error.response?.status === 404) {
            throw new Error('Not Found')
        } else {
            throw new Error('Something went wrong!')
        }
    }
    
}