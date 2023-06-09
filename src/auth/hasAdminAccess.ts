import { defer } from 'react-router-dom'

const validateUserLogin = async() => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(false)
        }, 2000)

        // resolve(true)
    })
}

export default async function hasAdminAccess() {
    return defer({
        data: validateUserLogin()
    })
}