import { Hero } from '../Hero'
import { Navbar } from '../Navbar/Navbar'

export function PageLayout() {
	return (
		<div className="container mx-auto ">
			<div className="flex flex-wrap min-h-screen">
				<div className="md:w-3/4 w-full pb-6 md:pb-0 md:pr-6">
					<Navbar />
					<Hero />
				</div>
				<div className="md:w-1/4 w-full">
					<div className="rounded border-gray-300  dark:border-gray-700 border-dashed border-2 h-24" />
				</div>
			</div>
		</div>
	)
}
