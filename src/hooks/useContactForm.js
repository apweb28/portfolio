import { useState } from 'react';

const initialValues = { firstName: '', lastName: '', email: '', message: '' };

export function useContactForm() {
  const [values, setValues] = useState(initialValues);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    const firstName = values.firstName.trim();
    const email = values.email.trim();
    const message = values.message.trim();

    if (!firstName || !email || !message) {
      alert('Please fill all required fields.');
      return;
    }

    setIsPopupOpen(true);
    setValues(initialValues);
  }

  function closePopup() {
    setIsPopupOpen(false);
  }

  return { values, handleChange, handleSubmit, isPopupOpen, closePopup };
}
