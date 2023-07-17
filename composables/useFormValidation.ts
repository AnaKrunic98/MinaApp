const useFormValidation= () => {
    const errors= ref([]);

    const validateForm = (form) => {

        errors.value.length = 0 
        let validated = true;
      
        if (!form.email) {
          errors.value.push('Email address is required');
          validated = false;
        }
      
        if (!form.password) {
          errors.value.push('Password is required');
          validated = false;
        }

        return { validated, errors };
      };

      return { validateForm, errors }; 
}
export default useFormValidation 