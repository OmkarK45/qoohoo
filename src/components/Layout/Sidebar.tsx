import { AnimatePresence, motion } from 'framer-motion'
import { AiOutlineShoppingCart, AiOutlineUser } from 'react-icons/ai'
import { RiArrowRightSLine } from 'react-icons/ri'

export function Sidebar() {
	return (
		<div className=" w-full h-full flex flex-col bg-white">
			<div className="py-4 flex items-center justify-center space-x-5">
				<div>
					<AiOutlineShoppingCart className="w-6 h-6" />
				</div>
				<div>
					<AiOutlineUser className="w-6 h-6" />
				</div>
			</div>
			<div className="flex h-full items-center ">
				<AnimatePresence>
					<motion.button
						className="absolute top-1/2 -left-6 bg-white px-3 py-3 rounded-full text-red-400 border-2 border-red-300 z-10"
						initial={{ opacity: 0, x: 200 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 1 }}
						exit={{ opacity: 0, x: 200 }}
					>
						<RiArrowRightSLine className="text-xl" />
					</motion.button>
					<motion.div
						className="relative w-full"
						initial={{ opacity: 0, x: 400 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 1 }}
						exit={{ opacity: 0, x: 400 }}
					>
						<motion.div
							className="relative h-[400px] overflow-hidden"
							initial={{ opacity: 0, height: '200px' }}
							animate={{ opacity: 1, height: '400px' }}
							transition={{ duration: 1, delay: 0.3 }}
							exit={{ opacity: 0, height: 0 }}
						>
							<img
								src="/assets/images/model3.jpg"
								alt="image of a model wearning black t shirt"
								className="relative w-1/2 h-full ml-auto object-cover bg-gray-500"
							/>
							<div className="w-full absolute top-3/4 left-0 rotate-90 z-10 font-bold text-4xl text-stroke">
								SUMMER 2020
							</div>
						</motion.div>
					</motion.div>
				</AnimatePresence>
			</div>
		</div>
	)
}
