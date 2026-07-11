/* ===================================
   CYBERSHIELD DASHBOARD SYSTEM
=================================== */

console.log("Dashboard Loaded");

/* ======================
   LIVE CLOCK
====================== */

function updateClock(){

    const liveTime =
    document.getElementById(
        "liveTime"
    );

    if(!liveTime){
        return;
    }

    const now =
    new Date();

    liveTime.textContent =
    now.toLocaleTimeString(
        "id-ID"
    );

}

updateClock();

setInterval(
    updateClock,
    1000
);

/* ======================
   THREAT COUNTER
====================== */

const threatBox =
document.getElementById(
    "blockedThreats"
);

let threatCount = 125;

function updateThreatCount(){

    threatCount +=
    Math.floor(
        Math.random() * 5
    );

    if(threatBox){

        threatBox.textContent =
        threatCount;

    }

}

updateThreatCount();

setInterval(
    updateThreatCount,
    3000
);

/* ======================
   SYSTEM MONITOR
====================== */

function randomUsage(){

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
        Math.floor(
            Math.random()*100
        ) + "%";
    }

    if(ram){

        ram.style.width =
        Math.floor(
            Math.random()*100
        ) + "%";
    }

    if(network){

        network.style.width =
        Math.floor(
            Math.random()*100
        ) + "%";
    }

}

setInterval(
    randomUsage,
    2500
);

/* ======================
   SECURITY LOGS
====================== */

const logs = [

    "Firewall rule updated",

    "Network scan completed",

    "Threat blocked successfully",

    "User authentication verified",

    "AI anomaly detection triggered",

    "Encrypted channel established",

    "Security audit completed",

    "Suspicious activity monitored"

];

function addLog(){

    const container =
    document.getElementById(
        "logContainer"
    );

    if(!container){
        return;
    }

    const log =
    document.createElement(
        "div"
    );

    const random =
    Math.floor(
        Math.random() *
        logs.length
    );

    log.className =
    "log success";

    log.textContent =
    logs[random];

    container.prepend(
        log
    );

    const allLogs =
    container.querySelectorAll(
        ".log"
    );

    if(
        allLogs.length > 8
    ){

        allLogs[
            allLogs.length - 1
        ].remove();

    }

}

setInterval(
    addLog,
    4000
);

/* ======================
   LOGOUT
====================== */

const logoutBtn =
document.getElementById(
    "logoutBtn"
);

if(logoutBtn){

    logoutBtn.addEventListener(
        "click",
        () => {

            localStorage.removeItem(
                "cybershield_user"
            );

            alert(
                "Logout Berhasil"
            );

            window.location.href =
            "login.html";

        }
    );

}

/* ======================
   SESSION CHECK
====================== */

const currentUser =
localStorage.getItem(
    "cybershield_user"
);

if(!currentUser){

    console.warn(
        "Guest Session"
    );

}

/* ======================
   STARTUP MESSAGE
====================== */

console.log(
    "CyberShield SOC Online"
);

console.table({

    firewall:"ACTIVE",

    devices:24,

    securityScore:"99%",

    monitoring:true

});
