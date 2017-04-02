d3.csv('east_standings.csv', function (error,data) {

  var eastConf = d3.select('.content')
                   .append('h1')
                   .text("Eastern Conference");

  function tabulate(data, columns) {
		var table = d3.select('.content')
                  .append('table');

    var thead = table.append('thead');

		var	tbody = table.append('tbody');

		thead.append('tr')
		     .selectAll('th')
		     .data(columns)
         .enter()
		     .append('th')
		     .text(function (column) { return column; })
         .attr("id", function (column) { return column; });

		var rows = tbody.selectAll('tr')
		  .data(data)
		  .enter()
		  .append('tr');

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

	tabulate(data, ["img", "Team", "W", "L", "PCT", "GB"]);

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

		thead.append('tr')
		     .selectAll('th')
		     .data(columns)
         .enter()
		     .append('th')
		     .text(function (column) { return column; })
         .attr("id", function (column) { return column; });

		var rows = tbody.selectAll('tr')
		  .data(data)
		  .enter()
		  .append('tr');

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

	tabulate(data, ["img", "Team", "W", "L", "PCT", "GB"]);

});
