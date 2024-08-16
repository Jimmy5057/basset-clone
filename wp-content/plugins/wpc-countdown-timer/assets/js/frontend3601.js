'use strict';

(function($) {
  $(document).ready(function() {
    wooct_init();
  });

  // WPC Smart Quick View
  $(document).on('woosq_loaded', function() {
    wooct_init();
  });

  // WPC Smart Notifications
  $(document).on('wpcsn_build_template', function() {
    wooct_init();
  });
})(jQuery);

function wooct_init() {
  jQuery('.wooct-countdown').each(
      function() {
        if (!jQuery(this).hasClass('wooct-ended')) {
          var $this = jQuery(this);
          var timer = $this.attr('data-timer');
          var style = $this.attr('data-style');
          var text_ended = $this.attr('data-ended');
          var timer_format = wooct_vars.timer_format;
          var timer_tz = moment.tz(timer, 'MM/DD/YYYY hh:mm a',
              wooct_vars.timezone);

          if (wooct_vars.hasOwnProperty('timer_format_' + style)) {
            timer_format = wooct_vars['timer_format_' + style];
          }

          $this.find('.wooct-timer').
              countdown(timer_tz.toDate(), function(event) {
                jQuery(this).html(event.strftime(timer_format));
              }).
              on('finish.countdown', function() {
                if (text_ended !== '') {
                  $this.removeClass('wooct-running').
                      addClass('wooct-ended').
                      html(
                          '<div class="wooct-text-ended">' + text_ended +
                          '</div>');
                } else {
                  $this.remove();
                }
              });
        }
      },
  );
}