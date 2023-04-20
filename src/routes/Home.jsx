import React from 'react';

const Home = () => {

    return (
        <div className="row featurette">
            <div className="col-md-7 order-md-2">

                <h1 className="featurette-heading">Welcome Page:
                    <span className="text-muted"> Thanks for checking our WEB-Client!</span>
                </h1>

                <h3>This is the Frontend template for CA2.

                    by Felicia, Jamie, Isak & Helena

                    If you wish to use the Frontend application, these are the pages you will need to change:</h3>

                <p className="lead">1:  In src/routes, you will need to add a jsx-file for your api.
                    -> Use the "Joke.jsx"-file as template if needed</p>
                <p>2:   In src/App.jsx you will need to add the routes to the return method</p>
                <p>3:   In src/settings.js you will need to add the URL as a const.</p>
                <p>4:   After you have added the url's to settings.js in step 3, you will need to import the urls 2 places: top of apiFacade.jsx and your newly created routes-file from point 1.</p>

            </div>
        </div>
    );
};

export default Home;