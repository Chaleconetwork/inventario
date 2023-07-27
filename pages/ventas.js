import Image from 'next/image'
import { fetchApi } from "@/services/fetch"
import { useEffect, useState } from "react"
import Searcher from "@/components/Searcher/Searcher"
import GlobalModal from "@/components/Modal/GlobalModal"
import CustomTHead from "@/components/CustomTHead/CustomTHead"
import { headers } from 'next/dist/client/components/headers'

export default function ventas() {
    const ventasHeader = ['Id', 'Producto', "Cantidad", "Precio Unitario", "Total", "Fecha", "Acciones"]
    const [open, setOpen] = useState(false)
    const url = 'https://rickandmortyapi.com/api/character?page=1'

    const [data, setData] = useState([])
    const getVentas = async () => {
        const response = await fetchApi.getApi(url)
        setData(response.results)
    }

    useEffect(() => {
        getVentas()
    }, [])

    return (
        <div className="h-full overflow-scroll">
            <h1 className="text-sky-500 mb-4 text-3xl">Ventas</h1>
            <div>                
                <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600" onClick={() => setOpen(!open)}>Nueva Venta</button>
                <GlobalModal isOpen={open} onClose={() => setOpen(false)} />
            </div>
            <Searcher />
            <div>
                <table className="min-w-full border m-5 mx-auto border-gray-200">
                    <CustomTHead headerTable={ventasHeader} />
                    <tbody>
                        {
                            data.map(i => {
                                return (
                                    <tr className="px-6 py-4 whitespace-no-wrap border border-b border-gray-100" key={i.id}>
                                        <td className="text-sm px-6 leading-5 font-medium text-gray-900">
                                            {i.id}
                                        </td>
                                        <td className="text-sm px-6 leading-5 font-medium text-gray-900">
                                            {i.name}
                                        </td>
                                        <td className="text-sm px-6 leading-5 font-medium text-gray-900">
                                            <Image
                                                src={i.image}
                                                width={40}
                                                height={40}
                                                alt="Picture of the author"
                                            />
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}
