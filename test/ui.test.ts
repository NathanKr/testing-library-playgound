import { beforeEach, expect, test } from "vitest";
import { createDom, registerHandlers } from "../src/ui-utils";
import {getQueriesForElement} from '@testing-library/dom'
import userEvent from '@testing-library/user-event'


beforeEach(() => {
  document.body.innerHTML = '<div id="app"></div>'
  createDom();
  registerHandlers();
});

test("'Vite + TypeScript' exist in the DOM", () => {
  const {getByText} = getQueriesForElement(document.body);
  expect(getByText("Vite + TypeScript")).toBeTruthy()
});


test('click on button count is 0 -> count is 1',async ()=>{
  const {getByText , findByText} = getQueriesForElement(document.body);
  let buttonElem = getByText("count is 0");
  expect(buttonElem).toBeTruthy()
  userEvent.click(buttonElem);
  const buttonWithNewText = await findByText('count is 1')
  expect(buttonWithNewText).toBeTruthy()
})