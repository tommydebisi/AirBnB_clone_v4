const $ = window.$;

$(Document).ready(() => {
  const amenityArr = [];
  $('input').change(() => {
    const amenId = $(this).attr('data-id');
    if (this.checked) {
      if (!(amenityArr.includes(amenId))) {
        amenityArr.push(amenId);
      }
    } else {
      amenityArr.splice(amenityArr.indexOf(amenId), 1);
    }

    const request = require('request');
    request.get('http://0.0.0.0:5001/api/v1/status/', function (err, res, body) {
      if (err) {
        console.log(err);
      }
      if (res.statusCode === 200) {
        $('div#api_status').addClass('available');
      } else {
        $('div#api_status').removeClass('available');
      }
    });
  });
});
