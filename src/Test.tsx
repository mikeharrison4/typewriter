import React, {SetStateAction, useEffect, useRef, useState} from 'react';
import Typewriter from "./typewriter";

const Test = () => {
  const typewriterRef = useRef(null);
  const [typewriter, setTypeWriter] = useState<SetStateAction<any>>()

  useEffect(() => {
    setTypeWriter(new Typewriter(typewriterRef))
    return () => setTypeWriter(null);
  }, [])

  if (typewriter) {
    typewriter
      .typeString('Frontend Engiener')
      .start()
  }

  return (
    <div ref={typewriterRef}>
      
    </div>
  );
};

export default Test;