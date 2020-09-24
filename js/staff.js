fetch('data/staff.json')
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        // Work with JSON data here
        // Let EJS create the HTML for each element in the above array for us
		data.forEach(grid => {
			let elements = ejs.render(`
				<% staffs.forEach(staff => { %>
				<div class="card">
					<img src="<%=staff.imagePath%>">
					<div class="card-text">
						<h3><%=staff.title%></h3>
						<%if (staff.credit.length > 0) { %>
							<h4><%=staff.credit%></h4>
						<% } %>
						<p><%-staff.description%></p>
						<%if (staff.twitter.length > 0) { %>
							<div class="card-link">
								<a href="https://twitter.com/<%=staff.twitter%>" class="twitter-solid" target="_blank">
									<i class="twitter-solid fab fa-twitter"></i>
									@<%=staff.twitter%>
								</a>
							</div>
						<% } %>
					</div>
				</div>
				<% }) %>
			`, {staffs: grid.contents});
			document.querySelector(`.${grid.elemClassName}`).innerHTML = elements;
		});
    });