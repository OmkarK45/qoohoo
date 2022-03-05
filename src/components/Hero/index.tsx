import Image from 'next/image'

export function Hero() {
	return (
		<div className="flex flex-col h-full relative ">
			<div className="absolute z-[-1] top-20 left-0 h-full">Blobs</div>

			<div className="container mx-auto h-full flex flex-wrap ">
				<div className="md:w-3/4 w-full pb-6 md:pb-0 md:pr-6  flex items-center">
					<div className="flex flex-col flex-1 ml-24 justify-between  items-center">
						<div className="font-bold tracking-tight text-6xl">
							<h1>Tied green</h1>
							<h1>V Neck Tshirt</h1>
						</div>
					</div>
					<div className=" z-[-1] h-full flex-1 flex items-center justify-center">
						<span className="relative">
							<Image
								src={'/assets/images/model1.png'}
								width={600}
								height={1200}
								alt="Model wearning a long jacket and a hat"
							/>
						</span>
					</div>
				</div>
				<div className="md:w-1/4 w-full">
					<div className="rounded border-gray-300  dark:border-gray-700 border-dashed border-2 h-24" />
				</div>
			</div>
		</div>
	)
}
