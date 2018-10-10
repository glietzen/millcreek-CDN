function getAnnouncements() {
    $('.card-test').empty();
    $.ajax({
        url: `http://mymillcreek.herokuapp.com/api/announcements`,
        method: `GET`,
        headers: {
            'Access-Control-Allow-Origin': 'http://mymillcreek.com'
        },
    }).then((res) => {
        for (var i = 0; i < res.length; i++) {
            let card = '';

            card+= `
            <div class="container py-3">
            <div class="card">
                <div class="row ">
                    <div class="col-lg-4">
                        
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

getAnnouncements();