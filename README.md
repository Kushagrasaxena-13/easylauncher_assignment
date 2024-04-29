<h1 align="center" id="title">Easy Launcher Assignment</h1>

<p align="center"><img src="https://socialify.git.ci/Kushagrasaxena-13/easylauncher_assignment/image?language=1&amp;owner=1&amp;name=1&amp;stargazers=1&amp;theme=Light" alt="project-image"></p>

<p id="description">This README provides detailed instructions for setting up and using a full-stack application built with Node.js for the backend and React.js for the frontend. The application includes a RESTful API for managing 'Users' and 'Books' with a many-to-many relationship and a user interface for interacting with the API.</p>

<h2>Project Screenshots:</h2>

![image](https://github.com/Kushagrasaxena-13/easylauncher_assignment/assets/71897053/d6b04392-80ff-44ad-9045-8d952ea259fa)

![image](https://github.com/Kushagrasaxena-13/easylauncher_assignment/assets/71897053/4ecf00f5-5795-4619-9afc-ef6b036cec1e)


<h2>🛠️ Installation Steps:</h2>

<p>1. Initialize a Node.js project:</p>

```
mkdir easylauncher_assignment 
```

```
cd easylauncher_assignment 
```

```
mkdir server 
```

```
cd server 
```


```
npm init -y
```

<p>4. Install necessary npm packages:</p>

```
npm install express sequelize pg pg-hstore bcryptjs jsonwebtoken cors dotenv
```

<p>5. Edit the config/config.json file to configure your database credentials.</p>

<p>6. Create models for 'Users' and 'Books':</p>

<p>7. Create a join table for the many-to-many relationship:</p>

<p>8. Update the associations in your models (models/user.js models/book.js and models/userBook.js).</p>

<p>9. Create RESTful API routes in app.js or separate route files for 'Users' and 'Books'.</p>

<p>10. Implement JWT-based authentication in your user routes.</p>

<p>11. Secure your REST API by verifying the JWT in subsequent requests using middleware.</p>

<p>12. Set up a React.js application</p>

```
cd .. 
```

```
mkdir frontend 
```

```
cd frontend
```

```
npx create-react-app library_management 
```


<p>14. Install necessary npm packages:</p>

```
npm install axios react-router-dom
```

<p>15. Develop the user interface components for managing users and books.</p>

<p>16. Implement forms for adding new users and books.</p>

<p>17. Create lists or tables to display existing users and books.</p>

<p>18. Implement authentication mechanisms using hooks or context to manage state and provide a secure way to authenticate API calls.</p>

<p>19. Implement JWT-based authentication on the backend by creating routes for user registration and login.</p>

<p>20. Upon successful authentication generate and return a JWT to the client.</p>

<p>21. Secure your REST API by creating middleware to verify the JWT on protected routes.</p>

<p>22. Start the backend server:</p>

```
cd ..
```

```
cd backend
```

```
npm start
```

<p>24. Start the frontend React application:</p>

```
cd frontend
```

```
npm start
```

<p>26. Access the application in your browser at http://localhost:3000.</p>

<p>27. Use the user interface to interact with the backend API and perform CRUD operations on users and books.</p>

<h2>🍰 Architecture Explanation :</h2>

The backend of this application is built using Node.js and Express. Sequelize is used as an ORM to interact with the MySQL or PostgreSQL database. The database schema consists of two main entities: 'Users' and 'Books' with a many-to-many relationship managed through a join table. The frontend of this application is built using React.js. Axios is used to make API calls to the backend server. The user interface includes forms for adding new users and books as well as lists or tables to display existing entries. Authentication mechanisms are implemented on the frontend to ensure that API calls are authenticated. JWT-based authentication is implemented on the backend to handle user registrations and logins. Tokens are generated upon successful authentication and are used to secure subsequent requests to protected routes.

  
  
<h2>💻 Built with</h2>

Technologies used in the project:

*   Node.js
*   React.js
*   npm
*   jwt

