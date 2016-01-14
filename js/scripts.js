$(document).ready(function() {
  var pagetitles = ["Markdown", "Block-elements", "Inline-elements", "CSS", "Bootstrap", "Divs-and-Spans", "Floats", "Box-model", "Cascading-Styles", "Grid-System", "Responsive-Design", "Javascript-Arithmetic", "JS-Variables", "JS-Methods", "JS-Strings", "JS-Functions", "jQuery", "DOM-Manipulation-and-Traversal", "Forms", "Attributes", "Branching", "Arrays", "Looping"];

  pagetitles.forEach(function(pagetitle) {
    var linktitle = pagetitle;
    noDashLinkTitle = (linktitle).replace(/-/g, " ");

    $(".sidebar-nav").append("<li>" + "<a href=" + '"' + pagetitle + ".html" + '"' + ">" + noDashLinkTitle + "</a>" + "</li>")

  });

    $("#blobs form").submit(function(event) {
       var blobs = ["firstName", "lastName"];
       blobs.forEach(function(blob) {
       var userInput = $("input#" + blob).val();
       $("." + blob).text(userInput);

      $("#userInfo").show();

      event.preventDefault();
        });
    });
});
