localStorage.setItem('tempDate', JSON.stringify('empty'));
localStorage.setItem('tempTheater', JSON.stringify('empty'));
localStorage.setItem('tempTime', JSON.stringify('empty'));
localStorage.setItem('tempSeats', JSON.stringify([]));
sessionStorage.setItem('userid', JSON.stringify(''));

if (!localStorage.getItem('allTicketAry')) {
  localStorage.setItem('allTicketAry', JSON.stringify([]));
}
localStorage.setItem('SelectedmovieName', JSON.stringify(''));
localStorage.setItem('homeBadgeCount', JSON.stringify('1'));
let flag = 0;
function locationSelect(e) {
  if (e.target.value == 'auto') {
    findLocation();
  } else {
    localStorage.setItem('location', JSON.stringify(e.target.value));
  }
}

$('.carousel .carousel-item').each(function () {
  var minPerSlide = 4;
  var next = $(this).next();
  if (!next.length) {
    next = $(this).siblings(':first');
  }
  next.children(':first-child').clone().appendTo($(this));

  for (var i = 0; i < minPerSlide; i++) {
    next = next.next();
    if (!next.length) {
      next = $(this).siblings(':first');
    }
    next.children(':first-child').clone().appendTo($(this));
  }
});

const loc = document.querySelector('.location');
loc.addEventListener('click', locationSelect);
localStorage.setItem('location', JSON.stringify(loc.value)); //setting default location
let movieAry = JSON.parse(localStorage.getItem('movies'));
if (movieAry == null) {
  movieAry = [];
}
let movie_count = movieAry.length;
let movieId = 0;
let nameary = JSON.parse(localStorage.getItem('names'));
let i = 0;
document.addEventListener('DOMContentLoaded', function () {
  $('.icon-badge').css('display', 'none');

  const locc = document.querySelector('.location');
  locc.selectedIndex = 0;
  if (true) {
    localStorage.setItem('T1', JSON.stringify([]));
    localStorage.setItem('T2', JSON.stringify([]));
    localStorage.setItem('T3', JSON.stringify([]));

    let ary = [
      'm1',
      'm2',
      'm3',
      'm4',
      'm5',
      'm6',
      'm7',
      'm8',
      'm9',
      'm10',
      'm11',
    ];
    localStorage.setItem('movies', JSON.stringify(ary));
    ary = [
      'Winter Wind',
      'Dream Big',
      'Be Optimistic',
      'Lonely Time',
      'This Is Who I Am',
      'Hurricane Winds',
      'Creation Power',
      'Wall-E',
      'Speed of Time',
      'Emptyness',
      'Valey Of Fear',
    ];
    localStorage.setItem('names', JSON.stringify(ary));
    sessionStorage.setItem('clickedMovieId', JSON.stringify(''));
  }
  const homeBadge = Number(JSON.parse(localStorage.getItem('homeBadgeCount')));
  const localBadge = Number(JSON.parse(localStorage.getItem('bookBadgeCount')));
  console.log(homeBadge, localBadge);
  if (homeBadge != localBadge) {
    $('.icon-badge').text('');
    $('.icon-badge').css('display', 'block');
  }
});
function notification() {
  window.location.href = 'notification.html';
}
function chengeBannerImage(e) {
  // transform: translateX(-50%);

  if (e.target.id == 'prev-button') {
    const banner = document.querySelector('.advertisement-banner');
    const style = getComputedStyle(banner);
    let matricStr = style['transform'];

    matricStr = matricStr.split(',');
    let newValue = String(Number(matricStr[4]) - 250);
    if (newValue < -1750) {
      newValue = -1750;
    }
    banner.style['transform'] = `matrix(1, 0, 0, 1, ${newValue}, 0)`;
  }
  if (e.target.id == 'next-button') {
    const banner = document.querySelector('.advertisement-banner');
    const style = getComputedStyle(banner);
    let matricStr = style['transform'];

    matricStr = matricStr.split(',');
    let newValue = String(Number(matricStr[4]) + 250);
    if (newValue > -250) {
      newValue = -280;
    }
    banner.style['transform'] = `matrix(1, 0, 0, 1, ${newValue}, 0)`;
  }
}
function updateNotifTickets() {
  const notifDiv = document.getElementById('notif-div');
  const localTicketAry = JSON.parse(localStorage.getItem('allTicketAry'));
  for (let i = 0; i < localTicketAry.length; i++) {
    notifDiv.innerHTML += `<div class="tic" id="ticket${i}" onClick="notification();" style="cursor: pointer;">movie: ${localTicketAry[i]['name']}</div>`;
  }
  //update badge
  $(function () {
    // $('.icon-badge').text(localTicketAry.length);
  });
}
updateNotifTickets();
movieAry.forEach((element) => {
  const mainBar = document.querySelector('.main-bar');
  const div = document.createElement('div');
  const div2 = document.createElement('div');
  const img = document.createElement('img');
  const a = document.createElement('a');
  const h1 = document.createElement('H1');
  const p = document.createElement('P');
  div.className = 'card';
  div2.className = 'card-body';
  img.className = 'img-fluid movie-img';
  img.src = `movies-img/${element}.jpg`;
  h1.className = 'card-title movie-name';
  h1.innerText = nameary[i];
  i++;
  p.className = 'card-text';
  p.innerHTML = '<b>L</b>';
  p.append(
    ' orem ipsumf do lor sit siius amet, codd d nsects etur adipisicing elit. Harum .'
  );
  a.className = 'book-tic-lnk';
  a.innerText = 'Book Ticket';
  a.id = String(movieId);
  movieId = movieId + 1;
  div.appendChild(img);
  div2.appendChild(h1);
  div2.appendChild(p);
  div2.appendChild(a);
  div.appendChild(div2);
  mainBar.appendChild(div);
});
const mainBar = document.querySelector('.main-bar');
const div = document.createElement('div');
div.className = 'None';
mainBar.appendChild(div);
let x = 0;
////////////////////////////////
function closed(e) {
  if (!(e.target.className == 'fa-regular fa-bell n2')) {
    const elm = document.getElementById('notif-div');
    $(elm).slideUp(150);
    flag = 0;
  }
  if (e.target.className == 'blur-box') {
    $('.blur-box').css('display', 'none');
    x = 0;
  }
}
document.addEventListener('click', closed);
///////////////////////////////////
function clicked(e) {
  const clickedMovieId = e.target.id;
  const i = JSON.stringify(clickedMovieId);
  const x = e.target.id;
  sessionStorage.setItem('clickedMovieId', i);
  localStorage.setItem(
    'SelectedmovieName',
    JSON.stringify(e.target.parentElement.firstElementChild.innerText)
  );
  localStorage.setItem('homeBadgeCount', JSON.stringify('1'));
  // console.log(e.target.className);
  if (e.target.className == 'search-form') {
    e.target.preventDefault();
  }
}
const bookTicket = document.querySelector('.main-bar');
bookTicket.addEventListener('click', clicked);
///////////////////
function keypressed(e) {
  if (e.target.id == 'search-box') {
    let value = e.target.value;
    let movieNamelst = document.querySelectorAll('.movie-name');
    movieNamelst.forEach((item) => {
      let txt = item.innerText;
      txt = txt.toLowerCase();
      value = value.toLowerCase();
      if (!txt.includes(value)) {
        item.parentElement.parentElement.style.display = 'none';
      } else {
        item.parentElement.parentElement.style.display = 'flex';
      }
    });
  }
}
const search = document.querySelector('.search-box');
search.addEventListener('input', keypressed);
function hide() {
  const side = document.querySelector('.side-bar');
  side.classList.toggle('hide');
}
const reset = document.querySelector('body');
function resetfun(e) {
  if (e.key == 'Enter' && e.shiftKey == true) {
    localStorage.setItem('T1', JSON.stringify([]));
    localStorage.setItem('T2', JSON.stringify([]));
    localStorage.setItem('T3', JSON.stringify([]));
    localStorage.removeItem('T1');
    localStorage.removeItem('T2');
    localStorage.removeItem('T3');
    localStorage.removeItem('n');
    localStorage.removeItem('names');
    localStorage.removeItem('movies');
  }
}

