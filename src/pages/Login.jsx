import styles from "../styles/pages/Login.module.scss";
import btnStyles from "../styles/components/Button.module.scss";

import { useEffect, useState } from "react";
import PageNav from "../components/PageNav";
import Button from "../components/Button";
import useAuth from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";

export default function Login() {
  // PRE-FILL FOR DEV PURPOSES
  const [email, setEmail] = useState("jack@example.com");
  const [password, setPassword] = useState("phoenix1234");
  const { login, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (email && password) login(email, password);
  };

  useEffect(() => {
    if (isAuthenticated) navigate("/app/cities", { replace: true });
  }, [isAuthenticated, navigate]);

  return (
    <main className={styles.login}>
      <PageNav />
      <form className={styles.form} onSubmit={handleLogin}>
        <div className={styles.row}>
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>

        <div className={styles.row}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>

        <div>
          <Button
            type="submit"
            className={`${btnStyles.btn} ${btnStyles.primary}`}
          >
            Login
          </Button>
        </div>
      </form>
    </main>
  );
}
