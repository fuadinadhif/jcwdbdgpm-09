"use client";

import { useEffect, useState } from "react";

interface IUser {
  id: number;
  name: string;
}

export default function HomePage() {
  const [users, setUsers] = useState<IUser[]>([]);

  useEffect(() => {
    async function getUsers() {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users",
        {
          method: "GET",
        }
      );
      const data = await response.json();
      console.log(data);

      setUsers(data);
    }

    getUsers();
  }, []);

  return (
    <main>
      <h1>Home Page</h1>
      <ul>
        {users.map((user: IUser) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </main>
  );
}

/* -------------------------------------------------------------------------- */
/*                          Server Component Example                          */
/* -------------------------------------------------------------------------- */
// interface IUser {
//   id: number;
//   name: string;
// }

// export default async function HomePage() {
//   const response = await fetch("https://jsonplaceholder.typicode.com/users", {
//     method: "GET",
//   });
//   const data = await response.json();

//   console.log(data);

//   return (
//     <main>
//       <h1>Home Page</h1>
//       <ul>
//         {data.map((user: IUser) => (
//           <li key={user.id}>{user.name}</li>
//         ))}
//       </ul>
//     </main>
//   );
// }
