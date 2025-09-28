import { useEffect, useState, useContext } from "react";
import { Test, connect } from "../services/signalR";
import "../styles/Login.css";
import { OptionContext } from '../context/view.tsx'

type LoginProps = {
  duration?: number;
};

export function Login({duration = 1000} : LoginProps) {

    const [active, setActive] = useState(false);
    useEffect(() => {
        const timer = setTimeout(() => {
            setActive(true);
        }, duration);

        return () => clearTimeout(timer);
    }, [duration]);

    const {setOption, username, setUsername} : any = useContext(OptionContext)
    const [error, setError] = useState("");
    
    // region de prueba
    const [test, setTest] = useState("Cargando...");

    useEffect(() => {
        Test()
            .then((data) => setTest(data))
            .catch((error) => {
            console.error(error);
            setTest("Error al cargar los datos");
            });
    }, []);
    // fin region de prueba

    const validateUsername = (name: string): string => {
        if (name.trim() === "") {
        return "El nombre no puede estar vacío.";
        }
        if (name.length < 3) {
        return "El nombre debe tener al menos 3 caracteres.";
        }
        if (name.length > 15) {
        return "El nombre no puede superar los 15 caracteres.";
        }
        return "";
    };

    const handlePlay = async () => {
        const validationError = validateUsername(username);
        if (validationError) {
            setError(validationError);
            return;
        }
        setError(""); // Limpiar error si pasa validación

        const response = await connect(`${username}`);
        if(response != ''){
            alert(`${response}`);
            return;
        }
        setOption('main')
    };

    return (
    active && (
    <div className="wolf-container">
        <h1 className="wolf-title">Lobo de Castonegro</h1>
        <h1 className="wolf-title">{test}</h1>
        <input
            type="text"
            placeholder="Introduce tu nombre..."
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="wolf-input"
        />
         {error && <p className="wolf-error">{error}</p>}
        <button className="wolf-button" onClick={handlePlay}>
        A JUGAR
        </button>
    </div>)
    )
}
