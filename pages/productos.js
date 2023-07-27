import CustomTable from "@/components/CustomTHead/CustomTHead"

export default function productos() {

    const inventarioHeader = ['Id', 'Producto', 'Descripcion']
    const inventarioDatos = ['1', 'Notebook', 'No enciende']

    return (
        <div>
            <h1 className="text-sky-500 text-3xl">Productos</h1>
            <table className="min-w-full my-5">
                <CustomTable headerTable={inventarioHeader} datosTable={inventarioDatos} />
            </table>
        </div>
    )
}
