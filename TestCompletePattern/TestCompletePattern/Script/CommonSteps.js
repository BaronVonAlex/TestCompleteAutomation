function openOrderApp() {
    TestedApps.Orders.Run();
    return this;
}

function closeOrderApp() {
    TestedApps.Orders.Terminate();
    return this;
}

module.exports.openOrderApp = openOrderApp;
module.exports.closeOrderApp = closeOrderApp;