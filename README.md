# Frontend Challenges

## [View Challenges Demos →](https://andrewheinke.github.io/codewell-frontend-challenges/)

### Setup

```text
npm install
npm run dev
```

### Build

Outputs built files to dist folder

```text
npm run build
```

### Deploy to Gitub Pages

Deploys dist folder contents to [gh-pages branch](https://github.com/AndrewHeinke/codewell-frontend-challenges/tree/gh-pages). This command also runs a copy file script to copy the `index.html` file from the dist folder and then rename to `404.html`. This is a hack to account for issues with single page app routing since it isn't supported on Github pages.

```text
npm run deploy
```

The Github repo name is specified in the `base` key in `vite.config.js` which is necessary to properly configure routes since the app is served from a folder not the root.
