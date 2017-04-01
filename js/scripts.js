(function($){
  $(function(){
    // Initialize tooltips
    $('[data-toggle="tooltip"]')
    .tooltip();

    // Init Fancybox
    $('a.fancybox')
    .fancybox();

    // Set current year
    var currentDate = new Date();
    $('#credits-year').text( currentDate.getFullYear() );

    // Get package list
    var packageList = $('#package-list');
    $.get('/data/packages.json', function (data){
      for ( var k in data ) {
        packageList
        .append(
          $('<p>')
          .addClass('list-group-item')
          .append(
            $('<label>')
            .text( data[k].name )
          )
          .append(
            $('<span>')
            .addClass('text-muted')
            .text( data[k].description )
          )
          .append(
            $('<span>')
            .addClass('badge')
            .text( data[k].version )
          )
        );
      }
    });
  });
})(jQuery);