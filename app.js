// I know my code is so begginer but i still learning js :D

const mainpage = document.getElementById("mainpage");
const nickpage = document.getElementById("nickpage");
const nickinput = document.getElementById("nickinput");
const submit = document.getElementById("submit");
const label = document.getElementById("label");
const navbar = document.getElementById("navbar");
const h2 = document.getElementById("h2");
const homebtn = document.getElementById("homebtn");
const forumbtn = document.getElementById("forumbtn");
const setbtn = document.getElementById("setbtn");
const infobtn = document.getElementById("infobtn");
const callbtn = document.getElementById("callbtn");
const forumpage = document.getElementById("forumpage");
const setpage = document.getElementById("setpage");
const infopage = document.getElementById("infopage");
const callpage = document.getElementById("callpage");
const change = document.getElementById("change");
const changebt = document.getElementById("changebt");
const changelbl = document.getElementById("changelbl");
const kumbara = document.getElementById("kumbara");
const uyari = document.getElementById("uyari");
const targetList = document.getElementById("target-list");
const nameInput = document.getElementById("target-name");
const amountInput = document.getElementById("target-amount");
const addBtn = document.getElementById("add-target");
const kumbarapage = document.getElementById("kumbarapage");
const addmoney = document.getElementById("addmoney");
const xa = document.getElementById("xa");
const xb = document.getElementById("xb");
const xc = document.getElementById("xc");
const xd = document.getElementById("xd");
const addinp = document.getElementById("addinp")
const removeinp = document.getElementById("removeinp")
const addmbtn = document.getElementById("addm");
const removembtn = document.getElementById("removem");
const removemoney = document.getElementById("removemoney");
const removemoneybt = document.getElementById("removemoneybt");
const addmoneybt = document.getElementById("addmoneybt");
const uyarii = document.getElementById("uyarii");
const uyariii = document.getElementById("uyariii");
const totalm = document.getElementById("totalm");
const burst = document.getElementById("burst");
const burstscreen = document.getElementById("burstscreen");
const burstbtn = document.getElementById("burstbtn");
const taddm = document.getElementById("taddm");
const tremom = document.getElementById("tremom");
const deleteac = document.getElementById("deleteac");
const deletescreen = document.getElementById("deletescreen");
const delbtn = document.getElementById("delbtn");
const kumbaraa = document.getElementById("kumbaraa");
const kumbara1 = document.getElementById("kumbara1");
const kumbara2 = document.getElementById("kumbara2");
const kumbara3 = document.getElementById("kumbara3");
const kumbara4 = document.getElementById("kumbara4");
const changebanklabel = document.getElementById("changebanklabel");
let totalAdded = Number(localStorage.getItem("totalAdded")) || 0;
let totalRemoved = Number(localStorage.getItem("totalRemoved")) || 0;
let targets = JSON.parse(localStorage.getItem("targets")) || [];
let nick = nickinput.value;
let newname;
let money = 0;
let kumbaraaa;

kumbara.src = localStorage.getItem("kumbara");
kumbaraa.src = localStorage.getItem("kumbara");
money = localStorage.getItem("moneyls");

h2.textContent = `Welcome back, ${nick}!`
totalm.textContent = `Total Money: ${money} TL`;
taddm.textContent = `${totalAdded} TL`;
tremom.textContent = `${totalRemoved} TL`;

addmoney.style.display = `none`;
navbar.style.display = `none`;
mainpage.style.display = `none`;
forumpage.style.display = `none`;
setpage.style.display = `none`;
infopage.style.display = `none`;
callpage.style.display = `none`;
kumbarapage.style.display = `none`;
removemoney.style.display = `none`;
burstscreen.style.display = `none`;
deletescreen.style.display = "none";

if (localStorage.getItem("nickls")) {
    nick = localStorage.getItem("nickls");  
    nickpage.style.display = "none";
    mainpage.style.display = "block";
    navbar.style.display = `flex`
    h2.textContent = `Welcome back, ${nick}!`
} 

else {
    localStorage.setItem("moneyls" , "0");
    nickpage.style.display = "block";
    mainpage.style.display = "none";
}

