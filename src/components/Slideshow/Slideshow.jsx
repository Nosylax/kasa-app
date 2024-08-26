import React, { useState } from 'react';


const Slideshow = (props) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div>
      <div>
        {props.slide}
      </div>
      <button onClick={() => setCurrentIndex(currentIndex - 1)}>Précédent</button>
      <button onClick={() => setCurrentIndex(currentIndex + 1)}>Suivant</button>
    </div>
  );
}

export default Slideshow;