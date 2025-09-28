import { useEffect, useState } from "react";
import "../styles/Home.css";

type HomeProps = {
  duration?: number;
  username: string;
};


export function Home({duration = 1000, username} : HomeProps) {

    const [active, setActive] = useState(false);
    useEffect(() => {
        const timer = setTimeout(() => {
            setActive(true);
        }, duration);

        return () => clearTimeout(timer);
    }, [duration]);

    const handleCreateRoom = () => {
        console.log("Crear sala clicado");
    };

    const handleJoinRoom = () => {
        console.log("Unirse sala clicado");
    };

    return (
    active && (
    <div className="wolf-container">
        <h1 className="wolf-title">BIENVENIDO {username}</h1>

        <button className="wolf-button" onClick={handleCreateRoom}>
            CREAR SALA
        </button>

        <button className="wolf-button" onClick={handleJoinRoom}>
            UNIRSE SALA
        </button>
    </div>)
    );
};
