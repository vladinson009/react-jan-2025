import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom"
import gameApi from "../../api/gameApi";
import context from "../../context/userContext";

export default function DetailsGame() {
    const { userSession, navigate } = useContext(context);
    const { gameId } = useParams();
    const [game, setGame] = useState({
        _ownerId: '',
        title: '',
        category: '',
        maxLevel: '',
        imageUrl: '',
        summary: '',
        _createdOn: '',
        _id: '',
    });
    useEffect(() => {
        gameApi.getById(gameId).then(result => {
            setGame(result);
        })
    }, [gameId]);

    const isOwner = userSession && userSession._id == game?._ownerId;
    return (
        <section id="game-details">
            <h1>Game Details</h1>
            <div className="info-section">
                <div className="game-header">
                    <img className="game-img" src={`/src/assets${game.imageUrl}`} />
                    <h1>{game.title}</h1>
                    <span className="levels">MaxLevel: {game.maxLevel}</span>
                    <p className="type">{game.category}</p>
                </div>

                <p className="text">{game.summary}</p>

                {/* <!-- Bonus ( for Guests and Users ) --> */}
                <div className="details-comments">
                    <h2>Comments:</h2>
                    <ul>
                        {/* <!-- list all comments for current game (If any) --> */}
                        <li className="comment">
                            <p>Content: I rate this one quite highly.</p>
                        </li>
                        <li className="comment">
                            <p>Content: The best game.</p>
                        </li>
                    </ul>
                    {/* <!-- Display paragraph: If there are no games in the database --> */}
                    <p className="no-comment">No comments.</p>
                </div>

                {/* <!-- Edit/Delete buttons ( Only for creator of this game )  --> */}
                {isOwner &&
                    <div className="buttons">
                        <Link to={`/games/edit/${game._id}`} className="button">Edit</Link>
                        <Link to={`/games/delete/${game._id}`} className="button">Delete</Link>
                    </div>}
            </div>

            {/* <!-- Bonus --> */}
            {/* <!-- Add Comment ( Only for logged-in users, which is not creators of the current game ) --> */}
            <article className="create-comment">
                <label>Add new comment:</label>
                <form className="form">
                    <textarea name="comment" placeholder="Comment......"></textarea>
                    <input className="btn submit" type="submit" value="Add Comment" />
                </form>
            </article>
        </section>
    )
}