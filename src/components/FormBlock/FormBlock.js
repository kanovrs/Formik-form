import { Form, Field, Formik, ErrorMessage } from 'formik';
import './form-block.css'

export default function FormikForm () {
    const validateEmail = (value) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(value) ? undefined : 'Не коректний формат Email';
    }

    const validatePhone = (value) => {
        const phoneRegex = /^\d{12}$/;
        return phoneRegex.test(value) ? undefined : 'Телефон має містити 12 цифр'
    }

    const validateName = (value) => {
    return value ? undefined : 'Введіть ваше ім\'я';
  };

    const handleSubmit = (values) => {
    // Обробка відправлених даних
    console.log(values);
  };

    return (
         <div className='wraper'>
      <h1>Форма реєстрації</h1>
      <Formik
        initialValues={{
          name: '',
          email: '',
          phone: '',
        }}
        onSubmit={handleSubmit}
      >
        {({ isValid, isSubmitting }) => (
          <Form className='form'>
            <label>Ваше Ім'я</label>
            <Field type='text' name='name' validate={validateName} />
            <ErrorMessage name='name' />

            <label>Ваш email</label>
            <Field type='email' name='email' validate={validateEmail} />
            <ErrorMessage name='email' />

            <label htmlFor='phone'>Ваш номер телефону</label>
            <Field type='tel' name='phone' validate={validatePhone} placeholder='У форматі 38066ххххххх' />
            <ErrorMessage name='phone' />

            <button type='submit' disabled={isSubmitting || !isValid}>Відправка данних</button>
          </Form>
        )}
      </Formik>
    </div>
    )
}

