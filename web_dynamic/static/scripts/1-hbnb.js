const $ = window.$;
const amenityArr = [];

$(Document).ready(() => {
  $('input').change(() => {
    const amenId = $(this).attr('data-id');
    if (this.checked) {
      if (!(amenityArr.includes(amenId))) {
        amenityArr.push(amenId);
      }
    } else {
      amenityArr.splice(amenityArr.indexOf(amenId), 1);
    }
  });
});
