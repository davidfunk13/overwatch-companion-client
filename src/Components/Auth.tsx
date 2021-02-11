import React, { useEffect } from 'react';

interface IAuthProps {

}
const regexConditions = /code=([^&]+)/


const Auth = ({ }: IAuthProps) => {

    var captured: string = regexConditions.exec(window.location.href) as any[1]

    useEffect(() => {
        console.log(captured)
    }, [captured])
    return (
        <div>
            <p>Hey now, I farted.</p>
        </div>
    );
};

export default Auth;