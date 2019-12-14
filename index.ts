/**
The native `Element.blur()` resets the tab focus to the start of the document; This places it back next to the blurred field.
*/
const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

export default function blurAccessibly(element: HTMLElement): void {
	element.blur();

	try {
		// "Replaced elements" can be selected fully so shift-tab works correctly.
		// Regular elements need to be selected only partially
		const isReplacedElement = /textarea|input|button/i.test(element.tagName);
		const canUseFullSelection = isReplacedElement && !isSafari;
		const range = new Range();

		if (canUseFullSelection) {
			range.selectNodeContents(element);
		} else {
			const focusHolder = new Text();
			element.after(focusHolder);
			range.selectNodeContents(focusHolder);
			setTimeout(() => {
				focusHolder.remove();
			});
		}

		const selection = getSelection()!;
		selection.removeAllRanges();
		selection.addRange(range);
	} catch (_) {
		// Maybe it's in Shadow DOM. This method is mostly unsupported by browsers themselves.
		// Example: https://bugs.webkit.org/show_bug.cgi?id=163921
	}
}
