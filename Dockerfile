# Install dependencies
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install

# Copy source files
COPY . .

# Build and run
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
