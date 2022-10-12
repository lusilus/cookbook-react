import * as contentful from 'contentful'

//here the API key will be:

export const client = contentful.createClient({
    space: process.env.REACT_APP_SPACE_ID,
    accessToken: process.env.REACT_APP_ACCESS_TOKEN
})