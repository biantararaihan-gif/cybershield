/* ===================================
   CYBERSHIELD REGISTER SYSTEM
=================================== */

console.log("Register System Loaded");

document.addEventListener(
    "DOMContentLoaded",
    () => {

        const registerForm =
        document.getElementById(
            "registerForm"
        );

        const messageBox =
        document.getElementById(
            "registerMessage"
        );

        if(!registerForm){
            return;
        }

        registerForm.addEventListener(
            "submit",
            function(event){

                event.preventDefault();

                const username =
                document.getElementById(
                    "username"
                ).value.trim();

                const email =
                document.getElementById(
                    "email"
                ).value.trim();

                const password =
                document.getElementById(
                    "password"
                ).value.trim();

                const confirmPassword =
                document.getElementById(
                    "confirmPassword"
                ).value.trim();

                if(
                    !username ||
                    !email ||
                    !password ||
                    !confirmPassword
                ){

                    showMessage(
                        "Semua field wajib diisi",
                        "#ff3b5f"
                    );

                    return;
                }

                if(
                    password !==
                    confirmPassword
                ){

                    showMessage(
                        "Password tidak cocok",
                        "#ff3b5f"
                    );

                    return;
                }

                if(password.length < 6){

                    showMessage(
                        "Password minimal 6 karakter",
                        "#ff3b5f"
                    );

                    return;
                }

                const userData = {

                    username:
                    username,

                    email:
                    email,

                    password:
                    password,

                    created:
                    new Date()
                    .toLocaleString()

                };

                localStorage.setItem(
                    "cybershield_account",
                    JSON.stringify(
                        userData
                    )
                );

                showMessage(
                    "Registrasi berhasil",
                    "#00ffee"
                );

                setTimeout(() => {

                    window.location.href =
                    "login.html";

                },1500);

            }
        );

        function showMessage(
            text,
            color
        ){

            messageBox.textContent =
            text;

            messageBox.style.color =
            color;

        }

    }
);

/* ===================================
   PASSWORD STRENGTH
=================================== */

document.addEventListener(
    "input",
    () => {

        const password =
        document.getElementById(
            "password"
        );

        if(!password){
            return;
        }

        const value =
        password.value;

        if(value.length >= 12){

            console.log(
                "Strong Password"
            );

        }
        else if(
            value.length >= 8
        ){

            console.log(
                "Medium Password"
            );

        }
        else{

            console.log(
                "Weak Password"
            );

        }

    }
);

/* ===================================
   REGISTER READY
=================================== */

console.log(
    "Register Ready"
);
