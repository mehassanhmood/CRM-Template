# Stage 1: Build the app
FROM node:18 AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Stage 2: Serve the app
FROM node:18
WORKDIR /app
COPY --from=build /app/dist ./dist

# Install 'serve' to serve static files
RUN npm install -g serve

# Command to run the static server on port 80
CMD ["serve", "-s", "dist", "-l", "80"]
