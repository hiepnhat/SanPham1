jQuery(document).ready(function($) {
    $('body').on('click', '.clickpopup', function() {
        if ($(this).data('target') == undefined) {
            var target = $(this).find('a').attr('href');
        } else {
            var target = $(this).data('target');
        }
        $(target).fadeIn();
        $(target).addClass('show');
        $('body').append('<div class="modal-backdrop show"></div>');
    })
    $('body').on('click', '.close,.cancel,.modal-backdrop', function() {
        $('.modal').fadeOut();
        $('.modal').removeClass('show');
        $('.modal-backdrop').remove();
    })
    $('body').on('click', '.modal', function(event) {
        //if you click on anything except the modal itself or the "open modal" link, close the modal
        console.log($(event.target).closest(".modal-dialog").length);
        if ($(event.target).closest(".modal-dialog").length < 1) {
            $('.modal').fadeOut();
            $('.modal').removeClass('show');
            $('.modal-backdrop').remove();
        }
    });
    $('.collapsemenu').click(function(e) {
        e.preventDefault();
        $(this).parent().toggleClass('active')
        $('body').toggleClass('mini-menu');
    })
    $('.clicktoggle a').click(function(e) {
        e.preventDefault();
        $(this).toggleClass('active');
        $(this).next().slideToggle();
    })
    var count = 0;
    $('.addmore').click(function(e) {
        e.preventDefault();
        count += 1;
        var content = $(this).next().html();
        $('.addnew-checklist').append('<li><input type="checkbox" name="checklist[]" id="checkbox_item' + count + '"><label for="checkbox_item' + count + '"><input type="text" placeholder="Add more" name="checklist_val[]"></label></li>');
        // $(this).toggleClass('active');
        // $(this).next().slideToggle();
    })
    $(document).on('click', '.btn-del', function() {
        $('.modal-del').show();
    });
    $(document).on('click', 'button.close, .backgr-color', function() {
        $('.modal-del').hide();
    });
    if ($(".js-range-slider").length > 0) {
        $(".js-range-slider").ionRangeSlider();
    }
    $('.opendetail').click(function(e) {
        e.preventDefault();
        var target = $(this).data('target');
        $('.' + target).toggleClass('show');
        $('body').toggleClass('body_' + target);
    })
    $("#typechat").keyup(function() {
        var val = $(this).val();
        var dropdown = $(this).closest('.box-type-text').find('.dropdown');
        if (val == '@') {
            dropdown.show();
            dropdown.addClass('mention');
        } else {
            dropdown.hide();
            dropdown.removeClass('mention');
        }
    });
    $(".dropdown input").keyup(function() {
        var val = $(this).val();
        // console.log(val);
        $('.dropdown .list-member .name').each(function() {
            var text = $(this).text();
            var result = text.match(val);
            if (result == null || val == '') {
                $(this).closest('li').removeClass('hightlight');
            } else {
                $(this).closest('li').addClass('hightlight');
            }
        })
    });

    function mini_menu() {
        if ($(window).width() < 768) {
            $('body').addClass('mini-menu');
        } else {
            $('body').removeClass('mini-menu');
        }
    }
    mini_menu();
    $(window).resize(function() {
        mini_menu();
    });
    $('.assigned-duedate .list-member li').click(function(e) {
        var assign = $(this).find('.avatar')[0].outerHTML;
        $(this).closest('.dropdown').parent().before(assign);
        $(this).remove();
    })
    console.log(window.location.hash);
    if (window.location.hash == '#logtime') {
        $('.clickpopup.logtime').trigger('click');
    }
})
$(function() {
    if ($('.datepicker').length > 0) {
        $('.datepicker').datepick({
            commandsAsDateFormat: true,
            prevText: '&#10140;',
            todayText: 'MM, yyyy',
            nextText: '&#10140;'
        });
    }
    if ($('.timepicker').length > 0) {
        $('.timepicker').timepicker({ 'timeFormat': 'g:i a' });
    }
});