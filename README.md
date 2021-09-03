# opti-task-manager
[![Code Style: Google](https://img.shields.io/badge/code%20style-google-blueviolet.svg)](https://github.com/google/gts)
 A simple task management system with authentication
 
 ## Technologies
* Node.js
* MongoDB with Mongoose
* TypeScript
* Express.js
* Docker
* Jest

## Setup and
 #### Clone Project

```shell
git clone https://github.com/Joyce-O/opti-task-manager.git
```

#### Start Nodejs server
`cd opti-task-manager` Move into Node Project Folder
`yarn install` install all dependency.


`yarn start:dev` start project in development.

`yarn start` start project in production.

`yarn test` run test.

##### With Docker 
`make up` -- start project in development
`make down` -- shutdown docker container
`make up-prod` -- start project in production.


### App API

| API             | URL                              Description             |
| ------------------- | -------------------------------------------|-------------------|
| User Login          | POST/api/login          | login                                |
| User  signup        | POST/api/users          | sigup                                |
| Create task         | POST/api/tasks          | create task                          |
| Read a task         |GET/api/tasks/:taskId    | get task requires jwt accessToken    |
| Edit task           |PUT/api/tasks/:taskId    | edit task requires jwt accessToken   |
| Delete task         |DELETE/api/tasks/:taskId | delete task requires jwt accessToken |


## Database

MongoDB Database.

**Todo:
> Write unit test to cover all functionalites



