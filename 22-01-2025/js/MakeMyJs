$(window).on('load', function() {
    $('.noclickme').click(function(e){
        e.preventDefault();
    });
    
    $('.required-star').parents('.filltheblack').addClass('fixed');             
    
    $('.divide_form:nth-child(1) .newform:nth-child(1)').before('<div class="part_1 dividegrid"></div><div class="part_2 dividegrid"></div><div class="part_3 dividegrid"></div><div class="part_4 dividegrid"></div>'); 

    $(".firstname").appendTo(".part_1");
    $(".lastname").appendTo(".part_1");
    $(".emailaddress").appendTo(".part_2");
    $(".phonenumber").appendTo(".part_2");
    
    $('.Addquestions').appendTo('.questiontoggle');

    $('.divide_form:nth-child(2)').appendTo('.Addquestions');
    
    $('.termsofuse').appendTo('.privacytoggle');
    
    if($('.Addquestions .newform div').hasClass('filltheblack')){
        
    }else{
        $('.additionalquestion').remove();
    }
    
    $('.resume-error-msg').addClass('fixed');
    
    if($('.uploaded_ResumeLinkList').hasClass('uploaded-resume')){
        $('.resume-error-msg').addClass('filled');
    }else{
        $('.resume-error-msg').removeClass('filled');
    }
    
    $('.Addquestions .errormsg').remove();
    $('.Addquestions select').remove();
 
});

