# Ender - Next.js Template

A Next.js starter with Tailwind CSS and shadcn/ui. To start a project, fill in
the site details in `src/lib/config.ts`. The layout metadata, manifest, sitemap,
robots.txt and OG images all read from it.

## Stack

All dependencies are kept at their latest versions.

- Next.js
- React
- TypeScript
- Tailwind CSS
- shadcn/ui
- Vitest
- ESLint
- Prettier

## Scripts

```bash
npm run dev              # Start development server
npm run build            # Build for production
npm run start            # Start production server
npm run lint             # Run ESLint and Prettier check
npm run lint:fix         # Fix ESLint errors
npm run format           # Format code with Prettier
npm run test             # Run tests
npm run test:watch       # Run tests in watch mode
npm run coverage         # Run tests with coverage
npm run type-check       # TypeScript type checking
npm run theme -- <code>  # Apply colors from a shadcn preset
npm run docker:dev       # Start the dev server in Docker
npm run docker:build     # Build the Docker image
npm run docker:down      # Stop the Docker containers
```

## Structure

```
src/
├── app/             # App Router pages, API routes and metadata files
├── components/
│   ├── common/      # Shared custom components
│   └── ui/          # shadcn/ui components
├── lib/
│   ├── config.ts    # Site details
│   ├── theme.ts     # Reads theme colors for the manifest
│   └── utils.ts     # cn helper
└── validators/      # Zod schemas

tests/               # Mirrors src/
```

## Components

Add shadcn components with `npx shadcn@latest add <component>`. They go into
`src/components/ui/`.

## Theme

The theme is shadcn's Sera style with neutral grays and a purple primary color.
Its preset code is `b4pl265ewS`. The colors are CSS variables in
`src/app/globals.css`.

To change the colors:

1. Open [ui.shadcn.com/create?preset=b4pl265ewS](https://ui.shadcn.com/create?preset=b4pl265ewS)
2. Pick new colors and copy the preset code
3. Run `npm run theme -- <code>`

To change fonts or the component style as well, run
`npx shadcn@latest apply <code>` instead.

The PWA manifest, OG images and browser theme color take their colors from
`globals.css`, so they update on their own.
