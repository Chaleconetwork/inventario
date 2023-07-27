import DashboardCard from '@/components/Dashboard-card/DashboardCard'

export default function dashboard() {
    return (
        <div>
            <h1 className='text-sky-500 text-3xl'>Dashboard</h1>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 py-3'>
                <DashboardCard nombre='Productos' numero={150} color='bg-red-500' />
                <DashboardCard nombre='Clientes' numero={15} color='bg-green-500' />
                <DashboardCard nombre='Reportes' numero={30} color='bg-yellow-400' />
                <DashboardCard nombre='Ventas' numero={20} color='bg-blue-500' />
            </div>
        </div>
    )
}
