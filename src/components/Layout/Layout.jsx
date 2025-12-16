// src/components/Layout/Layout.jsx
import AppBar from "../AppBar/AppBar";
import css from "./Layout.module.css";

export default function Layout({ children }) {
  return (
    <div className={css.wrapper}>
      <AppBar />
      <main className={css.main}>{children}</main>
    </div>
  );
}
