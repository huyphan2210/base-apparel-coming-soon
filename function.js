$(document).ready(function() {
    $('form').submit(function(e) {
        e.preventDefault();
        const isEmail = validateEmail($(this).find('input').val());
        if (!isEmail) {
            $(this).find('#error').css('visibility', 'visible');
            $(this).find('p').css('display', 'block');
        } else {
            $(this).find('#error').css('visibility', '');
            $(this).find('p').css('display', '');
        }
    })
})

const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
};
