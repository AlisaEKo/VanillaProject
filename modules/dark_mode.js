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
  // $('div').addClass('dark');
  // hide the 'dark' button
  $('.dark_button').hide();
  // show the 'light' button
  $('.light_button').show();
}

$('.dark_button').on('click', function() {  
    $('.dark_button').hide();
    $('.light_button').show();
    $('body').addClass('dark');  
    // $('div').addClass('dark');
    // set stored value to 'dark'
    localStorage.setItem('dark_mode', 'dark');
  });
  
  $('.light_button').on('click', function() {  
    $('.light_button').hide();
    $('.dark_button').show();
    $('body').removeClass('dark');
    // $('div').removeClass('dark');
    // set stored value to 'light'
    localStorage.setItem('dark_mode', 'light');   
  });


// queryselector.classList.append