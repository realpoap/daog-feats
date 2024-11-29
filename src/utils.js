//helper function to set nested property
export const setProperty = (obj, path, value) => {
	const [head, ...rest] = path.split('.')

	return {
		...obj,
		[head]: rest.length
			? setProperty(obj[head], rest.join('.'), value)
			: value
	}
}

export function percentage(partialValue, totalValue) {
	return (100 * partialValue) / totalValue;
} 