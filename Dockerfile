# --- Базовый образ ---
FROM node:20-alpine AS builder

WORKDIR /app

# Копируем файлы зависимостей
COPY package*.json ./

# Устанавливаем все зависимости (включая dev, чтобы собрать проект)
RUN npm install

# Копируем весь код
COPY . .

# Собираем TypeScript в JS
RUN npm run build

# --- Финальный контейнер ---
FROM node:20-alpine

WORKDIR /app

# Копируем только нужное
COPY package*.json ./
RUN npm install --omit=dev

# Копируем собранный билд
COPY --from=builder /app/dist ./dist

EXPOSE 5000

CMD ["npm", "run", "start:prod"]
