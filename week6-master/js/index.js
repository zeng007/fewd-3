let cityNames = ["NYC", "SF", "LA", "ATX", "SYD"];

cityNames.forEach(function(cities, index){
  let html = `
    <div>
    <option>${cityNames}</option>
    </div>
  `;
 // $( '.option' ).append( $( cities ) );
$('.select').append(html);

})
