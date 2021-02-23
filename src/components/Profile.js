import { useAuth0 } from "@auth0/auth0-react";
import { useEffect, useState } from "react";

const Profile = () => {
    const { user, isAuthenticated, getAccessTokenSilently } = useAuth0();

    const [fakeUsers, setFakeUsers] = useState(null);

    const getGraphData = async () => {
        try {

            const accessToken = await getAccessTokenSilently({
                audience: process.env.REACT_APP_AUTH_AUDIENCE,
                scope: "read:messages"
            });

            console.log({ accessToken })

            var graphql = JSON.stringify({
                query: "query{\n    users{\n        name\n        id\n        email\n    }\n}",
                variables: {}
            })

            var requestOptions = {
                method: 'POST',
                headers: {
                    "Authorization": `Bearer ${accessToken}`,
                    "Content-Type": "application/json"
                },
                body: graphql,
            };

            fetch(process.env.REACT_APP_API + "/graph", requestOptions)
                .then(response => response.json())
                .then(result => {
                    console.log(result.data.users)
                    setFakeUsers(result.data.users);
                })
                .catch(error => {
                    setFakeUsers({ error })
                    console.log('error', error)
                }
                );

        } catch (e) {
            console.error(e);
        }
    };

    useEffect(() => {
        getGraphData();
    }, []);

    return (
        isAuthenticated ? (
            <div>
                <img src={user.picture} alt={user.name} />
                <h2>{user.name}</h2>
                <p>{user.email}</p>
                <h3>Fake Users</h3>
                {fakeUsers ? (
                    <pre>{JSON.stringify(fakeUsers, null, 2)}</pre>
                ) : (
                        "No fake users found"
                    )}
            </div>
        ) : <div>Not Authenticated</div>
    );
};

export default Profile