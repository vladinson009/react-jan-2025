import { useActionState, useContext, useEffect, useState } from "react";
import { Link, useParams, } from "react-router-dom"
import context from "../../context/userContext";
import useGameById from "../../hooks/useGameById";
import gameApi from "../../api/gameApi";

export default function DetailsGame() {
    const { gameId } = useParams()
    const { userSession } = useContext(context);
    const { game } = useGameById();
    const [comments, setComments] = useState([])
    // eslint-disable-next-line no-unused-vars
    const [state, formAction, isPending] = useActionState(onComment, {});

    useEffect(() => {
        (async function () {
            const data = await gameApi.getCommentsById(gameId);
            setComments(data)
        })()
    }, [gameId])

    async function onComment(previousValue, formData) {
        const comment = formData.get('comment');
        if (!comment) {
            return;
        }
        const newComment = await gameApi.createComment(comment, game._id)
        setComments(state => [...state, newComment])
    }
    const isOwner = userSession && userSession._id == game?._ownerId;

    function onDelete() {
        gameApi.deleteById(game._id).catch(err => {
            alert(err.message);
        })
    }

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
                    {comments.length > 0 ?
                        <ul>
                            {/* <!-- list all comments for current game (If any) --> */}
                            {comments.map((el) => {
                                console.log(el.comment);

                                return <li key={el._id} className="comment">
                                    <p>Content: {el.comment}</p>
                                </li>
                            })}

                        </ul>
                        : <p className="no-comment">No comments.</p>}

                    {/* <!-- Display paragraph: If there are no games in the database --> */}

                </div>

                {/* <!-- Edit/Delete buttons ( Only for creator of this game )  --> */}
                {isOwner &&
                    <div className="buttons">
                        <Link to={`/games/edit/${game._id}`} className="button">Edit</Link>
                        <Link onClick={onDelete} to='/' className="button">Delete</Link>
                    </div>}
            </div>

            {/* <!-- Bonus --> */}
            {/* <!-- Add Comment ( Only for logged-in users, which is not creators of the current game ) --> */}
            {!isOwner && userSession &&
                <article className="create-comment">
                    <label>Add new comment:</label>
                    <form action={formAction} className="form">
                        <textarea name="comment" placeholder="Comment......"></textarea>
                        <input disabled={isPending} className="btn submit" type="submit" value="Add Comment" />
                    </form>
                </article>}
        </section>
    )
}