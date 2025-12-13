import { useParams } from "react-router-dom";

function Profile() {
    const { username } = useParams();

    return (
        <div>
            <h1>Profile Page</h1>
            <p>Username: {username}</p>
        </div>
    );
}

export default Profile;
