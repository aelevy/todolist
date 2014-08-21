$(document).ready(function () {
  toDo.init();
});


var toDo = {
  init: function () {
    this.initStyling();
    this.initEvents();
  },
  initStyling: function () {
    toDo.getPosts();

  },
  initEvents: function () {
   $("form").on("submit", function (event) {
      event.preventDefault();
      var newPost = {
        title: $(".taskEnter").val(),

      };

      toDo.createPost(newPost);
      $(".taskEnter").val("");
    });
    $(".container").on("click", ".destroy", function (event) {
      event.preventDefault();
      var postId = $(this).closest("article").data("postid");
      console.log(postId);
      toDo.deletePost(postId);
    });


  },
  render: function (template, data, $el) {
    var markup = _.template(template, data);

    $el.html(markup);

  },
  url: "http://tiy-fee-rest.herokuapp.com/collections/todoOMGWTFBBQ",
  getPosts: function () {

    $.ajax({
      url: toDo.url,
      type: 'GET',
      success: function (response) {
        var posts = window.posts = response;

        toDo.render(postsTmpl, posts, $("section"));

      }
    });

  },
  createPost: function (newPost) {
      $.ajax({
       url: toDo.url,
        data: newPost,
        type: 'POST',
        success: function (response) {
          toDo.getPosts();

        }
      });
  },
  deletePost: function (postId) {
    $.ajax({
      url: toDo.url + "/" + postId,
      type: 'DELETE',
      success: function () {
          toDo.getPosts();
      }
    });

  },
  updatePost: function (postId, updatedPost) {

    $.ajax({

    });

  }


};
