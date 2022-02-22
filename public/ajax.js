import $ from "jquery";

var data = {
    resource_id: '2264a6ed-51f5-45d6-accb-1a980e32e632', // the resource id
    limit: 5, // get 5 results
    q: 'jones' // query for 'jones'
};
$.ajax({
    url: 'https://data.gov.sg/api/action/datastore_search',
    data: data,
    dataType: 'jsonp',
    success: function(data) {
      alert('Total results found: ' + data.result.total)
    }
});
