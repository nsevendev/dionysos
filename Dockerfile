ARG NODE_VERSION=20.17.0-bookworm-slim

# -------------------------------- dependencies -----------------------------------------
FROM node:${NODE_VERSION} AS deps
RUN apt-get update && apt-get install -y procps
RUN npm install -g @angular/cli
USER node
WORKDIR /app
COPY --chown=node:node package*.json ./
RUN npm ci

# ------------------------------------- Development -------------------------------------
FROM deps AS development
COPY --chown=node:node ./ ./
COPY --chown=node:node scripts/install-deps.sh /usr/local/bin/
RUN chmod +x /usr/local/bin/install-deps.sh
EXPOSE 4200
EXPOSE 9876
ENTRYPOINT ["install-deps.sh"]
CMD ["npm", "run", "start:docker:dev"]

# ------------------------------------- prod en construction -------------------------------------
