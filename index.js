var customerName = "bob";

function upperCaseCustomerName() {
    customerName = customerName.toUpperCase();
}

function setBestCustomer() {
    window.bestCustomer = "not bob";
}

function overwriteBestCustomer(who) {
    window.bestCustomer = who;
}

const leastFavoriteCustomer = "barb";

function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = "sally";
}