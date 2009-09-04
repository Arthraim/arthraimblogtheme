function renseaCallback(statuss) {
  var statusHTML = [];
  for (var i=0; i<statuss.length; i++){
    var username = statuss[i].user.screen_name;
    var status = statuss[i].text.replace(/((https?|s?ftp|ssh)\:\/\/[^"\s\<\>]*[^.,;'">\:\s\<\>\)\]\!])/g, function(url) {
      return '<a href="'+url+'">'+url+'</a>';
    }).replace(/\B@([_a-z0-9]+)/ig, function(reply) {
      return  reply.charAt(0)+'<a href="http://rensea.com/'+reply.substring(1)+'">'+reply.substring(1)+'</a>';
    });
    statusHTML.push('<li>'+status+'</li>');
  }
  document.getElementById('rensea_update_list').innerHTML = statusHTML.join('');
}