// ===============================
// SAVE DATA
// ===============================

function saveData(key, value){

    localStorage.setItem(key, value);

}


// ===============================
// GET DATA
// ===============================

function getData(key){

    return localStorage.getItem(key) || "";

}


// ===============================
// DELETE DATA
// ===============================

function deleteData(key){

    localStorage.removeItem(key);

}


// ===============================
// AUTO SAVE SYSTEM
// ===============================

function autoSave(elementId, storageKey){

    const field = document.getElementById(elementId);

    // Old saved value load karo
    const savedValue = getData(storageKey);

    if(savedValue !== ""){

        field.value = savedValue;

    }

    // Live save
    field.addEventListener("input", function(){

        saveData(storageKey, field.value);

    });

}


// ===============================
// CLEAR COMPLETE DAY
// ===============================

function clearDay(dayPrefix, ids){

    ids.forEach(id => {

        deleteData(dayPrefix + "_" + id);

    });

}


// ===============================
// SHOW ALERT
// ===============================

function showMessage(message){

    alert(message);

}