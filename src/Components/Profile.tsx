import React, { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Profile = () => {
    const { user, isAuthenticated } = useAuth0();
    const [userMetadata, setUserMetadata] = useState(null);
    var url_string = window.location.href
    var url = new URL(url_string);
    var c = url.searchParams.get("code");
    useEffect(() => {
        const getUserMetadata = async () => {
            try {
                const accessToken = c;

                var data = JSON.stringify({
                    query: 'query{\n    users{\n        name\n    }\n}',
                    variables: {}
                });

                const url = `/api/query`;

                const metadataResponse: any = await fetch(url, {
                    method: "POST",
                    headers: {
                        Authorization: `Bearer ${accessToken}`,
                    },
                    body: data,
                }).then(data => console.log({ message: 'hit', data }))

                const { user_metadata } = await metadataResponse.json();

                setUserMetadata(user_metadata);
            } catch (e) {
                console.log(e.message);
            }
        };

        if (c) {
            getUserMetadata();
        }
    }, []);

    useEffect(() => console.log(user), [user])
    return (
        isAuthenticated ? (
            <div>
                <img src={user.picture} alt={user.name} />
                <h2>{user.name}</h2>
                <p>{user.email}</p>
                <h3>User Metadata</h3>
                {userMetadata ? (
                    <pre>{JSON.stringify(userMetadata, null, 2)}</pre>
                ) : (
                        "No user metadata defined"
                    )}
            </div>
        ) : <div><p>login you bitch</p></div>
    );
};

export default Profile;