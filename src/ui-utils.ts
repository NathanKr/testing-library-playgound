import typescriptLogo from "./typescript.svg";
import viteLogo from "/vite.svg";
import { setupCounter } from "./counter.ts";

const DELAY_MS = 1000;

export function createDom() {
  document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
    <div>
      <a href="https://vitejs.dev" target="_blank">
        <img src="${viteLogo}" class="logo" alt="Vite logo" />
      </a>
      <a href="https://www.typescriptlang.org/" target="_blank">
        <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
      </a>
      <h1>Vite + TypeScript</h1>
      <div class="card">
        <button id="counter" type="button"></button>
        <br/>
        <span>click this will delay the counter increment by ${DELAY_MS} [ms]</span>
        <button id="counterDelayed" type="button"></button>
      </div>
      <p class="read-the-docs">
        Click on the Vite and TypeScript logos to learn more
      </p>
      <output>This is output element</output>
    </div>
  `;
}

export function registerHandlers() {
  setupCounter(document.querySelector<HTMLButtonElement>("#counter")!);
  setupCounter(
    document.querySelector<HTMLButtonElement>("#counterDelayed")!,
    DELAY_MS
  );
}
