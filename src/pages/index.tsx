import type { NextPage } from 'next'
import { motion } from 'framer-motion'
import { PageLayout } from '../components/Layout'

const Home: NextPage = () => {
	return (
		<div className="min-h-screen antialiased">
			<PageLayout />
		</div>
	)
}

export default Home
