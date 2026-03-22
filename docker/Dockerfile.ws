FROM oven/bun:1

WORKDIR /usr/src/app

# Copy entire week-27.2 directory structure
COPY week-27.2/ ./

# Install dependencies
RUN bun install --frozen-lockfile

# Generate Prisma client
RUN bun run generate:db

EXPOSE 8081

CMD ["bun", "start:ws"]
