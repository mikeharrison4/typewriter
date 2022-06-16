import React, {SetStateAction, useRef, useState} from 'react';
import Typewriter from './typewriter';

type TypewriterProps = {
  onInit?: (typewriter: any) => void;
}

const TypewriterComp = ({ onInit }: TypewriterProps) => {
  const typewriterRef = useRef<any>(null);
  const [instance, setInstance] = useState<SetStateAction<any>>();

  React.useEffect(() => {
    const typewriter = new Typewriter(typewriterRef);
    setInstance(typewriter);
  }, [])

  React.useEffect(() => {
    if(typewriterRef.current) {
      console.log(typewriterRef.current.innerText)
    }
    if (onInit && instance && !typewriterRef.current.innerText) {
      onInit(instance)
    }
  }, [instance, onInit])

  return <div ref={typewriterRef}></div>;
};

export default TypewriterComp;