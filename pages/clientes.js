import { useEffect, useState } from "react"
import { fetchApi } from "@/services/fetch"
import Image from 'next/image'
import CustomTHead from "@/components/CustomTHead/CustomTHead"
import Searcher from "@/components/Searcher/Searcher"

export default function clientes() {

    const clientesHeader = ['Id', 'Nombre', "Foto"]
    const url = 'https://rickandmortyapi.com/api/character?page=1'

    const [data, setData] = useState([])
    const getClientes = async () => {
        const response = await fetchApi.getApi(url)
        setData(response.results)
    }

    const [inputValue, setInputValue] = useState('')
    const handleChange = e => {
        setInputValue(e.target.value)
    }

    useEffect(() => {
        getClientes()
    }, [])

    return (
        <div className="h-full overflow-scroll">
            <h1 className='text-sky-500 text-3xl'>Clientes</h1>
            <Searcher handleChange={handleChange} />
            {console.log(inputValue)}
            <div>
                <table className="min-w-full border my-5 border-gray-200">
                    <CustomTHead headerTable={clientesHeader} />
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
        </div >
    )
}
