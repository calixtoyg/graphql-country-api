FROM       node:14-alpine

WORKDIR    /usr/graphql-country

# Copy and install production packages
COPY       package*.json ./
COPY       src ./src
RUN        npm install -p

# Non root user
USER       node

ENV        NODE_ENV="production"
ENV        BOOTSTRAP_DATA=true
EXPOSE     8080
# Running port is configured through API_PORT env variable
ENTRYPOINT ["npm"]
CMD        ["start"]
