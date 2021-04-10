function getUpcomingTournaments() {
    const tournamentEndpoint = 'https://search.battlefy.com/tournament/organization/5c6dbd2da605be0329ecf36a/upcoming?page=1&size=10';

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
                    const tournamentUrl = 'https://battlefy.com/inkling-performance-labs/' + tournament.slug + '/' + tournament._id + '/info';
                    const status = tournament.status == 'registration-open' ? 'Registration Open!' : 'Registration Closed'; %>
                    
                    <div class="item">
                        <div class="image" style="background-image: url('<%-tournament.bannerUrl%>')"></div>
                        <div class="tournament-info">
                            <a href="<%=tournamentUrl%>"><h3><%=tournament.name%></h3></a>
                            <h4>
                                <%= new Intl.DateTimeFormat('en', dateOptions).format(date); %>
                                <%if (tournament.teamsCount > 0) {%>
                                     • <%=tournament.teamsCount%> <%=tournament.teamsCount == 1 ? 'Team' : 'Teams'%>
                                <%}%>
                            </h4>
                        </div>
                        <div class="team-info">
                            <div>
                                <a href="<%=tournamentUrl%>"><h4 class="tournament-status-color <%=tournament.status%>"><%=status%></h4></a>
                            </div>
                        </div>
                    </div>
                <% }) %>
            `, {tournaments: data.tournaments});

            new Colcade(tournamentListElem, {columns: '.col', items: '.item'});
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
