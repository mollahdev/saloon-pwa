import { User } from '@/types';

export type CurrentUserState = Omit<
    User,
    'password' | 'recoveryCode' | 'recoveryToken'
>;
export type Core = {
    isAppReady: boolean;
};
