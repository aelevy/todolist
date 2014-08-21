var postsTmpl = [
  "<% _.each(posts, function(element, index, list) { %>",
  "<article data-postid=\"<%= element._id %>\" class=\"post\">",
    "<h2><%= element.taskEnter %></h2>",
      "</article>",
  "<% }); %>"
].join("\n");
