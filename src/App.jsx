import Login from "./components/Login";
import { useState } from "react";
export default function App() {
  const [username, setUsername] = useState("");
  const [submittedUser, setSubmittedUser] = useState("");
  function handle(event) {
    event.preventDefault();
    setSubmittedUser(`Welcome  ${username}`);
    setUsername("");
  }
  return (
    <div>
      <Login
        user={username}
        setUser={setUsername}
        handle={handle}
        result={submittedUser}
      />
    </div>
  );
}
