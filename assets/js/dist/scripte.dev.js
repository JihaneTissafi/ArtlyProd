"use strict";

$(document).ready(function () {
  $('.parent').click(function () {
    //parent class selector
    $(this).find('.submenu').toggle('visible'); //toggles visibility on .submenu class

    var angleRight = $(this).children().find('a').find('.fa-angle-right'); //find elements with angle-right class

    var angleDown = $(this).children().find('a').find('.fa-angle-down'); //find elements with angle-down class

    if (angleRight.hasClass('fa-angle-right')) {
      //if element has angle-right class changes its class to angle-down (icon toggle)
      angleRight.toggleClass('fa-angle-right fa-angle-down');
      $(this).find('.menu-item').css('border-color', '#ed3e95');
    } else {
      //otherwise it changes to angle-right
      angleDown.toggleClass('fa-angle-down fa-angle-right');
      $(this).find('.menu-item').css('border-color', '#F7F7F7');
    }
  });
  $('.main-menu').mouseleave(function () {
    $(this).children().find('a').find('.fa-angle-down').toggleClass('fa-angle-down fa-angle-right');
    $(this).find('.menu-item').css('border-color', '#F7F7F7');
    $(this).find('.submenu:visible').toggle('visible');
  });
});