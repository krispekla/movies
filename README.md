# Netlifx clone

This project is simple netflix clone using express and react.

## Setup

### Backend

1. Clone project.
2. Open project root directory in terminal/powershell.
3. Change to **movies-api** directory.

   `cd movies-api`

4. Install node packages.

   `npm i`

5. Create empty **.env** file in **movies-api** root directory and copy below environment variables. Current app uses Postgresql so enter your own db connection.

   > NODE_ENV=development
   > PORT=3006
   > DB\_\_CONNECTION=your_connection

   Connection format: postgresql://**username**:**password**@localhost:5432/**db_name**

##### Migrations

6. Create table in db using migrations.
   `npx knex migrate:up`
7. Insert mock data in db.
   `npx knex seed:run`

##### Running

8. Run api with command which will start app in development env.
   `npm run dev`

### Frontend

1. Open new terminal in root directory
2. Change directory to **movies-front**
   `˙cd movies-front`
3. Install node packages.
   `npm i`
4. Run frontend
   `npm start`
