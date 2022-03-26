function hideStuff(){
  var el = document.querySelector('div.BroadcastVideoPanel');
  var fl = document.querySelector('div#ChatTabContainer');
  
  var root = document.querySelector('div.chat_broadcast');
  var gl = document.querySelector('div.BroadcasterPanel');
  var ol = document.querySelector('div.BroadcastRoot');
  
  root.insertBefore(gl,ol);
  gl.style.display = 'sticky';
  el.style.width = '1px';
  fl.style.margin = '0px 0px 0px 10px';
}
hideStuff();
