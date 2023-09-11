import React, { useState, useEffect } from 'react';
import { FadeLoader } from 'react-spinners';

const Loading = () => {
  const [showElement, setShowElement] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setShowElement(false);
    }, 5000);
  }, []);
  return (
    <>
      {showElement && (
        <div className="loading absolute top-0 left-0 w-full h-full bg-black/80 z-10">
          <div className="fadeLoaderWrap absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
            <FadeLoader
              color="#FF097F"
              cssOverride={null}
              height={15}
              loading
              margin={2}
              speedMultiplier={1}
              width={5}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Loading;
