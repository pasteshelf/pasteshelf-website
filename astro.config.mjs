import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://pasteshelf.app',
  integrations: [
    starlight({
      title: 'PasteShelf',
      logo: {
        src: './src/assets/logo.svg',
      },
      social: [
        {
          icon: 'github',
          label: 'GitHub',
          href: 'https://github.com/pasteshelf/PasteShelf',
        },
      ],
      customCss: ['./src/styles/global.css'],
      sidebar: [
        {
          label: 'Getting Started',
          items: [
            { label: 'Quick Start', slug: 'getting-started/quick-start' },
            { label: 'Setup', slug: 'getting-started/setup' },
            { label: 'Development', slug: 'getting-started/development' },
          ],
        },
        {
          label: 'Features',
          items: [
            { label: 'Clipboard Engine', slug: 'features/clipboard-engine' },
            { label: 'Search Engine', slug: 'features/search-engine' },
            { label: 'Sync Engine', slug: 'features/sync-engine' },
            { label: 'Automation Engine', slug: 'features/automation-engine' },
            { label: 'Plugin System', slug: 'features/plugin-system' },
            { label: 'Privacy & Security', slug: 'features/privacy-security' },
          ],
        },
        {
          label: 'Architecture',
          items: [
            { label: 'Overview', slug: 'architecture/overview' },
            { label: 'Tech Stack', slug: 'architecture/tech-stack' },
            { label: 'Database', slug: 'architecture/database' },
          ],
        },
        {
          label: 'User Guide',
          items: [
            { label: 'User Guide', slug: 'user-guide/user-guide' },
            { label: 'FAQ', slug: 'user-guide/faq' },
          ],
        },
        {
          label: 'Plugins',
          items: [
            { label: 'Development Guide', slug: 'plugins/development-guide' },
            { label: 'API Reference', slug: 'plugins/api-reference' },
          ],
        },
        {
          label: 'Enterprise',
          items: [
            { label: 'Admin Guide', slug: 'enterprise/admin-guide' },
            { label: 'Deployment', slug: 'enterprise/deployment' },
            { label: 'Jamf MDM', slug: 'enterprise/mdm-jamf' },
            { label: 'Kandji MDM', slug: 'enterprise/mdm-kandji' },
            { label: 'Intune MDM', slug: 'enterprise/mdm-intune' },
            { label: 'Sync Server API', slug: 'enterprise/sync-server-api' },
            { label: 'Sync Server Schema', slug: 'enterprise/sync-server-schema' },
            { label: 'Sync Server WebSocket', slug: 'enterprise/sync-server-websocket' },
          ],
        },
        {
          label: 'Operations',
          items: [
            { label: 'Troubleshooting', slug: 'operations/troubleshooting' },
            { label: 'Monitoring', slug: 'operations/monitoring' },
            { label: 'Maintenance', slug: 'operations/maintenance' },
          ],
        },
        {
          label: 'Reference',
          items: [
            { label: 'FAQ', slug: 'reference/faq' },
            { label: 'Roadmap', slug: 'reference/roadmap' },
            { label: 'Performance', slug: 'reference/performance' },
            { label: 'Accessibility', slug: 'reference/accessibility' },
            { label: 'Internationalization', slug: 'reference/internationalization' },
            { label: 'Cost Estimation', slug: 'reference/cost-estimation' },
          ],
        },
        {
          label: 'API',
          items: [
            { label: 'API Documentation', slug: 'api/api-documentation' },
          ],
        },
        {
          label: 'Security',
          items: [
            { label: 'Security', slug: 'security/security' },
            { label: 'Legal & Compliance', slug: 'security/legal' },
          ],
        },
        {
          label: 'Legal',
          items: [
            { label: 'Privacy Policy', slug: 'legal/privacy-policy' },
          ],
        },
        {
          label: 'Deployment',
          items: [
            { label: 'Deployment Guide', slug: 'deployment/deployment' },
            { label: 'Build System', slug: 'deployment/build-system' },
            { label: 'CI/CD', slug: 'deployment/ci-cd' },
            { label: 'Scaling Guide', slug: 'deployment/scaling' },
          ],
        },
        {
          label: 'Testing',
          items: [
            { label: 'Testing Guide', slug: 'testing/testing' },
          ],
        },
        {
          label: 'Contributing',
          items: [
            { label: 'Contributing Guide', slug: 'contributing/contributing-guide' },
          ],
        },
      ],
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
