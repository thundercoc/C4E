var names = [];
var comments = [];

if(localStorage.getItem("names")){
    names = JSON.parse(localStorage.getItem("names"));
}

if(localStorage.getItem("comments")){
    comments = JSON.parse(localStorage.getItem("comments"));
}

// nhận comment vào data
function displayCmt(){
    let display = '';

    for(let i = 0;i < names.length;i++){
        const checkEml = names[i];
        const checkCmt = comments[i];
        display += `
            <div class="card">
                <div class="card-body">
                    <div class="media">
                        <img src="https://static-znews.zadn.vn/images/avatar_silkhouse.gif">
                        <div class="media-body">
                            <div class="card-body">
                                <h5 class="card-title">${checkEml}</h5>
                                <p class="card-text">${checkCmt}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
    document.getElementById("comments").innerHTML = display;
}

displayCmt();
function cmt(){
    let newEml = document.getElementById("email").value;
    document.getElementById("email").value = '';

    let newCmt = document.getElementById("comment").value;
    document.getElementById("comment").value = '';

    if(newCmt === '' || newEml === ''){
        alert("Vui lòng nhập đầy đủ thông tin");
    } else {
        names.push(newEml);
        comments.push(newCmt);

        localStorage.setItem("names",JSON.stringify(names));
        localStorage.setItem("comments",JSON.stringify(comments));

        displayCmt();
    }
}