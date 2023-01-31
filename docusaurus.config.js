const lightCodeTheme = require('prism-react-renderer/themes/github')
const darkCodeTheme = require('prism-react-renderer/themes/dracula')

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'sinso',
  tagline: '',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: ' ',
      logo: {
        alt: 'My Site Logo',
        src: 'img/img-logo.png',
        href: 'docs/welcome',
      },
      items: [
        {
          label: 'GitHub',
          position: 'right',
          to: 'https://github.com/sinsoio',
        },
        // {
        //   label: 'About Us',
        //   position: 'right',
        //   to: 'docs/About/aboutUs',
        //   items: [
        //     {
        //       label: 'Mission and Vision',
        //       to: 'docs/About/mission',
        //     },
        //     {
        //       label: 'Company Values',
        //       to: 'docs/About/company',
        //     },
        //     {
        //       label: 'Team',
        //       to: 'docs/About/team',
        //     },
        //     {
        //       label: 'Products',
        //       to: 'docs/About/products',
        //     },
        //     {
        //       label: 'Speciality',
        //       to: 'docs/About/speciality',
        //     },
        //   ],
        // },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Community',
          items: [
            {
              label: 'Medium',
              href: 'https://sinsonetwork.medium.com',
            },
            // {
            //   label: 'Discord',
            //   href: 'https://discordapp.com/invite/docusaurus',
            // },
            {
              label: 'Twitter',
              href: 'https://twitter.com/sinsotech',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/sinsoio',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()}`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        sitemap: {
          changefreq: 'daily',
          priority: 0.5,
        },
      },
    ],
  ],
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'zh-cn'],
    localeConfigs: {
      en: {
        label: 'English',
      },
      'zh-cn': {
        label: '简体中文',
      },
    },
  },
  stylesheets: [
    'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap',
  ],
}