$(document).ready(function(){
    
    $("option[value='QUALIFICATION']").addClass('activew');
    $("option[value='WORKAUTHORIZATION']").addClass('activew');
    $("option[value='OTHER']").addClass('activew');
    $(".activew").remove();

    $('.divide_form:nth-child(1)').addClass('Fromaldetails');
    $('.divide_form:nth-child(3)').addClass('Addquestions');
   
    $('form#expressApplicationsForm .First.Name').addClass('firstname');
    $('form#expressApplicationsForm .Last.Name').addClass('lastname');
    $('form#expressApplicationsForm .Phone.Number').addClass('phonenumber');
    $('form#expressApplicationsForm .Email.Address').addClass('emailaddress');
    
    $('form#expressApplicationsForm .I.have.read.and.agree.to.the.Privacy.Declaration').addClass('termsofuse');
    
    $(".phonenumber .input-block-level").attr("maxlength","20");
    $(".postcode .input-block-level").attr("maxlength","10");
   
    
    $('.firstname .errormsg').text('Please provide your First Name');
    $('.lastname .errormsg').text('Please provide your Last Name');
    $('.phonenumber .errormsg').text('Please provide your Phone Number');
    $('.emailaddress .errormsg').text('Please provide your Email Address');
    
    $('.privacytoggle').after('<div class="errormsg">Please agree with our Privacy Policy to continue.</div>');
    
    $('.Addquestions .errormsg').remove();

    function keypresstext(event) {
        var regex = String.fromCharCode(event.which);
        var pattern = new RegExp(/^[a-zA-Z\s\r\n@!#\$\^%&*()+=\-\[\]\\\';,\.\/\{\}\|\":<>\?]+$/);
        return pattern.test(regex); 
    }
   
    $(".phonenumber input").keypress(function(event) {
      var inputChar = String.fromCharCode(event.keyCode);
      return /^[+\d\s]*$/.test(inputChar);
    });
    
    
    $('.addquestionhead').click(function(){
        $('.questiontoggle').slideToggle();
        $(this).toggleClass('active');
    });
    
    
    $(".firstname input").bind("input", function () {
        if(navigator.userAgent.indexOf('Safari') !=-1 && navigator.userAgent.indexOf('Chrome') == -1){
        }else{
            var c = this.selectionStart,
            r = /[^a-zA-Z ''-]/gi,
            v = $(this).val();
            if (r.test(v)) {
                $(this).val(v.replace(r, ""));
                c--;
            }
            this.setSelectionRange(c, c);
        }
    });
    
    $(".firstname input").on("keypress", function (e) {
        if(navigator.userAgent.indexOf('Safari') !=-1 && navigator.userAgent.indexOf('Chrome') == -1){
            var regex = new RegExp("^[a-zA-Z ''-]");
            var str = String.fromCharCode(!e.charCode ? e.which : e.charCode);
            if (regex.test(str)) {
                return true;
            }
            e.preventDefault();
            return false;
        }
    });

    
    $(".lastname input").bind("input", function () {
        if(navigator.userAgent.indexOf('Safari') !=-1 && navigator.userAgent.indexOf('Chrome') == -1){
        }else{
            var c = this.selectionStart,
            r = /[^a-zA-Z ''-]/gi,
            v = $(this).val();
            if (r.test(v)) {
                $(this).val(v.replace(r, ""));
                c--;
            }
            this.setSelectionRange(c, c);
        }
    });
    
    $(".lastname input").on("keypress", function (e) {
        if(navigator.userAgent.indexOf('Safari') !=-1 && navigator.userAgent.indexOf('Chrome') == -1){
            var regex = new RegExp("^[a-zA-Z ''-]");
            var str = String.fromCharCode(!e.charCode ? e.which : e.charCode);
            if (regex.test(str)) {
                return true;
            }
            e.preventDefault();
            return false;
        }
    });
    
    $(".emailaddress input").bind("input", function () {
        if(navigator.userAgent.indexOf('Safari') !=-1 && navigator.userAgent.indexOf('Chrome') == -1){
        }else{
            var c = this.selectionStart,
            r = /[^a-zA-Z0-9''@._!?-]/gi,
            v = $(this).val();
            if (r.test(v)) {
                $(this).val(v.replace(r, ""));
                c--;
            }
            this.setSelectionRange(c, c);
        }
    });
    
    $(".emailaddress input").on("keypress", function (e) {
        if(navigator.userAgent.indexOf('Safari') !=-1 && navigator.userAgent.indexOf('Chrome') == -1){
            var regex = new RegExp("^[a-zA-Z0-9''@._!?-]");
            var str = String.fromCharCode(!e.charCode ? e.which : e.charCode);
            if (regex.test(str)) {
                return true;
            }
            e.preventDefault();
            return false;
        }
    });

   /* jobAlert*/
    $(".email_address input").bind("input", function () {
        if(navigator.userAgent.indexOf('Safari') !=-1 && navigator.userAgent.indexOf('Chrome') == -1){
        }else{
            var c = this.selectionStart,
            r = /[^a-zA-Z0-9''@._!?-]/gi,
            v = $(this).val();
            if (r.test(v)) {
                $(this).val(v.replace(r, ""));
                c--;
            }
            this.setSelectionRange(c, c);
        }
    });
    
    $(".email_address input").on("keypress", function (e) {
        if(navigator.userAgent.indexOf('Safari') !=-1 && navigator.userAgent.indexOf('Chrome') == -1){
            var regex = new RegExp("^[a-zA-Z0-9''@._!?-]");
            var str = String.fromCharCode(!e.charCode ? e.which : e.charCode);
            if (regex.test(str)) {
                return true;
            }
            e.preventDefault();
            return false;
        }
    });
    
      $(".Keywords input").bind("input", function () {
    if (navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1) {
        // Safari-specific code if needed
    } else {
        var c = this.selectionStart,
            r = /[^a-zA-Z0-9 ',-]/gi, // Adjusted regex to include comma
            v = $(this).val();
        if (r.test(v)) {
            $(this).val(v.replace(r, ""));
            c--;
        }
        this.setSelectionRange(c, c);
    }
});

$(".Keywords input").on("keypress", function (e) {
    if (navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1) {
        // Safari-specific code if needed
        var regex = new RegExp("^[a-zA-Z0-9 ',-]"); // Adjusted regex to include comma
        var str = String.fromCharCode(!e.charCode ? e.which : e.charCode);
        if (regex.test(str)) {
            return true;
        }
        e.preventDefault();
        return false;
    }
});


    $(".JobAlert input").bind("input", function () {
        if(navigator.userAgent.indexOf('Safari') !=-1 && navigator.userAgent.indexOf('Chrome') == -1){
        }else{
            var c = this.selectionStart,
            r = /[^a-zA-Z0-9 ''-]/gi,
            v = $(this).val();
            if (r.test(v)) {
                $(this).val(v.replace(r, ""));
                c--;
            }
            this.setSelectionRange(c, c);
        }
    });
    
    $(".JobAlert input").on("keypress", function (e) {
        if(navigator.userAgent.indexOf('Safari') !=-1 && navigator.userAgent.indexOf('Chrome') == -1){
            var regex = new RegExp("^[a-zA-Z0-9 ''-]");
            var str = String.fromCharCode(!e.charCode ? e.which : e.charCode);
            if (regex.test(str)) {
                return true;
            }
            e.preventDefault();
            return false;
        }
    });
      /* jobAlert*/
    $(".firstname input").keyup(function() {
        if($(this).val()!=''){
            $(this).parents('.filltheblack').addClass("filled");
        }else{
		    $(this).parents('.filltheblack').removeClass("filled");
		}
    });
    
    $(".lastname input").keyup(function() {
        if($(this).val()!=''){
            $(this).parents('.filltheblack').addClass("filled");
        }else{
		    $(this).parents('.filltheblack').removeClass("filled");
		}
    });
    
    $(".phonenumber input").keyup(function() {
        if($(this).val()!=''){
            $(this).parents('.filltheblack').addClass("filled");
        }else{
		    $(this).parents('.filltheblack').removeClass("filled");
		}
    });
    
    $('.emailaddress .filltheblack .input-block-level').removeClass('textbox');
	$(".emailaddress input").keyup(function () {
        var email = $(".emailaddress .input-block-level").val();
        $.ajax({
            url: "/availability/validemail",
            data: "address=" + email,
            dataType: "json",
            type: "get",
            cache: false,
            success: function (json) {
                valid = json.message;
                var newvalid = valid;
                if (newvalid == true) {
                    $(".emailaddress .filltheblack").addClass("filled");
                } else {
                    $(".emailaddress .filltheblack").removeClass("filled");
                }
            },
        });
    });

    $('.firstname input').on("cut copy paste",function(e) {
      e.preventDefault();
    });
	
	$('.lastname input').on("cut copy paste",function(e) {
      e.preventDefault();
    });
	
	$('.preferredname input').on("cut copy paste",function(e) {
      e.preventDefault();
    });
	
	$('.emailaddress input').on("cut copy paste",function(e) {
      e.preventDefault();
    });
	
	$('.phonenumber input').on("cut copy paste",function(e) {
      e.preventDefault();
    });
	
	$('.postcode input').on("cut copy paste",function(e) {
      e.preventDefault();
    });
	
    
    $('a#submitExpressApplicationsForm').click(function(){
        if($('.firstname .input-block-level').val()!=''){
            $('.firstname .errormsg').removeClass('active');
        }else{
            $('.firstname .errormsg').addClass('active');
        }
         
        if($('.lastname .input-block-level').val()!=''){
            $('.lastname .errormsg').removeClass('active');
        }else{
            $('.lastname .errormsg').addClass('active');
        }
        
        if($('.phonenumber .input-block-level').val()!=''){
            $('.phonenumber .errormsg').removeClass('active');
        }else{
            $('.phonenumber .errormsg').addClass('active');
        }
        
        if($('.emailaddress .fixed').hasClass('filled')){
            $('.emailaddress .errormsg').removeClass('active');
        }else{
            $('.emailaddress .errormsg').addClass('active');
        }
        
        if($('.uploaded_ResumeLinkList').hasClass('uploaded-resume')){
            $(this).addClass('resumedone');
            $('.resume-error-msg').removeClass('active');
        }else{
            $(this).removeClass('resumedone');
            $('.resume-error-msg').addClass('active');
        }
        
        if($('.addquestionhead').hasClass('is-active')){
            $('.questiontoggle').slideUp();
            $('.addquestionhead').removeClass('active');
        }else{
            $('.questiontoggle').slideDown();
            $('.addquestionhead').addClass('active');
        }
        
        if($('.addquestionhead').hasClass('Yes')){
            $('.additionalquestion .errormsg').removeClass('active');
        }else{
            $('.additionalquestion .errormsg').addClass('active');
        }
        
        if($('.termsofuse .multiplechoice').hasClass('filled')){
            $('.privacyquestion .errormsg').removeClass('active');
        }else{
            $('.privacyquestion .errormsg').addClass('active');
        }
    });
});

$(document).ready(function(){
	function checkClass2(){
	    var flag=0;
	    $(".questiontoggle .newform .filltheblack.fixed").each(function( index ) {
  		    if(!$(this).hasClass('filled')){
			    flag=1;
		    }
	    });
	
        if(flag=='0'){
            $('.addquestionhead').addClass('is-active');
	        $('.addquestionhead').addClass('Yes');
        }else{
	        $('.addquestionhead').removeClass('Yes');
	        $('.addquestionhead').removeClass('is-active');
        }
	}


	$(".textbox").keyup(function() {
        if($(this).val()!=''){
            $(this).parents('.filltheblack').addClass("filled");
        }else{
		    $(this).parents('.filltheblack').removeClass("filled");
		}
		checkClass2();
    });
    
    $(".textareabox").keyup(function() {
        if($(this).val()!=''){
            $(this).parents('.filltheblack').addClass("filled");
        }else{
		    $(this).parents('.filltheblack').removeClass("filled");
		}
		checkClass2();
    });
    
    $('.datepicker').on('change',function() {
        if($(this).val()!=''){
            $(this).parents('.filltheblack').addClass("filled");
        }else{
		    $(this).parents('.filltheblack').removeClass("filled");
		}
		checkClass2();
    });
    
    
    $('body').on('click', '.questiontoggle input[type=checkbox]', function() {
        var chk_name=$(this).attr('name');
	    if ($(".questiontoggle .checkbox input[name='"+chk_name+"']:checked").length > 0) {
            $(this).parents('.filltheblack').addClass("filled");
        }else {
            $(this).parents('.filltheblack').removeClass("filled");
        }  
	    checkClass2();
    });
    
    $('.radiobox').click(function() {
        if ($(this).is(':checked')) {
            $(this).parents('.filltheblack').addClass("filled");
        }else {
            $(this).parents('.filltheblack').removeClass("filled");
        }  
	    checkClass2();
    });
    
    $('.termsofuse input[type=checkbox]').click(function() {
    var chk_name=$(this).attr('name');
	    if ($(".termsofuse input[name='"+chk_name+"']:checked").length > 0) {
            $(this).parents('.filltheblack').addClass("filled");
            $('.privacylable').addClass("is-active");
        }else {
            $(this).parents('.filltheblack').removeClass("filled");
            $('.privacylable').removeClass("is-active");
        }  
    });
});

$(window).on('load', function() {
   	$(".Fromaldetails .input-block-level").each(function() {
  		$(this).trigger('keyup');
	});
	
	$(".Addquestions .textbox").each(function() {
  		$(this).trigger('keyup');
	});
	
	$(".Addquestions .textareabox").each(function() {
  		$(this).trigger('keyup');
	});
	
	$('.Addquestions .datepicker').each(function() {
		$(this).trigger('change');
	});
	
	$('.Addquestions .radiobox').each(function() {
  		if ($(this).is(':checked')) {
			$(this).trigger('click');
		}
	});
	
	$('.Addquestions input[type=checkbox]').each(function() {
  		if ($(this).is(':checked')) {
  		    $(this).trigger('click');
  		    $(this).trigger('click');
			$(this).parents('.filltheblack').addClass("filled");
		}
	});
	
	
	function checkClass3(){
	    var flag=0;
	    $(".questiontoggle .newform .fixed").each(function( index ){
  		    if(!$(this).hasClass('filled')){
			    flag=1;
		    }
	    });
	
        if(flag=='0'){
            $('.addquestionhead').addClass('is-active');
            $('.addquestionhead').addClass('Yes');
        }else{
	        $('.addquestionhead').removeClass('is-active');
	        $('.addquestionhead').removeClass('Yes');
        }
	}
	checkClass3();
	
	$('.termsofuse input[type=checkbox]').each(function() {
  		if ($(this).is(':checked')) {
  		    $(this).trigger('click');
  		    $(this).trigger('click');
			$(this).parents('.multiplechoice').addClass("filled");
		}
	});
	
	$('.termsofuse .filltheblack').each(function(){
	    if($(this).hasClass('filled')){
	       $('.privacylable').addClass('is-active');
	    }else{
	       $('.privacylable').removeClass('is-active');
	    }
	});
	
	
    $('a#submitExpressApplicationsForm').click(function(){
        if($('.termsofuse .filltheblack').hasClass('filled')){}
        else {
            $(document).scrollTop( $(".Change-Color").offset().top );  
        }
        
        if($('.resume-length-count').hasClass('uploadedResumeLinkList-check')){}
        else {
            $(document).scrollTop( $(".Change-Color").offset().top );  
        }
        
        if($('div').hasClass('additionalquestion')){
            if($('.addquestionhead').hasClass('is-active')){}
            else {
            
                $(document).scrollTop( $(".addquestionhead").offset().top );  
            }
        }
        
        if($('.emailaddress .filltheblack').hasClass('filled')){}
        else {
            $(document).scrollTop( $(".MakeDiv").offset().top );  
        }
        
        if($('.phonenumber .input-block-level').val()!=''){}
        else{
            $(document).scrollTop( $(".MakeDiv").offset().top );    
        }
        
        if($('.lastname .input-block-level').val()!=''){}
        else {
            
            $(document).scrollTop( $(".container.main-cntr").offset().top );  
        }
        
        if($('.firstname .input-block-level').val()!=''){}
        else {
            
            $(document).scrollTop( $(".newheader").offset().top );  
        }
    });
});

$(window).on('load', function() {
    if(jQuery(".resume-length-count").length){
        $('html, body').animate({
            scrollTop: $(".Change-Color").offset().top
        }, 2000);
    }
    
    $('#expressApplicationsForm .HDSATAPARA').each(function (){
        if($(this).hasClass("fixed")){
            $(this).addClass('filled');
        }else{
            
        }
    });
}); 


$(document).ready(function(){
    if(navigator.userAgent.indexOf('Safari') !=-1 && navigator.userAgent.indexOf('Chrome') == -1){
        $("#country-formfield").addClass("safari");
        $(body).addClass("safari");
    }
    
    $(".firstname .input-block-level").attr("placeholder","* First Name");
    $(".lastname .input-block-level").attr("placeholder","* Last Name");
    $(".phonenumber .input-block-level").attr("placeholder","* Phone Number");
    $(".emailaddress .input-block-level").attr("placeholder","* Email Address");
    $('.termsofuse .checkbox').after('<p>By proceeding you are agreeing that you have read and accept the <strong><a href="https://www.australianturfclub.com.au/privacy-policy/"  target="_blank" class="same-class-link btn1" >Privacy Policy.</a></strong><span class="privacy-star">*</span></p>');
 });