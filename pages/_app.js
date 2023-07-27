import '@/styles/globals.css'
import Sidebar from '@/components/Sidebar/Sidebar'
import { useRouter } from 'next/router'
import { Fragment } from 'react'
import Navbar from '@/components/Navbar/Navbar'

export default function App({ Component, pageProps }) {
    const router = useRouter()
    const showNavbar = router.pathname === '/' ? false : true

    return (
        <Fragment>
            <div>
                <Navbar />
            </div>
            <div className='flex'>
                {
                    showNavbar &&
                    <div className='w-1/6 min-w-min h-screen shadow-md shadow-gray-500'>
                        <Sidebar />
                    </div>
                }
                <div className={`${showNavbar ? `w-4/5` : 'w-screen p-0'} h-screen mx-auto p-2`}>
                    <Component {...pageProps} />
                </div>
            </div>
        </Fragment>
    )
}
