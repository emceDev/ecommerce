This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Technologies

Next.js, MongoDb, Mongoose.

## Assumptions

App must be easy to upgrade in new features requiring real time data from server as products to chose from.
App must be able to handle huge number of users at once.

## Principles

Next js serves form in frontend
Next's api handles form submission to mongoDb

## Getting Started

Fill pages/api/MongoDb/index.js => dbURI :'dbURI sent in email (temporary access to database)', or add your own link to on mongoDB

Then, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
