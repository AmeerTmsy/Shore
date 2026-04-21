// import { useEffect } from "react";
// import { Navigate, Outlet, useLocation, useNavigate } from "react-router-dom";

// export default function ProtectedLogin({ children }) {
//   const token = localStorage.getItem("token");
//   const navigate = useNavigate();
//   const location = useLocation();

//   // useEffect(() => {
//   // if a logined user try to access the login page the shoud be re directed to the past page and should not be able to get to the login page.
//   //   if (token && location.pathname === '/onboarding') {
//   //     navigate(-1) || navigate('/')
//   //   }
//   // }, [token, location])

//   return children;
// }

import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function ProtectedLogin({ children }) {
  const token = localStorage.getItem("token");
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (token) {
      if (location.state?.from) {
        navigate(location.state.from.pathname, { replace: true });
      } else {
        navigate(-1); // go back
      }
    }
  }, [token, location, navigate]);

  if (token) return null;

  return children;
}