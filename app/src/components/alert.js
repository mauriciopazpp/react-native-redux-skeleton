import { Alert as AlertReact } from 'react-native'

export const AlertError = (title,
    message = `Unexpected error! Please try again later`,
    problem = null) => {
    AlertReact.alert(
        title,
        problem ? `${message} \n ${problem}` : message,
        [ { text: 'OK' } ]
    )
}
