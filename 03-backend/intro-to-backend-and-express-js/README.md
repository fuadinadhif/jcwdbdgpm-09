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

## One File Version

```ts
/* --------------------------- Express.js Version --------------------------- */
import express, {
  type Application,
  type Request,
  type Response,
} from "express";
import { readArticles, writeArticle } from "./utils/io.js";

interface IUser {
  id: number;
  name: string;
  age: number;
}

const PORT: number = 8000;

const users: IUser[] = [
  { id: 1, name: "John Doe", age: 72 },
  { id: 2, name: "Jane Doe", age: 25 },
];

const server: Application = express();

// MIDDLEWARES
server.use(express.json()); // Middleware untuk mengambil data JSON di dalam request body

// GET
server.get("/data/users", (request: Request, response: Response) => {
  response.status(200).json(users);
});
server.get("/data/articles", async (request: Request, response: Response) => {
  const articles = await readArticles();
  response.status(200).json(articles);
});

// POST
server.post("/data/articles", async (request: Request, response: Response) => {
  const newArticle = request.body;
  const oldArticles = await readArticles();

  await writeArticle([...oldArticles, newArticle]);

  response.status(201).json({ message: "New article has been added" });
});

// DELETE
server.delete(
  "/data/articles/:id",
  async (request: Request, response: Response) => {
    const idDelete = request.params.id;
    const articles = await readArticles();

    // const latestArticles = articles.filter((element: { id: number }) => {
    //   if (element.id === Number(idDelete)) {
    //     return false;
    //   } else {
    //     return true;
    //   }
    // });

    const latestArticles = articles.filter(
      (element: { id: number }) => element.id !== Number(idDelete)
    );

    await writeArticle(latestArticles);

    response.status(200).send("<h1>Article sudah didelete</h1>");
  }
);

// UPDATE
server.put(
  "/data/articles/:id",
  async (request: Request, response: Response) => {
    const idUpdate = request.params.id;
    const updatedArticle = request.body;
    const articles = await readArticles();
    const idxUpdate = articles.findIndex(
      (element: { id: number }) => element.id === Number(idUpdate)
    );

    articles[idxUpdate] = { ...articles[idxUpdate], ...updatedArticle };

    await writeArticle(articles);

    response
      .status(200)
      .json({ message: `Article with id: ${idUpdate}  has been updated` });
  }
);

server.listen(PORT, () => {
  console.info(`Server is listening on port: ${PORT}`);
});

/* ----------------------------- Node.js Version ---------------------------- */
// import http from "http";

// const PORT: number = 8888;

// const users = [
//   { id: 1, name: "John Doe", age: 72 },
//   { id: 2, name: "Jane Doe", age: 25 },
// ];

// const server = http.createServer((request, response) => {
//   if (request.url === "/data/users" && request.method === "GET") {
//     response.writeHead(200, { "content-type": "application/json" }); // Menulis response header
//     response.write(JSON.stringify(users)); // Menulis response body
//     response.end(); // Menutup response
//   }
// });

// server.listen(PORT, () => {
//   console.info(`Server is listening on port: ${PORT}`);
// });
```
