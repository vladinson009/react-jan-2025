import { Link } from "react-router-dom";

export default function HomepageGame({ game }) {

    return (
        <div className="game">
            <div className="image-wrap">
                <img src={`/src/assets${game.imageUrl}`} />
            </div>
            <h3>{game.title}</h3>
            <div className="rating">
                <span>☆</span><span>☆</span><span>☆</span><span>☆</span><span>☆</span>
            </div>
            <div className="data-buttons">
                <Link to={`/games/details/${game._id}`} className="btn details-btn">Details</Link>
            </div>
        </div>
    )
}