import { useEffect, useState, useContext } from "react";
import "../styles/WolfGame.css";
import { OptionContext } from '../context/view.tsx'

type HomeProps = {
  duration?: number;
};


export function Home({duration = 1000} : HomeProps) {

    const {setOption, username} : any = useContext(OptionContext)
    const [active, setActive] = useState(false);
    useEffect(() => {
        const timer = setTimeout(() => {
            setActive(true);
        }, duration);

        return () => clearTimeout(timer);
    }, [duration]);

    const handleCreateRoom = () => {
        setOption('createLobby')
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
