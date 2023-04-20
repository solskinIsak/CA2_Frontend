import React, {useEffect, useState} from 'react';
import facade from "../apiFacade.js";
import {animeURL} from "../settings.js";

const RandomAnime = ({user}) => {


    const [dataFromServer, setDataFromServer] = useState("")
    const [anime, setAnime] = useState("")
    const [update, setUpdate] = useState(false)
    let data = "";

    const handleClick = () => {
        setUpdate(!update)
    }

    useEffect( () => {
        if(user.username === ''){ setDataFromServer('Please login to see data from server ');

            return;
        }
        fetch(animeURL)
            .then(response => response.json())
            .then(data =>setAnime(data)

            ).catch(err => {
                console.error(err)
        });
        const url = user.roles.split(',').includes('user') ? '/info/user' : '/info/admin';
        facade.fetchData(url).then(res => {

            console.log(res);
            setDataFromServer(res.msg)});
    },[update]);

    return (
        <div>
            {dataFromServer}
            <img src={anime.image_url} alt=""/>
            <h2>{anime.title}</h2>
            <button onClick={handleClick}>New Recommendation</button>

        </div>
    );
};

export default RandomAnime;