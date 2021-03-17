import { useAuth0 } from "@auth0/auth0-react";
import { useState } from "react";

const Profile = () => {

    const { user, isAuthenticated } = useAuth0();
    const [b, setB] = useState<any>([]);

    return (
        isAuthenticated ? (
            <div className={"view"}>

                <div>
                    <img src={user.picture} alt={user.name} />
                    <h2>{user.name}</h2>
                    <p>{user.email}</p>
                    <h3>Fake Users</h3>
                </div>
                <div>
                    {b?.map((item: any) => {
                        return <div key={item?.blizzId}>
                            <p style={{ width: '20em' }}> {JSON.stringify(item)}</p>
                        </div>
                    })}
                </div>
            </div>
        ) : <div>Not Authenticated</div>
    );
};

export default Profile