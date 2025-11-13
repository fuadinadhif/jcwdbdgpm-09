# README

## Setup Node.js Project

1. `npm init --y`: Membuat file `package.json`
2. Menyesuaikan isi `package.json` file seperti berikut:
   ```json
   {
     "name": "intro-to-backend-and-express",
     "version": "1.0.0",
     "scripts": {},
     "type": "module"
   }
   ```
3. `npm i -D typescript tsx @types/node`: Install development dependencies. File `package.json`-mu akan terlihat seperti ini:

   ```json
   {
     "name": "intro-to-backend-and-express",
     "version": "1.0.0",
     "scripts": {},
     "type": "module",
     "devDependencies": {
       "@types/node": "^24.10.1",
       "tsx": "^4.20.6",
       "typescript": "^5.9.3"
     }
   }
   ```

4. Modif `package.json` scripts:

   ```json
    "scripts": {
      "build": "tsc",
      "dev": "tsx --watch src/index.ts",
      "start": "npm run build && node dist/index.js"
    }
   ```

5. Buat file `tsconfig.json` menggunakan command `npx tsc --init`
6. Edit file `tsconfig.json` menjadi seperti ini:

   ```json
   {
     "compilerOptions": {
       "rootDir": "./src",
       "outDir": "./dist",

       "module": "nodenext",
       "target": "esnext",

       "lib": ["esnext"],
       "types": ["node"],

       "noUncheckedIndexedAccess": true,
       "exactOptionalPropertyTypes": true,

       "strict": true,
       "verbatimModuleSyntax": true,
       "isolatedModules": true,
       "noUncheckedSideEffectImports": true,
       "moduleDetection": "force",
       "skipLibCheck": true
     }
   }
   ```

## Setup Express.js Project

1. `npm init --y`: Membuat file `package.json`
2. Menyesuaikan isi `package.json` file seperti berikut:
   ```json
   {
     "name": "intro-to-backend-and-express",
     "version": "1.0.0",
     "scripts": {},
     "type": "module"
   }
   ```
3. `npm i -D typescript tsx @types/node @types/express` dan `npm i express`: Install development dan reguler dependencies. File `package.json`-mu akan terlihat seperti ini:

   ```json
    "name": "intro-to-backend-and-express",
    "version": "1.0.0",
    "scripts": {
      "build": "tsc",
      "dev": "tsx --watch src/index.ts",
      "start": "npm run build && node dist/index.js"
    },
    "type": "module",
    "devDependencies": {
      "@types/express": "^5.0.5",
      "@types/node": "^24.10.1",
      "tsx": "^4.20.6",
      "typescript": "^5.9.3"
    },
    "dependencies": {
      "express": "^5.1.0"
    }
   ```

4. Modif `package.json` scripts:

   ```json
    "scripts": {
      "build": "tsc",
      "dev": "tsx --watch src/index.ts",
      "start": "npm run build && node dist/index.js"
    }
   ```

5. Buat file `tsconfig.json` menggunakan command `npx tsc --init`
6. Edit file `tsconfig.json` menjadi seperti ini:

   ```json
   {
     "compilerOptions": {
       "rootDir": "./src",
       "outDir": "./dist",

       "module": "nodenext",
       "target": "esnext",

       "lib": ["esnext"],
       "types": ["node"],

       "noUncheckedIndexedAccess": true,
       "exactOptionalPropertyTypes": true,

       "strict": true,
       "verbatimModuleSyntax": true,
       "isolatedModules": true,
       "noUncheckedSideEffectImports": true,
       "moduleDetection": "force",
       "skipLibCheck": true
     }
   }
   ```
