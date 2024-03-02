# Laying the foundation

- instead of using the command `npx parcel index.html` or `npx parcel build index.html` to run our code in development mode or create a prod build respectively, we can instead add the scripts shortcuts if you will to our `package.json` file as shown below:
```json
  "scripts": {
    "start": "parcel index.html",
    "build": "parcel build index.html",
    "test": "jest"
  }
```
- so now we dont need to run previous commands, we can simply run `npm run start` or simply `npm start` for running the app in dev mode and `npm run build` to create the prod build(`npm build` wont)
- 