import "./style.scss";
export default function Login({ user, setUser, handle, result }) {
  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="Enter username"
          value={user}
          onChange={(event) => setUser(event.target.value)}
        />
        <button onClick={handle}>Login</button>
        <h4>{result}</h4>
      </form>
    </div>
  );
}
