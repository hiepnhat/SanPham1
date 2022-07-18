jQuery(document).ready(function ($) {
	/*
	** Multiple step SignUp form.
	*/
	if(jQuery('form.multiple-form').length) {
		var current_fs, next_fs, previous_fs, current_step;
		jQuery(".btn-next").click(function() {
			current_fs = jQuery(this).closest('.mult-step');
			next_fs = jQuery(this).closest('.mult-step').next();
			current_step = jQuery(this).closest('.mult-step').data("id");
			var adclass = 'step-'+ current_step;
			current_fs.hide();
			next_fs.show();
			jQuery('.progress-bar').addClass(adclass);
		});

		jQuery(".btn-back").click(function(){
			current_fs = jQuery(this).closest('.mult-step');
			previous_fs = jQuery(this).closest('.mult-step').prev();
			current_step = jQuery(previous_fs).data("id");
			var adclass = 'step-'+ current_step;
			current_fs.hide();
			previous_fs.show();
			jQuery('.progress-bar').removeClass(adclass);
		});
	}
	
	/*
	** Show popup delete of user
	*/
	jQuery(document).on('click', '.btn-del', function () {
		jQuery('.modal-del').show();
	});
	jQuery(document).on('click', 'button.close, .backgr-color', function () {
		jQuery('.modal-del').hide();
	});
	jQuery(".list-setting .tab-item").click(function(){
		jQuery('.list-setting .tab-item').removeClass('active');
		jQuery(this).addClass('active');
	});
	
	/** 
	** Leave Form Jquery
	*/
	jQuery(".btn-comment").click(function(){
		jQuery(this).closest('.modal-footer').addClass('show-comment');
	});
	jQuery("span.close-comment").click(function(){
		jQuery(this).closest('.modal-footer').removeClass('show-comment');
	});
	jQuery(".day-hours input[type='radio']").change(function() {
		if (jQuery("#rdhours").is(":checked")) {
			jQuery('.time-from-to').show();
		} else {
			jQuery('.time-from-to').hide();
		}
	});
	
	/*
	** Custom selectbox of Role box on User page.
	*/
	jQuery(".droplist li").click(function() {
		var value = jQuery(this).find('.list-val').text();
		jQuery(this).closest('.form-group').find('input.selectbox').val(value);
		if(jQuery(this).closest('.role-row').length) {
			var span = jQuery(this).find('.description-span').clone();
            jQuery('.role-row > .description-span').remove();
            jQuery('.role-row').prepend(span);
		}
	});
	
	/*
	** Change file name upload avatar
	*/
	let defaul_text = jQuery('.up-file .label .avatar').text();
	jQuery('.up-file input[type="file"]').change(function (){
		var file_name = jQuery(this).val();
		if(file_name != ""){
			file_name = file_name.replace("C:\\fakepath\\", "");
			jQuery('.up-file .label .avatar').text(file_name);
		} else {
			jQuery('.up-file .label .avatar').text(defaul_text);
		}
	});
});

/*
** Setting datepicker of popup Leave page.
*/
if(jQuery('#customdate').length) {
	$('#customdate').datepick({
		commandsAsDateFormat: true,
		prevText: '&#10140;',
		todayText: 'MM, yyyy',
		nextText: '&#10140;',
		defaultDate: '+1',
		multiSelect: 3
	});
}