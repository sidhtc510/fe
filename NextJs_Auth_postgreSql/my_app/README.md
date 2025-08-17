
Проект с аутентификацией через Google OAuth, email/пароль и ролевой системой пользователей.

# 1. Установка зависимостей
npm install

# 2. Настройка переменных окружения
Создай файл .env:

* Database

DATABASE_URL="postgresql://username:password@localhost:5432/auth_project"


* NextAuth
AUTH_SECRET="your-secret-key-32-chars-minimum"

AUTH_URL="http://localhost:3000"


* Google OAuth
"https://console.cloud.google.com/"

AUTH_GOOGLE_ID="your-google-client-id"

AUTH_GOOGLE_SECRET="your-google-client-secret"


* Email (опционально)

EMAIL_SERVER_USER="your-email@gmail.com"

EMAIL_SERVER_PASSWORD="your-app-password"

EMAIL_SERVER_HOST="smtp.gmail.com"

EMAIL_SERVER_PORT=587

EMAIL_FROM="your-email@gmail.com"



# 3. База данных "https://neon.tech"

Основные команды Prisma

* Генерация Prisma клиента
npx prisma generate

* Синхронизация схемы с БД
npx prisma db push

* Просмотр данных (опционально)
npx prisma studio

* Инициализация Prisma
npx prisma init
