
Проект с аутентификацией через Google OAuth, email/пароль и ролевой системой пользователей.
# **1. Установка зависимостей**
![ref1][](https://github.com/sidhtc510/fe/tree/main/NextJs_Auth_postgreSql/my_app#1-%D1%83%D1%81%D1%82%D0%B0%D0%BD%D0%BE%D0%B2%D0%BA%D0%B0-%D0%B7%D0%B0%D0%B2%D0%B8%D1%81%D0%B8%D0%BC%D0%BE%D1%81%D1%82%D0%B5%D0%B9)

<a name="user-content-1-установка-зависимостей"></a>npm install
# **2. Настройка переменных окружения**
![ref1][](https://github.com/sidhtc510/fe/tree/main/NextJs_Auth_postgreSql/my_app#2-%D0%BD%D0%B0%D1%81%D1%82%D1%80%D0%BE%D0%B9%D0%BA%D0%B0-%D0%BF%D0%B5%D1%80%D0%B5%D0%BC%D0%B5%D0%BD%D0%BD%D1%8B%D1%85-%D0%BE%D0%BA%D1%80%D1%83%D0%B6%D0%B5%D0%BD%D0%B8%D1%8F)

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
![ref1][](https://github.com/sidhtc510/fe/tree/main/NextJs_Auth_postgreSql/my_app#3-%D0%B1%D0%B0%D0%B7%D0%B0-%D0%B4%D0%B0%D0%BD%D0%BD%D1%8B%D1%85-httpsneontech)

<a name="user-content-3-база-данных-httpsneontech"></a>Основные команды Prisma

- Генерация Prisma клиента **npx prisma generate**
- Синхронизация схемы с БД **npx prisma db push**
- Просмотр данных (опционально) **npx prisma studio**
- Инициализация Prisma **npx prisma init**

[ref1]: Aspose.Words.9cbf059a-bc36-4eec-aa3a-e6f51f5d5ee9.001.png
