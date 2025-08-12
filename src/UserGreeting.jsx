import PropTypes from "prop-types";

function UserGreeting(props) {
    const { isLoggedIn, username } = props;

    const formattedName =
        username[0].toUpperCase() + username.slice(1).toLowerCase();

    return isLoggedIn ? (
        <h2>Welcome {formattedName}</h2>
    ) : (
        <h1>Please log in</h1>
    );
}

UserGreeting.propTypes = {
    isLoggedIn: PropTypes.bool,
    username: PropTypes.string,
};

UserGreeting.defaultProps = {
    isLoggedIn: false,
    username: "Guest",
};

export default UserGreeting;
