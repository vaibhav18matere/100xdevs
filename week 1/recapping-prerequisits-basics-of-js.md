### History
- Our machines understands binary (0 and 1), earlier we used to write code in 'assembly language' that is 0 and 1.
- It's pretty hard; Now, we write it in "high level language" and compiler convert it into 0 and 1.
- Javascript built as a scripting language for web browser.
- You can write your own browser, just follow ECMA standards.

### Backend
- NODE.JS => Not language, No Framework; It's JS runtime; Engine for chrome.

#### Problems
- 1. print name and age of all users
```js
var users = [
     {
          name: "Vaibhav",
          age: 26,

     },
     {
          name: "Arjun",
          age: 6,

     },
];
```
- 2. print count from 0 to 100.
- 3. calculate sum from 0 to 10 or 10 to 50.
- 4. write a function which takes another function as an argument and does something.
- 5. Print star patterns

### Where can Javascript runs?

- Inside web browsers : such as Chrome, Firefox, Safari, and Edge...
- Server-side : using node.js ...
- Desktop aplicartions : using Electron
- Mobile devices : using React Native and Apache Cordova ...
- IOT(Internet of things) : using Espruino and Johnny-Five
- Cloud platforms : AWS Lambda, Google Cloud Functions, and Azure Functions support JavaScript as a runtime.

### JavaScript is 
- Single Threaded : One task at a time.
- Asynchronous : Async task don't necessarily runs on same thread of execution; used to perform complex tasks. ex. callbacks
- High level : Loosely typed; we don't define data types (no strict type check) initially.
- Interpreted : Line by line code execution. source code is translated into machine code at runtime.


### APIs
- Exposed by the runtime environment
- For ex. 1. fetch() 2. setTimeout() 3. setInterval() ...