import { useState } from "react"

const SignUp: React.FC<{}> = () => {
    const [firstName, setFirstName] = useState('')

    return (
        <div className="signUp">
            <div className="logo flex items-center">
                <img src="" alt="logo" className="mr-2"/>
                <p>Logo</p>
            </div>

            <div className="title">
                <p>Sign Up</p>
                <p>Pla pla</p>
            </div>

            <p>Fist Name</p>
                <input
                    type="text"
                    className="border border-inputBox w-full p-2 mt-2 rounded-lg font-light "
                    value={firstName}
                    onChange={(event) => {setFirstName(event.target.value)}}
                    placeholder="Type here..."
                /> 
            

        </div>
    )
}

export default SignUp