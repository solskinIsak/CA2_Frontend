import React, {useEffect, useState} from 'react';
import facade from "../apiFacade.js";
import {dadJokeURL,chuckURL,ultimateJokeURL} from "../settings.js";

const Joke = ({user}) => {


    const [dataFromServer, setDataFromServer] = useState("")
    const [joke, setJoke] = useState([])
    let data = "";


    useEffect( () => {
        if(user.username === ''){ setDataFromServer('Please login to see data from server');

            return;
        }
        fetch(ultimateJokeURL)
            .then(response => response.json())
            .then(data =>setJoke(data.jokes)

            ).catch(err => {
                console.error(err)
        });
        const url = user.roles.split(',').includes('user') ? '/info/user' : '/info/admin';
        facade.fetchData(url).then(res => {

            console.log(res);
            setDataFromServer(res.msg)});
    },[user]);

    return (
        <div>
            {dataFromServer}
            <h2>{"CHUCK JOKE:    "+ joke[0]}</h2>
            <br/>
            <h2>{"DAD JOKE:     "+ joke[1]}</h2>
        </div>
    );
};

export default Joke;