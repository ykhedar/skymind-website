module.exports = {
	title: 'SkyMind',
	tagline: 'Low coding complete functional web applications',
	url: 'https://ykhedar.github.io',
	baseUrl: '/',
	onBrokenLinks: 'throw',
	favicon: 'icon/favicon.ico',
	organizationName: 'ykhedar',
	projectName: 'skymind-website',
	baseUrl: '/sky-mind/',
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
					alt: 'Schedule Meeting',
					href: 'https://calendly.com/skymind/demo',
                    className: 'header-calender-link',
					position: 'right'
				},
				{
					alt: 'Github repository',
					href: 'https://github.com/ykhedar/',
                    className: 'header-github-link',
					position: 'right'
				},
			],
		},
		footer: {
			style: 'dark',
			links: [
				{
					title: 'Contact',
					items: [
						{
							label: 'E-Mail',
							href: 'mailto:khedar@sky-mind.eu',
						},
					],
				},
			],
			copyright: `Copyright © ${new Date().getFullYear()} Skymind`,
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
