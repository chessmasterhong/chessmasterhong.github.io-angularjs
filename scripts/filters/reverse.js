/* global mySite */

'use strict';

mySite.filter('reverse', function() {
    return function(items) {
        return items.slice().reverse();
    };
});
