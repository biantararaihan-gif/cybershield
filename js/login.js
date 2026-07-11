/* ===================================
   CYBERSHIELD LOGIN SYSTEM
=================================== */

console.log("Login System Loaded");

document.addEventListener(
    "DOMContentLoaded",
    () => {

        const loginForm =
        document.getElementById(
            "loginForm"
        );

        const messageBox =
        document.getElementById(
            "loginMessage"
        );

        if(!loginForm){
            return;
        }

        loginForm.addEventListener(
            "submit",
            function(event){

                event.preventDefault();

                const username =
                document.getElementById(
                    "username"
                ).value.trim();

                const password =
                document.getElementById(
                    "password"
                ).value.trim();

                /* ==================
                   VALIDATION
                ================== */

                if(
                    username === "" ||
                    password === ""
                ){

                    showMessage(
                        "Semua field wajib diisi",
                        "#ff3b5f"
                    );

                    return;
                }

                /* ==================
                   DEMO ACCOUNT
                ================== */

                if(
                    username === "admin" &&
                    password === "admin123"
                ){

                    showMessage(
                        "Login berhasil...",
                        "#00ffee"
                    );

                    localStorage.setItem(
                        "cybershield_user",
                        username
                    );

                    setTimeout(() => {

                        window.location.href =
                        "dashboard.html";

                    },1500);

                }
                else{

                    showMessage(
                        "Username atau password salah",
                        "#ff3b5f"
                    );

                }

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
   SECURITY EFFECT
=================================== */

const securityMessages = [

    "Firewall Ready",

    "Secure Connection",

    "Threat Scanner Active",

    "Security Layer Enabled",

    "Encrypted Session"

];

function randomSecurityLog(){

    const random =
    Math.floor(
        Math.random() *
        securityMessages.length
    );

    console.log(
        "[SECURITY] " +
        securityMessages[random]
    );

}

setInterval(
    randomSecurityLog,
    5000
);

/* ===================================
   KEYBOARD SHORTCUT
=================================== */

document.addEventListener(
    "keydown",
    function(event){

        if(
            event.key === "Enter"
        ){

            console.log(
                "Submit Attempt"
            );

        }

    }
);

/* ===================================
   SIMPLE SESSION CHECK
=================================== */

function checkSession(){

    const user =
    localStorage.getItem(
        "cybershield_user"
    );

    if(user){

        console.log(
            "User Session:",
            user
        );

    }

}

checkSession();

/* ===================================
   LOGIN READY
=================================== */

console.log(
    "CyberShield Login Ready"
);
