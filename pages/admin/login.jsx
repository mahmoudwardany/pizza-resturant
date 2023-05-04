import axios from "axios";
import { useRouter } from "next/router";
import { useState } from "react";
import styles from "../../styles/Login.module.css";
import domain from "../../util/confing";

const Login = () => {
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const [error, setError] = useState(false);
  const router = useRouter();

  const handleClick = async (e) => {
    e.preventDefault()
    try {
      await axios.post(`${domain}/api/login`, {
        username,
        password,
      });
      router.push("/admin");
    } catch (err) {
      setError(true);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h1>Admin Dashboard</h1>
        <form onSubmit={handleClick}>
           <input
          placeholder="username"
          className='form-control mb-3'
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          placeholder="password"
          type="password"
          className='form-control mb-3'
          onChange={(e) => setPassword(e.target.value)}
        />
        <button  className={styles.button}>
          Sign In
        </button>
        <br />
        {error && <span className={styles.error}>Wrong Credentials!</span>} 
        </form>
      
      </div>
    </div>
  );
};

export default Login;