// comment

// data
var comts = [];
var userCmt = {
    email: "",
    comment : ''
};

// nhận comment vào data
function cmt(){
    let newCmt = document.getElementById("comment").value;
    document.getElementById("comment").value = '';

    let newEml = document.getElementById("email").value;
    document.getElementById("email").value = '';
    userCmt["email"] = newEml;
    userCmt["comment"] = newCmt;
    comts.push(userCmt);
}