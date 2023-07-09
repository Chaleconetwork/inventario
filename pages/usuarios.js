import CustomTable from "@/components/CustomTHead/CustomTHead"

export default function usuarios() {

    const usuarioHeader = ['Id', 'Nombre', 'Cargo', 'Estado', 'Privilegios']
    const usuarioDatos = ['1', 'Chaleco', 'Desarrollador', 'Activo', 'Administrador']

    return (
        <div>
            <h1 className="text-sky-500 text-3xl">
                Usuarios
            </h1>
            <div>
                <CustomTable headerTable={usuarioHeader} datosTable={usuarioDatos} />
            </div>
        </div>
    )
}
