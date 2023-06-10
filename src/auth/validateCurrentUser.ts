import { defer } from 'react-router'
import { CurrentUserState } from '@/types/store'
import store from '@/store'
import { currentUserActions } from '@/store/currentUser'

const dummyUser: CurrentUserState = {
    id: '1',
    name: 'John Doe',
    email: '',
    status: 'active',
    role: 'admin',
    createdAt: '2021-01-01 12:00:00',
    imageId: '',
    online: true,
    username: 'johndoe',
}

const validateCurrentUser = async () => {
    const fetch = (): Promise<CurrentUserState | NonNullable<unknown>> => new Promise((resolve, reject) => {
        const hasUser = store.getState().currentUser;
        // resolve({})
        if( hasUser.username ) return resolve(hasUser);

        setTimeout(() => {
            store.dispatch( currentUserActions.setUser( dummyUser ) )
            resolve(dummyUser)
        }, 2000)
    })
  
    return defer({ currentUser: fetch() })
}

export default validateCurrentUser