"use strict";

$(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 0 && $(this).scrollTop() < 240) {
      $(".ColorPage").addClass("colorChange1");
      $(".ColorPage").removeClass("colorChange2");
      $(".ColorPage").removeClass("colorChange3");

      $("header").addClass("header1");
      $("header").removeClass("header2");
      $("header").removeClass("header3");
      console.log($(this).scrollTop());
    }
    // ------------------------------------------------------------------------
    else if ($(this).scrollTop() > 240 && $(this).scrollTop() < 715) {
      $(".ColorPage").removeClass("colorChange1");
      $(".ColorPage").addClass("colorChange2");
      $(".ColorPage").removeClass("colorChange3");

      $(".navigation-element").addClass("color-pink");
      $(".navigation-element").removeClass("color-white");
      // --
      $(".contact-btn").addClass("color-blue");
      $(".contact-btn").removeClass("border-white");
      //--
      $(".MN").addClass("web-NameBLACK");
      $(".MN").removeClass("web-NameWHITE");

      //--
      $("header").addClass("header1");
      $("header").removeClass("header2");
      $("header").removeClass("header3");
      $("header").removeClass("header4");

      console.log($(this).scrollTop());
    }
    // ------------------------------------------------------------------------
    else if ($(this).scrollTop() > 715 && $(this).scrollTop() < 1100) {
      $(".ColorPage").removeClass("colorChange1");
      $(".ColorPage").addClass("colorChange2");
      $(".ColorPage").removeClass("colorChange3");
      //--
      $(".navigation-element").removeClass("color-pink");
      $(".navigation-element").addClass("color-white");
      // --
      $(".MN").removeClass("web-NameBLACK");
      $(".MN").addClass("web-NameWHITE");

      //--
      $(".contact-btn").removeClass("color-blue");
      $(".contact-btn").addClass("border-white");
      //--
      $("header").removeClass("header1");
      $("header").addClass("header2");
      $("header").removeClass("header3");
      $("header").removeClass("header4");

      console.log($(this).scrollTop());
    }
    // ------------------------------------------------------------------------
    else if ($(this).scrollTop() > 1100 && $(this).scrollTop() < 2328) {
      $(".ColorPage").removeClass("colorChange1");
      $(".ColorPage").removeClass("colorChange2");
      $(".ColorPage").addClass("colorChange3");
      //--
      $(".navigation-element").removeClass("color-pink");
      $(".navigation-element").addClass("color-white");

      // --
      $(".MN").removeClass("web-NameBLACK");
      $(".MN").addClass("web-NameWHITE");

      //--
      $(".contact-btn").removeClass("color-blue");
      $(".contact-btn").addClass("border-white");
      //--

      $("header").removeClass("header1");
      $("header").removeClass("header2");
      $("header").addClass("header3");
      $("header").removeClass("header4");

      console.log($(this).scrollTop());
    }
    // ------------------------------------------------------------------------
    else if ($(this).scrollTop() > 2328) {
      $(".ColorPage").addClass("colorChange1");
      $(".ColorPage").removeClass("colorChange2");
      $(".ColorPage").removeClass("colorChange3");
      //--
      $(".MN").addClass("web-NameBLACK");
      $(".MN").removeClass("web-NameWHITE");
      //--
      $(".navigation-element").addClass("color-pink");
      $(".navigation-element").removeClass("color-white");

      //--
      $(".contact-btn").addClass("color-blue");
      $(".contact-btn").removeClass("border-white");
      //--

      $("header").removeClass("header1");
      $("header").removeClass("header2");
      $("header").removeClass("header3");
      $("header").addClass("header4");
      console.log($(this).scrollTop());
    }
  });
});

var i = 1;
function changingCommentPlus() {
  i++;
  if (i > 4) {
    document.querySelector(".A4").style.display = "none";
    i = 1;
    document.querySelector(".A" + i).style.display = "block";
  } else {
    document.querySelector(".A" + (i - 1)).style.display = "none";
    document.querySelector(".A" + i).style.display = "block";
    console.log(i);
  }
  // return i;
}
function changingCommentMines() {
  i--;
  if (i < 1) {
    document.querySelector(".A1").style.display = "none";
    i = 4;
    document.querySelector(".A" + i).style.display = "block";
  } else {
    document.querySelector(".A" + (i + 1)).style.display = "none";
    document.querySelector(".A" + i).style.display = "block";
    console.log(i);
  }
}

document.querySelector(".right").addEventListener("click", changingCommentPlus);

document.querySelector(".left").addEventListener("click", changingCommentMines);

AOS.init();

setInterval(changingCommentPlus, 5000);
console.log(document.querySelector("nav").getAttribute("class"));
