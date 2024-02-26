import React from "react";

import "./introheader.css";

const IntroHeader = () => {
    return (
        <div className="headerContainer">
            {/* <h1 className="initial-text">
                Hi, I'm <span className="colour">Nathan Probert</span> 👋.
            </h1> */}
            <h1 className='initial-text'>
                {[[..."Hi,"], [..."I'm"], [..."Nathan"], [..."Probert"]].map((word, i) => {
                return (
                    <div key={i}>
                    {word.map((letter, j) => (
                        <span key={j} onMouseOver={({ target }) => target.classList.add('jump')} onAnimationEnd={({ target }) => target.classList.remove('jump')}
                        className="eachChar">
                        {letter}
                        </span>
                    ))}
              &nbsp;

                    </div>
                )
                })}
            </h1>
        </div>
    );
};

export default IntroHeader;
