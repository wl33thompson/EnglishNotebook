
$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip(); 
});

(function(){
    var tnb = {};
    tnb.SIGN_UP = 'Sign Up';
    tnb.SIGN_IN = 'Sign In';
    
    tnb.redirect = function(button){
        switch($(button).text()){
            case tnb.SIGN_IN : 
                window.location.href='login.html';
                break;
            case tnb.SIGN_UP :                 
                window.location.href='signup.html';    
                break;
            default: break;
        }
    }
    
    window.tnb = tnb;
})();