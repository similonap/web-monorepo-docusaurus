import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import {courseContent} from './config/content';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  // sidebars.ts selects the shared pages that belong to this course.
  // Add document IDs here only for pages that should exist outside the sidebar.
  customFields: {course: {extraDocs: []}},
  title: 'Webprogramming',
  tagline: 'A long time ago in a browser far, far away...',
  favicon: 'img/typescript.png',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },
  markdown: {
    format: 'mdx',
    mermaid: true,
    preprocessor: courseContent,
    parseFrontMatter: async (params) => {
      const parsed = await params.defaultParseFrontMatter(params);
      const file = params.filePath.replaceAll('\\', '/');
      if (file.endsWith('/docs/nodejs-+-typescript/wat-is-nodejs.md')) {
        parsed.frontMatter.slug = '/';
      }
      if (file.endsWith('/docs/mysql/crud-api.md')) {
        parsed.frontMatter.title = 'API-endpoints met MySQL';
      }
      return parsed;
    },
    hooks: {
      onBrokenMarkdownLinks: 'throw',
      onBrokenMarkdownImages: 'throw',
    },
    mdx1Compat: {
      comments: true,
      admonitions: true,
      headingIds: true,
    },
  },

  // Set the production url of your site here
  url: process.env.COURSE_URL ?? 'http://localhost:3000',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'similonap', // Usually your GitHub org/user name.
  projectName: 'webprogramming-docusaurus', // Usually your repo name.
  trailingSlash: false,

  onBrokenLinks: 'throw',


  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'nl',
    locales: ['nl'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: '/', // Make docs the homepage
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/similonap/web-monorepo-docusaurus/edit/main/',
        },
        pages: false, // Geen losse voorbeeldpagina’s uit de monorepo publiceren.
        blog: false, // Disable blog for now to focus on the course
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/typescript.png',
    colorMode: {
      defaultMode: 'light',
      respectPrefersColorScheme: false,
      disableSwitch: false,
    },
    navbar: {
      title: 'Webprogramming',
      logo: {
        alt: 'TypeScript Logo',
        src: 'img/typescript.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'theorieSidebar',
          position: 'left',
          label: 'Theorie',
        },
        {
          type: 'docSidebar',
          sidebarId: 'labosSidebar',
          position: 'left',
          label: 'Labos',
        },
        {
          href: 'https://github.com/similonap/web-monorepo-docusaurus',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          items: [
            {
              label: 'De Cursus',
              to: '/',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Webprogramming.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