submit.onclick = function(){
    nick = nickinput.value;
    if(nick.trim() == ""){
    label.textContent = "You can't leave your name blank!";
    label.style.color = "red";
    }

    else{
        localStorage.setItem("nickls", nick);
        mainpage.style.display = `block`;
        nickpage.style.display = "none";
        navbar.style.display = `flex`
        h2.textContent = `Welcome back, ${nick}!`
        localStorage.setItem("totalAdded", "0");
        localStorage.setItem("totalRemoved", "0");
        localStorage.setItem("streak", "1");
        localStorage.setItem("lastDate", "1");
    }
};

let streak = parseInt(localStorage.getItem("streak")) || 0;
let lastDate = localStorage.getItem("lastDate");

let today = new Date().toISOString().split('T')[0];

if (lastDate === today) {
} else {
    if (lastDate) {
        let yesterday = new Date();
        yesterday.setDate(yesterday.getDate() - 1);
        let yesterdayStr = yesterday.toISOString().split('T')[0];

        if (lastDate === yesterdayStr) {
            streak++;
        } else {
            streak = 1;
        }
    } else {
        streak = 1;
    }

    localStorage.setItem("streak", streak);
    localStorage.setItem("lastDate", today);
}

document.getElementById("streak").textContent = `${streak}-day`;

addmoneybt.onclick = function(){
    let addvalue = addinp.value;
    if(addvalue.trim() == ""){
        uyarii.textContent = "Enter a valid amount!";
        uyarii.style.color = "red";
    }

    else{
        uyarii.textContent = "Added successfully!";
        uyarii.style.color = "green";
        money = Number(addvalue) + Number(money);
        localStorage.setItem("moneyls" , String(money));
        totalAdded += Number(addvalue);
        localStorage.setItem("totalAdded", totalAdded);
        taddm.textContent = `${totalAdded} TL`;
        totalm.textContent = `Total Money: ${money} TL`;
        renderTargets();
    }
};

removemoneybt.onclick = function(){
    let removevalue = removeinp.value;
    
    if(removevalue.trim() == ""){
        uyariii.textContent = "Enter a valid amount!";
        uyariii.style.color = "red";
    }

    else if(removevalue > money){
        uyariii.textContent = "The amount of money you want to remove cannot exceed the amount you have!";
        uyariii.style.color = "red";
    }

    else{
        uyariii.textContent = "Added successfully!";
        uyariii.style.color = "green";
        money = Number(money) - Number(removevalue);
        localStorage.setItem("moneyls" , String(money));
        totalRemoved += Number(removevalue);
        localStorage.setItem("totalRemoved", totalRemoved);
        tremom.textContent = `${totalRemoved} TL`;
        totalm.textContent = `Total Money: ${money} TL`;
        renderTargets();
    }
};


burst.onclick = function(){
    burstscreen.style.display = "block";
};

burstbtn.onclick = function(){
    money = "0";
    localStorage.setItem("totalAdded", 0);
    localStorage.setItem("totalRemoved", 0);
    localStorage.setItem("moneyls" , money);
    totalm.textContent = `Total Money: ${money} TL`;
    burstscreen.style.display = "none";
    renderTargets();
};

deleteac.onclick = function(){
    deletescreen.style.display = "block";
};

delbtn.onclick = function(){
    localStorage.removeItem("nickls");
    localStorage.setItem("moneyls" , "0");
    nickpage.style.display = "block";
    addmoney.style.display = `none`;
    navbar.style.display = `none`;
    mainpage.style.display = `none`;
    forumpage.style.display = `none`;
    setpage.style.display = `none`;
    infopage.style.display = `none`;
    callpage.style.display = `none`;
    kumbarapage.style.display = `none`;
    removemoney.style.display = `none`;
    burstscreen.style.display = `none`;
    deletescreen.style.display = "none";
    money = "0";
    localStorage.setItem("streak", 0);
    localStorage.setItem("totalAdded", 0);
    localStorage.setItem("totalRemoved", 0);
    localStorage.setItem("moneyls" , money);
    totalm.textContent = `Total Money: ${money} TL`;
    burstscreen.style.display = "none";
    renderTargets();
};

xa.onclick = function(){
    addmoney.style.display = "none"
}

xb.onclick = function(){
    removemoney.style.display = "none"
}

xc.onclick = function(){
    burstscreen.style.display = "none"
}

xd.onclick = function(){
    deletescreen.style.display = "none"
}


homebtn.onclick = function(){
    mainpage.style.display = `block`;
    forumpage.style.display = `none`
    setpage.style.display = `none`
    infopage.style.display = `none`
    callpage.style.display = `none`
    kumbarapage.style.display = `none`
};

