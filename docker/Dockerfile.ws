FROM oven/bun:1

WORKDIR /usr/src/app

# Copy everything from the context (which is ./week-27.2)
COPY . .

# Install dependencies
RUN bun install --frozen-lockfile

# Generate Prisma client
RUN bun run generate:db

EXPOSE 8081

CMD ["bun", "start:ws"]
