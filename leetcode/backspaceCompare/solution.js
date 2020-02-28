const backspaceCompare = (S, T) => backspace(S) === backspace(T)

const backspace = str => {
	const backspaced = []

	for (const c of [...str]) {
		c === '#' ? backspaced.pop() : backspaced.push(c)
	}

	return backspaced.join('')
}

module.exports = { backspaceCompare }