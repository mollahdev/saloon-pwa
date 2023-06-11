import { User } from '@/types';

export type CurrentUserState = Omit<
    User,
    'password' | 'recoveryCode' | 'recoveryToken'
>;
export type Core = {
    isAppReady: boolean;
};

export type LoginFormData = {
    email?: string;
    password?: string;
};
