/// <reference path="node_modules/my_module_es6/typings.d.ts" />

import myModuleDefault, {MyClass, AnotherClass} from 'my_module_es6';

var obj = new MyClass();
obj.myMethod("test");

var obj = new myModuleDefault();
obj.myMethod("test");

var obj2 = new AnotherClass();
obj2.doSomething("hello");

console.log("ciao");

