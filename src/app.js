import 'bootstrap';

export class App {
  configureRouter(config, router){
    config.title = 'Discuss';
    config.map([
      { route: ['','feed'],  name: 'feed',      moduleId: 'feed',      nav: true, title:'Feed' }
    ]);

    this.router = router;
  }
}
