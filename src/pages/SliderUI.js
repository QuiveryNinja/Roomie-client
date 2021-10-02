import React from 'react';
import { Slider } from '@material-ui/core';
import { useField } from 'formik';

const SliderWrapper = ({
  name,
  ...otherProps
}) => {
  const [field, mata] = useField(name);

  const configSlider = {
    ...field,
    ...otherProps,
  };

  if (mata && mata.touched && mata.error) {
    configSlider.error = true;
    configSlider.helperText = mata.error;
  }

  return (
    <Slider {...configSlider} />
  );
};

export default SliderWrapper;