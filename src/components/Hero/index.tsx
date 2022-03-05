import Image from 'next/image'
import Blob2, { Blob1 } from '../Blobs'
import { ProductCard } from '../Product/ProductCard'
import { AiOutlinePlus } from 'react-icons/ai'
import { ProductTitle } from '../Product/ProductTitle'
import { ProductDetailsButton } from '../Product/ProductDetailsButton'

export function Hero() {
	return (
		<div className="flex flex-col h-full relative">
			<div className="container mx-auto h-full flex flex-wrap ">
				<div className="md:w-5/6 w-full pb-6 md:pb-0 md:pr-6 flex items-center">
					<div className="flex flex-col flex-1 ml-24 justify-between items-center">
						<div className="flex items-center relative">
							<div className="font-bold tracking-tight text-6xl">
								<ProductTitle />
							</div>
							<div className="absolute -right-20">
								<ProductDetailsButton />
							</div>
						</div>
					</div>

					<div className="z-[-1] h-full flex-1 flex items-end justify-end">
						<span className="relative">
							<Image
								src={'/assets/images/model1.png'}
								width={600}
								height={1200}
								alt="Model wearning a long jacket and a hat"
							/>
						</span>
					</div>

					<div className="absolute z-[-2] inset-0 h-full flex-1 flex items-center justify-center">
						<div className="absolute h-full z-[-1]">
							<Blob1 className="h-full opacity-50" />
						</div>
						<div className="absolute h-full z-[-1]">
							<Blob2 className="h-full" />
						</div>
					</div>
				</div>
				<div className="md:w-1/6 w-full flex flex-col justify-center">
					<div className="flex flex-col space-y-6 max-w-[200px] mx-auto">
						<ProductCard
							image="/assets/images/handbag.png"
							price={24}
							title="LV Handbag"
							imageAlt="Image of handbag"
						/>
						<ProductCard
							image="/assets/images/handbag2.png"
							price={24}
							title="Not LV Handbag"
							imageAlt="Image of handbag"
						/>
					</div>
				</div>
			</div>
		</div>
	)
}
