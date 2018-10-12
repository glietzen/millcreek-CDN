// ON PAGE LOAD

$(document).ready(function () {
    getAnnouncements();
})

// SET GLOBALS

let id = '';
var url = `https://mymillcreek.herokuapp.com/api/announcements`;


// GET ANNOUCEMENTS

function getAnnouncements() {
    $('.card-test').empty();
    $.ajax({
        url: url,
        method: `GET`,
        contentType: 'text/plain',
        xhrFields: {
          withCredentials: false
        }
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

function Iterate (res) {
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
}

$.ajax({

    // The 'type' property sets the HTTP method.
    // A value of 'PUT' or 'DELETE' will trigger a preflight request.
    type: 'GET',
  
    // The URL to make the request to.
    url: `https://mymillcreek.herokuapp.com/api/announcements`,
  
    // The 'contentType' property sets the 'Content-Type' header.
    // The JQuery default for this property is
    // 'application/x-www-form-urlencoded; charset=UTF-8', which does not trigger
    // a preflight. If you set this value to anything other than
    // application/x-www-form-urlencoded, multipart/form-data, or text/plain,
    // you will trigger a preflight request.
    contentType: 'text/plain',
  
    xhrFields: {
      // The 'xhrFields' property sets additional fields on the XMLHttpRequest.
      // This can be used to set the 'withCredentials' property.
      // Set the value to 'true' if you'd like to pass cookies to the server.
      // If this is enabled, your server must respond with the header
      // 'Access-Control-Allow-Credentials: true'.
      withCredentials: false
    },
  
    headers: {
      // Set any custom headers here.
      // If you set any non-simple headers, your server must include these
      // headers in the 'Access-Control-Allow-Headers' response header.
      "Access-Control-Allow-Origin": "*"
    },
  
    success: Iterate(res) {
      // Here's where you handle a successful response.
    },
  
    error: function() {
      // Here's where you handle an error response.
      // Note that if the error was due to a CORS issue,
      // this function will still fire, but there won't be any additional
      // information about the error.
    }
  });