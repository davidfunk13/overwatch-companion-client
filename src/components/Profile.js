import { useAuth0 } from "@auth0/auth0-react";
import { useEffect, useState } from "react";
import useFetchGraphQL from "../utilities/fetchGraphQL";

const Profile = () => {

    const { user, isAuthenticated, getAccessTokenSilently } = useAuth0();
    const [b, setB] = useState([]);

    console.log(user)
    const apiUrl = process.env.NODE_ENV === "production" ? process.env.REACT_APP_API : "";

    const data = useFetchGraphQL();

    useEffect(() => {
        console.log({ apiUrl, env: process.env.NODE_ENV })
        console.log({ data })
        setB(data?.battletags)
    }, [data]);

    // useEffect(() => { setB(data?.battletags) }, [data])

    return (
        isAuthenticated ? (
            <div>

                <div>
                    <img src={user.picture} alt={user.name} />
                    <h2>{user.name}</h2>
                    <p>{user.email}</p>
                    <h3>Fake Users</h3>
                </div>
                <div>
                    {b?.map(item => {
                        return <div key={item.blizzId}>
                            <p style={{ width: '20em' }}> {JSON.stringify(item)}</p>
                        </div>
                    })}
                </div>
            </div>
        ) : <div>Not Authenticated</div>
    );
};

export default Profile