import React from 'react'

export default function Food() {
    const food1 = "Orange";
    const food2 ="Banana";
  return (
        <>
        <ul>
            <li>Apple</li>
            <li>{food1.toUpperCase()}</li>
            <li>{food2}</li>
        </ul>
        </>
  );
}
