import { beforeEach, expect, test } from "vitest";
import { createDom, registerHandlers } from "../src/ui-utils";
import {
  getAllByRole,
  getByRole,
  getByText,
  getQueriesForElement,
  queryByText,
  waitFor,
} from "@testing-library/dom";
import userEvent from "@testing-library/user-event";

beforeEach(() => {
  document.body.innerHTML = '<div id="app"></div>';
  createDom();
  registerHandlers();
});

test("'Vite + TypeScript' exist in the DOM' as heading", () => {
  const headingElements = getAllByRole(document.body, "heading");
  expect(headingElements.length).toBe(1);
});

test("'Vite + TypeScript' exist in the DOM", () => {
  expect(getByText(document.body, "Vite + TypeScript")).toBeInTheDocument();
});

test("click on button 'count is 0' -> count is 1", async () => {
  const { getByText, findByText } = getQueriesForElement(document.body);
  let buttonElem = getByText("count is 0");
  expect(buttonElem).toBeInTheDocument();
  userEvent.click(buttonElem);

  // --- getByText is not enough because the dom element does appear immidiatrely
  // const buttonWithNewText = getByText("count is 1");
  const buttonWithNewText = await findByText("count is 1");
  expect(buttonWithNewText).toBeInTheDocument();
});

test("click on button 'count with delay is 0' -> count with delay is 1", async () => {
  const { getByText } = getQueriesForElement(document.body);
  let buttonElem = getByText("count with delay is 0");
  expect(buttonElem).toBeInTheDocument();
  userEvent.click(buttonElem);
  await waitFor(
    () => {
      const buttonWithNewText = getByText("count with delay is 1");
      expect(buttonWithNewText).toBeInTheDocument();
    },
    { timeout: 5000 } // --- it will try every interval - 50 ms until 5000 ms
  );
});

test("output element is of type status", () => {
  const elem = getByRole(document.body, "status");
  expect(elem).toBeInTheDocument();
  expect(elem.textContent).toBe("This is output element");
});
