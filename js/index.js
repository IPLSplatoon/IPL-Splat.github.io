fetch('data/tournaments.json')
    .then((response) => {
        return response.json()
    })
    .then((data) => {
        // Work with JSON data here
        console.log(data)// Let EJS create the HTML for each element in the above array for us
        let tourneyElements = ejs.render(`
	        <% tournaments.forEach(tournament => { %>
	        <div class="tournament">
		        <img src="<%=tournament.imagePath%>">
		        <div class="tournament-description">
			        <h3><%=tournament.title%></h3>
			        <p><%=tournament.description%></p>
		        </div>
	        </div>
	        <% }) %>
        `, {tournaments: data});
        document.querySelector('.tournaments-grid').innerHTML = tourneyElements;
    })