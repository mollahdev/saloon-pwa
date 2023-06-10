export type Role = 'super-admin' | 'admin' | 'basic' | 'client';
export type Status = 'active' | 'inactive';
export type User = {
    id: string,
    name: string,
    role: Role,
    online: boolean,
    status: Status,
    imageId: string,
    email: string,
    username: string,
    password: string,
    recoveryCode: string,
    recoveryToken: string,
    createdAt: string
}