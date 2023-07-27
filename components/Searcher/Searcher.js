
export default function Searcher(props) {
    return (
        <div className="my-4 p-4 border rounded-md">
            <input className="mx-auto p-2 border rounded-md w-full outline-none" type="text" placeholder="Buscar" onChange={props.handleChange} />            
        </div>
    )
}
