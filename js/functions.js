function smoothScroll(o){$('a[href^="#"]').on("click",function(n){var l=$($(this).attr("href"));l.length&&(n.preventDefault(),$("html, body").animate({scrollTop:l.offset().top-100},o))})}$(function(){smoothScroll(500)}),$(document).scroll(function(){$(this).scrollTop()>1e3?$(".header__nav").css({background:"#fff"}):$(".header__nav").css({background:"rgba(128, 128, 128, 0.1)"})}),jQuery(function(o){o(".js-nav-toggle").click(function(){o(".nav-collapse").toggleClass("is-opened")}),o(".link").click(function(){o(".nav-collapse").toggleClass("is-opened")})});