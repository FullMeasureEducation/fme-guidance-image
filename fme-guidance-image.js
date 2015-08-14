// Generated by CoffeeScript 1.9.2
(function() {
  angular.module('fme-guidance-image', []).directive('fmeGuidanceImage', function() {
    return {
      restrict: 'A',
      template: "<div><img src='{{thumb_image}}' ng-click='displayLargeImage()' style='cursor:pointer;' /> <br/><a ng-href='{{large_image}}' target='_blank'><i class='fa fa-external-link'></i></a><div class='modal' id='{{image_modal_id}}'><div class='modal-dialog modal-lg'><div class='modal-content'><div class='modal-body' style='margin:0px; padding:0px;'><img width='100%' src='{{large_image}}'/></div></div></div></div></div>",
      scope: {
        src: '@'
      },
      link: function(scope, element, attrs) {
        scope.thumb_image = scope.src;
        scope.large_image = scope.src.replace('thumb_', '');
        scope.image_modal_id = scope.src.split("/").pop().split(".")[0];
        return scope.displayLargeImage = function() {
          angular.element("#" + scope.image_modal_id).modal('show');
        };
      }
    };
  });

}).call(this);