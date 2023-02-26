
# Chapter 01 - Inception

Chapter 01 inception is all about how to render element using javascript and how we can render using react cdn libraries. Also we have learnt about react and react dom indepth.


### 1. What is Emmet?

if you go by their site the definition is

> **“Emmet is a plug in for many popular text editors which greatly improves HTML & CSS workflow:”**

And Emmet does fulfill what they promise, you can use short expressions to generate HTML markup, CSS.

The general way to write Emmet abbreviation is:

> tagName[series of expressions]

Where tagName: is the HTML tag you want to generate

Series of expressions will govern the markup that will be generated.


~~~
Few Emmet Usecases: 

HTML from CSS
Dynamic snippets
Ultra-fast coding
Highly portable

~~~

You can learn more about emmet commad from below medium article.

<https://medium.com/@kartik2406/web-development-with-vs-code-part-1-emmet-6af80f0f630c>


***Tip:*** While typing the Emmet Abbreviations, you can press ***Ctrl + Space*** see what will be generated(Inside a pop up)

---

### 2. Difference between a Library and Framework? 

- A framework can abstract away logic, behavior, and even architectural patterns. It's especially useful when you begin a new project. A library can help with complexity, but typically focuses on code reuse.

- One key difference between libraries and frameworks is that libraries are called by the code, while frameworks call the code. In other words, when you use a library, you are in control of how and when it is used. With a framework, the framework is in control and dictates how the code should be organized and used.

- Most frameworks provide a functional starting point, such as a skeleton or boilerplate, to help you build web apps quickly. A library becomes part of your already established codebase.

- As a reminder, you don't typically compare a library with a framework because they're different things that achieve different tasks. However, the more knowledge you have about the two, the more empowered you are to decide which is best for you. The decision to use a framework or library ultimately depends on your requirements.

---

### 3. What is CDN? Why do we use it? 

A CDN, or content delivery network, is a network or collection of servers in locations all over the world. Also known as a content distribution network, a CDN can refer to many types of content delivery services, such as load balancing and video streaming.


A CDN’s network of servers allows companies to deliver content from their websites and mobile applications to people more quickly and efficiently, based on their geographic location. In short, a CDN moves data and applications closer to the end user — increasing speed, enhancing security, and improving the user experience.

### What are the benefits of CDNs?

**Reduce page load time**
Website traffic can decrease if your page load times are too slow. A CDN can reduce bounce rates and increase the time users spend on your site.

**Reduce bandwidth costs**
Bandwidth costs are a significant expense because every incoming website request consumes network bandwidth. Through caching and other optimizations, CDNs can reduce the amount of data an origin server must provide, reducing the costs of hosting for website owners.

**Increase content availability**
Too many visitors at one time or network hardware failures can cause a website to crash. CDN services can handle more web traffic and reduce the load on web servers. Also, if one or more CDN servers go offline, other operational servers can replace them to ensure uninterrupted service.

**Improve website security**
Distributed denial-of-service (DDoS) attacks attempt to take down applications by sending large amounts of fake traffic to the website. CDNs can handle such traffic spikes by distributing the load between several intermediary servers, reducing the impact on the origin server.

![CDN](https://cyberhoot.com/wp-content/uploads/2020/03/What-is-Content-Delivery-Network.jpg)

---

### 4. Why is React known as React?

React is called React because it was designed to be a declarative, efficient, and flexible JavaScript library for building user interfaces.

The name "React" was chosen because the library was designed to allow developers to "react" to changes in state and data within an application, and to update the user interface in a declarative and efficient manner.

React was developed by Facebook and released in 2013, and it has since become one of the most popular JavaScript libraries for building web and mobile applications. It is used by many companies and organizations around the world, and it has a large and active developer community.

---

### 5. What is crossorigin in script tag?

The crossorigin attribute is used in the script tag to indicate that the script should be loaded from a different origin (domain, protocol, or port) than the current page. This is used to allow web pages to load resources from a different domain, while still allowing the browser to apply security measures such as the same-origin policy.

The crossorigin attribute can be set to either anonymous or use-credentials. If set to anonymous, the browser will include an Origin header with the request, but will not send any cookies or other credentials. If set to use-credentials, the browser will include credentials with the request.

The crossorigin attribute is often used to allow web pages to load resources such as fonts or scripts from a CDN (Content Delivery Network). It can also be used to allow web pages to access APIs or other resources from a different domain.

For example, the following script tag includes the crossorigin attribute to allow the script to be loaded from a different origin:

<script src="https://example.com/script.js" crossorigin="anonymous"></script>

---

### 6. What is diference between React and ReactDOM ? 

React library is responsible for creating views and ReactDOM library is responsible to actually render UI in the browser.

React is a JavaScript library for building user interfaces. It is designed to be declarative, meaning that developers specify what the UI should look like based on the current state of the application, and React takes care of updating the UI as needed. React is designed to be efficient and flexible, and is widely used in the development of web and mobile applications.

ReactDOM, on the other hand, is a library that provides an interface between React and the DOM (Document Object Model). The DOM is a tree-like structure that represents the HTML of a web page, and ReactDOM provides a set of functions that allow React components to be rendered to the DOM and updated efficiently.

In short, React is a library for building user interfaces, while ReactDOM is a library for interacting with the DOM and rendering React components to the web page. While they are often used together, they serve different purposes and can be used independently of each other.

### 7. What is difference between react.development.js and react.production.js files via CDN? 

**react.development.js** is basically used for the develeopment purpose which dosn't have the minified version of javascipt codes and it includes additional features and debugging tools that can be helpful when building and testing React applications.

whereas **react.production.js** is the minified version and it is more optimized which is the reason it is used in production environment and it does not include the additional debugging tools and may have other features disabled in order to reduce the size of the file and improve performance.

---

### 8. What is async and defer?

async and defer are attributes that can be used in the script tag to specify the loading behavior of a script.

The async attribute tells the browser to download the script in the background while the page is still loading, and to execute the script as soon as it is available. This can improve the loading speed of the page, as the script does not block the rendering of the page while it is being downloaded. However, the script may not necessarily be executed in the order it appears in the HTML, as it may be executed as soon as it is available.

The defer attribute tells the browser to download the script in the background while the page is still loading, but to execute the script only after the page has finished loading. This can also improve the loading speed of the page, as the script does not block the rendering of the page. However, unlike async, defer ensures that the script is executed in the order it appears in the HTML.

Both async and defer are used to improve the performance and loading speed of web pages by allowing scripts to be loaded and executed in a non-blocking manner. However, they have different behaviors and may be more suitable for different use cases.

![Aync vs Defer](https://miro.medium.com/max/1186/1*uNyy0B3r1QUBiD8sDqDgkQ.png)

Refrence Link: <https://medium.com/@nikjohn/speed-up-google-maps-and-everything-else-with-async-defer-7b9814efb2b>

---
