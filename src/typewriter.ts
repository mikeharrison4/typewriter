import {RefObject} from "react";

class Typewriter {
  element: RefObject<HTMLElement>;
  queue: Array<() => void> = [];

  constructor(element: RefObject<HTMLElement>) {
    this.element = element;
  }

  typeString(string: string) {
    this.queue.push(() => {
      new Promise<void>((resolve, reject) => {
        // setInterval(() => {
        //   // console.log(string)
        // }, 50)
        this.element.current?.append(string);
        console.log(string, this.element);
        resolve();
      })
    });
    return this;
  }

  start() {
    for (let cb of this.queue) {
      cb();
    }
  }
}

export default Typewriter;