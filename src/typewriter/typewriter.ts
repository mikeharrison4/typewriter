import {RefObject} from "react";

class Typewriter {
  element: RefObject<HTMLElement>;
  queue: Array<() => void> = [];

  constructor(element: RefObject<HTMLElement>) {
    this.element = element;
  }

  typeString(string: string) {
    this.queue.push(() => {
      return new Promise<void>((resolve, _reject) => {
        let i = 0;
        const interval = setInterval(() => {
          this.element.current?.append(string[i]);
          i++;
          if (i >= string.length) {
            clearInterval(interval);
            resolve();
          }
        }, 100);
      })
    });
    return this;
  }

  pauseFor(number: number) {
    this.queue.push(() => {
      return new Promise<void>((resolve, _reject) => {
        let i = 0;
        const interval = setInterval(() => {
          i++
          if (i >= 1) {
            clearInterval(interval);
            resolve();
          }
        }, number)
      })
    })

    return this;
  }

  async start() {
    for (let cb of this.queue) {
      await cb();
    }
  }
}

export default Typewriter;