import { motion } from 'framer-motion'
import { AiOutlinePlus } from 'react-icons/ai'

import { useAnimation } from '~/hooks/useAnimation'

export function ProductDetailsButton() {
	const { isAnimating, setIsAnimating } = useAnimation()

	return (
		<motion.button
			onClick={() => setIsAnimating(!isAnimating)}
			className="w-10 h-10 rounded-full bg-black"
			initial={{ opacity: 0 }}
			transition={isAnimating ? { duration: 1, delay: 0.3 } : { duration: 0.1 }}
			animate={isAnimating ? { opacity: 1 } : { opacity: 0 }}
			exit={{ opacity: 0 }}
		>
			<AiOutlinePlus className="w-full text-white" />
		</motion.button>
	)
}
