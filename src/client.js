import * as contentful from 'contentful'

//here the API key will be:

export const client = contentful.createClient({
    space:'',
    accessToken:''
})

// process.env.REACT_APP_SPACE_ID,
// process.env.REACT_APP_ACCESS_TOKEN
