const useResetForm = () => {

    const ResetForm = (form) => {
     
        form.value.first_name = null;
        form.value.last_name = null;
        form.value.email = null;
        form.value.phone = null;
    };
  
    return { ResetForm };
  };
  
  export default useResetForm;

