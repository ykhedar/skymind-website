module.exports = {
	title: 'SkyMind',
	tagline: 'Low coding complete functional web applications',
	url: 'https://sky-mind.eu',
	baseUrl: '/',
	onBrokenLinks: 'throw',
	favicon: 'icon/favicon.ico',
	organizationName: 'skymind',
	projectName: 'website',
	baseUrl: '/',
	themeConfig: {
		navbar: {
			title: '',
			logo: {
				alt: 'SKYMIND',
				src: 'img/logo.png',
				// srcDark: 'img/logo white.svg'
			},
			hideOnScroll: true,
			items: [
				{
					type: 'docsVersion',
					position: 'left',
					label: 'Docs',
				},
				{
					to: 'blog',
					label: 'Blog',
					position: 'left'
				},
				{
					alt: 'Github repository',
					href: 'https://github.com/ykhedar/',
                    className: 'header-github-link',
					position: 'right'
				},
				{
					href: 'https://api.sky-mind.eu/',
					to: 'community',
					label: 'APIs', 
					position: 'right'
				},
				{
					href: 'https://discuss.sky-mind.eu/',
					to: 'community',
					label: 'Forum', 
					position: 'right'
				},
			],
		},
		footer: {
			style: 'dark',
			links: [
				{
					title: 'Docs',
					items: [
						{
							label: 'Introduction',
							to: 'docs/',
						}
					],
				},
				{
					title: 'APIs',
					items: [
						{
							label: 'API',
							href: 'https://api.sky-mind.eu/',
						}
					],
				},
				{
					title: 'Community',
					items: [
						{
							label: 'Forum',
							href: 'https://discuss.sky-mind.eu/',
						},
					],
				},
				{
					title: 'Contact',
					items: [
						{
							label: 'Twitter',
							href: 'https://twitter.com/yogesh_khedar/',
						},
						{
							label: 'Linkedin',
							href: 'https://www.linkedin.com/in/yogeshkhedar/',
						},
						{
							label: 'E-Mail',
							href: 'mailto:khedar@sky-mind.eu',
						},
						{
							label: 'Github repository',
							href: 'https://github.com/ykhedar/',
						},
					],
				},
			],
			copyright: `Copyright © ${new Date().getFullYear()} Skymind U.G.`,
		},
	},
	presets: [
		[
			'@docusaurus/preset-classic',
			{
				docs: {
					sidebarPath: require.resolve('./sidebars.js'),
					// Please change this to your repo.
					editUrl: 'https://github.com/ykhedar/skymind-website/edit/master/',
					includeCurrentVersion: true,
					showLastUpdateTime: true,
					showLastUpdateAuthor: true,
				},
				blog: {
					showReadingTime: true,
					editUrl: 'https://github.com/ykhedar/skymind-website/edit/master/',
					postsPerPage: 3,
					feedOptions: {
						type: 'all',
						language: 'en',
						copyright: `Copyright © ${new Date().getFullYear()} Skymind, U.G.`,
					},
				},
				theme: {
					customCss: require.resolve('./src/css/custom.css'),
				},
			},
		],
	],
};
