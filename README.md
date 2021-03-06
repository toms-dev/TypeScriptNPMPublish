# Publishing a TypeScript module on NPM made easy!

Distributing TypeScript package on NPM is not as straightforward as it should be, that's why I decided to put together the information I gathered while addressing the issue.
 
You can find out all the information [on my blog post](http://www.tomsdev.com/blog/2015/packaging-typescript-module-publish-npm-release/).

Note: as of now, I could not get it to work for TypeScript 1.6 nor 1.7, so stick with the [1.5.3 template](https://github.com/toms-dev/TypeScriptNPMPublish/tree/master/TypeScript-1.5.3).

## Building the sample for ES3, ES5 and ES6

Just _cd_ in _TypeScript-1.5.3_ and:
```
$ tsc @ES3.params
# or
$ tsc @ES5.params
# or
$ tsc @ES6.params
```

Then run:
```
node Main.js      # for ES3 and ES5
# or
node Main-ES6.js  # for ES6
```

## A node_modules directory in a Git repo, seriously? Don't you know gitignore?
Yup, and that's actually the most interesting thing you have to check out on this repo, as it's a working example of how to package TypeScript code for NPM.
 
The Main.ts file at the root of the project demonstrate the concept. That's why _node_modules_ is part of the repo!
 
