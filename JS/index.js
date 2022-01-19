$(document).ready(function(){
    let first = $('.first');
    let last= $('.last')
    $('.next').on('click', function(){
        console.log('asdf');

        let currentImg = $('.active');
        let nextImg = currentImg.next();

        if(nextImg.length){
            currentImg.removeClass('active').css('z-index', -10);

            nextImg.addClass('active').css('z-index', 10);
        }
        else{
            currentImg.removeClass('active').css('z-index', -10);
            first.addClass('active').css('z-index', 10);
        }

    })
    $('.prev').on('click', function(){
        let currentImg = $('.active');
        let prevImg = currentImg.prev();

        if(prevImg.length){
            currentImg.removeClass('active').css('z-index', -10);
            prevImg.addClass('active').css('z-index', 10);
        }
        else{
            currentImg.removeClass('active').css('z-index', -10);
            last.addClass('active').css('z-index', 10);
        }
    });

});
    function validateForm() {
        let name = document.forms["register"]["name"].value;
        let email = document.forms["register"]["email"].value;
        let gender = document.forms["register"]["gender"].value;
        let password = document.forms["register"]["password"].value;
        let tnc = document.forms["register"]["tnc"].checked;
        if (name === "") {
            alert("Name must be filled out");
            return false;
        }
        else if (email === "") {
            alert("Email must be filled out");
            return false;
        }
        else if (password === "") {
            alert("Password must be filled out");
            return false;
        }
        else if (((gender !== "Laki-laki" && gender !== "Perempuan") && gender !== "Mereka")) {
            alert("Select gender from the box");
            return false;
        }
        else if (password.length <= 8){
            alert("Password must be longer than 8 characters");
            return false;
        }
        else if (tnc === false){
            alert("Please read an agree to terms and condition");
            return false;
        }

}

