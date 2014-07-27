/* global mySite */

'use strict';

mySite.filter('reverseFilter', function() {
    return function(items) {
        return items.slice().reverse();
    };
});
