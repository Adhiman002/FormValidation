const form=document.getElementById('form');
const username=document.getElementById('username');
const email=document.getElementById('email');
const pass1=document.getElementById('pass1');
const pass2=document.getElementById('pass2');


      form.addEventListener('submit',e=>{
        e.preventDefault();
        validateInputs();
      });

      const setError=(element,message)=>{
            const inputControl=element.parentElement;
            const errorDisplay=inputControl.querySelector('.error');

            errorDisplay.innerText=message;
            inputControl.classList.add('error');
            inputControl.classList.remove('success');

      }

      const setSuccess=element=>{

        const inputControl=element.parentElement;
        const errorDisplay=inputControl.querySelector('.error');
        errorDisplay.innerText='';

        inputControl.classList.add('success');
        inputControl.classList.remove('error');

      };



      const isVaildEmail=email=>{
        const re= /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        return re.test(String(email).toLowerCase());
      }

      const validateInputs=()=>{

        const usernameValue=username.value.trim();
        const emailValue=email.value.trim();
        const pass1Value=pass1.value.trim();
        const pass2Value=pass2.value.trim();

        if(usernameValue===''){
            setError(username,"username is required");
        }
        else{
            setSuccess(username);
        }

        if(emailValue===""){
            setError(email,"email is required");
        }
        else if(!isVaildEmail(emailValue)){
            setError(email,"please Provied ");
        }
        else{
            setSuccess(email);
        }

        if(pass1Value===""){
            setError(pass1,"password is require");
        }
        else if(pass1Value.length<8){
            setError(pass1,"must be * char");
        }

        else{
            setSuccess(pass1);
        }

        if(pass2Value===''){
            setError(pass2,'conform your pass')
        }

        else if(pass1Value!==pass2Value){
            setError(pass2,'pass does not Match');
        }
        else{
            setSuccess(pass2);
        }
      };
