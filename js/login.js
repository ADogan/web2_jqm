$(function() {

  $('form').submit(function() {

    validateUsername();

    function validateUsername() {

        if($('#username').val().length == 0)
        {

          alert('Empty');
          return false;

        }
    }

    function validateUserPassword() {

    }

    return false;
  })
})
