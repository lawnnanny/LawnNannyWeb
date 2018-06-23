import React from "react";
import { Form, Header, Input, Button } from 'semantic-ui-react'
import { Requests } from '../pages/pipeline/jsonRequests'


class DynamicForm extends React.component {

    state = {
        data: {},
    }

    onChange = e => this.setState({
        data: { ...this.state.data, [e.target.name]: e.target.value }
    })

    onSubmit = () => {
        this.props.submit(this.state.data);
    }

    renderFormFromJson = (requestName) => {
        const requests = Requests.Requests[requestName];
        const formUI = requests.fields.map((field) => (
                <Form.Field onChange={this.onChange}>
                    <label htmlFor={field.id} >{field.name}</label>
                    <Input id={field.id} type={field.type}/>
                </Form.Field>
            ));
        return formUI;
    }

     render (title, requestName) {
        return (
            <div>
               <Header size='large'>{title}</Header>
               <Form onSubmit={this.onSubmit}>
                   {this.renderFormFromJson(requestName)}
                   <Button>Submit</Button>
               </Form>
           </div>
        );
   };

}



export default DynamicForm;
