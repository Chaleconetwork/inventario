import Route from 'next/router';

export default function Login() {
    function handleClick() {
        Route.push('/dashboard');
    }
    return (
        <div className="bg-white p-8 rounded shadow-md w-96 m-auto">
            <h1 className="text-2xl font-bold mb-6">Iniciar Sesión</h1>
            <form>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" for="email">Correo Electrónico:</label>
                    <input className="w-full px-3 py-2 border border-gray-300 rounded" type="email" id="email" name="email"
                        placeholder="Ingresa tu correo electrónico" required />
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2" for="password">Contraseña:</label>
                    <input className="w-full px-3 py-2 border border-gray-300 rounded" type="password" id="password"
                        name="password" placeholder="Ingresa tu contraseña" required />
                </div>
                <div>
                    <button
                        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
                        type="submit"
                        onClick={handleClick}>Iniciar Sesión</button>
                </div>
            </form>
        </div>
    )
}
