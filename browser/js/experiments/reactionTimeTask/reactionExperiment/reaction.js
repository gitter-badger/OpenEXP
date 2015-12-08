
/**
 * Created by Austin on 12/6/15.
 */
app.directive('reactionExperiment', () => {
    return {
        restrict: 'E',
        templateurl: 'js/experiments/reactionTimeTask/reactionExperiment/reactionExperiment.html',
        controller: 'reactionExperimentCtrl'
    };
});
