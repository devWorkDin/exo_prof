
$(document).ready((e)=>{
    e.preventDefault;
    let header = $("header h1")
    let title_text = $("title")
    let title_event = $("section h2")
   title_text.text("Event Jquery")
  header.hide()
  $("body").css({'cursor':'pointer'})

   title_event.on("click",()=>{
    header.slideToggle()
   })
})