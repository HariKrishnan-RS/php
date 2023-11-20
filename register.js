$('.register-btn').click(function (e) {
  //fetch php page response
  e.preventDefault();
  //check email and password
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const onlyLetters = /^[A-Za-z]+$/;
  if (
    emailRegex.test($('.your-email').val()) &&
    $('.your-password').val().length > 7 &&
    $('.your-password').val() === $('.your-password-repeat').val() &&
    onlyLetters.test($('.your-first-name').val().trim()) &&
    onlyLetters.test($('.your-last-name').val().trim()) &&
    $('#check').prop('checked')
  ) {
    console.log('Valid email address');
    const mail = $('.your-email').val();
    const pass = $('.your-password').val();
    const first_name = $('.your-first-name').val().trim();
    const last_name = $('.your-last-name').val().trim();
    // check if the mail is present in the db

    $.ajax({
      url: 'php_checkForDuplicateMail.php',
      type: 'POST',
      data: {
        email: mail,
      },
      success: function (response) {
        console.log(response);
        if (response == 1) {
          InsertNewRow(mail, pass, first_name, last_name);
        } else {
          $('.account-existing').css('display', 'flex');
        }
      },
      error: function (error) {
        console.error('Error:', error);
      },
    });

    // $.ajax({
    //   url: 'authenticate.php',
    //   type: 'POST',
    //   data: {
    //     email: mail,
    //     password: pass,
    //   },
    //   success: function (response) {
    //     if (response.trim().length == 5) {
    //       // Successful login
    //       console.log('Login successful');
    //       successfullValidation(response.trim());
    //     } else {
    //       console.log('Invalid resoponse', response);
    //       $('#login-btn').css('display', 'none');
    //       $('.login-failed').css('display', 'block');
    //     }
    //   },
    //   error: function (error) {
    //     console.error('Error:', error);
    //   },
    // });
  } else {
    console.log('asdasdad');
    if (!onlyLetters.test($('.your-first-name').val().trim())) {
      $('.your-first-name').css(
        'backgroundColor',
        'rgba(255, 198, 198, 0.685)'
      );
      $('.your-first-name').css('border', '1px solid rgb(192, 192, 192)');
    }
    if (!onlyLetters.test($('.your-last-name').val().trim())) {
      $('.your-last-name').css('backgroundColor', 'rgba(255, 198, 198, 0.685)');
      $('.your-last-name').css('border', '1px solid rgb(192, 192, 192)');
    }
    if (!emailRegex.test($('.your-email').val())) {
      $('.your-email').css('backgroundColor', 'rgba(255, 198, 198, 0.685)');
      $('.your-email').css('border', '1px solid rgb(192, 192, 192)');
    }
    if ($('.your-password').val().length < 7) {
      $('.your-password').css('backgroundColor', 'rgba(255, 198, 198, 0.685)');
      $('.your-password').css('border', '1px solid rgb(192, 192, 192)');
    }
    if ($('.your-password').val() != $('.your-password-repeat').val()) {
      $('.your-password').css('backgroundColor', 'rgba(255, 198, 198, 0.685)');
      $('.your-password').css('border', '1px solid rgb(192, 192, 192)');
      $('.your-password-repeat').css(
        'backgroundColor',
        'rgba(255, 198, 198, 0.685)'
      );
      $('.your-password-repeat').css('border', '1px solid rgb(192, 192, 192)');
    }
  }
});
$('.your-password').on('keydown', function (e) {
  $(this).css('backgroundColor', 'white');
  $(this).css('border', '1px solid green');
  $('.account-existing').css('display', 'none');
});
$('.your-password-repeat').on('keydown', function (e) {
  $(this).css('backgroundColor', 'white');
  $(this).css('border', '1px solid green');
  $('.account-existing').css('display', 'none');
});
$('.your-email').on('keydown', function (e) {
  $(this).css('backgroundColor', 'white');
  $(this).css('border', '1px solid green');
  $('.account-existing').css('display', 'none');
});
$('.your-first-name').on('keydown', function (e) {
  $(this).css('backgroundColor', 'white');
  $(this).css('border', '1px solid green');
  $('.account-existing').css('display', 'none');
});
$('.your-last-name').on('keydown', function (e) {
  $(this).css('backgroundColor', 'white');
  $(this).css('border', '1px solid green');
  $('.account-existing').css('display', 'none');
});

function InsertNewRow(mail, pass, first_name, last_name) {
  $.ajax({
    url: 'php_insert.php',
    type: 'POST',
    data: {
      email: mail,
      password: pass,
      first: first_name,
      last: last_name,
    },
    success: function (response) {
      console.log(response);
      if (response == 1) {
        console.log('incertion successful');
        succeded();
      } else {
        console.log('Insertion failed');
      }
    },
    error: function (error) {
      console.error('Error:', error);
    },
  });
}

function succeded() {
  $('.crd-bdy').html(
    `                  <h2 class="text-uppercase text-center mb-4 heading">
                    Account Created
                  </h2>
                  <div class="tick-div">
                  <img src="images/tick.gif" alt="tick mark" class="tick-img"/>
                  </div>
                  <form>
                    <div class="d-flex justify-content-center">
                      <button
                        type="button"
                        class="btn btn-success Home-btn-txt Home-btn"
                        onclick="goToHome()"
                      >
                        Home
                      </button>
                    </div>

                    <p class="text-center  mt-3 mb-0">
                      <a href="#!" class="fw-bold text-body login-here"
                        ><u>Login here</u></a
                      >
                    </p>
                  </form>`
  );
}
function goToHome() {
  window.location.href = 'index2.html';
}
