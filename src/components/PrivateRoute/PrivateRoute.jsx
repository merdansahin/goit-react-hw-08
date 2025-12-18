// src/components/PrivateRoute/PrivateRoute.jsx
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import {
  selectIsLoggedIn,
  selectIsRefreshing,
} from "../../redux/auth/selectors";

export default function PrivateRoute({ element, redirectTo = "/" }) {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);

  if (isRefreshing) return null; // Kullanıcı verisi yenilenirken hiçbir şey gösterme

  return isLoggedIn ? element : <Navigate to={redirectTo} />;
}
