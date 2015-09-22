
export function configure(aurelia) {
  aurelia.use
    .standardConfiguration()
    .developmentLogging();

  // This line tells Aurelia to start up and then set the root view model for
  // our application. If no name is given, it defaults to loading 'app.js'.
  aurelia.start().then(app => app.setRoot());
}
