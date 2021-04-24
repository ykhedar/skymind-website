const versions = require('./versions.json');

module.exports = {
	title: 'SkyMind',
	tagline: 'Low coding complete functional web applications',
	url: 'https://docs.skymind.eu',
	baseUrl: '/',
	onBrokenLinks: 'throw',
	favicon: 'icon/favicon.ico',
	organizationName: 'skymind',
	projectName: 'website',
	themeConfig: {
		navbar: {
			title: 'Skymind',
			logo: {
				alt: 'Skymind Logo',
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
					href: 'https://discuss.skymind.eu/',
					to: 'community',
					label: 'Forum', position: 'left'
				},
				{
					alt: 'Github repository',
					href: 'https://github.com/ykhedar/',
          className: 'header-gitlab-link',
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
					title: 'Community',
					items: [
						{
							label: 'Forum',
							href: 'https://discuss.skymind.eu/',
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
						}
					],
				},
			],
			copyright: `Copyright © ${new Date().getFullYear()} Skymind U.G.`,
		},
		algolia: {
			apiKey: '0a6430e39d4d3b482366595f548b04f0',
			indexName: 'dev_skymind',
			searchParameters: {
				facetFilters: [`version:${versions[0]}`],
			},
		},
	},
	presets: [
		[
			'@docusaurus/preset-classic',
			{
				docs: {
					sidebarPath: require.resolve('./sidebars.js'),
					// Please change this to your repo.
					editUrl: 'https://gitlab.com/aweframework/awe/edit/master/website/',
					includeCurrentVersion: true,
					showLastUpdateTime: true,
					showLastUpdateAuthor: true,
				},
				blog: {
					showReadingTime: true,
					editUrl: 'https://gitlab.com/aweframework/awe/edit/master/website/',
					postsPerPage: 3,
					feedOptions: {
						type: 'all',
						language: 'es',
						copyright: `Copyright © ${new Date().getFullYear()} Almis, Inc.`,
					},
				},
				theme: {
					customCss: require.resolve('./src/css/custom.css'),
				},
			},
		],
	],
};
