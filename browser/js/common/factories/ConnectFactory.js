/**
 * Created by Austin on 12/8/15.
 */
app.factory('ConenctFactory', ($http) => {
    return {
        getDevices: () => {
            $http.get(`/api/device`)
                .then(response => response.data)
                .then(next);
        }
    }

});
