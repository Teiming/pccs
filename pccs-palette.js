

function open_popup(h,s) {
  share_fill(h,s);
  var get_popup = document.getElementById('full_h'+h+'_s'+s);
  get_popup.style.display = "flex";
  if (!isNaN(get_popup.innerText)) {
    get_popup.style.fontSize = "1rem";
    get_popup.innerText = "hsl("+h*15+", "+s*6.25+"%, "+get_l+"%)";
  }
}
