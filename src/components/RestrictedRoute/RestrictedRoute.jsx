// src/components/RestrictedRoute/RestrictedRoute.jsx
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { selectIsLoggedIn } from "../../redux/auth/selectors";

export default function RestrictedRoute({ element, redirectTo = "/" }) {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return isLoggedIn ? <Navigate to={redirectTo} /> : element;
}
