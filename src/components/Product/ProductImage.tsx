import { motion } from 'framer-motion'
import Image from 'next/image'

interface ProductImageProps {
	imageSrc: string
	label: string
	index: number
}

export function ProductImage({ imageSrc, label, index }: ProductImageProps) {
	return (
		<motion.div
			key={imageSrc}
			className="bg-green-100 w-20 h-32 overflow-hidden cursor-pointer"
			initial={{ x: 200, opacity: 0 }}
			animate={{ x: 0, opacity: 1 }}
			transition={{ duration: 0.5, delay: (index + 1) * 0.2 }}
			exit={{ x: -200, opacity: 0 }}
		>
			<Image
				src={imageSrc}
				alt={`Small thumbnail image for - ${label}`}
				width={80}
				height={130}
				objectFit="cover"
				objectPosition="top center"
				priority
			/>
		</motion.div>
	)
}
