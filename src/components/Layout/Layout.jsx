// src/components/Layout/Layout.jsx
import { Outlet } from "react-router-dom";
import AppBar from "../AppBar/AppBar";
import css from "./Layout.module.css";

export default function Layout() {
  return (
    <div className={css.wrapper}>
      <AppBar />
      <main className={css.main}>
        <Outlet /> {/* ← Sayfaların gösterildiği yer */}
      </main>
    </div>
  );
}
