import Image from 'next/image'

interface ProductCardProps {
	/** Title of the product */
	title: string
	/** Price of the product */
	price: number
	/** Image URL of the product */
	image: string
	/** Description of the product */
	imageAlt?: string
}
export function ProductCard({
	title,
	price,
	image,
	imageAlt,
}: ProductCardProps) {
	return (
		<div className="cursor-pointer px-3 py-2 flex justify-between border border-gray-100 space-x-4 shadow-xl bg-white rounded-xl ">
			<div className="flex flex-col justify-center w-1/2">
				<h1 className="text-gray-800">{title}</h1>
				<p className="font-medium">${price}</p>
			</div>
			<div>
				<Image
					src={image}
					height={80}
					width={80}
					alt={imageAlt ?? 'Image of a product'}
				/>
			</div>
		</div>
	)
}
