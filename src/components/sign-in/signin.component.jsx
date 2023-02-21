import { signInWithGooglePopup } from '../../utils/firebase/firebase.utils'

const Signin = () => {
    const loGoogleUser = async () => {
        const response = await signInWithGooglePopup();
        console.log(response);
    }
    return(
            <div>
                <h1>SIGN IN</h1>
                <button onClick={loGoogleUser}>Sign with Google account</button>
            </div>
    )
}

export default Signin