import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { AnimatePresence } from 'framer-motion'
import { AnimationProvider } from '../hooks/useAnimation'
import { TabProvider } from '../hooks/useTabs'

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<AnimatePresence>
			<AnimationProvider>
				<TabProvider>
					<Component {...pageProps} />
				</TabProvider>
			</AnimationProvider>
		</AnimatePresence>
	)
}

export default MyApp
