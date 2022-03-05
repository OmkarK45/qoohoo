import { motion } from 'framer-motion'

export function ProductTitle() {
	return (
		<div className="uppercase">
			<motion.h1
				animate={{ x: 0, opacity: 1 }}
				initial={{ x: -300, opacity: 0 }}
				transition={{ duration: 1 }}
				exit={{ x: 300, opacity: 0 }}
			>
				Tied Green <br />
			</motion.h1>
			<motion.h1
				initial={{ x: 150, opacity: 0 }}
				animate={{ x: 0, opacity: 1 }}
				transition={{ duration: 1 }}
				exit={{ x: -150, opacity: 0 }}
			>
				V-Neck Shirt
			</motion.h1>
		</div>
	)
}
