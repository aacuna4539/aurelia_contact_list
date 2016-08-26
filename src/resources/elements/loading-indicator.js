/**
 * Created by rigel on 8/25/16.
 */

// available globally.  see index.js for global resources config

import * as nprogress from 'nprogress';
import { bindable, noView, decorators } from 'aurelia-framework';

export let LoadingIndicator = decorators(

  // noView tells aurelia not to look for a loading-indicator.html to compile/render
  // dropping path_to_css_file in noView() is analogous to <require form='foo/foo.css'></require> in a view
  noView(['nprogress/nprogress.css']),
  bindable({ name: 'loading', defaultValue: false})
).on(class {

  // propertyNameChanged method is called whenever the binding system updates the property
  loadingChanged(newValue) {
    if(newValue) {
      nprogress.start();

    } else {
      nprogress.done();
    }
  }
});
