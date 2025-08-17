
Проект с аутентификацией через Google OAuth, email/пароль и ролевой системой пользователей.

🚀 Быстрый старт

1. Установка зависимостей
npm install

2. Настройка переменных окружения
Создай файл .env.local:
env# Database
DATABASE_URL="postgresql://username:password@localhost:5432/auth_project"

# NextAuth
AUTH_SECRET="your-secret-key-32-chars-minimum"
AUTH_URL="http://localhost:3000"

# Google OAuth
AUTH_GOOGLE_ID="your-google-client-id"
AUTH_GOOGLE_SECRET="your-google-client-secret"

# Email (опционально)
EMAIL_SERVER_USER="your-email@gmail.com"
EMAIL_SERVER_PASSWORD="your-app-password"
EMAIL_SERVER_HOST="smtp.gmail.com"
EMAIL_SERVER_PORT=587
EMAIL_FROM="your-email@gmail.com"


3. База данных
# Генерация Prisma клиента
npx prisma generate

# Синхронизация схемы с БД
npx prisma db push

# Просмотр данных (опционально)
npx prisma studio

Основные команды Prisma
# Инициализация Prisma
npx prisma init

# Генерация клиента
npx prisma generate

# Применение изменений к БД
npx prisma db push

# Создание миграции
npx prisma migrate dev --name init

# Применение миграций в продакшне
npx prisma migrate deploy

# Сброс базы данных
npx prisma migrate reset

# Заполнение данными (если есть seed)
npx prisma db seed

# Просмотр и редактирование данных
npx prisma studio

# Валидация схемы
npx prisma validate

# Форматирование schema.prisma
npx prisma format

Управление миграциями
# Просмотр статуса миграций
npx prisma migrate status

# Создание миграции без применения
npx prisma migrate dev --create-only

# Применение конкретной миграции
npx prisma migrate resolve --applied "migration_name"
