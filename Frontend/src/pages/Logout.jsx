import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Logout() {
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.clear(); // 🔥 BEST (clear everything)

    navigate("/login", { replace: true });
  }, [navigate]);

  return null;
}

export default Logout;