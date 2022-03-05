import { motion } from 'framer-motion'
import { useAnimation } from '../../hooks/useAnimation'
import Blob2, { Blob1 } from '../Blobs'

export function Blobs() {
	const { isAnimating } = useAnimation()

	return (
		<div className="absolute z-[-2] inset-0 h-full flex-1 flex items-center justify-center">
			<motion.div
				initial={{ scale: 1.25, opacity: 0 }}
				animate={
					isAnimating
						? { scale: 1, opacity: 1 }
						: { scale: 1, opacity: 1, x: '400px' }
				}
				transition={{ duration: 1 }}
				exit={{ scale: 1.25, opacity: 0 }}
				className="absolute h-full z-[-1]"
			>
				<Blob1 className="h-full opacity-50" />
			</motion.div>
			<motion.div
				key="blob2"
				className="absolute h-full z-[-1]"
				initial={{ scale: 1.25, opacity: 0 }}
				animate={
					isAnimating
						? { scale: 1, opacity: 1 }
						: { scale: 1, opacity: 1, x: '400px' }
				}
				transition={{ duration: 1 }}
				exit={{ scale: 1.25, opacity: 0 }}
			>
				<Blob2 className="h-full" />
			</motion.div>
		</div>
	)
}
