import Image from 'next/image'
import { motion } from 'framer-motion'

import { useAnimation } from '~/hooks/useAnimation'
import { useTabs } from '~/hooks/useTabs'

export function ModelImage() {
	const { isAnimating } = useAnimation()
	const { currentImage } = useTabs()

	return (
		<motion.div
			className="z-[-1] h-full flex-1 flex items-end justify-end"
			layout
		>
			<motion.span
				initial={{ x: '-400px', opacity: 0 }}
				animate={
					isAnimating ? { x: '0', opacity: 1 } : { x: '250px', opacity: 1 }
				}
				transition={{ duration: 1, bounce: 0.3 }}
				exit={{ x: '400px', opacity: 0 }}
				className="relative"
			>
				<Image
					src={currentImage.imageSrc}
					height={700}
					width={500}
					alt="Model wearning a long jacket and a hat"
				/>
			</motion.span>
		</motion.div>
	)
}
