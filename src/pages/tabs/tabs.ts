import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { AlarmsPage } from '../alarms/alarms';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = AlarmsPage;
  tab2Root = AboutPage;
  tab3Root = ContactPage;

  constructor() {

  }
}
