var today = new Date();
var hourNow = today.getHours();
var greeting;

if
    (hourNow > 18){
        greeting = 'Good evening, Class!';
    }  elseif(hourNow > 12) 
    {
        greeting = 'Good afternoon, Class!';
    }  elseif(hourNow >= 0) 
    {
        greeting = 'Good morning!';
    }  else
        {greeting ='Something went wrong!';
    }
    document.write('<h3>'+greeting+'</h3>');