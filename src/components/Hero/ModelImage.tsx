import Image from 'next/image'
import { motion } from 'framer-motion'
import { useAnimation } from '../../hooks/useAnimation'

export function ModelImage() {
	const { isAnimating } = useAnimation()

	return (
		<motion.div
			initial={{ x: '-400px', opacity: 0 }}
			animate={
				isAnimating ? { x: '0', opacity: 1 } : { x: '250px', opacity: 1 }
			}
			transition={{ duration: 1, bounce: 0 }}
			exit={{ x: '400px', opacity: 0 }}
			className="z-[-1] h-full flex-1 flex items-end justify-end"
		>
			<span className="relative">
				<Image
					src={'/assets/images/1.png'}
					height={700}
					width={500}
					alt="Model wearning a long jacket and a hat"
				/>
			</span>
		</motion.div>
	)
}
