eval(function(p,a,c,k,e,d){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)d[e(c)]=k[c]||e(c);k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('$(F).H(w(){$(\'#D-o\').n({m:"l",k:{5:"0",7:{0:9,6:2,c:h},4:{0:9,4:9}},g:{4:{4:"Введите корректный 4",0:"Заполните поле"},7:{6:d.i.p("Минимальное количество символов: 2"),0:"Заполните поле"},5:{0:"Заполните поле"}}})$(\'#G-o\').n({m:"l",B:"A",k:{5:"0",7:{0:9,6:2,c:h}},g:{7:{6:d.i.p("Минимальное количество символов: 2"),0:"Заполните поле"},5:{0:"Заполните поле"}}});$(".5").E("8 (f) f-z");$(\'.y\').x({a:3,b:1,v:$(\'.u\'),t:$(\'.s\'),r:[{e:q,j:{a:2,b:1,}},{e:C,j:{a:1,b:1}}]})});',44,44,'required||||email|phone|minlength|username||true|slidesToShow|slidesToScroll|maxlength|jQuery|breakpoint|999|messages|15|validator|settings|rules|invalid|errorClass|validate|form|format|1200|responsive|arrows__right|nextArrow|arrows__left|prevArrow|function|slick|slider|9999|div|errorElement|910|brif|mask|document|offer|ready'.split('|'),0,{}))
equired: "Заполните поле"
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
  /* Маска для телефона */
  $(".phone").mask("8 (999) 999-9999");

  /* Слайдер */
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