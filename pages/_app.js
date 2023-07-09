import '@/styles/globals.css'
import Sidebar from '@/components/Sidebar/Sidebar'
import { Fragment } from 'react'

export default function App({ Component, pageProps }) {
    return (
        <div className='flex'>
            <div className='w-1/5 min-w-min h-screen shadow-md shadow-gray-500'>
                <Sidebar />
            </div>
            <div className='w-4/5 h-screen p-2'>
                <Component {...pageProps} />
            </div>
        </div>
    )
}
