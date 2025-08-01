import React from 'react'
import useLocalStorage from './UseLocalStorage';

export default function Index() {
 const [name, setName] = useLocalStorage("username", "Guest");

  return (
    <div>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name"
      />
      <p>Hello, {name}!</p>
    </div>
  );
}