function move() {
  $(function () {
    const navButtons = document.querySelector('#prev-button');
    console.log($(navButtons));
    if (navButtons.style.top == '240px') {
      avButtons.style.top = '300px';
    }
  });
}
reset.addEventListener('keypress', resetfun);

const notif = document.getElementById('notif-icon');

function notiff(e) {
  $('.icon-badge').css('display', 'none');
  localStorage.setItem('bookBadgeCount', JSON.stringify('1'));
  if (flag == 0) {
    const elm = document.getElementById('notif-div');
    $(elm).slideDown(150);
    flag++;
  } else {
    const elm = document.getElementById('notif-div');
    $(elm).slideUp(150);
    flag--;
  }
}
notif.addEventListener('click', notiff);
$(document).ready(function () {
  $('#myCarousel').carousel({
    interval: 2800,
  });
  $('.login-div').click(function () {
    if ($('.fa-user-text').text() == 'login') {
      $('#loginModal').modal('show');
    } else {
      logout();
    }
  });
  $('#login-btn').click(function (e) {
    //fetch php page response
    e.preventDefault();
    //check email and password
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailRegex.test($('#email').val()) && $('#password').val().length > 7) {
      console.log('Valid email address');
      const mail = $('#email').val();
      const pass = $('#password').val();

      $.ajax({
        url: 'authenticate.php',
        type: 'POST',
        data: {
          email: mail,
          password: pass,
        },
        success: function (response) {
          if (response.trim().length == 5) {
            // Successful login
            console.log('Login successful');
            successfullValidation(response.trim());
          } else {
            console.log('Invalid resoponse', response);
            $('#login-btn').css('display', 'none');
            $('.login-failed').css('display', 'block');
          }
        },
        error: function (error) {
          console.error('Error:', error);
        },
      });
      // fetch(`authenticate.php?mail=${mail}&pass=${pass}`, { method: 'GET' })
      //   .then((response) => {
      //     if (!response.ok) {
      //       throw new Error('Network response was not ok');
      //     }
      //     return response.text();
      //   })
      //   .then((data) => {
      //     console.log(data);
      //   })
      //   .catch((error) => {
      //     console.error('There was a problem with the fetch operation:', error);
      //   });
    } else {
      if (!emailRegex.test($('#email').val())) {
        $('#email').css('backgroundColor', 'rgba(255, 198, 198, 0.685)');
      }
      if ($('#password').val().length < 7) {
        $('#password').css('backgroundColor', 'rgba(255, 198, 198, 0.685)');
      }
    }
  });

  $('#email').on('keydown', function () {
    $('#email').css('backgroundColor', 'white');
    $('#login-btn').css('display', 'block');
    $('.login-failed').css('display', 'none');
  });
  $('#password').on('keydown', function () {
    $('#password').css('backgroundColor', 'white');
    $('#login-btn').css('display', 'block');
    $('.login-failed').css('display', 'none');
  });
  $('.logout-model-ok-btn').on('click', function () {
    $('#myModallogout').modal('hide');
    // sessionStorage.setItem('userid', JSON.stringify(''));
    document.cookie = 'userid=';
    togleLoginText(false);
  });
  $('.logout-model-cancel-btn').on('click', function () {
    $('#myModallogout').modal('hide');
  });
  $('.card').on('click', function (e) {
    if (e.target.className != 'book-tic-lnk') {
      showBlur($(this));
    }
  });
});

