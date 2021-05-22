function getUpcomingTournaments() {
    const tournamentEndpoint = 'https://search.battlefy.com/tournament/organization/5c6dbd2da605be0329ecf36a/upcoming?page=1&size=9';

    fetch(tournamentEndpoint)
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            if (!data.tournaments) {
                return fallback();
            }

            const tournamentListElem = document.querySelector('.upcoming-tournaments-list');

            tournamentListElem.innerHTML = `
            <div class="col"></div>
            <div class="col col-2"></div>`;
            tournamentListElem.innerHTML += ejs.render(`
                <% const dateOptions = {month: 'long', day: 'numeric', year: 'numeric', hour: 'numeric', minute: 'numeric', hour12: false}; %>
                
                <% tournaments.forEach(tournament => { 
                    const date = new Date(tournament.startTime); 
                    const tournamentUrl = 'https://battlefy.com/inkling-performance-labs/' + tournament.slug + '/' + tournament._id + '/info?infoTab=details';
                    const status = tournament.status == 'registration-open' ? 'Registration Open!' : 'Registration Closed'; %>
                    
                    <div class="card">
                        <div class="image" style="background-image: url('<%-tournament.bannerUrl%>')"></div>
                        <div class="card-text">
                            <h3><%=tournament.name%></h3>
                            <h4>
                                <span><%=new Intl.DateTimeFormat('en', dateOptions).format(date);%></span>
                                <%if (tournament.teamsCount > 0) {%>
                                    • <span><%=tournament.teamsCount%> <%=tournament.teamsCount == 1 ? 'Team' : 'Teams'%></span>
                                <%}%>
                            </h4>
                            <div class="flex horizontal">
                                <a href="<%=tournamentUrl%>" class="tournament-link"><h4 class="tournament-status-color <%=tournament.status%>"><%=status%> <i class="fas fa-angle-double-right"></i></h4></a>
                            </div>
                        </div>
                    </div>
                <% }) %>
            `, {tournaments: data.tournaments});

            if (data.tournaments.length < data.total) {
                tournamentListElem.innerHTML += `
                    <a href="https://battlefy.com/inkling-performance-labs" class="card flex vertical hover-darken">
                        <div style="font-size: 1.2em">View more tournaments on Battlefy <i class="fas fa-angle-double-right"></i></div>
                    </a>`;
            }

            new Colcade(tournamentListElem, {columns: '.col', items: '.card'});
        })
        .catch(err => {
           console.error(err);
           fallback();
        });
}

function fallback() {
    fillTournamentGrid();
    document.getElementById('upcoming-tournaments').style.display = 'none';
    document.getElementById('tournaments-fallback').style.display = 'unset';
}
