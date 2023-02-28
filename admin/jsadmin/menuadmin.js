function loadMenuAdmin(){
    var main = '<nav class="nav nav-dark ">'+
    '<div> '+
        '<a href="index.html" class="nav_logo"> '+
            '<i class="bx bx-layer nav_logo-icon"></i> <span class="nav_logo-name">Dashbroad</span> '+
        '</a>'+
        '<div class="nav_list"> '+
            '<a href="index.html" class="nav_link"> '+
                '<i class="fa fa-home"></i> <span class="nav_name">Home</span> '+
            '</a> '+
            '<a href="user.html" class="nav_link"> '+
                '<i class="bx bx-user nav_icon"></i> <span class="nav_name">User</span> '+
            '</a> '+
            '<a href="course.html" class="nav_link"> '+
                '<i class="fas fa-tshirt"></i> <span class="nav_name">Course</span> '+
            '</a> '+
            '<a href="blogadmin.html" class="nav_link"> '+
                '<i class="bx bx-bar-chart-alt-2 nav_icon"></i> <span class="nav_name">Blog</span> '+
            '</a> '+
            '<a href="major.html" class="nav_link"> '+
                '<i class="fa fa-shopping-cart"></i> <span class="nav_name">Major</span> '+
            '</a> '+
        '</div>'+
    '</div> '+
    '<a href="#" class="nav_link"> '+
        '<i class="bx bx-log-out nav_icon"></i> <span class="nav_name">SignOut</span> '+
    '</a>'+
'</nav>'

document.getElementById("nav-bar").innerHTML = main;
document.getElementById("img-login").src = '../image/icon-avatar.png'
}










document.addEventListener("DOMContentLoaded", function(event) {
   
    const showNavbar = (toggleId, navId, bodyId, headerId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId),
    bodypd = document.getElementById(bodyId),
    headerpd = document.getElementById(headerId)
    nav.classList.toggle('show')
    // change icon
    toggle.classList.toggle('bx-x')
    // add padding to body
    bodypd.classList.toggle('body-pd')
    // add padding to header
    headerpd.classList.toggle('body-pd')
    // Validate that all variables exist
    if(toggle && nav && bodypd && headerpd){
    toggle.addEventListener('click', ()=>{
        // show navbar
        nav.classList.toggle('show')
        // change icon
        toggle.classList.toggle('bx-x')
        // add padding to body
        bodypd.classList.toggle('body-pd')
        // add padding to header
        headerpd.classList.toggle('body-pd')
    })
    }
    }
    
    showNavbar('header-toggle','nav-bar','body-pd','header')
    
    /*===== LINK ACTIVE =====*/
    const linkColor = document.querySelectorAll('.nav_link')
    
    function colorLink(){
    if(linkColor){
    linkColor.forEach(l=> l.classList.remove('active'))
    this.classList.add('active')
    }
    }
    linkColor.forEach(l=> l.addEventListener('click', colorLink))
    
     // Your code to run since DOM is loaded and ready
     
    });

