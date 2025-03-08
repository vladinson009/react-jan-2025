import { useActionState, useContext } from "react"
import gameApi from "../../api/gameApi"
import context from "../../context/userContext";

export default function CreateGame() {
    const [{ error, userInput }, formAction, isPending] = useActionState(onSubmit, { error: '', userInput: {} })
    const { navigate } = useContext(context)

    async function onSubmit(previousState, formData) {
        const userInput = Object.fromEntries(formData);
        try {
            await gameApi.create(userInput);
            navigate('/');
        } catch (error) {
            return { error: error.message, userInput };
        }
    }

    return (
        <section id="create-page" className="auth">
            <form action={formAction} id="create">
                <div className="container">
                    <h1>Create Game</h1>
                    {error && <p style={{ color: 'red' }}>{error}</p>}
                    <label htmlFor="leg-title">Legendary title:</label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        placeholder="Enter game title..."
                        defaultValue={userInput.title}
                    />
                    <label htmlFor="category">Category:</label>
                    <input
                        type="text"
                        id="category"
                        name="category"
                        placeholder="Enter game category..."
                        defaultValue={userInput.category}
                    />

                    <label htmlFor="levels">MaxLevel:</label>
                    <input
                        type="number"
                        id="maxLevel"
                        name="maxLevel"
                        min="1"
                        placeholder="1"
                        defaultValue={userInput.maxLevel}
                    />

                    <label htmlFor="game-img">Image:</label>
                    <input
                        type="text"
                        id="imageUrl"
                        name="imageUrl"
                        placeholder="Upload a photo..."
                        defaultValue={userInput.imageUrl}
                    />

                    <label htmlFor="summary">Summary:</label>
                    <textarea
                        name="summary"
                        id="summary"
                        defaultValue={userInput.summary}
                    ></textarea>
                    <input disabled={isPending} className="btn submit" type="submit" value="Create Game" />
                </div>
            </form>
        </section>
    )
}