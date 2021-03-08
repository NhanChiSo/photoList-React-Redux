import RandomPhoto from 'components/RandomPhoto';
import PropTypes from 'prop-types';
import React from 'react';
import { FormFeedback, FormGroup, Label } from 'reactstrap';
import { ErrorMessage } from 'formik';

RandomPhotoField.propTypes = {
  field: PropTypes.object.isRequired,
  form: PropTypes.object.isRequired,

  label: PropTypes.string,
};

RandomPhotoField.defaultProps = {
  label: '',
}

function RandomPhotoField(props) {
  const { field, form, label } = props;
  const { name, value, onBlur } = field;

  // Show Error
  const { errors, touched } = form;
  const showError = errors[name] && touched[name];

  const handleImageUrlChange = (newImageUrl) => {
    form.setFieldValue(name, newImageUrl)
  }

  return (
    <FormGroup>
      {label && <Label for={name}>{label}</Label>}

      <RandomPhoto
        name={name}
        imageUrl={value}
        onImageUrlChange={handleImageUrlChange}
        onRandomButtonBlur={onBlur}
      />

      {/* input mới hỗ trợ invalid nên cần div để fake */}
      <div className={showError ? 'is-invalid' : ''}></div>
      <ErrorMessage name={name} component={FormFeedback} />
    </FormGroup>
  );
}

export default RandomPhotoField;