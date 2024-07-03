// Seleccionar el formulario de registro por su ID
const signupForm = document.querySelector('#signupForm');

// Agregar un evento para el envío del formulario
signupForm.addEventListener('submit', (e) => {
    //Evitar que la página se recargue al enviar el formulario
    e.preventDefault();

    //Obtener los valores del formulario de registro
    const name = document.querySelector('#name').value
    const email = document.querySelector('#email').value
    const password = document.querySelector('#password').value

    // Obtener la lista de usuarios en el localstorage o inicializa un arrelgo vacío si no hay usuarios
    const Users = JSON.parse(localStorage.getItem('users')) || []

    // Verificar si el usuario ya esta registrado
    const isUserRegistered = Users.find(user => user.email === email)

    // Si el usuario ya esta registrado, muestra una alerta y detiene la ejecución
    if(isUserRegistered) {
        Swal.fire({
            icon: 'error',
            title: 'Warning',
            text: 'El dato que ingresas uya esta registrado!'
        })
        return
    }

    // Agrega un nuevo usuario al local storage
    Users.push({name, email, password})

    // Almacenar la lista de usuarios actualizada en el local storage
    localStorage.setItem('users', JSON.stringify(Users))

    // Mostrar una alerta de registro exitoso
    Swal.fire({
        icon: 'success',
        title: '!Registro Exitoso!',
        text: 'Tus datos se enviaron con éxito'
    }).then(() => {
        //Redirigir al usuario para que inicie sesión
        window.location.href = 'login.html'
    })
})