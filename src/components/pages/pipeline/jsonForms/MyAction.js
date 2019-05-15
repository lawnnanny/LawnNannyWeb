import compiler from 'mson/lib/compiler';
import Action from 'mson/lib/actions/action';
import Form from 'mson/lib/form';
import { TextField } from 'mson/lib/fields';

class MyAction extends Action {
  _create(props) {
    super._create(props);

    this.set({
      schema: new Form(
        fields: [
          new TextField({
            name: 'foo'
          })
        ]
      )
    });
  }

  async act(props) {
    const form = new FormData();
    form.append('foo', this.get('foo'));

    const account = props.component;
    form.append('firstName', account.get('firstName');
    form.append('lastName', account.get('lastName');
    form.append('email', account.get('email');

    return fetch({
      'https://api.example.com',
      {
        method: 'POST',
        body: form
      }
    })
  }
}
compiler.registerComponent('MyAction', MyAction);
