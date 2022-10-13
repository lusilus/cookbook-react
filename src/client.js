import * as contentful from 'contentful'

//here the API key will be:

export const client = contentful.createClient({
    space:'0jopynzyimt3',
    accessToken:'dUYNS0MP3TPpKunp35T_zUaH7a-GV71AIKUTfsUpmRA'
})

// process.env.REACT_APP_SPACE_ID,
// process.env.REACT_APP_ACCESS_TOKEN