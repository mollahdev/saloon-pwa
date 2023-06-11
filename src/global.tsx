import { useEffect } from 'react';
import { Store, iNotification } from 'react-notifications-component'
import { addAction } from '@mollahdev/hooks-js';

let hooks: Record<string, unknown> = {}
export default function Global() {

    // register notification hook
    useEffect(() => {
        if( !hooks['notification'] ) {
            hooks = addAction('notification', (data: iNotification) => {
                Store.addNotification({
                    animationIn: ["animate__animated", "animate__fadeIn"],
                    dismiss: {
                        duration: 2000,
                    },
                    ...data
                });       
            })
        }
    }, [])

    return null;
}