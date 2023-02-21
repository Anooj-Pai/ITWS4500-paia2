let getData = {
    getNews: function () {
        fetch('https://api.nytimes.com/svc/news/v3/content/all/all.json?limit=100&api-key=WtBIBaDumKFBscXz3qCMNuBEgIRCrleQ')
            .then((response) => response.json())
            //.then((data) => console.log(data))
            .then((data) => this.display(data.results));
    },
    sports: function () {
        fetch('https://api.nytimes.com/svc/news/v3/content/all/sports.json?limit=100&api-key=WtBIBaDumKFBscXz3qCMNuBEgIRCrleQ')
            .then((response) => response.json())
            .then((data) => this.display(data.results));
    },

    science: function () {
        fetch('https://api.nytimes.com/svc/news/v3/content/all/science.json?limit=100&api-key=WtBIBaDumKFBscXz3qCMNuBEgIRCrleQ')
            .then((response) => response.json())
            .then((data) => this.display(data.results));
    },

    health: function () {
        fetch('https://api.nytimes.com/svc/news/v3/content/all/health.json?limit=100&api-key=WtBIBaDumKFBscXz3qCMNuBEgIRCrleQ')
            .then((response) => response.json())
            .then((data) => this.display(data.results));
    },

    business: function () {
        fetch('https://api.nytimes.com/svc/news/v3/content/all/business.json?limit=100&api-key=WtBIBaDumKFBscXz3qCMNuBEgIRCrleQ')
            .then((response) => response.json())
            .then((data) => this.display(data.results));
    },

    tech: function () {
        fetch('https://api.nytimes.com/svc/news/v3/content/all/technology.json?limit=100&api-key=WtBIBaDumKFBscXz3qCMNuBEgIRCrleQ')
            .then((response) => response.json())
            .then((data) => this.display(data.results));
    },

    display: function (news) {
        news = JSON.stringify(news);
        news = JSON.parse(news);
        var adding = document.querySelector('.page1');
        adding.innerHTML = '';
        adding = document.querySelector('.page2');
        adding.innerHTML = '';
        adding = document.querySelector('.page3');
        adding.innerHTML = '';
        for (var i = 0; i < 50; i++) {
            if (news[i].multimedia != null) {
                var title = news[i].title;
                var desc = news[i].abstract;
                var url = news[i].url;
                var pic = news[i].multimedia[0].url;

                if (i % 3 == 0) {
                    adding = document.querySelector('.page1');
                    adding.innerHTML +=
                        '<article class="article">' + '<img src=' + pic + '>' +
                        '<a href=' + url + '>' + title + '</a><hr>' + desc +
                        '<hr>' + '<hr>' +
                        '</article>';
                } else if (i % 3 == 1) {
                    adding = document.querySelector('.page2');
                    adding.innerHTML +=
                        '<article class="article">' + '<img src=' + pic + '>' +
                        '<a href=' + url + '>' + title + '</a><hr>' + desc +
                        '<hr>' + '<hr>' +
                        '</article>';
                } else {
                    adding = document.querySelector('.page3');
                    adding.innerHTML +=
                        '<article class="article">' + '<img src=' + pic + '>' +
                        '<a href=' + url + '>' + title + '</a><hr>' + desc +
                        '<hr>' + '<hr>' +
                        '</article>';
                }
            }
        }
    },

    change: function () {
        var count = 0;
        var label = document.getElementById('topic');
        label.innerHTML = "";
        setInterval(() => {
            if (count == 0) {
                getData.getNews();
                label.innerHTML = "General";
                count++;
            } else if (count == 1) {
                getData.sports();
                label.innerHTML = "Sports";
                count++;
            } else if (count == 2) {
                getData.science();
                label.innerHTML = "Science";
                count++;
            } else if (count == 3) {
                getData.health();
                label.innerHTML = "Health";
                count++;
            } else if (count == 4) {
                getData.business();
                label.innerHTML = "Business";
                count++;
            } else if (count == 5) {
                getData.tech();
                label.innerHTML = "Technology";
                count = 0;
            }
        }, 4000);
    }


}


document.onload = getData.change();

