import React from 'react';
import Rainbow from '../HOC/rainbow';
const About = (props) => {
    console.log(props);
    return (
        <div className="container">
            <h4 className="center">
                About 
            </h4>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt, corrupti tempora! Non fugiat deserunt explicabo sed unde tempore sunt ab necessitatibus? Deserunt voluptatibus excepturi minus exercitationem ipsum blanditiis mollitia voluptatum?</p>
        </div>
    );
}
export default Rainbow(About);