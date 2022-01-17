import { onAuthStateChanged } from "firebase/auth";
import { useRouter } from "next/router";
import React, { useContext, useEffect } from "react";
import { auth } from "src/firebase";
import AuthContext from "src/context/AuthContext";

export const useAuthUser = () => {
  const { push, pathname } = useRouter();
  const { setIsLogged } = useContext(AuthContext);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      let userLogged = (user === null) ? false : true;
      if (!userLogged) {
        push("/login");
        setIsLogged(false);
      } else {
        setIsLogged(true);
        if (pathname === "/login" || pathname === "/register") {
          push("/");
        }
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};
