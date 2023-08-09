# Use a Node.js 14 base image
FROM node:18

# Set the working directory in container
WORKDIR /app

# Copy package.json and package-lock.json before other files
COPY package*.json ./

# Install dependencies
RUN npm install 

# Copy app files
COPY . .

# Expose port and start application
EXPOSE 3000 
CMD [ "node", "index.js" ]