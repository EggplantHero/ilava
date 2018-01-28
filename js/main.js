$(document).ready( function (){
  //closes navbar on click
  $(document).on('click','.navbar-collapse.in',function(e) {
     if( $(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle' ) {
         $(this).collapse('hide');
     }
  });

  // scrolls the page to corresponding section when clicking navbar
  $("#home-btn").click(function(){
    $.scrollTo( $("body"), 600);
  })

  $("#menu-btn").click(function(){
    $.scrollTo( $("#menu"), 600);
  })

  $("#order-btn").click(function(){
    $.scrollTo( $("#order"), 600);
  })

  $("#catering-btn").click(function(){
    $.scrollTo( $("#catering"), 600);
  })

  $("#contact-btn").click(function(){
    $.scrollTo( $("#contact"), 600);
  })


  //expand all button
  $('.SeeMore2').click(function(){
      var $this = $(this);
      $this.toggleClass('SeeMore2');
      if($this.hasClass('SeeMore2')){
          $this.text('Expand All');
      } else {
          $this.text('Collapse');
      }
  });
})


//MAPS API
function initMap() {
        var ilava = {lat: 37.772608, lng: -122.213866};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 15,
          center: ilava
        });
        var marker = new google.maps.Marker({
          position: ilava,
          map: map
        });
        var infowindow = new google.maps.InfoWindow({
          content: "iLava Hawaiian Barbecue" + "<br>" + "1446 High Street"
        });
        marker.addListener('click', function() {
          infowindow.open(map, marker);
        });
}
