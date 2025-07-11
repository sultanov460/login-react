import "./style.scss";
export default function Login({ user, setUser, handle }) {
  return (
    <div>
      <form onSubmit={handle}>
        <input
          type="text"
          placeholder="Enter username"
          value={user}
          onChange={(event) => setUser(event.target.value)}
        />
        <button>Login</button>
        <h4>{user}</h4>
      </form>
    </div>
  );
}
