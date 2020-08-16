import React, { useEffect } from "react";
import "./Login.css";
import { Button } from "@material-ui/core";
import { auth, provider } from "../../database/firebase";
import { useStateValue } from "../../StateProvider";

export default function Login() {
  const [state, dispatch] = useStateValue();

  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        dispatch({
          type: "LOG_IN_USER",
          user: result.user,
        });
      })
      .catch((error) => alert(error.message));
  };

  useEffect(() => {
    document.title = "Chat App | Sign In";
  }, []);

  return (
    <div className="login">
      <div className="login__container">
        <h1>
          <span role="img" aria-label="logo emoji">
            👋{" "}
          </span>
          Chat App
        </h1>
        <Button onClick={signIn}>
          <div className="login__svg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 18 18"
            >
              <g fill="none">
                <path
                  fill="#4285F4"
                  d="M17.6 9.2l-.1-1.8H9v3.4h4.8C13.6 12 13 13 12 13.6v2.2h3a8.8 8.8 0 002.6-6.6z"
                />
                <path
                  fill="#34A853"
                  d="M9 18c2.4 0 4.5-.8 6-2.2l-3-2.2a5.4 5.4 0 01-8-2.9H1V13a9 9 0 008 5z"
                />
                <path
                  fill="#FBBC05"
                  d="M4 10.7a5.4 5.4 0 010-3.4V5H1a9 9 0 000 8l3-2.3z"
                />
                <path
                  fill="#EA4335"
                  d="M9 3.6c1.3 0 2.5.4 3.4 1.3L15 2.3A9 9 0 001 5l3 2.4a5.4 5.4 0 015-3.7z"
                />
                <path d="M0 0h18v18H0z" />
              </g>
            </svg>
          </div>
          <p>LOG IN WITH GOOGLE</p>
        </Button>
      </div>
    </div>
  );
}
