async function loadMenu(){
    var menu = '<div class="menu_area">'+
                '<nav class="navbar navbar-default navbar-fixed-top" role="navigation">  <div class="container">'+
                    '<div class="navbar-header">'+
                    '<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">'+
                        '<span class="sr-only">Toggle navigation</span>'+
                        '<span class="icon-bar"></span>'+
                        '<span class="icon-bar"></span>'+
                        '<span class="icon-bar"></span>'+
                   ' </button>'+
                    '<a class="navbar-brand" href="index.html">HI <span>Tech</span></a>'+              
                    '</div>'+
                    '<div id="navbar" class="navbar-collapse collapse">'+
                    '<ul id="top-menu" class="nav navbar-nav navbar-right main-nav">'+
                        '<li class="active"><a href="index.html">Home</a></li>'+
                        '<li><a href="course-archive.html">Course</a></li>'+
                        '<li><a href="blog-archive.html">Blog</a></li>'+
                        '<li><a href="chat.html">Chat</a></li>'+
                        '<li class="dropdown">'+
                        '<a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">Account<span class="caret"></span></a>'+
                        '<ul class="dropdown-menu" role="menu">'+
                            '<li><a href="mycourse.html">My Course</a></li>'+
                            '<li><a href="updateinfo.html">Update Information</a></li>'+               
                            '<li><a href="login.html">Logout</a></li>'+               
                        '</ul>'+
                        '</li>'+
                        '<li class="dropdown">'+
                        '<a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">Course Manager<span class="caret"></span></a>'+
                        '<ul class="dropdown-menu" role="menu">'+
                            '<li><a style="color:#fff" href="coursemanager.html">Course manager</a></li>'+
                            '<li><a href="uploadcourse.html">upload course</a></li>'+
                        '</ul>'+
                        '</li>'+
                        '<li><a href="contact.html">Contact</a></li>'+
                        '<li><a class="search_menu" data-toggle="modal" data-target=".bd-search"><i class="fa fa-search"></i></a></li>'+
                    '</ul>'+
                '</div>'+     
                '</nav>'+  
            '</div>'+
            '<div class="modal fade bd-search" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">'+
                '<div class="modal-dialog modal-lg">'+
                '<div class="modal-content">'+
                    '<div class="modal-header"><h5 class="modal-title" id="exampleModalLabel">Search course</h5></div>'+
                    '<div class="modal-body">'+
                        '<form method="GET" action="">'+
                            '<input name="search" type="text" placeholder="search course" class="form-control"><br>'+
                            '<button class="btn btn-primary form-control">Search</button>'+
                        '</form>'+
                    '</div>'+
                '</div>'+
                '</div>'+
            '</div>'

            
    document.getElementById("header").innerHTML = menu









    var footer = '<div class="footer_top">'+
                    '<div class="container">'+
                    '<div class="row">'+
                        '<div class="col-ld-3  col-md-3 col-sm-3">'+
                        '<div class="single_footer_widget">'+
                            '<h3>About Us</h3>'+
                            '<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>'+
                        '</div>'+
                        '</div>'+
                        '<div class="col-ld-3  col-md-3 col-sm-3">'+
                        '<div class="single_footer_widget">'+
                            '<h3>Community</h3>'+
                            '<ul class="footer_widget_nav">'+
                            '<li><a href="#">Our Tutors</a></li>'+
                            '<li><a href="#">Our Students</a></li>'+
                            '<li><a href="#">Our Team</a></li>'+
                            '<li><a href="#">Forum</a></li>'+
                            '<li><a href="#">News &amp; Media</a></li>'+
                            '</ul>'+
                        '</div>'+
                        '</div>'+
                        '<div class="col-ld-3  col-md-3 col-sm-3">'+
                        '<div class="single_footer_widget">'+
                            '<h3>Others</h3>'+
                            '<ul class="footer_widget_nav">'+
                            '<li><a href="#">rules</a></li>'+
                            '<li><a href="#">policy</a></li>'+
                            '<li><a href="#">help and support</a></li>'+
                            '<li><a href="#">introduce</a></li>'+
                            '</ul>'+
                        '</div>'+
                        '</div>'+
                       ' <div class="col-ld-3  col-md-3 col-sm-3">'+
                        '<div class="single_footer_widget">'+
                            '<h3>Social Links</h3>'+
                            '<ul class="footer_social">'+
                            '<li><a data-toggle="tooltip" data-placement="top" title="Facebook" class="soc_tooltip" href="#"><i class="fa fa-facebook"></i></a></li>'+
                            '<li><a data-toggle="tooltip" data-placement="top" title="Twitter" class="soc_tooltip"  href="#"><i class="fa fa-twitter"></i></a></li>'+
                            '<li><a data-toggle="tooltip" data-placement="top" title="Google+" class="soc_tooltip"  href="#"><i class="fa fa-google-plus"></i></a></li>'+
                            '<li><a data-toggle="tooltip" data-placement="top" title="Linkedin" class="soc_tooltip"  href="#"><i class="fa fa-linkedin"></i></a></li>'+
                            '<li><a data-toggle="tooltip" data-placement="top" title="Youtube" class="soc_tooltip"  href="#"><i class="fa fa-youtube"></i></a></li>'+
                            '</ul>'+
                        '</div>'+
                        '</div>'+
                    '</div>'+
                    '</div>'+
                '</div>'

    document.getElementById("footer").innerHTML = footer
}