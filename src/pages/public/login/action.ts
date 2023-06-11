import { isEmpty } from 'lodash';

type RequestData = {
    formData: () => FormData;
};

const fetch = () =>
    new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(true);
        }, 500);
    });

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-ignore
export default async function loginAction({ request }) {
    const req = request as RequestData;

    const formData = await req.formData();
    const error: Record<string, string> = {};
    const email = formData.get('email');
    const password = formData.get('password');

    // if (isEmpty(email)) {
    // }
    error['email'] = 'Email is required';
    error['password'] = 'Password is required';

    // if (isEmpty(password)) {
    // }

    const response = await fetch();
    console.log(response);

    if (!isEmpty(error)) {
        return error;
    }

    return error;
}