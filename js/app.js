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


var checkedArray = [];
var checkedCount = 0;
    
$("input[type='checkbox']").change(function () {
    var $self = $(this);
    var checkbox = $self.attr("id");

    if ($self.is(":checked")) {
        checkedCount++;
        checkedArray.push(checkbox);
    } else {
        checkedCount--;
        checkedArray = checkedArray.filter(val => val !== checkbox);
    }
    
    if(checkedCount === 0) {
        $(".media-object").show();
    } else{
        $(".media-object").hide();
        checkedArray.map(item => $(".media-object." + item).show())
    }

});

$('#contact-submit').click(function() {
    swal({
        text: "Thanks for reaching out - I'll be in touch.",
        button: false,
    });
});



