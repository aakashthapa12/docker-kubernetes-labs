FROM oven/bun:1

WORKDIR /usr/src/app

# Copy only the necessary files from week-27.2 directory
COPY week-27.2/package.json week-27.2/bun.lock week-27.2/turbo.json ./
COPY week-27.2/apps ./apps
COPY week-27.2/packages ./packages

RUN bun install

RUN bun run generate:db

EXPOSE 8081

CMD ["bun", "start:ws"]
