/*Get JSON with jQuery getJSON method
Let's get the JSON from freeCodeCamp's Cat Photo API.
Here's the code you can put in your click event to do this */

<script>
  $(document).ready(function() {

    $("#getMessage").on("click", function(){
      // Only change code below this line.
      
     $.getJSON("/json/cats.json", function(json) {
  $(".message").html(JSON.stringify(json));
});
      // Only change code above this line.
    });

  });
</script>

<div class="container-fluid">
  <div class = "row text-center">
    <h2>Cat Photo Finder</h2>
  </div>
  <div class = "row text-center">
    <div class = "col-xs-12 well message">
      The message will go here
    </div>
  </div>
  <div class = "row text-center">
    <div class = "col-xs-12">
      <button id = "getMessage" class = "btn btn-primary">
        Get Message
      </button>
    </div>
  </div>
</div>