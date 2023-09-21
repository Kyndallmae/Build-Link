# Build Link Application

Build Link serves as an essential platform for bridging contractors and construction job seekers, streamlining the job posting and application process for various roles in the construction industry. Besides functioning as a job portal, Build Link also operates as a dynamic backend system with comprehensive endpoints for managing applications, contractors, job listings, messages, subcontractors, and users.

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
  - [Applications](#applications)
  - [Contractors](#contractors)
  - [Job Listings](#job-listings)
  - [Messages](#messages)
  - [Subcontractors](#subcontractors)
  - [Users](#users)
- [Testing with Insomnia](#testing-with-insomnia)
- [Contributing](#contributing)
- [License](#license)
- [Technologies Used](#technologies-used)
- [Questions](#questions)
- [Demo](#demo)

## Installation

1. Clone this repository to your local machine:

   git clone <https://github.com/Kyndallmae/Build-Link.git>
   cd <Build-Link>
   

2. Run `npm install` to install all dependencies.

3. Set up your database, ensure that MySQL is installed and running, and create a database named `build_Link`.

4. Create a `.env` file in the root directory and add the following environment variables:
   
    DB_NAME=build_Link
    DB_USER=root
    DB_PASSWORD=hello
    DB_HOST=localhost
    DB_DIALECT=mysql
    DB_PORT=3306
    SESSION_SECRET=hello
   
5. Run `npm run seed` to seed data to your database (if you have seed files).

6. Start the server with `npm start`.

## Usage
Once the server is running, you can access and manage the database through the provided API endpoints using Insomnia or any API testing tool.

## API Endpoints

### Applications
- GET all applications: `/applications`
- GET a single application by ID: `/applications/:id`
- POST to create a new application: `/applications`
- PUT to update an application by ID: `/applications/:id`
- DELETE to remove an application by ID: `/applications/:id`

### Contractors
- GET all contractors: `/contractors`
- GET a single contractor by ID: `/contractors/:id`
- POST to create a new contractor: `/contractors`
- PUT to update a contractor by ID: `/contractors/:id`
- DELETE to remove a contractor by ID: `/contractors/:id`

### Job Listings
- GET all job listings: `/joblistings`
- GET a single job listing by ID: `/joblistings/:id`
- POST to create a new job listing: `/joblistings`
- PUT to update a job listing by ID: `/joblistings/:id`
- DELETE to remove a job listing by ID: `/joblistings/:id`

### Messages
- GET all messages: `/messages`
- GET a single message by ID: `/messages/:id`
- POST to create a new message: `/messages`
- PUT to update a message by ID: `/messages/:id`
- DELETE to remove a message by ID: `/messages/:id`

### Subcontractors
- GET all subcontractors: `/subcontractors`
- GET a single subcontractor by ID: `/subcontractors/:id`
- POST to create a new subcontractor: `/subcontractors`
- PUT to update a subcontractor by ID: `/subcontractors/:id`
- DELETE to remove a subcontractor by ID: `/subcontractors/:id`

### Users
- GET all users: `/users`
- GET a single user by ID: `/users/:id`
- POST to create a new user: `/users`
- PUT to update a user by ID: `/users/:id`
- DELETE to remove a user by ID: `/users/:id`

## Testing with Insomnia

### Setup:
1. Download & Install: [download and install Insomnia](https://insomnia.rest/download).
2. Launch Insomnia and create a new workspace for the project.
3. Create new requests for each of the endpoints you'd like to test.

### How to Test Endpoints:

**For example, for Applications:**

1. **GET all applications:**
   - Set method to GET.
   - Enter URL: `http://localhost:3001/applications`.
   - Send the request.

2. **POST to create a new application:**
   - Set method to POST.
   - Enter URL: `http://localhost:3001/applications`.
   - In the body tab, set the format to JSON and provide application details:
     ```json
     {
       "application_name": "New Application"
     }
     ```
   - Send the request.

Continue in a similar fashion for the Contractors, Job Listings, Messages, Subcontractors, and Users endpoints.

## Contributing

Contributions are welcome! To contribute to this project, please follow these steps:

Fork this repository.
Create a new branch for your feature or bug fix.
Make your changes and commit them with descriptive commit messages.
Push your changes to your fork.
Submit a pull request, describing your changes in detail.

## License
This project is licensed under the MIT License.

## Technologies Used
- Express.js
- Sequelize
- Sequelize CLI
- MySQL2
- Dotenv
- Express-Session
- Connect-Session-Sequelize
- Express-Handlebars

## Questions

If you have any questions or need further assistance, feel free to reach out:

GitHub Profile: [JuanFranciscoGrillo]
Email: jfrgm1986@gmail.com

## Demo
[Video Demo]

