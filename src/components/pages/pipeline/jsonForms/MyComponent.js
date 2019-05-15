import compiler from 'mson/lib/compiler';
import Component from 'mson/lib/component';
import Form from 'mson/lib/form';
import { TextField } from 'mson/lib/fields';
import moment from 'moment';

class MyComponent extends Component {
  _create(props) {
    super._create(props);

    this.set({
      // Define a currentDay property
      schema: new Form(
        fields: [
          new TextField({
            name: 'currentDay'
          })
        ]
      ),

      // Default currentDay
      currentDay: moment().format('dddd')
    });
  }
}

compiler.registerComponent('MyComponent', MyComponent);
