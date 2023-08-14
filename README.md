<h2>Motivation</h2>
Simple usage of testing library

<h2>Benefits of testing library over simply using jsdom</h2>
<ul>
<li>testing library encourage good testing practices e.g. finding node by text as simple user does. not by using dom node implementation details like class or id or type </li>
<li>it is simple to get dom element by text in testing library simply by using getByText. In jsdom you need to create helper functions to do this</li>
<li>It is easy to wait for element in the dom using testing library via await findByText and it is using MutationObaserver internally, check <a href='https://www.youtube.com/watch?v=kVS78Ztq9RY'>here</a>. In jsdom you need to do it yourself via MutationObserver which is not easy or use sleep which is time consuming</li>
</ul>

<h2>Setup</h2>
<h3>setup.ts</h3>
add file setup.ts

```
import { expect } from 'vitest';
import matchers from '@testing-library/jest-dom/matchers';

// extends Vitest's expect method with methods from testing-library
expect.extend(matchers);
```
and use it in vite.config.ts

<h3>important packages for testing</h3>
<ul>
<li>@testing-library/dom - used e.g. for getQueriesForElement</li>
<li>@testing-library/user-event - used e.g. for userEvent.click(buttonElem)</li>
<li>@testing-library/jest-dom - used for matchers</li>
<li>jsdom - used to emulated the DOM</li>
<li>@types/testing-library__jest-dom - matchers types</li>
</ul>


<h2>points of interest</h2>
<ul>
<li>you can access node by role in testing-library using e.g. getByRole. Role is defined <a href='https://www.w3.org/TR/wai-aria-1.2/#roles'>here</a></li>
</ul>