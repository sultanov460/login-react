import Login from "./components/Login";
import { useState } from "react";
export default function App() {
  const [username, setUsername] = useState("");
  function handle(event) {
    event.preventDefault();
  }
  return (
    <div>
      <Login user={username} setUser={setUsername} handle={handle} />
    </div>
  );
}
