# pull official base image
FROM node:16.17.0-alpine3.16

# set working directory
WORKDIR /backend

# Add dependencies for installing
RUN apk add --no-cache yarn

# add app dependencies files
COPY package.json ./

# install app dependencies
RUN npm install

# add app
COPY . ./

EXPOSE 3001

# start app
CMD ["npm", "run", "dev"]
