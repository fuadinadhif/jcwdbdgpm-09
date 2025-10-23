import React from "react";
import Link from "next/link";

export default function HomePage() {
  const fullName = "Mahardika";

  return (
    <React.Fragment>
      <nav>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
      <Intro fullNameProps={fullName} />
      <Curriculum />
    </React.Fragment>
  );
}

function Intro(props: { fullNameProps: string }) {
  return (
    <>
      <h1 className="title" style={{ color: "red", margin: 0 }}>
        Welcome to React, {props.fullNameProps}!
      </h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
        voluptas quam quo sint dolorem neque aut vel quasi officia animi.
        Aliquid aut aspernatur dolor error at, asperiores tempore reiciendis
        delectus.
      </p>
    </>
  );
}

function Curriculum() {
  return (
    <ol>
      <li>JavaScript Fundamental</li>
      <li>Frontend Development</li>
      <li>Backend Development</li>
    </ol>
  );
}

/* ---------------------------------- NOTES --------------------------------- */
// Cara membuat komponen
// 1. Buat fungsi dengan format nama menggunakan PascalCase
// 2. Pastikan fungsinya me-return SATU HTML tag
// 3. Export default fungsi tersebut

/* ------------------------------------ - ----------------------------------- */

// Expression (Kode yang langsung memebrikan value) vs Statement (Kode yang menjalankan sebuah action)
// Expression
// const a = 10
// null

// Statement
// if () { ... } else { ... }

/* ------------------------------------ - ----------------------------------- */

// Props: Cara untuk mengirim data dari parent komponen ke children
// Bentuk props adalah sebuah attribute custom

/* ------------------------------------ - ----------------------------------- */
// const props = {
//   fullNameProps: "Mahardika",
// };
