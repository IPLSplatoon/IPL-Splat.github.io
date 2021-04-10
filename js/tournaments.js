const tournamentGridElem = document.querySelector('.tournaments-grid');

function fillTournamentGrid() {
    fetch('data/tournaments.json')
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            tournamentGridElem.innerHTML = `
            <div class="col"></div>
            <div class="col col-2"></div>
            <div class="col col-3"></div>`;
            tournamentGridElem.innerHTML += ejs.render(`
                <% tournaments.forEach(tournament => { %>
                <div class="card">
                    <img src="<%=tournament.imagePath%>" alt="Icon for <%=tournament.title%>">
                    <div class="card-text">
                        <h3><%=tournament.title%></h3>
                        <p><%=tournament.description%></p>
                    </div>
                </div>
                <% }) %>
            `, {tournaments: data});

            new Colcade('.tournaments-grid', {columns: '.col', items: '.card'});
        });
}
