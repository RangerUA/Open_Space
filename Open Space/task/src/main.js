const PASSWORD = "TrustOn1";
const PWD_FIELD = document.getElementById("password");
const SUBMIT_BUTTON = document.getElementById("submitButton");
const LAUNCH_BUTTON = document.getElementById("launchButton");
const ROCKET = document.querySelector(".rocket");
const ids = ["password", "submitButton"];
let inputs = [...document.getElementsByTagName("input")];
let levers = [...document.querySelectorAll(".levers input")];
let currentCoordinate = {
  top: ROCKET.offsetTop,
  left: ROCKET.offsetLeft
}

function lock(itemsForLock) {
  if (itemsForLock === "ALL") {
    inputs.forEach(item => {
      if (!ids.includes(item.id)) {
        item.disabled = true;
      }
    })
  }

  if (!Array.isArray(itemsForLock)) {
    return itemsForLock.disabled = true;
  }
}

function unlock(itemsForUnlock) {
  if (!Array.isArray(itemsForUnlock)) {
    return itemsForUnlock.disabled = false;
  }

  itemsForUnlock.forEach(item => {
    item.disabled = false;
  })
}

function launch() {
  setInterval(() => {
    ROCKET.style.left = currentCoordinate.left++ + "px";
    ROCKET.style.top = currentCoordinate.top-- + "px";
  }, 25);
  console.log("launching....")
}

levers[0].onchange = function () {
  onChange();
}
levers[1].onchange = function () {
  onChange();
}
levers[2].onchange = function () {
  onChange();
}
levers[3].onchange = function () {
  onChange();
}
levers[4].onchange = function () {
  onChange();
}
levers[5].onchange = function () {
  onChange();
}
levers[6].onchange = function () {
  onChange();
}
levers[7].onchange = function () {
  onChange();
}
levers[8].onchange = function () {
  onChange();
}
levers[9].onchange = function () {
  onChange();
}
levers[10].onchange = function () {
  onChange();
}

function onChange() {
  let counter = levers.length;

  for (const lever of levers) {
    if (lever.type === "checkbox" && lever.checked === true) {
      lever.onchange = counter--;
    }
    if (lever.type === "range" && lever.value === "100") {
      lever.onchange = counter--;
    }
  }

  if (counter === 0) {
    console.log("All system are ready!")
    unlock(LAUNCH_BUTTON);
  } else {
    lock(LAUNCH_BUTTON);
  }
}

function checkCredentials() {
  if (PASSWORD === PWD_FIELD.value) {
    console.log("Access allowed")

    return unlock(levers);
  }

  console.log("ACCESS DENIED")
}

window.onload = () => lock("ALL");
SUBMIT_BUTTON.onclick = checkCredentials;
LAUNCH_BUTTON.onclick = launch;
