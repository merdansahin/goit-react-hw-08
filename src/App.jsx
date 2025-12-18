// src/components/App/App.jsx
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Registration from "./pages/Registration/Registration";
import Contacts from "./pages/Contacts/Contacts";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import RestrictedRoute from "./components/RestrictedRoute/RestrictedRoute";

import { refreshUser } from "./redux/auth/operations";
import { selectIsRefreshing } from "./redux/auth/selectors";

export default function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  if (isRefreshing) {
    return <p>Refreshing user...</p>;
  }

  return (
    <Routes>
      {/* Layout tüm sayfaları saran üst yapı */}
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />

        <Route
          path="register"
          element={
            <RestrictedRoute
              redirectTo="/contacts"
              element={<Registration />}
            />
          }
        />

        <Route
          path="login"
          element={
            <RestrictedRoute redirectTo="/contacts" element={<Login />} />
          }
        />

        <Route
          path="contacts"
          element={<PrivateRoute redirectTo="/login" element={<Contacts />} />}
        />
      </Route>

      {/* fallback */}
      <Route path="*" element={<Home />} />
    </Routes>
  );
}
