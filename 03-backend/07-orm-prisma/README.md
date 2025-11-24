# README

## Prisma Express Project Setup

1.  `npm init --y`
2.  Edit `package.json`:
    ```json
    {
      "name": "07-orm-prisma",
      "scripts": {
        "build": "tsc",
        "dev": "tsx --watch src/app.ts",
        "start": "npm run build && node dist/app.js"
      },
      "type": "module"
    }
    ```
3.  `npm i -D typescript @types/node @types/express tsx prisma dotenv`
4.  `npm i express @prisma/client`
5.  `npx tsc --init`
6.  Edit `tsconfig.json`:

    ```json
    {
      "compilerOptions": {
        "rootDir": "./src",
        "outDir": "./dist",

        "module": "nodenext",
        "target": "esnext",

        "lib": ["esnext"],
        "types": ["node"],

        "sourceMap": true,
        "declaration": true,
        "declarationMap": true,

        "noUncheckedIndexedAccess": true,
        "exactOptionalPropertyTypes": true,

        "strict": true,
        "jsx": "react-jsx",
        "verbatimModuleSyntax": true,
        "isolatedModules": true,
        "noUncheckedSideEffectImports": true,
        "moduleDetection": "force",
        "skipLibCheck": true
      }
    }
    ```

7.  `npx prisma init`: Inisiasi project Prisma
8.  `Edit `.env` file using Supabase ORM connection`

    ```js
    # Connect to Supabase via connection pooling

    DATABASE_URL="postgresql://postgres.reblycmqcpukdthlozsq:[YOUR-PASSWORD]@aws-1-ap-southeast-2.pooler.supabase.com:6543/postgres?pgbouncer=true"

    # Direct connection to the database. Used for migrations

    DIRECT_URL="postgresql://postgres.reblycmqcpukdthlozsq:[YOUR-PASSWORD]@aws-1-ap-southeast-2.pooler.supabase.com:5432/postgres"
    ```

9.  Edit `prisma/schema.prisma` untuk menambahkan skema database kita
10. Edit `prisma.config.ts` di bagian url, untuk menggukanan `env(DIRECT_URL)` bukan `env(DATABASE_URL)`

## Prisma Commands

1. `npx prisma init`
2. `npx prisma migrate dev`:
   - Membuat folder migrations dan mengubah kode JS menjadi SQL
   - Menjalankan SQL tersebut untuk mengubah skema database kita
3. `npx prisma db push`: Sama seperti `prisma migrate dev` (pilih salah satu saja)
4. `npx prisma studio`
5. `npx prisma generate`: Generate Prisma Client

## Prisma Drop Version to 6.17

1. npm remove prisma @prisma/client
2. delete file `prisma.config.ts`
3. add `url` and `directUrl` di file `schema.prisma`:
   ```js
  datasource db {
    provider  = "postgresql"
    url       = env("DATABASE_URL")
    directUrl = env("DIRECT_URL")
  }
   ```
