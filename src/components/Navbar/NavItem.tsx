import clsx from 'clsx'
import { motion } from 'framer-motion'
import Link from 'next/link'

interface NavItemProps {
	/** Label for the Navigation Item */
	label: string
	/** Action link of the Navigation item */
	href: string
	/** Index of the current Item - Required for delayed animation */
	index: number
}
export function NavItem({ label, href, index }: NavItemProps) {
	return (
		<Link href={href} passHref>
			<motion.a
				initial={{ opacity: 0, x: 85 }}
				transition={{ duration: 1, delay: 0.3 * index }}
				animate={{ opacity: 1, x: 0 }}
				exit={{ opacity: 0, x: 85 }}
				className={clsx('px-6 py-4  cursor-pointer', {
					'border-red-500 border-b-2': index === 0,
				})}
			>
				{label}
			</motion.a>
		</Link>
	)
}
