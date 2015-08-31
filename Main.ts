///<reference path="node_modules/my_module/typings.d.ts" />

import myModule = require('my_module');

var obj = new myModule.MyClass();
obj.myMethod("test");

var obj2 = new myModule.AnotherClass();
obj2.doSomething("hello");

console.log("ciao");

