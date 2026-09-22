FROM node:24-slim
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME/bin:$PATH"

RUN npm install -g pnpm@12.5.1

WORKDIR /app

COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./

RUN pnpm install --frozen-lockfile

COPY . .

# CMD ["pnpm", "tsx"]
CMD ["sleep", "infinity"]
