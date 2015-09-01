/// <reference path="node_modules/my_module_es6/typings.d.ts" />
/// <reference path="node_modules/my_module_es6/index.ts" />

import myModule = require('my_module_es6');	// this won't work if target ES6
import myModuleDefault, {MyClass, AnotherClass} from './node_modules/my_module_es6/index.ts';

// From named import
var obj = new MyClass();
obj.myMethod("test");

// From require import
var obj2 = new AnotherClass();
obj2.doSomething("hello");

// Default export of the module
var obj3 = new myModuleDefault();
obj3.myMethod("test");

console.log("ciao");

