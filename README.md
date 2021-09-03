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

`make up-prod` -- start project in production


### API

1. POST/api/login           <> login                                
2. POST/api/users           <> sigup                                 
3. POST/api/tasks           <> create task                           
4. GET/api/tasks/:taskId     <> get task requires jwt accessToken     
5. PUT/api/tasks/:taskId     <> edit task requires jwt accessToken 
6. DELETE/api/tasks/:taskId  <> delete task requires jwt accessToken


## Database

MongoDB Database.

**Todo:
> Write unit test to cover all functionalites



