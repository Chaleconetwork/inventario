
export default function CustomTHead(props) {

    return (
        <thead>
            <tr>
                {
                    props.headerTable.map((e, i) => (
                        <th className="px-6 py-3 bg-gray-100 text-left text-xs leading-4 font-medium uppercase tracking-wider border" key={i}>{e}</th>
                    ))
                }
            </tr>
        </thead>
    )
}
