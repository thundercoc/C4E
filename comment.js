// comment
var comts = [];
var userCmt = {
    email: "",
    comment : ''
};
function cmt(){
    let newCmt = document.getElementById("comment").value;
    document.getElementById("comment").value = '';

    let newEml = document.getElementById("email").value;
    document.getElementById("email").value = '';
    userCmt["email"] = newEml;
    userCmt["comment"] = newCmt;
    comts.push(userCmt);
}
function displayListcmt() {
    let sumLi = '';
    for (let i = 0; i < comts.length; i++) {
      const userCmts = comts[i];
      sumLi += '<li>' + userCmts + '</li>';
    }

    document.getElementById("listCmt").innerHTML = sumLi;
}