import { Link } from "react-router-dom";

export default function Invoice() {
	return (
		<main className="bg-blue-50 h-full py-20">
			<section className="w-8/12 mx-auto">
				{/* buttons */}
				<div className="flex gap-4 text-sm justify-end">
					<Link className="py-3 bg-blue-100 px-8 rounded-md text-blue-700" to="/">Back Home</Link>
					<button className="py-3 bg-blue-700 text-white px-8 rounded-md" type="button">Print</button>
				</div>

				{/* invoice */}
				<div className="mt-20 bg-white pt-20 px-16 rounded-md">
					<div className="flex">
						<div className="w-7/12">
							<span className="text-2xl font-bold">Logo</span>
							{/* invoice date */}
							<div className="flex flex-col mt-6">
								<span className="text-sm text-gray-700">Invoice date:</span>
								<span className="text-[0.85rem]">03/12/2023</span>
							</div>
							<div className="flex flex-col mt-16">
								<span className="font-medium">Supplier</span>
								<span className="text-[0.80rem] text-gray-800 mt-2">Hired Dream Job</span>
								<span className="mt-2 text-xs text-gray-600">300, Whatever street, Dhaka</span>
							</div>
						</div>
						<div className="w-5/12">
							<div className="flex gap-20">
								<span className="text-2xl font-medium">Invoice #</span>
								<span className="text-lg font-medium">123123123</span>
							</div>
							<div className="flex flex-col mt-6">
								<span className="text-sm text-gray-700">Due date:</span>
								<span className="text-[0.85rem]">03/12/2023</span>
							</div>
							<div className="flex flex-col mt-16">
								<span className="font-medium">Supplier</span>
								<span className="text-[0.80rem] text-gray-800 mt-2">Hired Dream Job</span>
								<span className="mt-2 text-xs text-gray-600">300, Whatever street, Dhaka</span>
							</div>
						</div>
					</div>
				</div>
			</section>
		</main>
	);
}
