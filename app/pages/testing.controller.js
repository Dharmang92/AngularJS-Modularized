app.controller('testingController', function ($scope, ResolveData) {
    let tc = this;
    console.log(ResolveData)
    tc.msg = ResolveData;
});
