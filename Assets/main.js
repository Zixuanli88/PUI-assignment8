$(document).ready(function(){
  /*---------- handelbars----------*/
  var content={
     "dataviz": [
      { 
          Name: "Pie Chart", 
          Classes: "round compare",
          Pic: "https://i.imgur.com/JivTC0M.png",
          Description: "The pie chart is your entry to data visualization. It's a circular graphic that has been divided to represent portion. The pie chart got its name because it resembles a sliced pie. There are various ways of how this graphic can be drawn, another way is to show multiple segments in the pie to represent different parties, but this can also lead to difficulty when comparing those segments.",
      },
      { 
          Name: "Line Chart", 
          Classes: "growth timeline",
          Pic: "https://i.imgur.com/8brtb3L.png",
          Description: "The line chart displays a series of data points and is connected by straight line segments. It is often used to visualize a trend of data over an interval of time. Line chart is very versatile and it's best to communicate changes happening through time. Line chart is the least infographic amongst all data visualizations.",
      },
        { 
          Name: "Bar Chart", 
          Classes: "growth timeline compare rectangle",
          Pic: "https://i.imgur.com/eRTWTOf.png",
          Description: "Bar chart shows categorical data through the height or length of rectangle bars. It can be used in many ways: to compare between different data groups, show the trend of data through time, etc. Other variations of bar chart are grouped bar chart and stacked bar chart, these can be used for more complex comparison of data.",
      },
      { 
          Name: "Venn Diagram", 
          Classes: "round compare intersection",
          Pic: "https://i.imgur.com/zuezO88.png",
          Description: "Venn diagram is often used to show relationships such as overlapping between two or more different collections of data. Venn diagram is most effective when showing where the two collections intersect, but not the proportion of the intersection, or the actual data set.",
      },
      { 
          Name: "Concentric Diagram", 
          Classes: "round hierarchy intersection",
          Pic: "https://i.imgur.com/wTx9xGt.png",
          Description: "Concentric diagram is a series of circular graphic with the same centric. The circle in the center represent the thing that's at the top hierarchy, whether it's importance, power, or represent an actual spacial relationship.",
      },
      { 
          Name: "Bubble Race Chart", 
          Classes: "round compare",
          Pic: "https://i.imgur.com/1NiyYNG.png",
          Description: "A bubble race chart can represent different properties of the data set. The size, color of the bubbles can represent quantity of each data set, where the data sets are positioned on the X and Y axis also represent where the data set is on a spectrum.",
      },
      { 
          Name: "Tree Map", 
          Classes: "hierarchy compare rectangle",
          Pic: "https://i.imgur.com/LjQL6J9.png",
          Description: "Tree map is designed for large data sets to show their hierarchy. The rectangles are divided into larger and smaller sizes to represent the quantity of a data set, and within that different colors can also be applied to divide the data sets into different categories.",
      },
      { 
          Name: "Mindmap", 
          Classes: "hierarchy timeline",
          Pic: "https://i.imgur.com/doPNr1q.png",
          Description: "Mindmap, or tree diagram, shows the hierarchy and flow. It can show how an organization works, or the thought flow of a person. The diagram can also both be read from top to down or down to top. ",
      },
     
      { 
          Name: "Fan Chart", 
          Classes: "hierarchy compare",
          Pic: "https://i.imgur.com/QNr8YJL.png",
          Description: "Fan chart is to describe when data moves away from the center, it's quantity doubles. This is often used when describing genealogy trees and evolution of ideas.",
      },
       { 
          Name: "Pyramid", 
          Classes: "hierarchy compare",
          Pic: "https://i.imgur.com/aMM0wlH.png",
          Description: "Pyramid diagram shows a set of data where the hierarchy goes up, the quantity of the data set progressively gets smaller. Two famous example of this graph is when they were used to describe the recommended food groups for human, and that power and money are distributed among the world's population.",
      },
    
   ]}

   var datavizTemplate = $("#dataviz-template").html();
   var compiledDatavizTemplate = Handlebars.compile(datavizTemplate);
   $(".dataviz-list-container").html(compiledDatavizTemplate(content));

/* filter button */
 
  var $container = $('.dataviz-list-container'),
      $checkboxes = $('#filter-buttons input');

  console.log($checkboxes)

  $container.isotope({
    itemSelector: '.content'
  });

  $grid.imagesLoaded().progress( function() {
  $grid.isotope('layout');
  });

  var isotope = $container.data('isotope');
  function addEvenClasses() {
    isotope.$filteredAtoms.each(function(i, elem) {
      $(elem)[(i % 2 ? 'addClass' : 'removeClass')]('even')
    });
  }

  $checkboxes.change(function() {
      var filters = [];
      // get checked checkboxes values
      $checkboxes.filter(':checked').each(function() {
        filters.push(this.value);
      });
      
    
      var filterValue = concatValues(filters);
      console.log(filterValue);
      $container.isotope({filter: filterValue});
      addEvenClasses();

      // CONCATENATE FILTERS
      function concatValues( obj ) {
      var value = '';
      for ( var prop in obj ) {
        value += obj[ prop ];
      }
      return value;
      }
  });

});





