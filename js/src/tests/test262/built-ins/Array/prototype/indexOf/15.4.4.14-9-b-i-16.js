// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.14-9-b-i-16
description: >
    Array.prototype.indexOf - element to be retrieved is inherited
    accessor property on an Array-like object
---*/

            Object.defineProperty(Object.prototype, "0", {
                get: function () {
                    return 10;
                },
                configurable: true
            });

            Object.defineProperty(Object.prototype, "1", {
                get: function () {
                    return 20;
                },
                configurable: true
            });

            Object.defineProperty(Object.prototype, "2", {
                get: function () {
                    return 30;
                },
                configurable: true
            });

assert.sameValue(Array.prototype.indexOf.call({ length: 3 }, 10), 0, 'Array.prototype.indexOf.call({ length: 3 }, 10)');
assert.sameValue(Array.prototype.indexOf.call({ length: 3 }, 20), 1, 'Array.prototype.indexOf.call({ length: 3 }, 20)');
assert.sameValue(Array.prototype.indexOf.call({ length: 3 }, 30), 2, 'Array.prototype.indexOf.call({ length: 3 }, 30)');

reportCompare(0, 0);