import { useEffect, useState } from "react"
import gameApi from "../../api/gameApi"
import CatalogueGame from "./partials/CatalogueGame"

export default function Catalogue() {

    const [games, setGames] = useState([])

    useEffect(() => {
        gameApi.getAll().then(result => {
            setGames(result);
        })
    }, [])
    return (
        <section id="catalog-page">
            <h1>All Games</h1>
            {/* <!-- Display div: with information about every game (if any) --> */}
            {games.length > 0
                ? games.map(game => <CatalogueGame key={game._id} game={game} />)
                : <h3 className="no-articles">No articles yet</h3>}
            {/* <!-- Display paragraph: If there is no games  --> */}

        </section>
    )
}