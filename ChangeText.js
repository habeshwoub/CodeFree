/*Change text with click events 
When our click event happens, we can use jQuery to update an HTML element.
Let's make it so that when a user clicks the "Get Message" button, 
we change the text of the element with the class message to say "Here is the message".
We can do this by adding the following code within our click event:
$(".message").html("Here is the message");*/

<script>
  $(document).ready(function() {
    $("#getMessage").on("click", function(){
        $(".message").html("Here is the message");
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
