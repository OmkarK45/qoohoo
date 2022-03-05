import Link from 'next/link'
import { motion } from 'framer-motion'
import { CgMenuMotion } from 'react-icons/cg'
import { RiShoppingCart2Line, RiHeartLine } from 'react-icons/ri'

import { NavItem } from './NavItem'

const NAVIGATION_LINKS = [
	{
		label: 'NEW',
		href: '/new',
	},
	{
		label: 'Sale',
		href: '#',
	},
	{
		label: 'Man',
		href: '#',
	},
	{
		label: 'Women',
		href: '#',
	},
]
export function Navbar() {
	return (
		<div className="flex items-center justify-between border-b-2 border-gray-200 ">
			<div className="flex items-center ">
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 1 }}
					className="px-6 py-4 border-r-2 border-gray-200 cursor-pointer"
				>
					<Link href={'#'} passHref>
						<CgMenuMotion className="w-5 h-5" />
					</Link>
				</motion.div>

				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 1 }}
					className="px-6 py-4 border-r-2 border-gray-200 cursor-pointer"
				>
					<RiShoppingCart2Line className="w-5 h-5" />
				</motion.div>
				<ul className="flex items-center font-bold uppercase">
					{NAVIGATION_LINKS.map((item, index) => {
						return (
							<NavItem
								index={index}
								key={item.label}
								label={item.label}
								href={item.href}
							/>
						)
					})}
				</ul>
			</div>
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 1 }}
				className="flex items-center space-x-4 pr-2"
			>
				<div>
					<div className="relative p-2">
						<RiHeartLine className="w-5 h-5" />
						<span className="absolute top-0 right-0 flex w-4 h-4 text-white text-xs items-center justify-center rounded-full bg-black">
							0
						</span>
					</div>
				</div>
				<div>
					<Link href="#" passHref>
						<a href="#" className="uppercase font-bold">
							Search
						</a>
					</Link>
				</div>
			</motion.div>
		</div>
	)
}
