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
    if (onInit && instance && typewriterRef.current.innerText.length === 0) {
      onInit(instance);
    }
  }, [instance, onInit])

  return <div className="typewriter" ref={typewriterRef}></div>;
};

export default TypewriterComp;