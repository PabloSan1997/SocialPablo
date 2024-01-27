import 'dotenv/config';


export const envVariables = {
    port: process.env.PORT || 3002,
    url_database: process.env.URL_DATABASE,
    key_jwt: process.env.KEY_JWT,
    allow_api: process.env.ALLOW_API,
    dev_mode: process.env.MODE_PROJECT === 'dev'
}
