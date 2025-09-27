import { useEffect, useState } from "react";
import { Test } from "../services/test";
import "../styles/Login.css";

type LoginProps = {
  duration?: number;
};

export function Login({duration = 1000} : LoginProps) {
    const [active, setActive] = useState(false);
    const [username, setUsername] = useState("");

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

    useEffect(() => {
        const timer = setTimeout(() => {
            setActive(true);
        }, duration);

        return () => clearTimeout(timer);
    }, [duration]);

    const handlePlay = () => {
        if (username.trim() === "") {
            alert("Por favor, introduce un nombre.");
            return;
        }
        alert(`Bienvenido, ${username}! 🐺`);
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
        <button className="wolf-button" onClick={handlePlay}>
        A JUGAR
        </button>
    </div>)
    )
}
