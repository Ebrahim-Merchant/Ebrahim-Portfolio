import { useCallback, useEffect } from "react";


export const useKeyPress = (callback: (_: any) => void) => {

	const handleKeyPress = useCallback(
    callback,
		[callback]
	)

	useEffect(() => {
		document.addEventListener('keydown', handleKeyPress);
		return () => {
			document.removeEventListener('keydown', handleKeyPress);
		}
	}, [handleKeyPress])
}