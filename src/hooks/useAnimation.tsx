import React, { createContext, useContext } from 'react'
import type { Dispatch, SetStateAction, ReactNode } from 'react'

type AnimationProviderType = {
	isAnimating: boolean
	setIsAnimating: Dispatch<SetStateAction<boolean>>
}

const INITIAL_STATE: AnimationProviderType = {
	isAnimating: true,
	setIsAnimating: () => {},
}

const AnimationContext = createContext(INITIAL_STATE)

export function AnimationProvider({ children }: { children: ReactNode }) {
	const [isAnimating, setIsAnimating] = React.useState(true)
	return (
		<AnimationContext.Provider value={{ isAnimating, setIsAnimating }}>
			{children}
		</AnimationContext.Provider>
	)
}

export function useAnimation() {
	const context = useContext(AnimationContext)
	if (context === undefined) {
		throw new Error('useAnimation must be used within a AnimationProvider')
	}
	return React.useContext(AnimationContext)
}
