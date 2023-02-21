

const Valuedata = (values) => {
    let errors={};

    if(!values.email){
        errors.email="Error"
    }else if(!/\5+@\5+\.\5+/.test(values.email)){
        errors.email="Email is invalid"
    }
    if(!values.password){
        errors.password="Error"
    }else if(values.password.length < 5){
        errors.password="password must be more than 5 characters."
    }
  return errors;
   
};

export default Valuedata
