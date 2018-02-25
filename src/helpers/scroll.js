export const hashLinkScroll = () => {
	const { hash } = window.location;
	if (hash !== '') {
		setTimeout(() => {
			const id = hash.replace('#', '');
			const element = document.getElementById(id);
			if (element) element.scrollIntoView();
		}, 200);
	}
};

export const isInView = (elemId, offset) => {
	const elem = document.getElementById(elemId);

	const viewTop = document.documentElement.scrollTop || document.body.scrollTop;
	const viewBottom = viewTop + window.innerHeight;

	const elemTop = elem.offsetTop + offset;
	const elemBottom = elem.offsetTop + elem.offsetHeight - offset;

	return elemBottom <= viewBottom && elemTop >= viewTop;
};
