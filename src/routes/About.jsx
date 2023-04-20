import React, {useEffect, useState} from 'react';
import facade from "../apiFacade.js";

const About = ({user}) => {

    const [dataFromServer, setDataFromServer] = useState("Loading...")
    const [isUpdated, setIsUpdated] = useState(false);
    let data ="";

useEffect( () => {
    if(user.username === ''){ setDataFromServer('Please login to see data from server');
        return;
}
    const url = user.roles.split(',').includes('user') ? '/info/user' : '/info/admin';

    facade.fetchData(url).then(res => {

        console.log(res);
        setDataFromServer(res.msg)});
},[user]);

    return (
        <div>
            {dataFromServer}
            <h1>About Section </h1>
            <h3>Thanks for checking out about!</h3>
            <h3>This text is only visible on the about page! amazing right?!</h3>
            <h4>We hope you enjoy!</h4>

        </div>
    );
};

export default About;