// ON PAGE LOAD

$(document).ready(function () {
    getRequest();
})

// SET GLOBALS

let id = '';

// GET ANNOUCEMENTS

function getAnnouncements() {
    $('.card-test').empty();
    $.ajax({
        url: `/api/announcements`,
        method: `GET`
    }).then((res) => {
        for (var i = 0; i < res.length; i++) {
            let card = '';

            card += `
            <div class="container py-3">
            <div class="card">
                <div class="row ">
                    <div class="col-lg-4">
                        <img src="./resources/img/200x200.gif" class="w-100">
                    </div>
                    <div class="col-lg-8 px-3">
                        <div class="card-block px-3">
                            <h5 class="card-title mc-title pt-3">${res[i].title}</h5>
                            <p class="card-text">${res[i].description}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>`

            $('.card-test').prepend(card)
        }
    })
}

var url = `https://mymillcreek.herokuapp.com/api/announcements`;


function getRequest() {
    $.get(url, function (res) {
        $(".card-test").html(res);
        console.log(res)
        for (var i = 0; i < res.length; i++) {
            let card = '';

            card += `
            <div class="container py-3">
            <div class="card">
                <div class="row ">
                    <div class="col-lg-4">
                        <img src="./resources/img/200x200.gif" class="w-100">
                    </div>
                    <div class="col-lg-8 px-3">
                        <div class="card-block px-3">
                            <h5 class="card-title mc-title pt-3">${res[i].title}</h5>
                            <p class="card-text">${res[i].description}</p>
                            <div  data-toggle="modal" class="btn btn-primary edit-btn mb-2" data-property="${res[i]._id}" data-target="#editModal"><i class="fa fa-pencil pr-2" aria-hidden="true"></i>Edit</div>
                         <div class="btn btn-danger mb-2 delete-btn" data-dbid="${res[i]._id}"><i class="fa fa-trash-o pr-2" aria-hidden="true"></i>Delete</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>`

            $('.card-test').prepend(card)
        }
    });
}
