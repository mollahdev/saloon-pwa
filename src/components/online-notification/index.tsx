import { useSelector } from 'react-redux';
import { RootState } from '@/store';

export default function OnlineNotification() {
    const { isOnline } = useSelector<RootState, RootState['core']>(
        (state) => state.core
    );
    if (isOnline) return null;
    return (
        <p className="text-white text-center bg-indigo-500 py-2 font-normal fixed top-0 left-0 w-full">
            You are currently offline!
        </p>
    );
}
