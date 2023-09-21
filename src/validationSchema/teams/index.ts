import * as yup from 'yup';

export const teamValidationSchema = yup.object().shape({
  description: yup.string().nullable(),
  date_created: yup.date().nullable(),
  name: yup.string().required(),
  user_id: yup.string().nullable().required(),
});