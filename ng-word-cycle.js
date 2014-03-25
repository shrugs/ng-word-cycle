angular.module('ngWordCycle')
.directive('ngWordCycle', function($interval) {
    return {
        restrict: 'AE',
        // replace: true,
        template: '<span class="fade-in-out">{{word}}</span>',
        scope: {
            words: '='
        },
        link: function(scope, el, attrs) {
            var m = scope.words.length;
            var i = 0;

            scope.$watch('words', function() {
                m = scope.words.length;
                i = 0;
                scope.word = scope.words[i];
            });

            $interval(function() {
                scope.word = scope.words[i++];
                if (i >= m) { i=0; }
            }, attrs.interval || 3200);
        }
    };
});