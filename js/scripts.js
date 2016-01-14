$(document).ready(function() {
  var pagetitles = ["Markdown", "Block-elements", "Inline-elements", "CSS", "Bootstrap", "Divs-and-Spans", "Floats", "Box-model", "Cascading-Styles", "Grid-System", "Responsive-Design", "Javascript-Arithmetic", "JS-Variables", "JS-Methods", "JS-Strings", "JS-Functions", "jQuery", "DOM-Manipulation-and-Traversal", "Forms", "Attributes", "Branching", "Arrays", "Looping"];

  pagetitles.forEach(function(pagetitle) {
    var linktitle = $(pagetitle);
    $("ul").append("<li>" + pagetitle + "<a href=" + pagetitle + ".html>" + "</a>" + "</li>")

  });
});
