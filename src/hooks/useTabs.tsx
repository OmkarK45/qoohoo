import { createContext, useState, useContext } from 'react'

import type { Dispatch, SetStateAction, ReactNode } from 'react'

interface CurrentImage {
	label: string
	imageSrc: string
}

type TabProviderType = {
	currentImage: CurrentImage
	setCurrentImage: Dispatch<SetStateAction<CurrentImage>>
}

const INITIAL_STATE: TabProviderType = {
	currentImage: {
		imageSrc: '/assets/images/1.png',
		label: 'photo-1',
	},
	setCurrentImage: () => {},
}

const TabContext = createContext<TabProviderType>(INITIAL_STATE)

export function TabProvider({ children }: { children: ReactNode }) {
	const [currentImage, setCurrentImage] = useState(INITIAL_STATE.currentImage)
	return (
		<TabContext.Provider value={{ currentImage, setCurrentImage }}>
			{children}
		</TabContext.Provider>
	)
}

export function useTabs() {
	const context = useContext(TabContext)
	if (context === undefined) {
		throw new Error('useTabs must be used within a TabProvider')
	}
	return useContext(TabContext)
}
