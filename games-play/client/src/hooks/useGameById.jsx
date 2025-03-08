import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import gameApi from "../api/gameApi";

export default function useGameById() {
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
    return { game }
}