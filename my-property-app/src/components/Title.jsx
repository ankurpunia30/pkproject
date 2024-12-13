// TitleComponent.jsx
import React from 'react';

const TitleComponent = () => {
    return (
        <div className="flex items-center">
            <img 
                src="https://www.svgrepo.com/show/499962/music.svg" 
                className="h-6 mr-3 sm:h-9" 
                alt="PropertyDekho Logo" 
            />
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
                PropertyDekho
            </span>
        </div>
    );
};

export default TitleComponent;
