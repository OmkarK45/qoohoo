import { Hero } from '../Hero'
import { Navbar } from '../Navbar/Navbar'
import { Footer } from './Footer'
import { Sidebar } from './Sidebar'

export function PageLayout() {
	return (
		<div>
			<div className="flex min-h-[90vh] h-auto flex-wrap ">
				<div className="md:w-3/4 w-full ">
					<Navbar />
					<Hero />
				</div>
				<div className="md:w-1/4 w-full relative border-l-2 border-gray-300">
					<Sidebar />
				</div>
			</div>
			<Footer />
		</div>
	)
}
