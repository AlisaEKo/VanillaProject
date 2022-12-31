$(document).ready(function() {
    $(".darkMode").click(function() {
        $(".dark_mode").css({"color": "white"});
        $("body").css({"background-color": "black"});
        // $("h1").toggle(1000, function(){
        // });
    });
});

// function myFunction() {
//     let element = document.main;
//     element.classList.toggle("dark_mode");
//  }

let darkMode;

if (localStorage.getItem('dark_mode')) {  
  // if dark mode is in storage, set variable with that value
  darkMode = localStorage.getItem('dark_mode');  
} else {  
  // if dark mode is not in storage, set variable to 'light'
  darkMode = 'light';  
}

// set new localStorage value
localStorage.setItem('dark_mode', darkMode);


if (localStorage.getItem('dark_mode') == 'dark') {
  // if the above is 'dark' then apply .dark to the body
  $('body').addClass('dark');  
  // hide the 'dark' button
  $('.dark-button').hide();
  // show the 'light' button
  $('.light-button').show();
}

$('.dark-button').on('click', function() {  
    $('.dark-button').hide();
    $('.light-button').show();
    $('body').addClass('dark');  
    // set stored value to 'dark'
    localStorage.setItem('dark_mode', 'dark');
  });
  
  $('.light-button').on('click', function() {  
    $('.light-button').hide();
    $('.dark-button').show();
    $('body').removeClass('dark');
    // set stored value to 'light'
    localStorage.setItem('dark_mode', 'light');   
  });