
# Chapter 02 - Igniting Our App

Chapter 02 igniting our app is all about learning about npm, bundlers, parcel, npx , superpowers of bundlers and ingniting our app using parcel bundler.


### 1. What is NPM?

NPM – or "Node Package Manager" – is the default package manager for JavaScript's runtime Node.js.

It's also known as "Ninja Pumpkin Mutants", "Nonprofit Pizza Makers", and a host of other random names that you can explore and probably contribute to over at npm-expansions.

NPM consists of two main parts:

- a CLI (command-line interface) tool for publishing and downloading packages, and
- an online repository that hosts JavaScript packages

---

### 2. What is `Parcel/Webpack`? Why do we need it?

Parcel/Webpack is a bundler used for bundling the application and also provide a lot of other functionalities like HMR, Clean code, code splitting, dev & production build generation, minifying, image optimization, caching while development, compression, renaming variable, old browser compatibility, feasibility to run development build with HTTPS, zero config bundler etc.

---

### 3. What is `.parcel-cache`?

`.parcel-cache` is a folder, used by parcel for caching the application, so that after the first build the application will not be needed to build again from the beginning. It stores the cached version of the application in the  `.parcel-cache` folder and reduces the build time of the application significantly.

---

### 4. What is npx?

npx stands for node package execute, thus it executes the npm packages.

---

### 5. What is difference between `dependencies` vs `devDependencies`

devDependencies are modules which are only required during development, while dependencies are modules which are also required at runtime

---

### 6. What is Tree Shaking?

Tree shaking concept is used in bundler to remove unused code/modules. This term is commonly used within a JavaScript context to describe the removal of dead code. It relies on the import and export statements to detect if code modules are exported and imported for use between JavaScript files.

In modern JavaScript applications, we use module bundlers (e.g., webpack,  Rollup, Parcel) to automatically remove dead code when bundling multiple JavaScript files into single files. This is important for preparing code that is production ready, for example with clean structures and minimal file size.thus the application gets more optimized.

Here, Parcel will do this job for us. It also concatenates modules into a single scope when possible, rather than wrapping each module in a separate function. This is called “scope hoisting”.

---

### 7. What is Hot Module Replacement?

Hot Module Replacement (HMR) improves the development experience by automatically updating modules in the browser at runtime without needing a whole page refresh. This means that application state can be retained as you change small things. Parcel supports javascript and css files both.

---

### 8. List down your favourite 5 superpowers of Parcel and describe any 3 of them in your own words.

1. creating a server
2. compression
3. minification
4. opening a port to run the application
5. caching
6. optimization
7. File watcher
8. HMR
9. image optimization
10. tree shaking
11. code cleaning
12. zero configuration
13. compatible with older version of the browser
14. consistent hashing algorithm

- 3 Superpowers explanation:

1. Creating a server
- Parcel creates a server for the application with zero configuration and also allocate a port  number against the application. This functionality removes loads of work from us and make develeopment focused.  

2. Compression and minification: 
- The code we write gets compressed and also minified by parcel which is amazing. Because of this we don't have to be worry about our application size. Thus it helps us in optimization and faster running of the application 
        
3. Caching:
- Parcel creates a folder and tracks that files to minimize the build time of the application which is very useful as it helps to faster runtime of the application.

---

### 9. What is `.gitignore`? What should we add and not add into it?

`.gitignore` is the file which keeps track for what needs to be tracked in the version control by pushing it to git. We should add all the auto generated file, folders to git ignore as it can be generated on the fly and hence no tracking is required also we should add only those files which should be reproduced or like sensitive information(.env).

---

### 10. What is the difference between `package.json` and `package-lock.json`?

Package.json file only keep track the manually added npm modules, executable command and application info, Where as package-lock.json keeps track of all the modules of the current application including node_modules. Depending on package-lock.json the node_modules get regenerated. package.lock.json is created for locking the dependency with the installed version. It will install the exact latest version of that package in your application and save it in package.json.

---

### 11. Why should i not modify `package-lock.json`?

You should never modify package-lock.json file as it locks the exact compatible version getting used in the project. Modifying this file might create unecessary conflicts between different transitive dependencies in the project. Whenever we need to modify the version for any package, we should do it in package.json or by running npm install specific version command.

---

### 12. What is `node_modules` ? Is it a good idea to push that on git?

node_modules is auto generated folder which gets generated while installing an npm module. Definitely it is not a good idea to push node_modules in git as it is bulky in size and there are better ways to handle it. Package-lock.json is used to regenerate npm modules. 

---

### 13. What is the `dist` folder?

dist is the production-ready compiled and distributable version of your code. It gets generated when you build your project. This compiled code alone is sufficient to serve the application.

---

### 14. What is browserslist?

Browserlists is the list of all browser for the compatibility of older browsers. With browserlist we can select the browsers to run the application and also can provide polyfills for the older browsers.

---

### 15. Difference between ^ - caret and ~ - tilda?

The tilde matches the most recent minor version (the middle number) but caret will update you to the most recent major version (the first number).

~2.4.8 will match all 2.4.x versions, but it will miss 2.5.0.

^2.4.8 will match any 2.x.x release including 2.5.0, but it will hold off on 3.0.0.

---

### 16. What is different types in script?

type="module" -> This value causes the code to be treated as a JavaScript module. The processing of the script contents is deferred. The charset and defer attributes have no effect.

type="importmap" -> This value indicates that the body of the element contains an import map. The import map is a JSON object that developers can use to control how the browser resolves module specifiers when importing JavaScript modules.

type="blocking" -> This attribute explicitly indicates that certain operations should be blocked on the fetching of the script. The operations that are to be blocked must be a space-separated list of blocking attributes.

---
