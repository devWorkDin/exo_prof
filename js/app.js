/*document.addEventListener("DOMContentLoaded",()=>{

})*/

$(document).ready((e)=>{
console.log(200)
let title = "hello"
let version = 3.6
/*let el = document.querySelector("title")*/
let content = "Jqueryest une bibliothèque JavaScript libre et multiplateforme créée pour faciliter l'écriture de scripts côté client dans le code HTML des pages web. La première version est lancée en par John Resig.Wikipedia (FR)"

let el = $('title,h1')
let main_title = $('h1')
let main = $('main')
console.log(el.text())
main_title.text(el.text())
console.log(title)
main_title.append(" ",version)
main_title.prepend(" ",version)
console.log(main.children())
main.children().children().next().eq(0).css({'color':'#333','font-style':'italic'}).text(content)

//main.append('<a href="#">Info</a>').children("a").css({'color':'rgb(200,0,0)'})

main.append('<a href="#">Info</a>').children("a").addClass("warning").html("Wikipedia")

$("main a").attr({
    'href':'https://www.cleancss.com/javascript-minify','target':'blank','title':'wikipedia'

})
/*
$("main figure").append("img")*/
$("<img>").prependTo('main figure')
$("img").attr({
    'src':'./assets/jquery_original_wordmark_logo_icon_146447.png',
    'alt':'Jquery Logo'
})
$("figure figcaption h2").wrapInner("<em></em>")

/*choisir l'element par index*/
$("section p").eq(1).css({'color':'red'})
// add element on block
$("<footer><p>").insertAfter("main").html("&copy - DWD - 2021").css({'text-align':'center'});
//gestionnaire d'évenement
$("figcaption p").append('<a href="#">')
$("figcaption p a").text("Cdn Jquery")
$("figcaption p a").attr({
    'href':'https://www.cleancss.com/javascript-minify',
    'target':'blank',
    'title':'wikipedia'
})
/*Rajouter unn bouton */
$("section ").append('<a href="#">').children("a").addClass("warning").text("More")
$("section a").attr({


})

$("section p").eq(1).hide()

$("section a").on("click",(e)=>{
    e.stopPropagation()
    $("section p").eq(1).toggle(400);

})
$(document).on('click',()=>{
    $("section p").eq(1).slideUp(400);

})
$("section p,header").on('click',(e)=>{
    e.stopPropagation()

})
})