import { Link } from "react-router-dom";

export default function CatalogueGame({ game }) {
    return (
        <div className="allGames">
            <div className="allGames-info">
                <img src={`/src/assets/${game.imageUrl}`} />
                <h6>{game.category}</h6>
                <h2>{game.title}</h2>
                <Link to={`/games/details/${game._id}`} className="details-button">Details</Link>
            </div>
        </div>
    )
}