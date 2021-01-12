const projects = [
	{
		name: 'four-card-feature-section-master'	},
	{
		name: 'base-apparel-coming-soon-master'	},
	{
		name: 'signup-form-master'	},
	{
		name: 'single-price-grid-component-master'	},
	{
		name: 'ping-coming-soon-page-master'	},
	{
		name: 'huddle-landing-page'	},
	{
		name: 'huddle-simple-landing'	},
	{
		name: 'fylo-landing-page'	},
	{
		name: 'insure-landing-page'	},
	{
		name: 'pricing-toggle-component'	},
	{
		name: 'tracking-info'	},
	{
		name: 'clipboard-landing-page'	},
	{
		name: 'automotive-car-design'	}
];

const list = document.getElementById('list');

projects.forEach(({ name }, i) => {
	const listItem = document.createElement('li');

	listItem.innerHTML = `
		<a href="${name}/index.html">
			<img src="${name}/design/desktop-design.jpg" alt="${name}" />
			<p>${i + 1}. ${formatProjectName(name)}</p>
		</a>

		<div class="links-container">
			<a href="${name}/index.html" class="blue">
				<i class="fas fa-eye"></i>
			</a>
			<a href="https://github.com/gavin-crowley/html-css-reference/tree/main/${name}" class="github">
				<i class="fab fa-github"></i>
			</a>
		</div>
	`;

	list.appendChild(listItem);
});

function formatProjectName(name) {
	return name
		.split('-')
		.map(word => word[0].toUpperCase() + word.slice(1))
		.join(' ');
}
