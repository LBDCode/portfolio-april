$(document).ready(function(){
    $(".cards").on("mouseenter", "div", function(){						
        $(this).find('.hover-card').fadeIn(400);
    }).on("mouseleave", "div", function(){	
        $(this).find('.hover-card').stop().fadeOut(100);
    })	
});


function phoneValidator($el, required, parent) {
    if (!required) return true;
    // var raw = $el.val()
    var parsedInput = $el.val().replace(/\D/g, '');
    console.log(parsedInput);
    return (parsedInput.length === 10);
};
  
// Set default options
Foundation.Abide.defaults.validators['phone_number'] = phoneValidator;



$(document).foundation();


var selectedArray = [];
var selectedCount = 0;
    
$(".port-button").click(function () {
    var $self = $(this);
    var selected = $self.attr("id");

    if (!(selectedArray.includes(selected))) {
        selectedCount++;
        selectedArray.push(selected);
        $self.addClass("selected");
        console.log("added: " + selectedCount, selectedArray);
    } else if(selectedArray.includes(selected)) {
        selectedCount--;
        selectedArray = selectedArray.filter(val => val !== selected);
        $self.removeClass("selected");
        console.log("removed: " + selectedCount, selectedArray);

    }
    
    if(selectedCount === 0) {
        $(".media-object").show();
    } else{
        $(".media-object").hide();
        selectedArray.map(item => $(".media-object." + item).show())
    }

});





