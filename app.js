/* ===================================
   CYBERSHIELD APP.JS
=================================== */

console.log("CyberShield Loaded");

/* ======================
   THREAT COUNTER
====================== */

const threatCounter =
document.getElementById(
    "threatCount"
);

let threatValue = 0;

function updateThreats(){

    threatValue += Math.floor(
        Math.random() * 3
    );

    if(threatCounter){

        threatCounter.textContent =
        threatValue;

    }

}

setInterval(
    updateThreats,
    3000
);

/* ======================
   DIGITAL CLOCK
====================== */

function createClock(){

    const clock =
    document.createElement("div");

    clock.id =
    "cyberClock";

    clock.style.position =
    "fixed";

    clock.style.bottom =
    "20px";

    clock.style.right =
    "20px";

    clock.style.padding =
    "12px 20px";

    clock.style.background =
    "#10192b";

    clock.style.border =
    "1px solid #00ffee";

    clock.style.borderRadius =
    "10px";

    clock.style.color =
    "#00ffee";

    clock.style.fontFamily =
    "Orbitron";

    clock.style.zIndex =
    "999";

    document.body.appendChild(
        clock
    );

}

createClock();

function updateClock(){

    const clock =
    document.getElementById(
        "cyberClock"
    );

    const now =
    new Date();

    const time =
    now.toLocaleTimeString();

    if(clock){

        clock.textContent =
        time;

    }

}

updateClock();

setInterval(
    updateClock,
    1000
);

/* ======================
   STATUS PANEL
====================== */

const statusList = [

    "Firewall Active",

    "Network Stable",

    "Monitoring Traffic",

    "Threat Database Updated",

    "AI Detection Online",

    "System Protected",

    "Security Scan Running"

];

function createStatusBox(){

    const box =
    document.createElement("div");

    box.id =
    "statusBox";

    box.style.position =
    "fixed";

    box.style.left =
    "20px";

    box.style.bottom =
    "20px";

    box.style.width =
    "240px";

    box.style.padding =
    "15px";

    box.style.background =
    "#10192b";

    box.style.border =
    "1px solid #00ffee";

    box.style.borderRadius =
    "10px";

    box.style.zIndex =
    "999";

    box.innerHTML = `
        <h4>Security Status</h4>
        <p id="statusText">
            Loading...
        </p>
    `;

    document.body.appendChild(
        box
    );

}

createStatusBox();

function updateStatus(){

    const random =
    Math.floor(
        Math.random() *
        statusList.length
    );

    const text =
    document.getElementById(
        "statusText"
    );

    if(text){

        text.textContent =
        statusList[random];

    }

}

updateStatus();

setInterval(
    updateStatus,
    2500
);

/* ======================
   ANIMATE BARS
====================== */

window.addEventListener(
    "load",
    () => {

        const cpu =
        document.querySelector(
            ".cpu"
        );

        const ram =
        document.querySelector(
            ".ram"
        );

        const network =
        document.querySelector(
            ".network"
        );

        if(cpu){

            cpu.style.width =
            "0";

            setTimeout(() => {

                cpu.style.width =
                "72%";

            },300);

        }

        if(ram){

            ram.style.width =
            "0";

            setTimeout(() => {

                ram.style.width =
                "45%";

            },500);

        }

        if(network){

            network.style.width =
            "0";

            setTimeout(() => {

                network.style.width =
                "88%";

            },700);

        }

    }
);

/* ======================
   ALERT BOX
====================== */

function createAlert(){

    const alert =
    document.createElement("div");

    alert.id =
    "cyberAlert";

    alert.style.position =
    "fixed";

    alert.style.top =
    "20px";

    alert.style.right =
    "20px";

    alert.style.background =
    "#10192b";

    alert.style.border =
    "1px solid red";

    alert.style.padding =
    "15px";

    alert.style.borderRadius =
    "10px";

    alert.style.display =
    "none";

    alert.style.zIndex =
    "9999";

    document.body.appendChild(
        alert
    );

}

createAlert();

function showAlert(message){

    const box =
    document.getElementById(
        "cyberAlert"
    );

    box.textContent =
    message;

    box.style.display =
    "block";

    setTimeout(() => {

        box.style.display =
        "none";

    },4000);

}

setInterval(() => {

    const chance =
    Math.random();

    if(chance > 0.75){

       const alerts = [

    "Firewall Blocked Attack",

    "New Device Connected",

    "Threat Signature Updated",

    "Suspicious Login Attempt",

    "Security Scan Completed"

];

showAlert(
    alerts[
        Math.floor(
            Math.random() *
            alerts.length
        )
    ]
);

    }

},10000);

/* ======================
   PAGE EFFECT
====================== */

document.body.style.opacity =
"0";

window.onload = () => {

    document.body.style.transition =
    "opacity 1s";

    document.body.style.opacity =
    "1";

};

/* ======================
   SYSTEM INFO
====================== */

const systemInfo = {

    cpu:72,

    ram:45,

    network:88,

    firewall:"ACTIVE"

};

console.table(systemInfo);

console.log(
    "CyberShield Ready"
); 
