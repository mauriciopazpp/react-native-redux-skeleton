export const settings =
{
    /*
    |--------------------------------------------------------------------------
    | Name of the app
    |--------------------------------------------------------------------------
    |
    |
    |
    */
    APP_NAME: 'App name',

    /*
    |--------------------------------------------------------------------------
    | Api of application
    |--------------------------------------------------------------------------
    |
    | This value determines the url of your api that your app will connect
    |
    */
    API_URL: 'http://0.0.0.0:9300/',

    /*
    |--------------------------------------------------------------------------
    | Timeout
    |--------------------------------------------------------------------------
    |
    |
    |
    */
    API_TIMEOUT: 10000,

    /*
    |--------------------------------------------------------------------------
    | Headers of API
    |--------------------------------------------------------------------------
    |
    | This values determines the global headers of your API requests
    |
    */
    API_HEADERS:{
                    'Accept': 'application/json',
                    'Content-Type' : 'application/x-www-form-urlencoded'
                }
}

export default settings
