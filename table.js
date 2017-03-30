d3.csv('east_standings.csv', function (error,data) {

  var eastConf = d3.select('.content')
                   .append('h1')
                   .text("Eastern Conference");

  function tabulate(data, columns) {
		var table = d3.select('.content')
                  .append('table');

    var thead = table.append('thead');

		var	tbody = table.append('tbody');

		// append the header row
		thead.append('tr')
		     .selectAll('th')
		     .data(columns)
         .enter()
		     .append('th')
		     .text(function (column) { return column; })
         .attr("id", function (column) { return column; });

		// create a row for each object in the data
		var rows = tbody.selectAll('tr')
		  .data(data)
		  .enter()
		  .append('tr');

		// create a cell in each row for each column
		var cells = rows.selectAll('td')
		                .data(function (row) {

        return columns.map(function (column) {
		      return {column: column, value: row[column]};

		    });
		  })
		  .enter()
		  .append('td')
		    .html(function (d) { return d.value; });

	  return table;
	}

	// render the table(s)
	tabulate(data, ["img", "Team", "W", "L", "PCT", "GB"]); // 5 columns table

});

d3.csv('west_standings.csv', function (error,data) {

  var eastConf = d3.select('.content')
                   .append('h1')
                   .text("Western Conference");

  function tabulate(data, columns) {
		var table = d3.select('.content')
                  .append('table');

    var thead = table.append('thead');

		var	tbody = table.append('tbody');

		// append the header row
		thead.append('tr')
		     .selectAll('th')
		     .data(columns)
         .enter()
		     .append('th')
		     .text(function (column) { return column; })
         .attr("id", function (column) { return column; });

		// create a row for each object in the data
		var rows = tbody.selectAll('tr')
		  .data(data)
		  .enter()
		  .append('tr');

		// create a cell in each row for each column
		var cells = rows.selectAll('td')
		                .data(function (row) {

        return columns.map(function (column) {
		      return {column: column, value: row[column]};

		    });
		  })
		  .enter()
		  .append('td')
		    .html(function (d) { return d.value; });

	  return table;
	}

	// render the table(s)
	tabulate(data, ["img", "Team", "W", "L", "PCT", "GB"]); // 5 columns table

});
