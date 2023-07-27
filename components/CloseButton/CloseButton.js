export const CloseButton = ({onClose}) => {
    return (
        <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600" onClick={() => onClose()}>
            Close
        </button>
    )
}