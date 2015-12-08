/**
 * Created by Austin on 12/2/15.
 */
app.config(($stateProvider) => {
    $stateProvider.state('sandbox', {
        url: '/sandbox',
        templateUrl: 'js/sandbox/sandbox.html',
        controller: 'SandboxController'

    });
});
