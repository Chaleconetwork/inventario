import Login from "@/components/Security/Login";

export default function Home() {
	return (
		<div className="flex w-screen h-screen">
			<div className="bg-slate-800 flex-1 flex items-center justify-center text-white">
				<h2>Inventario</h2>
			</div>
			<div className="flex-1 m-auto">
				<Login />
			</div>
		</div>
	)
}
