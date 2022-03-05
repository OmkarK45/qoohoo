import { AnimatePresence, motion } from 'framer-motion'

import { ProductCard } from '../Product/ProductCard'
import { ProductTitle } from '../Product/ProductTitle'
import { ProductDetails } from '../Product/ProductDetails'
import { ProductDetailsButton } from '../Product/ProductDetailsButton'

import { Blobs } from './Blobs'
import { ModelImage } from './ModelImage'
import { useAnimation } from '../../hooks/useAnimation'

export function Hero() {
	const { isAnimating } = useAnimation()

	return (
		<div className="flex flex-col h-full relative">
			<div className="container mx-auto h-full flex flex-wrap ">
				<div className="md:w-5/6 w-full pb-6 md:pb-0 md:pr-6 flex items-center ">
					<div className="flex flex-col flex-1 ml-24 justify-between">
						<AnimatePresence>
							<motion.div layout={true} className="flex items-center relative">
								<div>
									<ProductTitle />
									<ProductDetails />
								</div>
								<div className="absolute -right-20">
									<ProductDetailsButton />
								</div>
							</motion.div>
						</AnimatePresence>
					</div>

					<ModelImage />

					<Blobs />
				</div>

				{isAnimating ? (
					<div className="md:w-1/6 w-full flex flex-col justify-center">
						<motion.div
							initial={{ y: 500, opacity: 0 }}
							animate={{ y: 0, opacity: 1 }}
							transition={{ duration: 1 }}
							exit={{ y: -500, opacity: 0 }}
							className="flex flex-col space-y-6 max-w-[200px] mx-auto"
						>
							<ProductCard
								image="/assets/images/handbag.png"
								price={24}
								title="LV Handbag"
								imageAlt="Image of handbag"
							/>
							<ProductCard
								image="/assets/images/handbag2.png"
								price={24}
								title="Not LV Handbag"
								imageAlt="Image of handbag"
							/>
						</motion.div>
					</div>
				) : null}
			</div>
		</div>
	)
}
