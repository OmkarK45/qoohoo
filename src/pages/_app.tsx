import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { AnimatePresence } from 'framer-motion'
import { AnimationProvider } from '../hooks/useAnimation'

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<AnimatePresence>
			<AnimationProvider>
				<Component {...pageProps} />
			</AnimationProvider>
		</AnimatePresence>
	)
}

export default MyApp
