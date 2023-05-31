import React, { useState } from "react"
import useUserActions from "../hooks/useUserActions"

const ConfrimCode = () => {
    const [code, setCode] = useState('')
    const { checkConfirmationCode } = useUserActions()

    return (
        <div>
            <h1>Code confirmation</h1>
            <input type="text" value={code} onChange={(e) => setCode(e.target.value)} />

            <button onClick={() => {
                checkConfirmationCode(code)
            }}>Confirm</button>
        </div>
    )
}

export default ConfrimCode;
