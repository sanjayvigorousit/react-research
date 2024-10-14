import { useState } from 'react';
import { sculptureList } from './data.js';
import "./completeGallery.css";

export default function CompleteGallery() {
    const [index, setIndex] = useState(0);
    const [showMore, setShowMore] = useState(false);

    function handleNextClick() {
        setIndex(index + 1);
    }

    function handlePrevClick() {
        setIndex(index - 1);
    }

    function handleMoreClick() {
        setShowMore(!showMore);
    }

    let sculpture = sculptureList[index];
    return (
        <>
            {index === sculptureList.length ? null :
                <button onClick={handleNextClick}>
                    Next
                </button>}
            {index === sculptureList.length ? null :
                <button onClick={handlePrevClick}>
                    Prev
                </button>}
            <h2>
                <i>{sculpture.name} </i>
                by {sculpture.artist}
            </h2>
            <h3>
                ({index + 1} of {sculptureList.length})
            </h3>
            <button onClick={handleMoreClick}>
                {showMore ? 'Hide' : 'Show'} details
            </button>
            {showMore && <p>{sculpture.description}</p>}
            <img
                src={sculpture.url}
                alt={sculpture.alt}
            />
        </>
    );
}
