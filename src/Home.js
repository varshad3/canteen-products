import React from "react";
import { useNavigate } from "react-router-dom";

const Home = (props) => {
    const { loggedIn, email } = props;
    const navigate = useNavigate();

    const onButtonClick = () => {
        // If the user is logged in, log them out and navigate to the login page.
        if (loggedIn) {
            // You can add code here to perform the logout process, such as clearing user data or tokens.
            // For simplicity, we'll just navigate to the login page.
            navigate("/login");
        } else {
            // If the user is not logged in, navigate to the login page.
            navigate("/login");
        }
    };

    return (
        <div className="mainContainer">
            <div className={"titleContainer"}>
                <div>Welcome!</div>
            </div>
            <div>This is the home page.</div>
            <div className={"buttonContainer"}>
                <input
                    className={"inputButton"}
                    type="button"
                    onClick={onButtonClick}
                    value={loggedIn ? "Log out" : "Log in"} />
                {loggedIn ? (
                    <div>Your email address is {email}</div>
                ) : null}
            </div>
        </div>
    );
};

export default Home;
