$(document).ready(function () {

  $('#brif-form').validate({
    errorClass: "invalid",
    rules: {
      phone: "required",
      username: {
        required: true,
        minlength: 2,
        maxlength: 15
      },
      email: {
        required: true,
        email: true
      }
    },
    messages: {
      email: {
        email: "Введите корректный email",
        required: "Заполните поле"
      },
      username: {
        minlength: jQuery.validator.format("Минимальное количество символов: 2"),
        required: "Заполните поле"
      },
      phone: {
        required: "Заполните поле"
      }
    }
  })

  $('#offer-form').validate({
    errorClass: "invalid",
    errorElement: "div",
    rules: {
      phone: "required",
      username: {
        required: true,
        minlength: 2,
        maxlength: 15
      }
    },
    messages: {
      username: {
        minlength: jQuery.validator.format("Минимальное количество символов: 2"),
        required: "Заполните поле"
      },
      phone: {
        required: "Заполните поле"
      }
    }
  });

  $(".phone").mask("8 (999) 999-9999");

  $('.slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: $('.arrows__left'),
    nextArrow: $('.arrows__right'),
    responsive: [{
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 910,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
});