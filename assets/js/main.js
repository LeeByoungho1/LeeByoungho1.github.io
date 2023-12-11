var currentIndex = 0;
setInterval(function () {
  if (currentIndex < 3) {
    currentIndex++;
  } else {
    currentIndex = 0;
  }
  var slidePosition = currentIndex * $(".slidetext").height() + "px";

  $(".text_slide").animate({ bottom: slidePosition }, 400);
}, 3000);

$(function () {
  $(window).scroll(function () {
    if ($(window).scrollTop() >= 18000) {
      $(".text_1").addClass("text_active");
      $(".text_2").addClass("text_active");
      $(".text_3").addClass("text_active");
      $(".text_4").addClass("text_active");
    }
    if ($(window).scrollTop() >= 21500) {
      $(".text_5").addClass("text_active");
      $(".text_6").addClass("text_active");
      $(".text_7").addClass("text_active");
      $(".text_8").addClass("text_active");
    }
    if ($(window).scrollTop() >= 25200) {
      $(".text_9").addClass("text_active");
      $(".text_10").addClass("text_active");
      $(".text_11").addClass("text_active");
      $(".text_12").addClass("text_active");
    }
    if ($(window).scrollTop() >= 20100) {
      $(".text_16").addClass("text_active");
      $(".text_17").addClass("text_active");
      $(".text_18").addClass("text_active");
      $(".text_19").addClass("text_active");
      $(".text_20").addClass("text_active");
    }
    if ($(window).scrollTop() >= 30000) {
      $(".number_animation1").addClass("number_active");
    }
    if ($(window).scrollTop() >= 32500) {
      $(".number_animation2").addClass("number_active");
    }
    if ($(window).scrollTop() >= 34500) {
      $(".number_animation3").addClass("number_active");
    }
    if ($(window).scrollTop() >= 36500) {
      $(".number_animation4").addClass("number_active");
    }
  });
});

$(".text_20").click(function (e) {
  e.preventDefault();
  $(".license_pop").animate({ opacity: 100 + "%" }, 500).animate({ top: 0 + "%" }, 500);
  $(".license_background").animate({ top: 0 + "%" }, 500).delay(1000).animate({ right: 100 + "%" }, 500);
  $("#contents").animate({ opacity: 0 + "%" }, 500);
});

$(".license_close").click(function (e) {
  e.preventDefault();
  $(".license_pop").animate({ opacity: 0 + "%" }, 500).animate({ top: -100 + "%" }, 500);
  $(".license_background").animate({ right: 0 + "%" }, 500).delay(1000).animate({ top: 100 + "%" }, 500);
  $("#contents").animate({ opacity: 100 + "%" }, 500);
});


$(window).on("scroll", function () {
  var scroll = $(window).scrollTop()
  var typingElement = $(".focustxt span").eq(0);
  var txt = "About"
  typingElement.text("");
  if (scroll < 4200) {
    typingElement.text("A");
  } else if (scroll < 4400) {
    typingElement.text("Ab");
  } else if (scroll < 4600) {
    typingElement.text("Abo");
  } else if (scroll < 4800) {
    typingElement.text("Abou");
  } else if (scroll < 5000) {
    typingElement.text("About");
  } else {
    typingElement.text("About");
  }
})

$(window).on("scroll", function () {
  var scroll = $(window).scrollTop()
  var typingElement = $(".focustxt span").eq(1);
  var txt = "Works"
  typingElement.text("");
  if (scroll < 7200) {
    typingElement.text("W");
  } else if (scroll < 7400) {
    typingElement.text("Wo");
  } else if (scroll < 7600) {
    typingElement.text("Wor");
  } else if (scroll < 7800) {
    typingElement.text("Work");
  } else if (scroll < 8000) {
    typingElement.text("Works");
  } else {
    typingElement.text("Works");
  }
})

$(window).on("scroll", function () {
  var scroll = $(window).scrollTop()
  var typingElement = $(".focustxt span").eq(2);
  var txt = "Skill"
  typingElement.text("");
  if (scroll < 10200) {
    typingElement.text("S");
  } else if (scroll < 10400) {
    typingElement.text("Sk");
  } else if (scroll < 10600) {
    typingElement.text("Ski");
  } else if (scroll < 10800) {
    typingElement.text("Skil");
  } else if (scroll < 11000) {
    typingElement.text("Skill");
  } else {
    typingElement.text("Skill");
  }
})

$(window).on("scroll", function () {
  var scroll = $(window).scrollTop()
  var typingElement = $(".focustxt span").eq(3);
  var txt = "Contact"
  typingElement.text("");
  if (scroll < 13142.8) {
    typingElement.text("C");
  } else if (scroll < 13285.7) {
    typingElement.text("Co");
  } else if (scroll < 13428.5) {
    typingElement.text("Con");
  } else if (scroll < 13571.3) {
    typingElement.text("Cont");
  } else if (scroll < 13714.1) {
    typingElement.text("Conta");
  } else if (scroll < 13856.9) {
    typingElement.text("Contac");
  } else if (scroll < 14000) {
    typingElement.text("Contact");
  } else {
    typingElement.text("Contact");
  }
})

