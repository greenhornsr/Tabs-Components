<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/2.1.2/TweenMax.min.js"></script>
var obj = {prop:10};
TweenMax.to(obj, 1, {
  prop:200, 
  //onUpdate fires each time the tween updates; we'll explain callbacks later.
  onUpdate:function() {
    console.log(obj.prop); //logs the value on each update.
  }
});