forumbtn.onclick = function(){
    mainpage.style.display = `none`
    forumpage.style.display = `block`
    setpage.style.display = `none`
    infopage.style.display = `none`
    callpage.style.display = `none`
    kumbarapage.style.display = `none`
};

setbtn.onclick = function(){
    mainpage.style.display = `none`
    forumpage.style.display = `none`
    setpage.style.display = `block`
    infopage.style.display = `none`
    callpage.style.display = `none`
    kumbarapage.style.display = `none`
};

infobtn.onclick = function(){
    mainpage.style.display = `none`
    forumpage.style.display = `none`
    setpage.style.display = `none`
    infopage.style.display = `block`
    callpage.style.display = `none`
    kumbarapage.style.display = `none`
};

callbtn.onclick = function(){
    mainpage.style.display = `none`
    forumpage.style.display = `none`
    setpage.style.display = `none`
    infopage.style.display = `none`
    callpage.style.display = `block`
    kumbarapage.style.display = `none`
};

kumbara.onclick = function(){
    kumbarapage.style.display = `block`
    mainpage.style.display = `none`
    forumpage.style.display = `none`
    setpage.style.display = `none`
    infopage.style.display = `none`
    callpage.style.display = `none`
};

changebt.onclick = function(){
    newname = change.value;
    if(newname.trim() == ""){
    changelbl.textContent = "You can't leave your name blank!";
    changelbl.style.color = "red";
    }
    else{
        localStorage.setItem("nickls", newname);
        changelbl.textContent = "Your name successfuly changed!";
        changelbl.style.color = "green";
        h2.textContent = `Welcome back, ${newname}!`
    }
};

addmbtn.onclick = function(){
    addmoney.style.display = "block";
};

removembtn.onclick = function(){
    removemoney.style.display = "block";
};

kumbara1.onclick = function(){
    let kumbaraaa = "kumbara1.png";
    localStorage.setItem("kumbara", kumbaraaa);
    kumbara.src = localStorage.getItem("kumbara");
    kumbaraa.src = localStorage.getItem("kumbara");
    changebanklabel.textContent = "Succesfully Changed!"
    changebanklabel.style.color = "green"
};

kumbara2.onclick = function(){
    let kumbaraaa = "kumbara2.png";
    localStorage.setItem("kumbara", kumbaraaa);
    kumbara.src = localStorage.getItem("kumbara");
    kumbaraa.src = localStorage.getItem("kumbara");
    changebanklabel.textContent = "Succesfully Changed!"
    changebanklabel.style.color = "green"
};

kumbara3.onclick = function(){
    let kumbaraaa = "kumbara3.png";
    localStorage.setItem("kumbara", kumbaraaa);
    kumbara.src = localStorage.getItem("kumbara");
    kumbaraa.src = localStorage.getItem("kumbara");
    changebanklabel.textContent = "Succesfully Changed!"
    changebanklabel.style.color = "green"
};

kumbara4.onclick = function(){
    changebanklabel.textContent = "This option developing at now :)"
    changebanklabel.style.color = "red"
};

function renderTargets() {
    targetList.innerHTML = "";
    targets.forEach((target, index) => {
        let container = document.createElement("div");
        container.classList.add("target-item");
        container.innerHTML = `
            <div class="target-header">
                <h3>${target.name}</h3> <button class="delete-btn"><i class="fa-solid fa-trash"></i></button>
                <span>${money} / ${target.amount} TL</span>
            </div>
            <div class="progress-bar">
                <div class="progress" style="width:${(money / target.amount) * 100}%;"></div>
            </div>`;

        container.querySelector(".delete-btn").onclick = () => {
            targets.splice(index, 1);
            saveTargets();
            renderTargets();
        };

        targetList.appendChild(container);
    });
}

function saveTargets() {
    localStorage.setItem("targets", JSON.stringify(targets));
}

addBtn.onclick = () => {
    let name = nameInput.value.trim();
    let amount = parseFloat(amountInput.value);

    if (!name || isNaN(amount) || amount <= 0) {
        uyari.textContent = "Write a valid target or target name!";
        uyari.style.color = "red";
        return;
    }

    targets.push({ name, amount, current: 0 });
    saveTargets();
    renderTargets();

    nameInput.value = "";
    amountInput.value = "";
};

renderTargets();




