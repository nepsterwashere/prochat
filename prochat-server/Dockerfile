# Node 14 base img
FROM node:14

# Create app directory
WORKDIR /app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY package*.json ./
RUN npm install

# Bundle app source
COPY . .

# App environment vars
ENV port=4000 DATABASE_URL=mongodb://mongo:27017/chat

EXPOSE 4000
CMD ["npm", "start"]