import clsx from 'clsx'
import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import { useAnimation } from '../../hooks/useAnimation'
import { ProductImage } from './ProductImage'

type Size = 'S' | 'M' | 'L'
const SIZE_OPTIONS: Array<Size> = ['S', 'M', 'L']

const PRODUCT_IMAGES = [
	{
		label: 'photo-1',
		imageSrc: '/assets/images/1.png',
	},
	{
		label: 'photo-2',
		imageSrc: '/assets/images/2.png',
	},
	{
		label: 'photo-3',
		imageSrc: '/assets/images/3.png',
	},
	{
		label: 'photo-4',
		imageSrc: '/assets/images/4.png',
	},
]

export function ProductDetails() {
	const [selectedSize, setSelectedSize] = useState<Size>('S')

	const { isAnimating } = useAnimation()

	return !isAnimating ? (
		<AnimatePresence>
			<motion.h1
				key="product-pricing-text"
				className="font-light text-4xl"
				initial={{ y: 200, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				transition={{ duration: 0.5, delay: 0.1 }}
				exit={{ y: -200, opacity: 0 }}
			>
				$99
			</motion.h1>
			<div className="flex items-center space-x-8 space-y-10">
				<motion.p
					key="product-details"
					className="font-normal text-base mt-6"
					initial={{ y: 200, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					transition={{ duration: 0.5, delay: 0.2 }}
					exit={{ y: -200, opacity: 0 }}
				>
					V-neck shirt with lapel collar. Long sleeves with cuffs. Front tie at
					hem. Front button closure.
				</motion.p>
				<motion.button
					className="py-7 px-6 rounded-full bg-red-600 bg-opacity-90 text-white text-base font-bold"
					initial={{ scale: 0, opacity: 0 }}
					animate={{ scale: 1, opacity: 1 }}
					transition={{ duration: 0.5, delay: 0.2 }}
					exit={{ scale: 0, opacity: 0 }}
				>
					ADD
				</motion.button>
			</div>
			<motion.div
				key="size-selector"
				className="flex flex-col justify-start items-start mt-5"
				initial={{ y: 200, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				transition={{ duration: 0.5, delay: 0.3 }}
				exit={{ y: -200, opacity: 0 }}
			>
				<label className="text-base font-medium">SELECT SIZE</label>
				<div className="space-x-2 mt-3">
					{SIZE_OPTIONS.map((size) => (
						<button
							key={size}
							className={clsx(
								'w-8 h-8 rounded-full border-2 border-black text-sm',
								size === selectedSize ? 'opacity-100' : 'opacity-40'
							)}
							onClick={() => {
								setSelectedSize(size)
							}}
						>
							{size}
						</button>
					))}
				</div>
			</motion.div>
			<motion.div
				key="product-image-list"
				className="flex space-x-4 mt-5"
				initial={{ y: 200, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				transition={{
					duration: 0.4,
					delay: 0.4,
				}}
				exit={{ y: -200, opacity: 0 }}
			>
				{PRODUCT_IMAGES.map((product, index) => (
					<ProductImage
						index={index}
						key={product.imageSrc}
						imageSrc={product.imageSrc}
						label={product.label}
					/>
				))}
			</motion.div>
		</AnimatePresence>
	) : null
}
