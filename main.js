$(document).ready(function(event){
    $('#file').change(function(event){
        var reader = new FileReader();
        reader.onload = function(e) {
            $('#image').prop('src', e.target.result);
        };
        reader.readAsDataURL(this.files[0]);
    });        
});
