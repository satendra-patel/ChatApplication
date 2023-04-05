const myForm = document.getElementById('signupform');

myForm.addEventListener('submit', async(e) => {
    e.preventDefault();
    
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const mobileNo=document.getElementById('MobileNo');

    try {
        const res = await axios.post('http://localhost:5000/user/signup', 
        {
            name: name.value, 
            email: email.value, 
            password: password.value,
            mobileNo:mobileNo.value
        }
        );
        console.log('SIGN UP RESPONSE: ', res);
        if(res.status === 200){
            name.value = '';
            email.value = '';
            password.value = '';
            mobileNo.value='';
            clearError();
            window.location.href = 'login.html';
            
        }
        
    } catch (error) {
        logErrorToUser(error);
        if(error.response.status === 400) {
            alert('User already exists!');
        }
        console.log(error);
    }
});

function logErrorToUser(error) {
    const err = document.getElementById('error-text');
    err.innerHTML = error.message;
};

function clearError() {
    const err = document.getElementById('error-text');
    err.innerHTML = '';
};