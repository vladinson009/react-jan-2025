import { useEffect, useState } from "react"
import gameApi from "../../api/gameApi";
import HomepageGame from "../game/partials/HomepageGame";

export default function Home() {
    const [games, setGames] = useState([]);

    useEffect(() => {
        gameApi.getLatestGame().then(result => {
            setGames(result.slice(0, 3));
        });
    }, [])
    return (
        <section id="welcome-world">
            <div className="welcome-message">
                <h2>ALL new games are</h2>
                <h3>Only in GamesPlay</h3>
            </div>
            <img src="/src/assets/images/four_slider_img01.png" alt="hero" />

            <div id="home-page">
                <h1>Latest Games</h1>

                {/* <!-- Display div: with information about every game (if any) --> */}
                {games.length > 0
                    ? games.map(game => <HomepageGame key={game._id} game={game} />)
                    : <p className="no-articles">No games yet</p>}
                {/* <!-- Display paragraph: If there is no games  --> */}

            </div>
        </section>
    )
}