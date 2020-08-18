import { useState, useEffect } from 'react';

export function useBreakpoint(breakpoint: string) {
	const [isBreakpointMatched, setIsBreakpointMatched] = useState(false);

	useEffect(() => {
    const fullView = window.matchMedia(`(max-width: ${breakpoint})`);
		function myFunction(updatedView: any) {
			updatedView.matches
				? setIsBreakpointMatched(true)
				: setIsBreakpointMatched(false);
		}
		fullView.addListener(myFunction); // Attach listener function on state changes
		return () => {
			fullView.removeListener(myFunction); // Attach listener function on state changes
		};
	}, [breakpoint]);

	return isBreakpointMatched;
}
