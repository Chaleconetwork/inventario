import Link from 'next/link'

export default function Sidebar() {
    return (
        <ul className="py-4">
            <li className="px-6 py-3 text-gray-500 hover:bg-sky-500 hover:text-white">
                <h1 className='text-2xl'>Navegación Inventario</h1>
            </li>
            <Link href="/dashboard">
                <li className="px-6 py-3 text-gray-500 hover:bg-sky-500 hover:text-white">
                    Dashboard
                </li>
            </Link>
            <Link href="/clientes">
                <li className="px-6 py-3 text-gray-500 hover:bg-sky-500 hover:text-white">
                    Clientes
                </li>
            </Link>
            <Link href="/inventario">
                <li className="px-6 py-3 text-gray-500 hover:bg-sky-500 hover:text-white">
                    Inventario
                </li>
            </Link>
            <Link href="/reportes">
                <li className="px-6 py-3 text-gray-500 hover:bg-sky-500 hover:text-white">
                    Reportes
                </li>
            </Link>
            <Link href="/ventas">
                <li className="px-6 py-3 text-gray-500 hover:bg-sky-500 hover:text-white">
                    Ordenes/Ventas
                </li>
            </Link>
            <Link href="/usuarios">
                <li className="px-6 py-3 text-gray-500 hover:bg-sky-500 hover:text-white">
                    Usuarios
                </li>
            </Link>
            <Link href="/configuracion">
                <li className="px-6 py-3 text-gray-500 hover:bg-sky-500 hover:text-white">
                    Configuración
                </li>
            </Link>
        </ul>
    )
}
