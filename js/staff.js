fetch('data/orgHead.json')
    .then((response) => {
        return response.json()
    })
    .then((data) => {
        // Work with JSON data here
        console.log(data)// Let EJS create the HTML for each element in the above array for us
        let staffElements = ejs.render(`
	        <% staffs.forEach(staff => { %>
	        <div class="staff">
		        <img src="<%=staff.imagePath%>">
		        <div class="staff-description">
			        <h3><%=staff.title%></h3>
			        <p><%=staff.description%></p>
			        <%if (staff.twitter.length > 0) { %>
			            <h4>
			                <a href="https://twitter.com/<%=staff.twitter%>" target="_blank">
			                    <i class="twitter-solid fab fa-twitter"></i>
			                    <%=staff.twitter%>
			                </a>
			            </h4>
			        <% } %>
		        </div>
	        </div>
	        <% }) %>
        `, {staffs: data});
        document.querySelector('.org-head-grid').innerHTML = staffElements;
    })

fetch('data/headTO.json')
    .then((response) => {
        return response.json()
    })
    .then((data) => {
        // Work with JSON data here
        console.log(data)// Let EJS create the HTML for each element in the above array for us
        let staffElements = ejs.render(`
	        <% staffs.forEach(staff => { %>
	        <div class="staff">
		        <img src="<%=staff.imagePath%>">
		        <div class="staff-description">
			        <h3><%=staff.title%></h3>
			        <p><%=staff.description%></p>
			        <%if (staff.twitter.length > 0) { %>
			            <h4>
			                <a href="https://twitter.com/<%=staff.twitter%>" target="_blank">
			                    <i class="twitter-solid fab fa-twitter"></i>
			                    <%=staff.twitter%>
			                </a>
			            </h4>
			        <% } %>
		        </div>
	        </div>
	        <% }) %>
        `, {staffs: data});
        document.querySelector('.head-TO-grid').innerHTML = staffElements;
    })

fetch('data/production.json')
    .then((response) => {
        return response.json()
    })
    .then((data) => {
        // Work with JSON data here
        console.log(data)// Let EJS create the HTML for each element in the above array for us
        let staffElements = ejs.render(`
	        <% staffs.forEach(staff => { %>
	        <div class="staff">
		        <img src="<%=staff.imagePath%>">
		        <div class="staff-description">
			        <h3><%=staff.title%></h3>
			        <p><%=staff.description%></p>
			        <%if (staff.twitter.length > 0) { %>
			            <h4>
			                <a href="https://twitter.com/<%=staff.twitter%>" target="_blank">
			                    <i class="twitter-solid fab fa-twitter"></i>
			                    <%=staff.twitter%>
			                </a>
			            </h4>
			        <% } %>
		        </div>
	        </div>
	        <% }) %>
        `, {staffs: data});
        document.querySelector('.production-grid').innerHTML = staffElements;
    })

fetch('data/staff.json')
    .then((response) => {
        return response.json()
    })
    .then((data) => {
        // Work with JSON data here
        console.log(data)// Let EJS create the HTML for each element in the above array for us
        let staffElements = ejs.render(`
	        <% staffs.forEach(staff => { %>
	        <div class="staff">
		        <img src="<%=staff.imagePath%>">
		        <div class="staff-description">
			        <h3><%=staff.title%></h3>
			        <p><%=staff.description%></p>
			        <%if (staff.twitter.length > 0) { %>
			            <h4>
			                <a href="https://twitter.com/<%=staff.twitter%>" target="_blank">
			                    <i class="twitter-solid fab fa-twitter"></i>
			                    <%=staff.twitter%>
			                </a>
			            </h4>
			        <% } %>
		        </div>
	        </div>
	        <% }) %>
        `, {staffs: data});
        document.querySelector('.staff-layout-grid').innerHTML = staffElements;
    })

fetch('data/commentator.json')
    .then((response) => {
        return response.json()
    })
    .then((data) => {
        // Work with JSON data here
        console.log(data)// Let EJS create the HTML for each element in the above array for us
        let staffElements = ejs.render(`
	        <% staffs.forEach(staff => { %>
	        <div class="staff">
		        <img src="<%=staff.imagePath%>">
		        <div class="staff-description">
			        <h3><%=staff.title%></h3>
			        <p><%=staff.description%></p>
			        <%if (staff.twitter.length > 0) { %>
			            <h4>
			                <a href="https://twitter.com/<%=staff.twitter%>" target="_blank">
			                    <i class="twitter-solid fab fa-twitter"></i>
			                    <%=staff.twitter%>
			                </a>
			            </h4>
			        <% } %>
		        </div>
	        </div>
	        <% }) %>
        `, {staffs: data});
        document.querySelector('.commentator-grid').innerHTML = staffElements;
    })

fetch('data/former.json')
    .then((response) => {
        return response.json()
    })
    .then((data) => {
        // Work with JSON data here
        console.log(data)// Let EJS create the HTML for each element in the above array for us
        let staffElements = ejs.render(`
	        <% staffs.forEach(staff => { %>
	        <div class="staff">
		        <img src="<%=staff.imagePath%>">
		        <div class="staff-description">
			        <h3><%=staff.title%></h3>
			        <p><%=staff.description%></p>
			        <%if (staff.twitter.length > 0) { %>
			            <h4>
			                <a href="https://twitter.com/<%=staff.twitter%>" target="_blank">
			                    <i class="twitter-solid fab fa-twitter"></i>
			                    <%=staff.twitter%>
			                </a>
			            </h4>
			        <% } %>
		        </div>
	        </div>
	        <% }) %>
        `, {staffs: data});
        document.querySelector('.former-staff-grid').innerHTML = staffElements;
    })