(function() {

  // make the socket.io connection
  var socket = window.io ? io('/client') : null;

  var permissionButton = document.querySelector('.PermissionButton');
  permissionButton.addEventListener('click', getPermission);

  var permissionSection = document.querySelector('.permissionSection');

  // grab user, directions, and wrapper elements
  var user = document.querySelector('.User');
  var userScene = document.querySelector('.UsersScene')
  var wrapper = document.querySelector('.Wrapper');
  var directions = document.querySelector('.directions');

  // grab the pieces of the form to get the name
  var form = document.querySelector('.Name');
  var formInput = document.querySelector('.Name-input');
  var formButton = document.querySelector('.Name-button');

  var progressVal = document.querySelector('.progressValue');
  var completeMes = document.querySelector('.completeMessage');

  var heartbeat = setInterval(beat, 30000);
  var counter = 0;

  function getPermission() {
    console.log('asking for permission');
    
    permissionSection.classList.add('hidden');
    if(typeof DeviceMotionEvent.requestPermission === 'function') {
      DeviceMotionEvent.requestPermission()
      .then(permissionState => {
        if(permissionState === 'granted') {
          console.log('permission granted');
          begin();
        }
      })
      .catch(console.error);
      console.log('DeviceMotionEvent is not defined');
      directions.classList.add('hidden');
      wrapper.classList.add('hidden');
    }
    else {
      // alert('permissions not necessary');
      begin();
    }
  }

  function begin() {
    alert('Make sure you have the desktop page open first. Enter the same unique name. Then, move around while holding your mobile device. Continue until you reach green!');
    userScene.classList.remove('hidden');
    wrapper.classList.remove('hidden');

    formInput.focus();
    form.addEventListener('submit', saveInput);
    user.addEventListener('transitionend', initSockets);
  }

  function saveInput(e) {
    e.preventDefault();
    var newName = formInput.value.trim();
    if(newName.length > 0) {
      user.classList.add('hasName');
      formButton.disabled = true;
      formInput.readOnly = true;
      socket.emit('name', newName);
    }
  }

  function initSockets() {
    user.classList.add('hasInited');
  }

  function getColor(value) {
    //value from 0 to 1
    var hue=((1-value)*120).toString(10);
    return ["hsl(",hue,",55%,50%)"].join("");
  }

  var length = 100;
  var counter = 100;
  var percentage = 0;
  var x_pre, y_pre, z_pre = 0;
  var x_post, y_post, z_post = 0;
    
  function changeColor() {
    if((counter <= length) && (counter != 0) && (percentage != 100)) {
      counter--;
      percentage++;
      var value = counter/length;
      var d = document.querySelector('.User');
      var newColor = getColor(value);
      d.style.backgroundColor = newColor;
      // console.log(newColor);
      socket.emit('update', newColor);
      socket.emit('updateVal', percentage);
      progressVal.innerHTML = percentage;
    }
    else {
      console.log("complete! reached: " + percentage);
      completeMes.innerHTML = "COMPLETE";
      socket.emit('complete', percentage);
      alert('Complete! You can go back to your computer :)');
    }
  }

  if(('ondevicemotion' in window) && ('ontouchstart' in window)) {
    window.addEventListener('devicemotion', movementFunction);
  }

  function movementFunction(event) {
    x_pre = event.acceleration.x;
    y_pre = event.acceleration.y;
    z_pre = event.acceleration.z;

    var target = 20; //threshold for movement
    setInterval(function() {
      var diff = Math.abs(x_pre - x_post + y_pre - y_post + z_pre - z_post);
      if(diff > target) {
        changeColor();        
      }
      x_post = x_pre;
      y_post = y_pre;
      z_post = z_pre;
    }, 150);
  }

  function beat() {
    counter++;
    socket.emit('beat', counter);
  }

})();
