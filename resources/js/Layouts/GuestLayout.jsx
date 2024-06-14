import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/react';

export default function Guest({ children }) {
    return (
        <div className="min-h-screen flex flex-col sm:justify-center items-center pt-56 sm:pt-56 md:pt-5 bg-dark-primary">
            <div>
                <Link href="https://www.bodygym.com.mx/">
                    <ApplicationLogo className="w-22 h-20 fill-current text-gray-500" />
                </Link>
            </div>

            <hr className="mt-5 mb-5"/>

            <div className="w-full sm:max-w-md mt-6 px-6 py-4 bg-dark-primary shadow-md overflow-hidden sm:rounded-lg">
                {children}
            </div>
        </div>
    );
}
