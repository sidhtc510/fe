
Проект с аутентификацией через Google OAuth, email/пароль и ролевой системой пользователей.
# **1. Установка зависимостей**

<a name="user-content-1-установка-зависимостей"></a>npm install
# **2. Настройка переменных окружения**

<a name="user-content-2-настройка-переменных-окружения"></a>**Создай файл .env:**

Database - ключи тут(например) "[https://neon.tech](https://neon.tech/)"

*DATABASE\_URL="postgresql://username:password@localhost:5432/auth\_project"*

NextAuth 

*AUTH\_SECRET="abcdefghijklmnopqrstuvwxyz123456" - любые 32 символа*

*AUTH\_URL="[*http://localhost:3000*](http://localhost:3000/)"*

Google OAuth "<https://console.cloud.google.com/>"

*AUTH\_GOOGLE\_ID="your-google-client-id"*

*AUTH\_GOOGLE\_SECRET="your-google-client-secret"*

Email (опционально)

*EMAIL\_SERVER\_USER="[*your-email@gmail.com*](mailto:your-email@gmail.com)"*

*EMAIL\_SERVER\_PASSWORD="your-app-password"*

*EMAIL\_SERVER\_HOST="smtp.gmail.com"*

*EMAIL\_SERVER\_PORT=587*

*EMAIL\_FROM="[*your-email@gmail.com*](mailto:your-email@gmail.com)"*
# **3. База данных**

<a name="user-content-3-база-данных-httpsneontech"></a>Основные команды Prisma

- Генерация Prisma клиента **npx prisma generate**
- Синхронизация схемы с БД **npx prisma db push**
- Просмотр данных (опционально) **npx prisma studio**
- Инициализация Prisma **npx prisma init**

[ref1]: Aspose.Words.9cbf059a-bc36-4eec-aa3a-e6f51f5d5ee9.001.png
