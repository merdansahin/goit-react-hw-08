// src/pages/Home/Home.jsx
import css from "./Home.module.css";

export default function Home() {
  return (
    <div className={css.page}>
      <div className={css.container}>
        <h1 className={css.title}>
          Welcome to your <span>PhoneBook!</span>
        </h1>
        <p className={css.subtitle}>Manage your personal contacts securely.</p>
      </div>
    </div>
  );
}
