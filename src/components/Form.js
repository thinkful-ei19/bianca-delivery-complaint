import React from 'react';
import {reduxForm, Field} from 'redux-form';
import './Form.css';
import Input from './input';
import {required, nonEmpty, exactCharacters, beNumber} from '../validators';
import {report} from '../actions';

export class Form extends React.Component {
    onSubmit(values) {
        console.log(values);
    }
    render() {
        
        if(this.props.submitSucceeded){
            return <div className="message message-success">Report submitted successfully</div>
         }
         else if (this.props.submitFailed) {
            return <div className="message message-success">Delivery not found</div>
        }

        return (
            <div>
                <h2>Report a problem with your delivery</h2>
                <form
                    onSubmit={this.props.handleSubmit(values => this.props.dispatch(report(values))
                     
                    )}>
                    <label htmlFor="trackingNumber">Tracking Number</label>
                    <Field 
                        name="trackingNumber" 
                        id="trackingNumber" 
                        type="text" 
                        component={Input} 
                        validate={[required, nonEmpty, exactCharacters, beNumber]}
                    />
                    <label htmlFor="issue">What is your issue?</label>
                    <Field name="issue" id="issue" component="select">
                        <option value="not-delivered">My delivery hasn't arrived</option>
                        <option value="wrong-item">The wrong item was delivered</option>
                        <option value="missing-part">Part of my order was missing</option>
                        <option value="damaged">Some of my order arrived damaged</option>
                        <option value="other">Other (give details below)</option>
                    </Field>
                    <label htmlFor="issue-details">Give more details (optional)</label>
                    <Field name="issue-details" cid="message" component="textarea" />
                    <button type="submit" disabled={this.props.pristine || this.props.submitting}>Submit</button>
                </form>
            </div>
        );
    }
}

export default reduxForm({
    form: 'form',
    initialValues: { issue: "not-delivered" }
})(Form);
