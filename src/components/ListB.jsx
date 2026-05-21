import { useListofPlayers } from "../store/ListofPlayers.js";

export default function ListB() {
    const { getPlayers } = useListofPlayers();

    return (
        <div>
            <h2>{getPlayers().map((player) => (
                <li key={player}>{player}</li>
            ))}</h2>
        </div>
    )
}