import Image from 'next/image'

export default function DashboardCard(props) {
    return (
        <div className={`${props.color} flex m-2 rounded-sm shadow-sm shadow-gray-600`}>
            <div className='bg-slate-400'>
                <Image
                    src=""
                    width={100}
                    height={0}
                    alt="Not found"
                />
            </div>
            <div className='p-4'>
                <h3 className='text-slate-50 text-1xl'>{props.nombre}</h3>
                <h4 className='text-slate-50 text-3xl'>{props.numero}</h4>
            </div>
        </div>
    )
}
