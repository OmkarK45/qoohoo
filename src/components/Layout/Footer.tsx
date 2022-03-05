import { motion } from 'framer-motion'
import Link from 'next/link'
import {
	AiFillFacebook,
	AiOutlineInstagram,
	AiOutlineTwitter,
} from 'react-icons/ai'

export function Footer() {
	return (
		<div className="flex flex-wrap">
			<div className="md:w-3/4 w-full">
				<motion.div
					className=" bg-green-50 flex items-center space-x-2 px-16 py-8"
					initial={{ borderRightColor: '#ECFDF5' }}
					animate={{ borderRightColor: '#E5E7EB' }}
					transition={{ duration: 1, delay: 0.3 }}
					exit={{ borderRightColor: '#ECFDF5' }}
				>
					<motion.div
						className=" px-1.5 py-1 rounded border-2 border-gray-200 cursor-pointer"
						initial={{ x: 50, opacity: 0 }}
						animate={{ x: 0, opacity: 1 }}
						transition={{ duration: 1 }}
						exit={{ x: -50, opacity: 0 }}
					>
						<Link href="/" passHref>
							<AiFillFacebook className="text-xl" />
						</Link>
					</motion.div>
					<motion.div
						className=" px-1.5 py-1 rounded border-2 border-gray-200 cursor-pointer"
						initial={{ x: 50, opacity: 0 }}
						animate={{ x: 0, opacity: 1 }}
						transition={{ duration: 1, delay: 0.1 }}
						exit={{ x: -50, opacity: 0 }}
					>
						<Link href="/" passHref>
							<AiOutlineInstagram className="text-xl" />
						</Link>
					</motion.div>
					<motion.div
						className="px-1.5 py-1 rounded border-2 border-gray-200 cursor-pointer"
						initial={{ x: 50, opacity: 0 }}
						animate={{ x: 0, opacity: 1 }}
						transition={{ duration: 1, delay: 0.2 }}
						exit={{ x: -50, opacity: 0 }}
					>
						<Link href="/" passHref>
							<AiOutlineTwitter className="text-xl" />
						</Link>
					</motion.div>
				</motion.div>
			</div>
			<div className="md:w-1/4 w-full flex items-center justify-center font-medium border-l-2 border-gray-300 bg-white">
				SIZE GUIDE {`>`}
			</div>
		</div>
	)
}
