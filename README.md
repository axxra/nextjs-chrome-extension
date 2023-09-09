## Getting Started

First, generate the static html output:

```bash
npm run build
```
# or
```bash
yarn build
```
# or
```bash
pnpm build
```
Once complete, we should see an /out directory. It contains the bundled version of our Next.js application as well as our manifest.json. Think of this directory as the source code of our extension.

Before importing our extension into the browser, we must address one issue. Directories and files prefixed with an underscore (\_) are reserved by system.

This conflicts with a bundled Next.js application since its root directory is \_next. To resolve this issue, we can run the following command to replace all instances of ‘_next’ with ‘next’:

# Windows/Linux (For Windows use WSL)
```bash
mv ./out/_next ./out/next && cd ./out && grep -rl '/_next' * | xargs sed -i 's|/_next|/next|g'
```

# MacOS
```bash
mv ./out/_next ./out/next && cd ./out && grep -rli '_next' * | xargs -I@ sed -i '' 's|/_next|/next|g' @;
```

We’ve now successfully prepared our Next.js application to be embedded within an extension! Our last step is to simply import it into the browser to test:

Chrome:
- Navigate to: chrome://extensions
- Toggle on ‘Developer Mode’ in the top right corner.
- Click the ‘Load Unpacked’ button.
- Select your /out directory.


To check the static html out in browser:
```bash
npx serve@latest out
```
