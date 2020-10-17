const site = {
	title: 'Kokodokai',
	description: 'An experiment with Sapper, Svelte, and Markdown',
	author: 'Ricky de Laveaga',
	link: 'https://kokodokai.com/',
	image: 'https://kokodokai.com/icon/favicon.png'
};

const months = ',Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec'.split( ',' );

function formatPubdate ( str ) {
	const [ y, m, d ] = str.split( '-' );
	return `${d} ${months[+m]} ${y}`;
}

export { formatPubdate, months, site };
