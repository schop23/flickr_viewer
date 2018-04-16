jQuery(document).ready(function ($) {
  var searchTag
  $('#searchButton').click(function (evt) {
    evt.preventDefault()
    searchTag = ' '
    if ($('#searchBox').val() === ' ') {
      alert('Please enter one or more tags to proceed.')
    } else {
      searchTag = $('searchBox').val()

      var url =
        'https://api.flickr.com/services/feeds/photos_public.gne?' + 'format=json&jsoncallback=?&tags=' + searchTag + '&tagmode=all'

      $.getJSON(url, function (data) {
        var html = ' '
        $.each(data.items, function (i, item) {
          html += '<h3>' + item.title + '<h3>'
          html += '<a href=' + item.media.m + '>' + item.media.m + '</a>'
          html += '<p>Date Taken: ' + item.date_taken + '</p>'
          html += '<br></br>'
        })
        $('#photoInfo').html(html)
      })
    }
  })
})
