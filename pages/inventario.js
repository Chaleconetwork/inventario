import CustomTable from "@/components/CustomTHead/CustomTHead"

export default function inventario() {

  const inventarioHeader = ['Id', 'Producto', 'Descripcion']
  const inventarioDatos = ['1', 'Notebook', 'No enciende']

  return (
    <div>
        <h1 className="text-sky-500 text-3xl">Inventario</h1>
        <div>
          <CustomTable headerTable={inventarioHeader} datosTable={inventarioDatos} />
        </div>
    </div>
  )
}
