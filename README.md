# ChrisCatto.com

- this is a repo for the domain ChrisCatto.com

## It's utilizing Next.js create-next-app

This is based from the starter template for the Next.js App Router Course. It contains the starting code for the dashboard application. For more information, see the [course curriculum](https://nextjs.org/learn) on the Next.js Website.

## Running:

```
    $ npm install
    $ next build
    $ next dev
```

### to run prettier

```
    $ yarn prettier
```

Current node version is 20.9.0 as of March 26th 2024;

## April 23, 2024 Release 1.1.01

- 003 release May 3rd 003 contact page | gridsend & fly.io updated

* Release includes Layouts; Nav; 3 sections including Home; code & about.

- 004 contact page including inserting results via prisma into contact table May 6th 2024.

* Release May 9th includes Added Prisma section & shadcn; tables & data fetching.

* 006 release May 19th 2024 lots of docs & pages;

* test git actions
* 007 top footer; nav accordions; 2 new doc pages remove array item & nextjs port.

* 008 5.22.24 hotfix to handleCloseAll with code nav;

- using @next/third-parties for GA4.
- using "react-syntax-highlighter": "^15.5.0", && @types/react-syntax-highlighter for syntax highlighting
- using pg package v^8.11.5 for postgresql
- using prisma as ORM
- using @prisma/client as db client
- using next-auth for authentication
- using @auth/prisma-adapter for auth adapter
- using @auth/prisma-adapter for data base adapter for next-auth v5
- using nodemailer for sending emails;
- using react-hook-form for forms
- using @hookform/resolvers for access to resolvers we can plug into our forms
- using zod for validation library;
- using googleapis for google APIs & dynamically generate access token;
- @logtail/next for https://betterstack.com/docs/logs/javascript/nextjs/
- Using @sendgrid/mail to send email after issue with nodemailer on aws
- @flydotio/dockerfile produces a dicker file
- using dayjs open source js date library great for manipulating dates & times
- using framer-motion for animations; when trying quickly couldn't get tailwind animation-spin work so went with this popular 3rd party library;
- adding shadcn-ui to project
  -- shadcn-ui installed the following:

* class-variance-authority
* lucid-react
* tailwind-merge
* tailwindcss-animate

---

- Adding stripe @stripe/stripe-js
- using react-embed-gist to display code embedded
- using use-shopping-cart for shopping cart state & logic for Stipe;

shadcn components:

- table npx shadcn-ui@latest add table
- dropdown menu npx shadcn-ui@latest add dropdown-menu
- button
- input
- accordion

---

- using @tanstack/react-table for a data table

---

Needed to update tsconfig.json to add `"noImplicitAny": false,` to resolve the react-syntax-highlighter type error.

<h3 align="left">Languages and Tools:</h3>
<p align="left"> 
    <a href="https://aws.amazon.com/amplify/" target="_blank" rel="noreferrer"> <img src="https://docs.amplify.aws/assets/logo-dark.svg" alt="amplify" width="40" height="40"/> </a> 
    <a href="https://aws.amazon.com" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" alt="aws" width="40" height="40"/> </a> 
    <a href="https://www.w3schools.com/css/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="40" height="40"/> </a> 
    <a href="https://www.docker.com/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original-wordmark.svg" alt="docker" width="40" height="40"/> </a> 
    <a href="https://expressjs.com" target="_blank" rel="noreferrer" style="color:white"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg" alt="express" width="40" height="40" style="color:white; background-color:white;"/> </a> 
    <a href="https://www.figma.com/" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/figma/figma-icon.svg" alt="figma" width="40" height="40"/> </a> 
    <a href="https://git-scm.com/" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" alt="git" width="40" height="40"/> </a> 
    <a href="https://graphql.org" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/graphql/graphql-icon.svg" alt="graphql" width="40" height="40"/> </a> 
    <a href="https://www.w3.org/html/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="40" height="40"/> </a> 
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/> </a> 
    <a href="https://jestjs.io" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/jestjsio/jestjsio-icon.svg" alt="jest" width="40" height="40"/> </a> 
    <a href="https://nextjs.org/" target="_blank" rel="noreferrer"> <img src="https://cdn.worldvectorlogo.com/logos/nextjs-2.svg" alt="nextjs" width="40" height="40" style="color:white"/> </a> 
    <a href="https://nodejs.org" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="nodejs" width="40" height="40"/> </a> 
    <a href="https://www.postgresql.org" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg" alt="postgresql" width="40" height="40"/> </a> 
    <a href="https://postman.com" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" alt="postman" width="40" height="40"/> </a> 
    <a href="https://reactjs.org/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width="40" height="40"/> </a> 
    <a href="https://tailwindcss.com/" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" alt="tailwind" width="40" height="40"/> </a> 
    <a href="https://www.typescriptlang.org/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg" alt="typescript" width="40" height="40"/> </a> 
</p>