function reviewModel() {
  $('#addreview').modal('show');
  console.log('asasdasadsad');
}

function findLocation() {
  let latitude = 0;
  let longitude = 0;

  navigator.geolocation.getCurrentPosition(
    function (position) {
      latitude = position.coords.latitude;
      longitude = position.coords.longitude;
      const apiUrl = `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`;
      fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => {
          if (data.display_name) {
            data.display_name.split(',').forEach((item) => {
              if (item.toLowerCase().includes('istrict')) {
                localStorage.setItem(
                  'location',
                  JSON.stringify(item.trim().split(' ')[0])
                );
                // $(function () {
                //   $('.location').delay(3000);
                // });
                const s = document.querySelector('.location');
                s.options[0].innerText = item.trim().split(' ')[0];
                // console.log(s.options[0].innerText);
                const loccc = document.querySelector('.location');
                loccc.selectedIndex = 0;
              }
            });
          } else {
            console.log('Location not found');
          }
        })
        .catch((error) => console.error('Error:', error));
    },
    function (error) {
      console.error('Error getting geolocation: ' + error.message);
    }
  );
}
function successfullValidation(userid) {
  $('#loginModal').modal('hide');
  // sessionStorage.setItem('userid', JSON.stringify(userid));
  document.cookie = 'userid=' + userid;
  togleLoginText(true);
}
function togleLoginText(state) {
  if (state) {
    $('.fa-user-text').text('logout');
  } else {
    $('.fa-user-text').text('login');
  }
}
function logout() {
  $('#myModallogout').modal('show');
}
$('.book-tic-lnk').on('click', function (e) {
  if (document.cookie.length > 7) {
    window.location.href = 'bookPage.html';
  } else {
    $('.login-div').trigger('click');
  }
});

