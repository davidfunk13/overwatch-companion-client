import crypto from 'crypto';
import { useAuth0 } from '@auth0/auth0-react'
function sha256(buffer: any) {
    return crypto.createHash('sha256').update(buffer).digest();
}

function base64URLEncode(str: string) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment     
    // @ts-ignore
    return str.toString('base64')
        .replace(/\+/g, '-')
        .replace(/\//g, '_')
        .replace(/=/g, '');
}

const verifier = base64URLEncode(crypto.randomBytes(32) as unknown as string);

const challenge = base64URLEncode(sha256(verifier) as unknown as string);

function handleLogin(c: string, v: string) {

    const redir = `https://${process.env.REACT_APP_AUTH_DOMAIN}/authorize?response_type=code&client_id=${process.env.REACT_APP_AUTH_CLIENT_ID}&code_challenge=${c}&code_challenge_method=S256&redirect_uri=${window.location.origin + "/auth"}&scope=read:current_user&audience=${process.env.REACT_APP_AUTH_AUDIENCE}&state=3yhor8-y2gf_o28hf0-12boifh-2nf01i2`

    localStorage.setItem("verifier", v);

    console.log({ challenge, verifier, redir })
    return window.location.href = redir;
}

const LoginButton = () => {
    return <button onClick={() => handleLogin(challenge, verifier)}>Log In</button>;
};

export default LoginButton;