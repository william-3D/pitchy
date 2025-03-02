import Image from 'next/image';
import Link from 'next/link';

import { auth } from '@/auth';

const Navbar = async () => {
    return (
        <header className='px-5 py-3 bg-white shadow-sm font-work-sans'>
            <nav className='flex justify-between items-center'>
                <Link href='/'>
                    <Image src='/logo.png' alt='Logo' width={100} height={30} />
                </Link>

                <div className="flex items-center gap-5">
                    {/* if logged in */}
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
