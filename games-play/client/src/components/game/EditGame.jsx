import { useActionState, useContext } from "react";
import useGameById from "../../hooks/useGameById";
import gameApi from "../../api/gameApi";
import context from "../../context/userContext";

export default function EditGame() {
    const { navigate } = useContext(context);
    const { game } = useGameById();
    const [{ error }, formAction, inPending] = useActionState(onSubmit, { error: '', userInput: {} })

    async function onSubmit(previousValue, formData) {
        const userInput = Object.fromEntries(formData);
        try {
            await gameApi.editById(game._id, userInput);
            navigate(`/games/details/${game._id}`);
        } catch (error) {
            return { error: error.message, userInput }
        }
    }
    return (
        <section id="edit-page" className="auth">
            <form action={formAction} id="edit">
                <div className="container">
                    <h1>Edit Game</h1>
                    {error && <p style={{ color: 'red' }}>{error}</p>}
                    <label htmlFor="leg-title">Legendary title:</label>
                    <input type="text" id="title" name="title" defaultValue={game.title} />

                    <label htmlFor="category">Category:</label>
                    <input type="text" id="category" name="category" defaultValue={game.category} />

                    <label htmlFor="levels">MaxLevel:</label>
                    <input type="number" id="maxLevel" name="maxLevel" min="1" defaultValue={game.maxLevel} />

                    <label htmlFor="game-img">Image:</label>
                    <input type="text" id="imageUrl" name="imageUrl" defaultValue={game.imageUrl} />

                    <label htmlFor="summary">Summary:</label>
                    <textarea name="summary" id="summary" defaultValue={game.summary}></textarea>
                    <input disabled={inPending} className="btn submit" type="submit" value="Edit Game" />
                </div>
            </form>
        </section>
    )
}