if (document.cookie.length > 7) {
  togleLoginText(true);
}
let div_str = '';
let inhtml = '';
function showBlur(card) {
  //create review box
  // console.log($(card));
  var imgSrc = $(card).find('img').attr('src');
  var mv_name = $(card).find('h1').text();
  var dics = $(card).find('p').text();
  var book_id = $(card).find('a').attr('id');
  //get reviws for this movie id from db
  $.ajax({
    url: 'php_getreview.php',
    type: 'POST',
    data: {
      id: book_id,
    },
    success: function (response) {
      if (response.length > 10) {
        let value_ary = response.split('|');
        div_str = '';
        inhtml = '';
        value_ary.pop();
        value_ary.forEach(function (element) {
          element = element.split('-');
          div_str += `<div class="single-cell">
            <div class="round-usr-img-div">
              <img
                src="images/round-user.jpg"
                class="round-usr"
                alt="usr-img"
                width="40px"
              />
              <p class="cell-heading">${element[1]} ${element[2]}
              </p>
            </div>
            <p class="cell-review">${element[3]}
            </p>
          </div>
              `;
          console.log(div_str);
        });
      } else {
        console.log('Invalid resoponse', response);
      }
    },
    error: function (error) {
      console.error('Error:', error);
    },
  });
  setTimeout(function () {
    console.log('Delayed message after 2000 milliseconds');
    inhtml = '';
    inhtml = `
        <div class="card review-card">
        <img class="review-img" src="${imgSrc}" alt="movie-imgd" />
        <div class="card-body review-card-body">
          <h1 class="card-title review-card-title">${mv_name}</h1>
          <p class="card-text review-card-text">
            ${dics}.
          </p>
          <a onclick="gotobookpage()" class="book-tic-lnk review-card-btn" id="${book_id}">Book Ticket</a>
        </div>
        
        <div class="scrool">
          ${div_str}
          <div class="single-cell">
            <div class="round-usr-img-div">
              <img
                src="images/round-user.jpg"
                class="round-usr"
                alt="usr-img"
                width="40px"
              />
              <p class="cell-heading">Tanjiro Kamado</p>
            </div>
            <p class="cell-review">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Blanditiis accusamus
            </p>
          </div>

        </div>

        <div class="review-footer">
          <i class="fa-solid fa-plus review-icon"></i>
          
        </div>
      </div>
  `;
    $('.blur-box').html(inhtml);
    $('.blur-box').fadeIn(150);
    $('.blur-box').css('display', 'flex');
    $('.review-card-btn').on('click', function (e) {
      if (document.cookie.length > 7) {
        clicked(e);
        window.location.href = 'bookPage.html';
      } else {
        $('.login-div').trigger('click');
      }
    });
    $('.review-icon').on('click', reviewModel);
    $('#addbtn').on('click', addreview);
  }, 40);

  x = 1;
  div_str = '';
}
function gotobookpage() {}
function addreview(e) {
  e.preventDefault();
  let text = $('#reviewarea').val();
  let cus_id = document.cookie;
  cus_id = cus_id.split('=')[1];
  let movie_id = $('.review-card-btn').attr('id');
  if (text != '' && /^[a-zA-Z\s]*$/.test(text)) {
    //add review to db

    $.ajax({
      url: 'php_addreview.php',
      type: 'POST',
      data: {
        review: text,
        id: cus_id,
        movie_id: movie_id,
      },
      success: function (response) {
        if (response) {
          $(function () {
            $(document).ready(function () {
              $('.x-btn').click();
            });
          });
        } else {
          console.log('Invalid resoponse', response);
        }
      },
      error: function (error) {
        console.error('Error:', error);
      },
    });
  } else {
    alert('Only letters allowed!');
  }
}
