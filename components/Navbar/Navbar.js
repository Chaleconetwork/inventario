import Link from 'next/link'

export default function Navbar() {
    return (
        <nav className='shadow-sm'>
            <ul className='flex justify-end'>
                <Link href='/'>
                    <li className='p-2 hover:bg-cyan-400 hover:text-white'>Cerrar Sesión</li>
                </Link>
            </ul>
        </nav>
    )
}
