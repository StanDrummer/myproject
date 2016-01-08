import {Router} from 'aurelia-router';


export class App {
	static inject() { return [Router]; }
	constructor(router) {
		this.router = router;
		this.router.configure(congfig => {
			config.title = 'Aurelia';
			congfig.map([
				{ route: ['', 'welcome'], moduleId: 'welcome', nav: true, title:'Welcome' },
				{ route: 'flickr', moduleId: 'flickr', nav: true }
			]);
		});
	}
}