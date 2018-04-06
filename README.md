# Prerequisites:
- NodeJS v9.6.1
- npm v5.6.0+ / Yarn v1.3.2 

# Development guide

### Install packages

```$ yarn```

For npm:

```$ npm install```

### Run in development mode

```yarn dev```

For npm:

```npm run dev```

Then open `http://localhost:3000` in browser.

### Build for production

```yarn built```

For npm:

```npm run built```

### Run the express server 

```yarn start```

For npm:

```npm run start```

Then open `http://localhost:8080` in browser.

### Running test 

```yarn test```

For npm:

```npm run test```

# explanation

### Css modules and Styled-components

Open component `article-item.jsx` to see usage.


### Require css

Code require css contain by `home/index.jsx` and `article-list.jsx` 
Turn off (set it to false or comment it) option 'modules' (line 47) in file `webpack.prod.config.js`
