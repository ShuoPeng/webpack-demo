export default (text = 'Hello World! by Shuo Peng') => {
	const element = document.createElement('div');

	element.innerHTML = text;

	return element;
};