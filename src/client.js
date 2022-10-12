import * as contentful from 'contentful'

export const client = contentful.createClient({

    space: '0jopynzyimt3',
    accessToken: 'dUYNS0MP3TPpKunp35T_zUaH7a-GV71AIKUTfsUpmRA'

    // space: process.env.REACT_APP_SPACE_ID,
    // accessToken: process.env.REACT_APP_ACCESS_TOKEN
})