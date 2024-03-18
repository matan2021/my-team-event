This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).
This app simulates registering for a team event.

## Getting Started
-Using a code editor, I use VS.

-Copy all files from github to new directory.

-Now you can run the project.

-In VS open two terminals(one for client and one for the server).

-Ensure that you are in .../yourNameToNewDirectory/my-team-event.

-Client side(client terminal):

-Install the relvenat packages:

  *npm install tailwindcss@latest postcss@latest autoprefixer@latest --save-dev  
   npx tailwindcss init -p

-now you can run the client side with one command from this:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `index/page.tsx`. The page auto-updates as you edit the file.

-You need to fill al the fields,if you dont want to include some field input 0(also in the select options).

-When you clicked on the submit button you will see the total cost after calculation and a alert that validation was past.

(this is only after you run the DB).

-Servre side(server terminal):

-In the second terminal install the relvenat packages:

*npm install sqlite3

*npm install sqlite

--now you can run the server side:

-run the file init-db.js with the command:node(creating a DB):node init-db.js.

-now run the command: sqlite eventDb.sqlite

**in this time you will be in sqlite bash.

**At the same time you will fill out the form(http://localhost:3000) and press the submit button.

-run the command .tables to show which tables exist in the DB.

-run the command SELECT * FROM registrations;(to show which information saved on the table).

Enjoy:)!
