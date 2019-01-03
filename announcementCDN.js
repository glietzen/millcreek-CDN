function getAnnouncements() {
    $('.card-test').empty();
    $('.classes-div').empty();

    $.ajaxSetup({
        headers: {
            "Access-Control-Allow-Origin": "*"
        }
    });

    $.ajax({

        url: `https://church-app-mngr-2018/api/announcements`,
        method: `GET`
    }).then((res) => {
        for (var i = 0; i < res.length; i++) {
            let card = '';
            card += `
            <div class="container py-3">
                <h5 class="card-title mc-title pt-3">${res[i].title}</h5>
                <p class="card-text">${res[i].description}</p>
            </div>`


            $('.card-test').append(card)
        }
    })
    
    $.ajax({

        url: `https://church-app-mngr-2018.herokuapp.com/api/classes`,
        method: `GET`
    }).then((res) => {
        for (var i = 0; i < res.length; i++) {
            let card = '';
            card += `
            <div class="container py-3">
                <h5 class="card-title mc-title pt-3">${res[i].title}</h5>
                <p class="card-text">${res[i].description}</p>
            </div>`


            $('.classes-div').append(card)
        }
    })


}

getAnnouncements();