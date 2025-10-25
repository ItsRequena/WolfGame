import { useEffect, useState, useContext } from "react";
import "../styles/WolfGame.css";
import { OptionContext } from '../context/view.tsx'

type LoginProps = {
  duration?: number;
};

export function CreateLobby({duration = 1000} : LoginProps) {

    const [active, setActive] = useState(false);
    useEffect(() => {
        const timer = setTimeout(() => {
            setActive(true);
        }, duration);

        return () => clearTimeout(timer);
    }, [duration]);

    // const {setOption, username} : any = useContext(OptionContext)

    const [error, setError] = useState("");
    const [lobbyName, setLobbyName] = useState("");
    const [lobbyPassword, setLobbyPassword] = useState("");
    const [accessCode, setAccessCode] = useState("");


    const validateFields = (): string => {
        if (lobbyName.trim() === "") {
            return "El nombre de la sala no puede estar vacío";
        }
        if (lobbyName.length < 3) {
            return "El nombre de la sala debe tener al menos 3 caracteres";
        }
        if (lobbyName.length > 15) {
            return "El nombre de la sala no puede superar los 15 caracteres";
        }
        if (lobbyPassword.trim() === "") {
            return "La contraseña no puede estar vacía";
        }
        if (lobbyPassword.length > 15) {
            return "La contraseñano puede superar los 15 caracteres";
        }
        if (accessCode.trim() !== "230023") {
            return "Codigo de acceso incorrecto";
        }
        return "";
    };

    const handlePlay = async () => {
        const validationError = validateFields();
        if (validationError) {
            setError(validationError);
            return;
        }
        setError(""); // Limpiar error si pasa validación

        // invocar peticion de crear sala...
        // setOption('waitingRoom')

    };

    return (
    active && (
    <div className="wolf-container">
            <h1 className="wolf-title"> CREAR SALA</h1>
            <h2 className="wolf-info"> Nombre</h2>
            <input
                type="text"
                placeholder="Introduce nombre..."
                value={lobbyName}
                onChange={(e) => setLobbyName(e.target.value)}
                className="wolf-input"
            />
            <h2 className="wolf-info "> Contraseña</h2>
            <input
                type="password"
                placeholder="Introduce contraseña..."
                value={lobbyPassword}
                onChange={(e) => setLobbyPassword(e.target.value)}
                className="wolf-input"
            />
            <h2 className="wolf-info"> Cod. Acceso</h2>
            <input
                type="text"
                placeholder="Introduce codigo acceso..."
                value={accessCode}
                onChange={(e) => setAccessCode(e.target.value)}
                className="wolf-input"
            />
            {error && <p className="wolf-error">{error}</p>}
            <button className="wolf-button" onClick={handlePlay}>
                CREAR
            </button>
    </div>)
    )
}
