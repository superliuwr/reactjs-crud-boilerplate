import React, { PropTypes } from 'react';
import { Field, reduxForm } from 'redux-form';
import FieldInput from '../common/FieldInput';
import SelectInput from '../common/SelectInput';


export const CourseForm = ({ handleSubmit, pristine, reset, submitting, heading, authors, handleSave, handleCancel }) => {
    return (
        <form onSubmit={handleSubmit(handleSave)}>
            <h1>{heading}</h1>

            <Field
                type="text"
                name="name"
                label="Name"
                placeholder="Name"
                component={FieldInput}
            />

            <Field
                type="text"
                name="description"
                label="Description"
                placeholder="Description"
                component={FieldInput}
            />

            <Field
                type="text"
                name="adImageUrl"
                label="Ad Image URL"
                placeholder="Ad Image URL"
                component={FieldInput}
            />

            <Field
                type="text"
                name="rate"
                label="Rate"
                placeholder="Rate"
                component={FieldInput}
            />

            <Field
                type="text"
                name="category"
                label="Category"
                placeholder="Category"
                component={FieldInput}
            />

            <Field
                type="text"
                name="contact"
                label="Contact"
                placeholder="Contact"
                component={FieldInput}
            />

            <Field
                type="text"
                name="url"
                label="Website"
                placeholder="Website"
                component={FieldInput}
            />

            <div>
                <button type="submit" disabled={submitting} className="btn btn-primary"><i className="fa fa-paper-plane-o" aria-hidden="true" /> Submit</button>

                {heading === 'Add' && <button type="button" disabled={pristine || submitting} onClick={reset} className="btn btn-default btn-space">Clear Values</button>}

                <button type="button" className="btn btn-default btn-space" onClick={handleCancel}>Cancel</button>
            </div>
        </form>
    );
};





const validate = values => {
    const errors = {};

    if (!values.name) {
        errors.name = 'Required';
    }

    if (!values.rate) {
        errors.rate = 'Required';
    }

    if (!values.adImageUrl) {
        errors.adImageUrl = 'Required';
    }

    return errors;
};



CourseForm.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    pristine: PropTypes.bool.isRequired,
    reset: PropTypes.func.isRequired,
    submitting: PropTypes.bool.isRequired,
    heading: PropTypes.string.isRequired,
    authors: PropTypes.array.isRequired,
    handleSave: PropTypes.func.isRequired,
    handleCancel: PropTypes.func.isRequired
};



export default reduxForm({
    form: 'CourseForm',
    validate
})(CourseForm);
