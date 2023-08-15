export function setupCounter(element: HTMLButtonElement, timoutMs?: number) {
  let counter = 0;
  const setCounter = (count: number) => {
    counter = count;
    element.innerHTML = timoutMs
      ? `count with delay is ${counter}`
      : `count is ${counter}`;
  };
  const clickHandlerEngine = () => setCounter(counter + 1);
  let clickHandler = clickHandlerEngine;
  if (timoutMs) {
    clickHandler = () => setTimeout(clickHandlerEngine, timoutMs);
  }
  element.addEventListener("click", clickHandler);
  setCounter(0);
}
