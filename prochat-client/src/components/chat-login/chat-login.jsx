import React, { useState } from 'react'
import { Button, TextField } from '@material-ui/core'
import './chat-login.scss'

export default function ChatLogin({ handleLogin }) {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")

    return (
        <div className="chat-login">
            <div className="chat-login__heading">
                <h3>Anmelden</h3>
            </div>
            <TextField value={firstName} label="Vorname" onChange={(e) => setFirstName(e.target.value)} />
            <TextField value={lastName} label="Nachname" onChange={(e) => setLastName(e.target.value)} />
            <div className="chat-login__submit">
                <Button onClick={() => handleLogin({firstName, lastName})} variant="outlined">Bestätigen</Button>
            </div>
        </div>
    )
}  