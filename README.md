# remix-template

This project was created by `npx create-remix@latest` command.

[Remix](https://github.com/remix-run/remix) framework starter repository.

## Docs

- [Remix](https://remix.run/docs/en/main)

## Development

First, you must install packages.

```bash
npm i
```

## Deployment

First, build your app for production:

```bash
npm run build
```

Then run the app in production mode:

```bash
npm start
```

Now you'll need to pick a host to deploy it to.

### DIY

If you're familiar with deploying Node applications, the built-in Remix app server is production-ready.

Make sure to deploy the output of `npm run build`

- `build/server`
- `build/client`

## Packages

1. [vite](#1-vite)
2. [clsx & tailwind-merge](#2-clsx--tailwind-merge)
3. [framer-motion](#3-framer-motion)
4. [react-hook-form](#4-react-hook-form)
5. [zod](#5-zod)
6. [vitest](#6-vitest)
7. [storybook](#7-storybook)

### 1. [Vite](https://vitejs.dev)

A modern frontend build tool.

Bundled with Remix.

### 2. clsx & tailwind-merge

By using these two packages, you can concatenate class names and prevent duplication in Tailwind.

> [!NOTE]
>
> The script is located in `src/utils/cn.ts`.

### 3. [framer-motion](https://www.framer.com/motion)

Animations.

### 4. [react-hook-form](https://react-hook-form.com/docs)

It's foolish to handle form control without using this library.

> [!IMPORTANT]
>
> [@hookform/resolvers](https://www.npmjs.com/package/@hookform/resolvers) required to use [Zod](#7-zod) for form validation. (already included in the package)

### 5. [zod](https://zod.dev)

The use cases are endless, from server-side type validation to client-side form validation.

### 6. [vitest](https://vitest.dev/guide)

This package is used for testing (such as unit tests).

> [!IMPORTANT]
>
> To perform UI testing, you need to configure the [@testing-library/jest-dom](https://testing-library.com/docs/ecosystem-jest-dom) package and set up [Vitest config](https://vitest.dev/config/#globals).

### 7. [storybook](https://storybook.js.org/docs/get-started)

Use for visual testing of UI.

Useful for automatic docs generation of components, testing of theme colors, and testing with various viewports.
