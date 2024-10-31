import * as yup from 'yup';
import { FormField } from '../types';

const createTextSchema = (field: FormField) => {
  let schema = yup.string();
  if (field.validation) {
    schema = schema.matches(new RegExp(field.validation), 'Invalid format');
  }
  return schema;
};

const createNumberSchema = (field: FormField) => {
  let schema = yup.number();
  if (field.min_value !== undefined) {
    schema = schema.min(field.min_value);
  }
  if (field.max_value !== undefined) {
    schema = schema.max(field.max_value);
  }
  return schema;
};

const createDropdownSchema = (field: FormField) => {
  const validValues = (field.options || []).map(option => option.value);

  return yup
    .mixed()
    .oneOf(validValues, 'Invalid option');
};

const getFieldSchema = (field: FormField) => {
  switch (field.type) {
    case 'text':
    case 'longtext':
      return createTextSchema(field);
    case 'number':
      return createNumberSchema(field);
    case 'dropdown':
      return createDropdownSchema(field);
    default:
      return yup.mixed();
  }
};

export const generateValidationSchema = (fields: FormField[]) => {
  return yup.object(
    fields.reduce((acc, field) => {
      acc[field.name] = getFieldSchema(field);
      return acc;
    }, {} as Record<string, yup.Schema<any>>)
  );
};