import { User } from '@/types';

type CurrentUser = Omit<User, 'password' | 'recoveryCode' | 'recoveryToken'>;

export type CurrentUserState = {
    user: CurrentUser;
    token: string;
};

export type Core = {
    isOnline: boolean;
};

export type LoginFormData = {
    email?: string;
    password?: string;
};

export type CoreState = {
    isOnline: boolean;
};
