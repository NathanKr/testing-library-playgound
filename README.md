<h2>Motivation</h2>
Simple usage of testing library

<h2>Benefits of testing library over simply using jsdom</h2>
<ul>
<li>testing library encourage good testing practices e.g. by finding node by text as simple user does. not by using dom node implementation details like class or id or type </li>
<li>it is simple to get dom element by text in testing library simply by using getByText. In jsdom you need to create helper functions to do this</li>
<li>It is easy to wait for element in the dom using testing library via await findByText and it is using MutationObaserver internally, check <a href='https://www.youtube.com/watch?v=kVS78Ztq9RY'>here</a>. In jsdom you need to do it yourself via MutationObserver which is not easy or use sleep which is time consuming</li>
</ul>

<h2>important packages for testing</h2>

These two packages are required by testing library
```
@testing-library/dom
@testing-library/user-event
```

This is used to emulated the DOM
```
jsdom
```
