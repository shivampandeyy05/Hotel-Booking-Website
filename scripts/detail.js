function calculateAmount() {
    var adults = 0;
    var fromDate = 0;
    var toDate = 0;
    adults = document.getElementById("adults").value;
    fromDate = new Date(document.getElementById("from-date").value);
    toDate = new Date(document.getElementById("to-date").value);
    var totalDays = parseInt((toDate - fromDate) / (24 * 3600 * 1000));
    var amount = adults * totalDays * 1000;
    if (Number.isNaN(amount)) {
        document.getElementById("total").value = "Rs. 0";
    }
    else {
        document.getElementById("total").value = "Rs. " + amount;
    }
}

function setMinDate() {
    document.getElementById("to-date").min = document.getElementById("from-date").value;
}
