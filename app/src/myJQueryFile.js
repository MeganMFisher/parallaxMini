import React from 'react';
import $ from 'jquery';

export function load() {
    // jQuery here...
    $(document).ready(function() {
  $(window).on('scroll', function() {
    var scrollPosition = $(this).scrollTop();
    console.log('scrollPosition', scrollPosition);
    $('.wrapper').css({
      'background-size': (150 + ($(this).scrollTop() / 20)) + '%'
    })
    $('.bunny').css({
      'transform': 'translate(' + (scrollPosition / 20) + '%, ' + (scrollPosition / 8) + '%)'
    })
    $('.branch4').css({
      'transform': 'translate(' + (scrollPosition / 8) + '%, -' + (scrollPosition / 4) + '%)'
    })
    $('.branch3').css({
      'transform': 'rotate(180deg) translate(' + (scrollPosition / 5) + '%, ' + (scrollPosition / 3) + '%)'
    })
    $('.branch2').css({
      'transform': 'rotate(180deg) translate(' + (scrollPosition / 5) + '%, -' + (scrollPosition / 3) + '%)'
    })
    $('.rose1').css({
      'transform': 'translate(' + (scrollPosition / 5) + '%, ' + (scrollPosition / 2) + '%)'
    })
  })
})
}