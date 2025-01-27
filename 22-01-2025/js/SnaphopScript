var sidebarscroll;
var contentscroll;
var curpage=1;
var curhref;

$(document).ready(function() {
	window.onpageshow = function(event) {
	    if (event.persisted) {
	    	hideWaitOverlay();
	    }
	};
});

$(window).on('load', function() {
   	setTimeout(function(){
   		window.scrollTo(0, 1);
	}, 1);
   	
	$('.maxlength').maxlength({
        alwaysShow: true,
        threshold: 10,
        warningClass: "label label-success",
        limitReachedClass: "label label-important"
    });
   	
	$('body').on('click', '.noaction-click',
		function(){
			return false;
		}
	);
   	
	$('body').on('focusin', '.clearradio',
		function(){
			var name = $(this).attr('name');
			$('input[name="'+name+'"][type="radio"]').attr('checked', false);
		}
	);
	
	$('body').on('click', '.cleartext',
		function(){
			var name = $(this).attr('name');
			$('input[name="'+name+'"][type="text"]').val('');
		}
	);
	
	$('body').on('click touchend', '.icon-stack',
		function(){
			var href = $(this).parent('a').attr('href');
			
			if(href!=null && href.length>0){
			    var a = window.document.createElement("a");
			    a.target = '_blank';
			    a.href = href;
			 
			    var e = window.document.createEvent("MouseEvents");
			    e.initMouseEvent("click", true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
			    a.dispatchEvent(e);		
			}
			
			return false;
		}
	);
	
	if ($('.fitvideo').length>0){
		$(".fitvideo").fitVids();
	}
	
	if ($('.swipebox').length>0){
		$(".swipebox").swipebox({
			hideBarsDelay : 0
		});
	}
	
	if ($('#frequencyInDays').length>0){
		var currentFrequency= $('#frequencyInDays').attr('current');
		if(currentFrequency!=null){
			$('#frequencyInDays').val(currentFrequency);
		}
	}
	
    if ($('#tags').length>0){
        $.ajax({
            url: '/availability/tags',
            data: 'campaignId='+$('#tags').attr('campaignId'),
            dataType: 'json',
        	type: 'get',
        	cache: false,
        	success: function (json) {
        		if(json.status=='success'){
        			var options = '<option value="">'+translation.SEARCH_AGENT_ALL_CATEGORIES+'</option>';
                    var currentTag= $('#tags').attr('current');
        			$.each(json.tags, function(i,entry){
                        if(currentTag!=null && currentTag==entry.name)
        				    options = options + '<option selected="selected" value="' + entry.id + '">' + entry.name + '</option>';
                        else
                            options = options + '<option value="' + entry.id + '">' + entry.name + '</option>';
        			});
        			$('#tags').html(options);
        		}
        	}
        });
    }
    
    if ($('#locations').length>0){
        $.ajax({
            url: '/availability/locations',
            data: 'campaignId='+$('#locations').attr('campaignId'),
            dataType: 'json',
        	type: 'get',
        	cache: false,
        	success: function (json) {
        		if(json.status=='success'){
        			var options = '<option value="">'+translation.SEARCH_AGENT_ALL_LOCATIONS+'</option>';
                    var currentLocation= $('#locations').attr('current');
        			$.each(json.locations, function(i,entry){
                        if(currentLocation!=null && currentLocation==entry.cityRegionCountry)
        				    options = options + '<option selected="selected" value="' + entry.id + '">' + entry.cityRegionCountry + '</option>';
                        else
                            options = options + '<option value="' + entry.id + '">' + entry.cityRegionCountry + '</option>';
        			});
        			$('#locations').html(options);
        		}
        	}
        });
    }
    
    if ($('#jobTypes').length>0){
        $.ajax({
            url: '/availability/jobtypes',
            data: 'campaignId='+$('#jobTypes').attr('campaignId'),
            dataType: 'json',
            type: 'get',
        	cache: false,
        	success: function (json) {
        		if(json.status=='success'){
        			var options = '<option value="">'+translation.SEARCH_AGENT_ALL_JOBTYPES+'</option>';
                    var currentJobType= $('#jobTypes').attr('current');
        			$.each(json.jobTypes, function(i,entry){
                        if(currentJobType!=null && currentJobType==entry.name)
        				    options = options + '<option selected="selected" value="' + entry.name + '">' + entry.type + '</option>';
        			    else
                            options = options + '<option value="' + entry.name + '">' + entry.type + '</option>';
                    });
        			$('#jobTypes').html(options);
        		}
        	}
        });
    }


	
	if ($('.popup-iframe').length>0){
	    $('.popup-iframe').magnificPopup({
	        type: 'iframe',
	        mainClass: 'mfp-fade',
	        removalDelay: 160,
	        preloader: false,
	        fixedContentPos: false,
	        showCloseBtn: true,
	        alignTop: true
	    });
	}
	
	if ($('.popup-url').length>0){
	    $('.popup-url').magnificPopup({
	        type: 'iframe',
	        mainClass: 'mfp-fade',
	        removalDelay: 160,
	        preloader: false,
	        fixedContentPos: false,
	        showCloseBtn: true,
	        alignTop: true,
	        iframe: {
	        	markup: '<div class="mfp-iframe-scaler" style="height:300px;">'+
			            '<div class="mfp-close"></div>'+
			            '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>'+
			            '</div>'
	        }
	    });
	}
	
	if ($('#country-formfield').length>0){
		var param = 'ts='+new Date().getTime();
		var language = $('#country-formfield').attr('language');
		if(language!=null)
			param = param + '&language='+language
		$.ajax({
			url: '/availability/countrystateprovincecounty',
			data: param,
			dataType: 'json',
			type: 'get',
			cache: false,
			success: function (json) {
				if(json.status=='success'){
					var options = '<option value="">'+translation.SELECT+' Country/Region'+'</option>';
					$.each(json.result, function(i,entry){
						options = options + '<option value="' + entry.name + '" id="' + entry.id + '">' + entry.name + '</option>';
					});
					$('#country-formfield').html(options);
					
					var defaultValue= $('#country-formfield').attr('current');
					if(defaultValue!=null){
						$('#country-formfield').val(defaultValue);
						
						var countryId = $('#country-formfield :selected').attr('id');
						param = 'countryId='+countryId;
						if(language!=null)
							param = param + '&language='+language
						$.ajax({
							url: '/availability/countrystateprovincecounty',
							data: param,
							dataType: 'json',
							type: 'get',
							cache: false,
							success: function (json) {
								if(json.status=='success'){
									var options = '<option value="">'+translation.SELECT+'</option>';
									$.each(json.result, function(i,entry){
										options = options + '<option value="' + entry.name + '">' + entry.name + '</option>';
									});
									$('#stateprovincecounty-formfield').html(options);
									
									defaultValue= $('#stateprovincecounty-formfield').attr('current');
									if(defaultValue!=null)
										$('#stateprovincecounty-formfield').val(defaultValue);
								}
							}
						});
					}
				}
			}
		});
	}
	
	if (($('#country-formfield').length>0) && ($('#stateprovincecounty-formfield').length>0)){
		$('#country-formfield').change(function() {
			var countryId = $('#country-formfield :selected').attr('id');
			var param = 'countryId='+countryId;
			var language = $('#country-formfield').attr('language');
			if(language!=null)
				param = param + '&language='+language
			$.ajax({
				url: '/availability/countrystateprovincecounty',
				data: param,
				dataType: 'json',
				type: 'get',
				cache: false,
				success: function (json) {
					if(json.status=='success'){
						var options = '<option value="">'+translation.SELECT+'</option>';
						$.each(json.result, function(i,entry){
							options = options + '<option value="' + entry.name + '">' + entry.name + '</option>';
						});
						$('#stateprovincecounty-formfield').html(options);
					}
				}
			});
		});
	}
	
	$('body').on('click', '#updateRegisteredUser',
		function(){
			var name = $.trim($('#name').val());
			var email = encodeURIComponent($.trim($('#email').val()));
			
			if(name.length==0){
				alert(translation.FULL_NAME_IS_REQUIRED);
			}else if(email.length==0){
				alert(translation.EMAIL_IS_REQUIRED);
			}else if(!validEmail(email)){
				alert(translation.VALID_EMAIL_IS_REQUIRED);
			}else{
				var base = $('#base').val();
				var campaignId = $('#campaignId').val();
				$.ajax({
					url: '/availability/email',
					data: 'address=' + email + '&base=' + base + '&campaignId=' + campaignId,
					dataType: 'json',
					type: 'get',
					async: false,
					cache: false,
					success: function (json) {
						if(json.availability==false){
							alert(translation.EMAIL_EXISTS);
						}else{				
							var jsonData = $('#registeredUserForm').serializeObject();				
							$.ajax({
								url: '/registeredusers/update',
								data: jsonData ? JSON.stringify(jsonData) : null,
								dataType: 'json',
								contentType: "application/json; charset=utf-8",
								type: 'post',
								async: false,
								cache: false,
								success: function (json) {
									if(json.status=='success'){
										alert(translation.PROFILE_UPDATED);
									}else{
										alert(json.message);
									}
								},
								beforeSend: function(){
									showWaitOverlay();
								},
								complete: function(){
									hideWaitOverlay();
								}
							});							
						}
					},
					beforeSend: function(){
						showWaitOverlay();
					},
					complete: function(){
						hideWaitOverlay();
					}
				});
			}
			return false;			
		}
	);
	
	$('body').on('click', '#updateSearchAgent',
		function(){
			var name = $.trim($('#name').val());
			var email = encodeURIComponent($.trim($('#email').val()));
			
			if(name.length==0){
				alert(translation.SEARCH_AGENT_NAME_IS_REQUIRED);
			}else if(email.length==0){
				alert(translation.EMAIL_IS_REQUIRED);
			}else if(!validEmail(email)){
				alert(translation.VALID_EMAIL_IS_REQUIRED);
			}else{
				alert(translation.SEARCH_AGENT_SAVED);
				showWaitOverlay();
				$('#searchAgentForm').submit();
			}
			
			return false;
		}
	);
	
	$('body').on('click', '#updateCredential',
		function(){
			var caption = $.trim($('#caption').val());
			
			if(caption.length==0){
				alert(translation.DESCRIPTION_IS_REQUIRED);
			}else{
				showWaitOverlay();
				$('#credentialForm').submit();
			}
			
			return false;
		}
	);
	
	$('body').on('click', '#submitConfirmEmailForm',
		function(){
			var email = encodeURIComponent($.trim($('#email').val()));
			
			if(email.length==0){
				alert(translation.EMAIL_IS_REQUIRED);
			}else if(!validEmail(email)){
				alert(translation.VALID_EMAIL_IS_REQUIRED);
			}else{
				var base = $('#base').val();
				var campaignId = $('#campaignId').val();
				$.ajax({
					url: '/availability/email',
					data: 'address=' + email + '&base=' + base + '&campaignId=' + campaignId,
					dataType: 'json',
					type: 'get',
					async: false,
					cache: false,
					success: function (json) {
						if(json.availability==false){
							hideWaitOverlay();
							alert(translation.EMAIL_EXISTS);
						}else{
							$('#confirmEmailForm').submit();
						}
					},
					beforeSend: function(){
						showWaitOverlay();
					}
				});
			}
			
			return false;
		}
	);

	$('body').on('click', '#submitSignupForm',
		function(){
			var name = $.trim($('#name').val());
			var email = encodeURIComponent($.trim($('#email').val()));
			var password = encodeURIComponent($.trim($('#password').val()));
			var timezone = $.trim($('#timezone').val());
			var campaignId = $('#campaignId').val();
			var base = $('#base').val();
			
			$.ajax({
				url: '/availability/signup',
				data: 'name=' + name + '&email=' + email + '&password=' + password + '&campaignId=' + campaignId,
				dataType: 'json',
				type: 'get',
				async: false,
				cache: false,
				success: function (json) {
					if(json.availability==false){
						alert(json.message);
					}else{
						$.ajax({
							url: '/availability/email',
							data: 'address=' + email + '&base=' + base + '&campaignId=' + campaignId,
							dataType: 'json',
							type: 'get',
							async: false,
							cache: false,
							success: function (json) {
								if(json.availability==false){
									hideWaitOverlay();
									alert(json.message);
								}else{
									$('#signupForm').submit();
								}
							},
							beforeSend: function(){
								showWaitOverlay();
							}
						});
					}
				},
				beforeSend: function(){
					showWaitOverlay();
				},
				complete: function(){
					hideWaitOverlay();
				}
			});
			
			return false;
		}
	);
	
	$('body').on('click', '#submitLoginForm',
		function(){
			var email = $.trim($('#j_username').val());
			var password = $.trim($('#j_password').val());
			
			if(email.length==0){
				alert(translation.EMAIL_IS_REQUIRED);
			}else if(password.length==0){
				alert(translation.PASSWORD_IS_REQUIRED);
			}else{
				showWaitOverlay();
				$('#loginForm').submit();
			}
			
			return false;
		}
	);

	$('body').on('click', '#submitPollSurveyForm',
		function(){
			var url = $('#pollSurveyForm').attr('action');
			var data = $('#pollSurveyForm').serializeObject();
		
			$.ajax({
				url: url,
				data: data,
				dataType: 'json',
				type: 'post',
				cache: false,
				success: function (json) {
					if(json.status=='success'){
						window.location.href = window.location.href+'/result';
					}else{
						hideWaitOverlay();
						alert(json.errorMessage);
					}
				},
				beforeSend: function(){
					showWaitOverlay();
				}
			});			
			
			return false;
		}
	);
	
	$('body').on('click', '#submitForm',
		function(){
			var url = $('#form').attr('action');
			var data = $('#form').serializeObject();
			
			$.ajax({
				url: url,
				data: data,
				dataType: 'json',
				type: 'post',
				cache: false,
				success: function (json) {
					if(json.status=='success'){
						window.location.href = window.location.href+'/result';
					}else{
						hideWaitOverlay();
						alert(json.errorMessage);
					}
				},
				beforeSend: function(){
					showWaitOverlay();
				}
			});			
			
			return false;
		}
	);
		
	$('body').on('click', '#addJobExperienceForm',
		function(){
			var url = $('#jobExperienceForm').attr('action');
			var data = $('#jobExperienceForm').serializeObject();
			var successUri = $(this).attr('successUri');

			$.ajax({
				url: url,
				data: data,
				dataType: 'json',
				type: 'post',
				cache: false,
				success: function (json) {
					if(json.status=='success'){
						window.location.href = successUri;
					}else{
						hideWaitOverlay();
						alert(json.errorMessage);
						if(json.reload!=null)
							location.reload();
					}
				},
				beforeSend: function(){
					showWaitOverlay();
				}
			});			
			return false;
		}
	);
	
	$('body').on('click', '#addJobEducationForm',
		function(){
			var url = $('#jobEducationForm').attr('action');
			var data = $('#jobEducationForm').serializeObject();
			var successUri = $(this).attr('successUri');

			$.ajax({
				url: url,
				data: data,
				dataType: 'json',
				type: 'post',
				cache: false,
				success: function (json) {
					if(json.status=='success'){
						window.location.href = successUri;
					}else{
						hideWaitOverlay();
						alert(json.errorMessage);
						if(json.reload!=null)
							location.reload();
					}
				},
				beforeSend: function(){
					showWaitOverlay();
				}
			});			
			return false;
		}
	);
	
	$('body').on('click', '#addJobCertificationForm',
		function(){
			var url = $('#jobCertificationForm').attr('action');
			var data = $('#jobCertificationForm').serializeObject();
			var successUri = $(this).attr('successUri');

			$.ajax({
				url: url,
				data: data,
				dataType: 'json',
				type: 'post',
				cache: false,
				success: function (json) {
					if(json.status=='success'){
						window.location.href = successUri;
					}else{
						hideWaitOverlay();
						alert(json.errorMessage);
						if(json.reload!=null)
							location.reload();
					}
				},
				beforeSend: function(){
					showWaitOverlay();
				}
			});			
			return false;
		}
	);
	
	$('body').on('click', '#addJobReferenceForm',
		function(){
			var url = $('#jobReferenceForm').attr('action');
			var data = $('#jobReferenceForm').serializeObject();
			var successUri = $(this).attr('successUri');

			$.ajax({
				url: url,
				data: data,
				dataType: 'json',
				type: 'post',
				cache: false,
				success: function (json) {
					if(json.status=='success'){
						window.location.href = successUri;
					}else{
						hideWaitOverlay();
						alert(json.errorMessage);
						if(json.reload!=null)
							location.reload();
					}
				},
				beforeSend: function(){
					showWaitOverlay();
				}
			});			
			return false;
		}
	);
	
	$('body').on('click', '#addJobSkillForm',
		function(){
			var url = $('#jobSkillForm').attr('action');
			var data = $('#jobSkillForm').serializeObject();
			var successUri = $(this).attr('successUri');

			$.ajax({
				url: url,
				data: data,
				dataType: 'json',
				type: 'post',
				cache: false,
				success: function (json) {
					if(json.status=='success'){
						window.location.href = successUri;
					}else{
						hideWaitOverlay();
						alert(json.errorMessage);
						if(json.reload!=null)
							location.reload();
					}
				},
				beforeSend: function(){
					showWaitOverlay();
				}
			});			
			return false;
		}
	);
	
	$('body').on('click', '#addJobLanguageForm',
		function(){
			var url = $('#jobLanguageForm').attr('action');
			var data = $('#jobLanguageForm').serializeObject();
			var successUri = $(this).attr('successUri');

			$.ajax({
				url: url,
				data: data,
				dataType: 'json',
				type: 'post',
				cache: false,
				success: function (json) {
					if(json.status=='success'){
						window.location.href = successUri;
					}else{
						hideWaitOverlay();
						alert(json.errorMessage);
						if(json.reload!=null)
							location.reload();
					}
				},
				beforeSend: function(){
					showWaitOverlay();
				}
			});			
			return false;
		}
	);
	
	$('body').on('click', '#submitJobComplianceForm',
		function(){
			var url = $('#jobComplianceForm').attr('action');
			var data = $('#jobComplianceForm').serializeObject();
			var successUri = $(this).attr('successUri');
			$.ajax({
				url: url,
				data: data,
				dataType: 'json',
				type: 'post',
				cache: false,
				success: function (json) {
					if(json.status=='success'){
						window.location.href = successUri;
					}else{
						hideWaitOverlay();
						alert(json.errorMessage);
						
						if(json.errorId!=null){
							if(contentscroll!=null) contentscroll.scrollToElement('#validation-'+json.errorId, '1s');
						}
						
						if(json.reload!=null)
							location.reload();
					}
				},
				beforeSend: function(){
					showWaitOverlay();
				}
			});			
			
			return false;
		}
	);
	
	$('body').on('click', '#submitJobQuestionsForm',
		function(){
			var url = $('#jobQuestionsForm').attr('action');
			var data = $('#jobQuestionsForm').serializeObject();
			var successUri = $(this).attr('successUri'); 
			$.ajax({
				url: url,
				data: data,
				dataType: 'json',
				type: 'post',
				cache: false,
				success: function (json) {
					if(json.status=='success'){
						window.location.href = successUri;
					}else{
						hideWaitOverlay();
						alert(json.errorMessage);
						
						if(json.errorId!=null){
							if(contentscroll!=null) contentscroll.scrollToElement('#validation-'+json.errorId, '1s');
						}
						
						if(json.reload!=null)
							location.reload();
					}
				},
				beforeSend: function(){
					showWaitOverlay();
				}
			});			
			
			return false;
		}
	);
	
	$('body').on('click', '#submitJobApplicationsForm',
		function(){
			var url = $('#jobApplicationsForm').attr('action');
			var data = $('#jobApplicationsForm').serializeObject();
			var successUri = $(this).attr('successUri');
			$.ajax({
				url: url,
				data: data,
				dataType: 'json',
				type: 'post',
				cache: false,
				success: function (json) {
					if(json.status=='success'){
						window.location.href = successUri;
					}else{
						hideWaitOverlay();
						alert(json.errorMessage);
						
						if(json.errorId!=null){
							if(contentscroll!=null) contentscroll.scrollToElement('#validation-'+json.errorId, '1s');
						}
						
						if(json.reload!=null)
							location.reload();
					}
				},
				beforeSend: function(){
					showWaitOverlay();
				}
			});			
			
			return false;
		}
	);
	
	$('body').on('click', '#submitExpressApplicationsForm',
		function(){
			var url = $('#expressApplicationsForm').attr('action');
			var data = $('#expressApplicationsForm').serializeObject();
			var successUri = $(this).attr('successUri');
			$.ajax({
				url: url,
				data: data,
				dataType: 'json',
				type: 'post',
				cache: false,
				success: function (json) {
                        var flagyes = 0;
                
                        var store = $('.hasUploadedResumeLinkList .resume-length-count').length;
                
                        if (store > 2) {
                            $('.resume-length').addClass('active');
                            flagyes = 1;
                        }else{
                            $('.resume-length').removeClass('active');
                        }
						
                        $('#expressApplicationsForm .fixed').each(function (){
                            if(!$(this).hasClass("filled")){
                                flagyes = 1;
                                
                            }
                        });
                        
                        if(flagyes == '0'){
                            $('.emailaddress input').attr('type', 'email');
                            
                            var session = window.location.href;
                                 session = session.split('jobapplication/')[1];
                                 session = session.split('/false')[0];
                                 session = session.split('/')[1];
                                
                                 var clsstr = $(".ftr-id").attr("href");
                                 
                                 clsstr = clsstr.replace("/job/","").split('/')[1];
                                 console.log(session);
                                 console.log("session");
                                 finalsession = session;
                                 
                                 var newurlget = window.location.origin; 
                                 finalsessionurl = newurlget +'/l/recruiting/jobapplicationsubmitted/'+ clsstr + '/' + finalsession + '/false';
                                 window.location.href= newurlget +'/l/recruiting/jobapplicationsubmitted/'+ clsstr + '/' + finalsession + '/false?&lastpage=last';
                        }else{
						hideWaitOverlay();

						
						if(json.errorId!=null){
						   
							if(contentscroll!=null) contentscroll.scrollToElement('#validation-'+json.errorId, '1s');
						}
						
						if(json.reload!=null)
							location.reload();
					}
				},
				beforeSend: function(){
					showWaitOverlay();
				}
			});			
			
			return false;
		}
	);
	
	$('body').on('click', '.save-express-applications-form',
		function(){
			var url = $('#expressApplicationsForm').attr('action');
			var data = $('#expressApplicationsForm').serializeObject();
			var successUri = $(this).attr('href');
			var validationId = $(this).attr('validationId');
			var postUrl = url+'?validate=false';
			if(validationId!=null)
				postUrl = postUrl + '&validationId=' + validationId
			
			$.ajax({
				url: postUrl,
				data: data,
				dataType: 'json',
				type: 'post',
				async: false,
				cache: false,
				success: function (json) {
					window.location.href = successUri;
				},
				beforeSend: function(){
					showWaitOverlay();
				}
			});			
			
			return false;
		}
	);

	$('body').on('click', '#submitJobFormsForm',
		function(){
			var url = $('#jobFormsForm').attr('action');
			var data = $('#jobFormsForm').serializeObject();
			var successUri = $(this).attr('successUri');
			$.ajax({
				url: url,
				data: data,
				dataType: 'json',
				type: 'post',
				cache: false,
				success: function (json) {
					if(json.status=='success'){
						window.location.href = successUri;
					}else{
						hideWaitOverlay();
						alert(json.errorMessage);
						
						if(json.errorId!=null){
							if(contentscroll!=null) contentscroll.scrollToElement('#validation-'+json.errorId, '1s');
						}
						
						if(json.reload!=null)
							location.reload();
					}
				},
				beforeSend: function(){
					showWaitOverlay();
				}
			});			
			
			return false;
		}
	);	
	
	$('body').on('click', '#submitCaptionForm',
		function(){
			var caption = $('#caption').val();
			
			if(caption.length==0){
				alert(translation.DESCRIPTION_IS_REQUIRED);
			}else{
				showWaitOverlay();
				$('#captionForm').submit();
			}		
			
			return false;
		}
	);
	
	$('body').on('click', '#loadmore',
		function(){
			loadmore('infinitescroll-container', 'infinitescroll-item');
			contentscroll.refresh();
			return false;
		}
	);
	
	$('body').on('click', '#submitEmailLinkForm',
		function(){
			var name = $('#name').val();
			var email = encodeURIComponent($('#email').val());
		
			if(name.length==0){
				alert(translation.FULL_NAME_IS_REQUIRED);
			}else if(email.length==0){
				alert(translation.EMAIL_IS_REQUIRED);
			}else if(!validEmail(email)){
				alert(translation.VALID_EMAIL_IS_REQUIRED);
			}else{
				var url = $('#emailLinkForm').attr('action');
				var successMessage = $('#emailLinkForm').attr('successMessage');
				var data = $('#emailLinkForm').serializeObject();
				var successUri = $('#emailLinkForm').attr('successUri');
				
				$.ajax({
					url: url,
					data: data,
					dataType: 'json',
					type: 'post',
					cache: false,
					success: function (json) {
						hideWaitOverlay();
						alert(successMessage);
						$('#name').val('');
						$('#email').val('');
						$('#phone').val('');
						window.location.href = successUri; 
					},
					beforeSend: function(){
						showWaitOverlay();
					}
				});		
			}
			
			return false;
		}
	);
	
	$('body').on('click', '#submitRecoverForm',
		function(){
			var email = encodeURIComponent($('#email').val());
				
			if(email.length==0){
				alert(translation.EMAIL_IS_REQUIRED);
			}else if(!validEmail(email)){
				alert(translation.VALID_EMAIL_IS_REQUIRED);
			}else{
				var base = $('#base').val();
				var campaignId = $('#campaignId').val();
				$.ajax({
					url: '/availability/email',
					data: 'address=' + email + '&base=' + base + '&campaignId=' + campaignId,
					dataType: 'json',
					type: 'get',
					async: false,
					cache: false,
					success: function (json) {
						if(json.availability==true){
							hideWaitOverlay();
							alert(translation.EMAIL_NOT_EXISTS);
						}else{
							$('#recoverForm').submit();
						}
					},
					beforeSend: function(){
						showWaitOverlay();
					}
				});
			}
			
			return false;
		}
	);
	
	$('body').on('click', '#submitResetForm',
		function(){
			var password = encodeURIComponent($('#password').val());
			var campaignId = $('#campaignId').val();
			
			$.ajax({
				url: '/availability/password',
				data: 'password='+password+'&campaignId='+campaignId,
				dataType: 'json',
				type: 'get',
				cache: false,
				success: function (json) {
					if(json.availability==false){
						alert(json.message);
					}else{
						showWaitOverlay();
						$('#resetForm').submit();
					}
				}
			});	
			
			return false;
		}
	);
	
	$('body').on('click', '#submitUploadFromComputer',
		function(){
			var email = encodeURIComponent($('#email').val());
			
			if(email.length==0){
				alert(translation.EMAIL_IS_REQUIRED);
				return false;
			}else if(!validEmail(email)){
				alert(translation.VALID_EMAIL_IS_REQUIRED);
				return false;
			}else
				return true;
		}
	);
});

$('body').on('click', '#useCurrentLocation',
	function(){
		if(geo_position_js.init()){
			showWaitOverlay();
			geo_position_js.getCurrentPosition(usecurrentlocation_success_callback,usecurrentlocation_error_callback,{enableHighAccuracy:true});
		}else
			hideWaitOverlay();
		
		return false;
	}
);

$('body').on('click', '.mapCurrentLocation',
	function(){
		curhref = $(this).attr('href');
		if(geo_position_js.init()){
			showWaitOverlay();
			geo_position_js.getCurrentPosition(mapcurrentlocation_success_callback,mapcurrentlocation_error_callback,{enableHighAccuracy:true});
		}else
			hideWaitOverlay();
		
		return false;
	}
);

function usecurrentlocation_success_callback(p)
{
	var action = $('#useCurrentLocation').attr('action');
	var returnUrl = $('#useCurrentLocation').attr('returnUrl');
	var lat = p.coords.latitude.toFixed(2);
	var lng = p.coords.longitude.toFixed(2);
	
	if(returnUrl.indexOf('lat%3D')<0 && returnUrl.indexOf('lng%3D')<0)
		returnUrl=returnUrl+encodeURIComponent('&lat='+lat+'&lng='+lng);
	
	var finalUrl;
	if(action.indexOf('?')>=0)
		finalUrl=action+'&returnUrl='+returnUrl+'&lat='+lat+'&lng='+lng;
	else
		finalUrl=action+'?returnUrl='+returnUrl+'&lat='+lat+'&lng='+lng;
	
	window.location.href=finalUrl;
}

function usecurrentlocation_error_callback(p)
{
	hideWaitOverlay();
}

function mapcurrentlocation_success_callback(p)
{
	var lat = p.coords.latitude.toFixed(2);
	var lng = p.coords.longitude.toFixed(2);
	window.location.href=curhref+'?lat='+lat+'&lng='+lng;
}

function mapcurrentlocation_error_callback(p)
{
	hideWaitOverlay();
}

!function ($) {

  "use strict"; 



  var Modal = function (element, options) {
    this.options = options
    this.$element = $(element)
      .delegate('[data-dismiss="modal"]', 'click.dismiss.modal', $.proxy(this.hide, this))
    this.options.remote && this.$element.find('.modal-body').load(this.options.remote)
  }

  Modal.prototype = {

      constructor: Modal

    , toggle: function () {
        return this[!this.isShown ? 'show' : 'hide']()
      }

    , show: function () {
        var that = this
          , e = $.Event('show')

        this.$element.trigger(e)

        if (this.isShown || e.isDefaultPrevented()) return

        this.isShown = true

        this.escape()

        this.backdrop(function () {
          var transition = $.support.transition && that.$element.hasClass('fade')

          if (!that.$element.parent().length) {
            that.$element.appendTo(document.body)
          }

          that.$element.show()

          if (transition) {
            that.$element[0].offsetWidth 
          }

          that.$element
            .addClass('in')
            .attr('aria-hidden', false)

          that.enforceFocus()

          transition ?
            that.$element.one($.support.transition.end, function () { that.$element.focus().trigger('shown') }) :
            that.$element.focus().trigger('shown')

        })
      }

    , hide: function (e) {
        e && e.preventDefault()

        var that = this

        e = $.Event('hide')

        this.$element.trigger(e)

        if (!this.isShown || e.isDefaultPrevented()) return

        this.isShown = false

        this.escape()

        $(document).off('focusin.modal')

        this.$element
          .removeClass('in')
          .attr('aria-hidden', true)

        $.support.transition && this.$element.hasClass('fade') ?
          this.hideWithTransition() :
          this.hideModal()
      }

    , enforceFocus: function () {
        var that = this
        $(document).on('focusin.modal', function (e) {
          if (that.$element[0] !== e.target && !that.$element.has(e.target).length) {
            that.$element.focus()
          }
        })
      }

    , escape: function () {
        var that = this
        if (this.isShown && this.options.keyboard) {
          this.$element.on('keyup.dismiss.modal', function ( e ) {
            e.which == 27 && that.hide()
          })
        } else if (!this.isShown) {
          this.$element.off('keyup.dismiss.modal')
        }
      }

    , hideWithTransition: function () {
        var that = this
          , timeout = setTimeout(function () {
              that.$element.off($.support.transition.end)
              that.hideModal()
            }, 500)

        this.$element.one($.support.transition.end, function () {
          clearTimeout(timeout)
          that.hideModal()
        })
      }

    , hideModal: function () {
        var that = this
        this.$element.hide()
        this.backdrop(function () {
          that.removeBackdrop()
          that.$element.trigger('hidden')
        })
      }

    , removeBackdrop: function () {
        this.$backdrop && this.$backdrop.remove()
        this.$backdrop = null
      }

    , backdrop: function (callback) {
        var that = this
          , animate = this.$element.hasClass('fade') ? 'fade' : ''

        if (this.isShown && this.options.backdrop) {
          var doAnimate = $.support.transition && animate

          this.$backdrop = $('<div class="modal-backdrop ' + animate + '" />')
            .appendTo(document.body)

          this.$backdrop.click(
            this.options.backdrop == 'static' ?
              $.proxy(this.$element[0].focus, this.$element[0])
            : $.proxy(this.hide, this)
          )

          if (doAnimate) this.$backdrop[0].offsetWidth

          this.$backdrop.addClass('in')

          if (!callback) return

          doAnimate ?
            this.$backdrop.one($.support.transition.end, callback) :
            callback()

        } else if (!this.isShown && this.$backdrop) {
          this.$backdrop.removeClass('in')

          $.support.transition && this.$element.hasClass('fade')?
            this.$backdrop.one($.support.transition.end, callback) :
            callback()

        } else if (callback) {
          callback()
        }
      }
  }


  var old = $.fn.modal

  $.fn.modal = function (option) {
    return this.each(function () {
      var $this = $(this)
        , data = $this.data('modal')
        , options = $.extend({}, $.fn.modal.defaults, $this.data(), typeof option == 'object' && option)
      if (!data) $this.data('modal', (data = new Modal(this, options)))
      if (typeof option == 'string') data[option]()
      else if (options.show) data.show()
    })
  }

  $.fn.modal.defaults = {
      backdrop: true
    , keyboard: true
    , show: true
  }

  $.fn.modal.Constructor = Modal




  $.fn.modal.noConflict = function () {
    $.fn.modal = old
    return this
  }




  $(document).on('click.modal.data-api', '[data-toggle="modal"]', function (e) {
    var $this = $(this)
      , href = $this.attr('href')
      , $target = $($this.attr('data-target') || (href && href.replace(/.*(?=#[^\s]+$)/, ''))) 
      , option = $target.data('modal') ? 'toggle' : $.extend({ remote:!/#/.test(href) && href }, $target.data(), $this.data())

    e.preventDefault()

    $target
      .modal(option)
      .one('hide', function () {
        $this.focus()
      })
  })

}(window.jQuery);
 
!function( $ ) {

	function UTCDate(){
		return new Date(Date.UTC.apply(Date, arguments));
	}
	function UTCToday(){
		var today = new Date();
		return UTCDate(today.getUTCFullYear(), today.getUTCMonth(), today.getUTCDate());
	}



	var Datepicker = function(element, options) {
		var that = this;

		this.element = $(element);
		this.language = options.language||this.element.data('date-language')||"en";
		this.language = this.language in dates ? this.language : this.language.split('-')[0]; 
		this.language = this.language in dates ? this.language : "en";
		this.isRTL = dates[this.language].rtl||false;
		this.format = DPGlobal.parseFormat(options.format||this.element.data('date-format')||dates[this.language].format||'mm/dd/yyyy');
		this.isInline = false;
		this.isInput = this.element.is('input');
		this.component = this.element.is('.date') ? this.element.find('.add-on, .btn') : false;
		this.hasInput = this.component && this.element.find('input').length;
		if(this.component && this.component.length === 0)
			this.component = false;

		this._attachEvents();

		this.forceParse = true;
		if ('forceParse' in options) {
			this.forceParse = options.forceParse;
		} else if ('dateForceParse' in this.element.data()) {
			this.forceParse = this.element.data('date-force-parse');
		}


		this.picker = $(DPGlobal.template)
							.appendTo(this.isInline ? this.element : 'body')
							.on({
								click: $.proxy(this.click, this),
								mousedown: $.proxy(this.mousedown, this)
							});

		if(this.isInline) {
			this.picker.addClass('datepicker-inline');
		} else {
			this.picker.addClass('datepicker-dropdown dropdown-menu');
		}
		if (this.isRTL){
			this.picker.addClass('datepicker-rtl');
			this.picker.find('.prev i, .next i')
						.toggleClass('icon-arrow-left icon-arrow-right');
		}
		$(document).on('mousedown', function (e) {

			if ($(e.target).closest('.datepicker.datepicker-inline, .datepicker.datepicker-dropdown').length === 0) {
				that.hide();
			}
		});

		this.autoclose = false;
		if ('autoclose' in options) {
			this.autoclose = options.autoclose;
		} else if ('dateAutoclose' in this.element.data()) {
			this.autoclose = this.element.data('date-autoclose');
		}

		this.keyboardNavigation = true;
		if ('keyboardNavigation' in options) {
			this.keyboardNavigation = options.keyboardNavigation;
		} else if ('dateKeyboardNavigation' in this.element.data()) {
			this.keyboardNavigation = this.element.data('date-keyboard-navigation');
		}

		this.viewMode = this.startViewMode = 0;
		switch(options.startView || this.element.data('date-start-view')){
			case 2:
			case 'decade':
				this.viewMode = this.startViewMode = 2;
				break;
			case 1:
			case 'year':
				this.viewMode = this.startViewMode = 1;
				break;
		}

		this.minViewMode = options.minViewMode||this.element.data('date-min-view-mode')||0;
		if (typeof this.minViewMode === 'string') {
			switch (this.minViewMode) {
				case 'months':
					this.minViewMode = 1;
					break;
				case 'years':
					this.minViewMode = 2;
					break;
				default:
					this.minViewMode = 0;
					break;
			}
		}

		this.viewMode = this.startViewMode = Math.max(this.startViewMode, this.minViewMode);

		this.todayBtn = (options.todayBtn||this.element.data('date-today-btn')||false);
		this.todayHighlight = (options.todayHighlight||this.element.data('date-today-highlight')||false);

		this.calendarWeeks = false;
		if ('calendarWeeks' in options) {
			this.calendarWeeks = options.calendarWeeks;
		} else if ('dateCalendarWeeks' in this.element.data()) {
			this.calendarWeeks = this.element.data('date-calendar-weeks');
		}
		if (this.calendarWeeks)
			this.picker.find('tfoot th.today')
						.attr('colspan', function(i, val){
							return parseInt(val) + 1;
						});

		this.weekStart = ((options.weekStart||this.element.data('date-weekstart')||dates[this.language].weekStart||0) % 7);
		this.weekEnd = ((this.weekStart + 6) % 7);
		this.startDate = -Infinity;
		this.endDate = Infinity;
		this.daysOfWeekDisabled = [];
		this.setStartDate(options.startDate||this.element.data('date-startdate'));
		this.setEndDate(options.endDate||this.element.data('date-enddate'));
		this.setDaysOfWeekDisabled(options.daysOfWeekDisabled||this.element.data('date-days-of-week-disabled'));
		this.fillDow();
		this.fillMonths();
		this.update();
		this.showMode();

		if(this.isInline) {
			this.show();
		}
	};

	Datepicker.prototype = {
		constructor: Datepicker,

		_events: [],
		_attachEvents: function(){
			this._detachEvents();
			if (this.isInput) { 
				this._events = [
					[this.element, {
						focus: $.proxy(this.show, this),
						keyup: $.proxy(this.update, this),
						keydown: $.proxy(this.keydown, this)
					}]
				];
			}
			else if (this.component && this.hasInput){ 
				this._events = [
					
					[this.element.find('input'), {
						focus: $.proxy(this.show, this),
						keyup: $.proxy(this.update, this),
						keydown: $.proxy(this.keydown, this)
					}],
					[this.component, {
						click: $.proxy(this.show, this)
					}]
				];
			}
						else if (this.element.is('div')) {  
							this.isInline = true;
						}
			else {
				this._events = [
					[this.element, {
						click: $.proxy(this.show, this)
					}]
				];
			}
			for (var i=0, el, ev; i<this._events.length; i++){
				el = this._events[i][0];
				ev = this._events[i][1];
				el.on(ev);
			}
		},
		_detachEvents: function(){
			for (var i=0, el, ev; i<this._events.length; i++){
				el = this._events[i][0];
				ev = this._events[i][1];
				el.off(ev);
			}
			this._events = [];
		},

		show: function(e) {
			this.picker.show();
			this.height = this.component ? this.component.outerHeight() : this.element.outerHeight();
			this.update();
			this.place();
			$(window).on('resize', $.proxy(this.place, this));
			if (e) {
				e.preventDefault();
			}
			this.element.trigger({
				type: 'show',
				date: this.date
			});
		},

		hide: function(e){
			if(this.isInline) return;
			if (!this.picker.is(':visible')) return;
			this.picker.hide();
			$(window).off('resize', this.place);
			this.viewMode = this.startViewMode;
			this.showMode();
			if (!this.isInput) {
				$(document).off('mousedown', this.hide);
			}

			if (
				this.forceParse &&
				(
					this.isInput && this.element.val() ||
					this.hasInput && this.element.find('input').val()
				)
			)
				this.setValue();
			this.element.trigger({
				type: 'hide',
				date: this.date
			});
		},

		remove: function() {
			this._detachEvents();
			this.picker.remove();
			delete this.element.data().datepicker;
			if (!this.isInput) {
				delete this.element.data().date;
			}
		},

		getDate: function() {
			var d = this.getUTCDate();
			return new Date(d.getTime() + (d.getTimezoneOffset()*60000));
		},

		getUTCDate: function() {
			return this.date;
		},

		setDate: function(d) {
			this.setUTCDate(new Date(d.getTime() - (d.getTimezoneOffset()*60000)));
		},

		setUTCDate: function(d) {
			this.date = d;
			this.setValue();
		},

		setValue: function() {
			var formatted = this.getFormattedDate();
			if (!this.isInput) {
				if (this.component){
					this.element.find('input').val(formatted);
				}
				this.element.data('date', formatted);
			} else {
				this.element.val(formatted);
			}
		},

		getFormattedDate: function(format) {
			if (format === undefined)
				format = this.format;
			return DPGlobal.formatDate(this.date, format, this.language);
		},

		setStartDate: function(startDate){
			this.startDate = startDate||-Infinity;
			if (this.startDate !== -Infinity) {
				this.startDate = DPGlobal.parseDate(this.startDate, this.format, this.language);
			}
			this.update();
			this.updateNavArrows();
		},

		setEndDate: function(endDate){
			this.endDate = endDate||Infinity;
			if (this.endDate !== Infinity) {
				this.endDate = DPGlobal.parseDate(this.endDate, this.format, this.language);
			}
			this.update();
			this.updateNavArrows();
		},

		setDaysOfWeekDisabled: function(daysOfWeekDisabled){
			this.daysOfWeekDisabled = daysOfWeekDisabled||[];
			if (!$.isArray(this.daysOfWeekDisabled)) {
				this.daysOfWeekDisabled = this.daysOfWeekDisabled.split(/,\s*/);
			}
			this.daysOfWeekDisabled = $.map(this.daysOfWeekDisabled, function (d) {
				return parseInt(d, 10);
			});
			this.update();
			this.updateNavArrows();
		},

		place: function(){
						if(this.isInline) return;
			var zIndex = parseInt(this.element.parents().filter(function() {
							return $(this).css('z-index') != 'auto';
						}).first().css('z-index'))+10;
			var offset = this.component ? this.component.parent().offset() : this.element.offset();
			var height = this.component ? this.component.outerHeight(true) : this.element.outerHeight(true);
			this.picker.css({
				top: offset.top + height,
				left: offset.left,
				zIndex: zIndex
			});
		},

		update: function(){
			var date, fromArgs = false;
			if(arguments && arguments.length && (typeof arguments[0] === 'string' || arguments[0] instanceof Date)) {
				date = arguments[0];
				fromArgs = true;
			} else {
				date = this.isInput ? this.element.val() : this.element.data('date') || this.element.find('input').val();
			}

			this.date = DPGlobal.parseDate(date, this.format, this.language);

			if(fromArgs) this.setValue();

			if (this.date < this.startDate) {
				this.viewDate = new Date(this.startDate);
			} else if (this.date > this.endDate) {
				this.viewDate = new Date(this.endDate);
			} else {
				this.viewDate = new Date(this.date);
			}
			this.fill();
		},

		fillDow: function(){
			var dowCnt = this.weekStart,
			html = '<tr>';
			if(this.calendarWeeks){
				var cell = '<th class="cw">&nbsp;</th>';
				html += cell;
				this.picker.find('.datepicker-days thead tr:first-child').prepend(cell);
			}
			while (dowCnt < this.weekStart + 7) {
				html += '<th class="dow">'+dates[this.language].daysMin[(dowCnt++)%7]+'</th>';
			}
			html += '</tr>';
			this.picker.find('.datepicker-days thead').append(html);
		},

		fillMonths: function(){
			var html = '',
			i = 0;
			while (i < 12) {
				html += '<span class="month">'+dates[this.language].monthsShort[i++]+'</span>';
			}
			this.picker.find('.datepicker-months td').html(html);
		},

		fill: function() {
			var d = new Date(this.viewDate),
				year = d.getUTCFullYear(),
				month = d.getUTCMonth(),
				startYear = this.startDate !== -Infinity ? this.startDate.getUTCFullYear() : -Infinity,
				startMonth = this.startDate !== -Infinity ? this.startDate.getUTCMonth() : -Infinity,
				endYear = this.endDate !== Infinity ? this.endDate.getUTCFullYear() : Infinity,
				endMonth = this.endDate !== Infinity ? this.endDate.getUTCMonth() : Infinity,
				currentDate = this.date && this.date.valueOf(),
				today = new Date();
			this.picker.find('.datepicker-days thead th.switch')
						.text(dates[this.language].months[month]+' '+year);
			this.picker.find('tfoot th.today')
						.text(dates[this.language].today)
						.toggle(this.todayBtn !== false);
			this.updateNavArrows();
			this.fillMonths();
			var prevMonth = UTCDate(year, month-1, 28,0,0,0,0),
				day = DPGlobal.getDaysInMonth(prevMonth.getUTCFullYear(), prevMonth.getUTCMonth());
			prevMonth.setUTCDate(day);
			prevMonth.setUTCDate(day - (prevMonth.getUTCDay() - this.weekStart + 7)%7);
			var nextMonth = new Date(prevMonth);
			nextMonth.setUTCDate(nextMonth.getUTCDate() + 42);
			nextMonth = nextMonth.valueOf();
			var html = [];
			var clsName;
			while(prevMonth.valueOf() < nextMonth) {
				if (prevMonth.getUTCDay() == this.weekStart) {
					html.push('<tr>');
					if(this.calendarWeeks){
					
						
						var
						
							ws = new Date(+prevMonth + (this.weekStart - prevMonth.getUTCDay() - 7) % 7 * 864e5),
					
							th = new Date(+ws + (7 + 4 - ws.getUTCDay()) % 7 * 864e5),
						
							yth = new Date(+(yth = UTCDate(th.getUTCFullYear(), 0, 1)) + (7 + 4 - yth.getUTCDay())%7*864e5),
							
							calWeek =  (th - yth) / 864e5 / 7 + 1;
						html.push('<td class="cw">'+ calWeek +'</td>');

					}
				}
				clsName = '';
				if (prevMonth.getUTCFullYear() < year || (prevMonth.getUTCFullYear() == year && prevMonth.getUTCMonth() < month)) {
					clsName += ' old';
				} else if (prevMonth.getUTCFullYear() > year || (prevMonth.getUTCFullYear() == year && prevMonth.getUTCMonth() > month)) {
					clsName += ' new';
				}
			
				if (this.todayHighlight &&
					prevMonth.getUTCFullYear() == today.getFullYear() &&
					prevMonth.getUTCMonth() == today.getMonth() &&
					prevMonth.getUTCDate() == today.getDate()) {
					clsName += ' today';
				}
				if (currentDate && prevMonth.valueOf() == currentDate) {
					clsName += ' active';
				}
				if (prevMonth.valueOf() < this.startDate || prevMonth.valueOf() > this.endDate ||
					$.inArray(prevMonth.getUTCDay(), this.daysOfWeekDisabled) !== -1) {
					clsName += ' disabled';
				}
				html.push('<td class="day'+clsName+'">'+prevMonth.getUTCDate() + '</td>');
				if (prevMonth.getUTCDay() == this.weekEnd) {
					html.push('</tr>');
				}
				prevMonth.setUTCDate(prevMonth.getUTCDate()+1);
			}
			this.picker.find('.datepicker-days tbody').empty().append(html.join(''));
			var currentYear = this.date && this.date.getUTCFullYear();

			var months = this.picker.find('.datepicker-months')
						.find('th:eq(1)')
							.text(year)
							.end()
						.find('span').removeClass('active');
			if (currentYear && currentYear == year) {
				months.eq(this.date.getUTCMonth()).addClass('active');
			}
			if (year < startYear || year > endYear) {
				months.addClass('disabled');
			}
			if (year == startYear) {
				months.slice(0, startMonth).addClass('disabled');
			}
			if (year == endYear) {
				months.slice(endMonth+1).addClass('disabled');
			}

			html = '';
			year = parseInt(year/10, 10) * 10;
			var yearCont = this.picker.find('.datepicker-years')
								.find('th:eq(1)')
									.text(year + '-' + (year + 9))
									.end()
								.find('td');
			year -= 1;
			for (var i = -1; i < 11; i++) {
				html += '<span class="year'+(i == -1 || i == 10 ? ' old' : '')+(currentYear == year ? ' active' : '')+(year < startYear || year > endYear ? ' disabled' : '')+'">'+year+'</span>';
				year += 1;
			}
			yearCont.html(html);
		},

		updateNavArrows: function() {
			var d = new Date(this.viewDate),
				year = d.getUTCFullYear(),
				month = d.getUTCMonth();
			switch (this.viewMode) {
				case 0:
					if (this.startDate !== -Infinity && year <= this.startDate.getUTCFullYear() && month <= this.startDate.getUTCMonth()) {
						this.picker.find('.prev').css({visibility: 'hidden'});
					} else {
						this.picker.find('.prev').css({visibility: 'visible'});
					}
					if (this.endDate !== Infinity && year >= this.endDate.getUTCFullYear() && month >= this.endDate.getUTCMonth()) {
						this.picker.find('.next').css({visibility: 'hidden'});
					} else {
						this.picker.find('.next').css({visibility: 'visible'});
					}
					break;
				case 1:
				case 2:
					if (this.startDate !== -Infinity && year <= this.startDate.getUTCFullYear()) {
						this.picker.find('.prev').css({visibility: 'hidden'});
					} else {
						this.picker.find('.prev').css({visibility: 'visible'});
					}
					if (this.endDate !== Infinity && year >= this.endDate.getUTCFullYear()) {
						this.picker.find('.next').css({visibility: 'hidden'});
					} else {
						this.picker.find('.next').css({visibility: 'visible'});
					}
					break;
			}
		},

		click: function(e) {
			e.preventDefault();
			var target = $(e.target).closest('span, td, th');
			if (target.length == 1) {
				switch(target[0].nodeName.toLowerCase()) {
					case 'th':
						switch(target[0].className) {
							case 'switch':
								this.showMode(1);
								break;
							case 'prev':
							case 'next':
								var dir = DPGlobal.modes[this.viewMode].navStep * (target[0].className == 'prev' ? -1 : 1);
								switch(this.viewMode){
									case 0:
										this.viewDate = this.moveMonth(this.viewDate, dir);
										break;
									case 1:
									case 2:
										this.viewDate = this.moveYear(this.viewDate, dir);
										break;
								}
								this.fill();
								break;
							case 'today':
								var date = new Date();
								date = UTCDate(date.getFullYear(), date.getMonth(), date.getDate(), 0, 0, 0);

								this.showMode(-2);
								var which = this.todayBtn == 'linked' ? null : 'view';
								this._setDate(date, which);
								break;
						}
						break;
					case 'span':
						if (!target.is('.disabled')) {
							this.viewDate.setUTCDate(1);
							if (target.is('.month')) {
								var day = 1;
								var month = target.parent().find('span').index(target);
								var year = this.viewDate.getUTCFullYear();
								this.viewDate.setUTCMonth(month);
								this.element.trigger({
									type: 'changeMonth',
									date: this.viewDate
								});
								if ( this.minViewMode == 1 ) {
									this._setDate(UTCDate(year, month, day,0,0,0,0));
								}
							} else {
								var year = parseInt(target.text(), 10)||0;
								var day = 1;
								var month = 0;
								this.viewDate.setUTCFullYear(year);
								this.element.trigger({
									type: 'changeYear',
									date: this.viewDate
								});
								if ( this.minViewMode == 2 ) {
									this._setDate(UTCDate(year, month, day,0,0,0,0));
								}
							}
							this.showMode(-1);
							this.fill();
						}
						break;
					case 'td':
						if (target.is('.day') && !target.is('.disabled')){
							var day = parseInt(target.text(), 10)||1;
							var year = this.viewDate.getUTCFullYear(),
								month = this.viewDate.getUTCMonth();
							if (target.is('.old')) {
								if (month === 0) {
									month = 11;
									year -= 1;
								} else {
									month -= 1;
								}
							} else if (target.is('.new')) {
								if (month == 11) {
									month = 0;
									year += 1;
								} else {
									month += 1;
								}
							}
							this._setDate(UTCDate(year, month, day,0,0,0,0));
						}
						break;
				}
			}
		},

		_setDate: function(date, which){
			if (!which || which == 'date')
				this.date = date;
			if (!which || which  == 'view')
				this.viewDate = date;
			this.fill();
			this.setValue();
			this.element.trigger({
				type: 'changeDate',
				date: this.date
			});
			var element;
			if (this.isInput) {
				element = this.element;
			} else if (this.component){
				element = this.element.find('input');
			}
			if (element) {
				element.change();
				if (this.autoclose && (!which || which == 'date')) {
					this.hide();
				}
			}
		},

		moveMonth: function(date, dir){
			if (!dir) return date;
			var new_date = new Date(date.valueOf()),
				day = new_date.getUTCDate(),
				month = new_date.getUTCMonth(),
				mag = Math.abs(dir),
				new_month, test;
			dir = dir > 0 ? 1 : -1;
			if (mag == 1){
				test = dir == -1
				
					? function(){ return new_date.getUTCMonth() == month; }
					
				
					: function(){ return new_date.getUTCMonth() != new_month; };
				new_month = month + dir;
				new_date.setUTCMonth(new_month);
		
				if (new_month < 0 || new_month > 11)
					new_month = (new_month + 12) % 12;
			} else {
			
				for (var i=0; i<mag; i++)
				
					new_date = this.moveMonth(new_date, dir);
			
				new_month = new_date.getUTCMonth();
				new_date.setUTCDate(day);
				test = function(){ return new_month != new_date.getUTCMonth(); };
			}
			
		
			while (test()){
				new_date.setUTCDate(--day);
				new_date.setUTCMonth(new_month);
			}
			return new_date;
		},

		moveYear: function(date, dir){
			return this.moveMonth(date, dir*12);
		},

		dateWithinRange: function(date){
			return date >= this.startDate && date <= this.endDate;
		},

		keydown: function(e){
			if (this.picker.is(':not(:visible)')){
				if (e.keyCode == 27) 
					this.show();
				return;
			}
			var dateChanged = false,
				dir, day, month,
				newDate, newViewDate;
			switch(e.keyCode){
				case 27: 
					this.hide();
					e.preventDefault();
					break;
				case 37: 
				case 39: 
					if (!this.keyboardNavigation) break;
					dir = e.keyCode == 37 ? -1 : 1;
					if (e.ctrlKey){
						newDate = this.moveYear(this.date, dir);
						newViewDate = this.moveYear(this.viewDate, dir);
					} else if (e.shiftKey){
						newDate = this.moveMonth(this.date, dir);
						newViewDate = this.moveMonth(this.viewDate, dir);
					} else {
						newDate = new Date(this.date);
						newDate.setUTCDate(this.date.getUTCDate() + dir);
						newViewDate = new Date(this.viewDate);
						newViewDate.setUTCDate(this.viewDate.getUTCDate() + dir);
					}
					if (this.dateWithinRange(newDate)){
						this.date = newDate;
						this.viewDate = newViewDate;
						this.setValue();
						this.update();
						e.preventDefault();
						dateChanged = true;
					}
					break;
				case 38: 
				case 40: 
					if (!this.keyboardNavigation) break;
					dir = e.keyCode == 38 ? -1 : 1;
					if (e.ctrlKey){
						newDate = this.moveYear(this.date, dir);
						newViewDate = this.moveYear(this.viewDate, dir);
					} else if (e.shiftKey){
						newDate = this.moveMonth(this.date, dir);
						newViewDate = this.moveMonth(this.viewDate, dir);
					} else {
						newDate = new Date(this.date);
						newDate.setUTCDate(this.date.getUTCDate() + dir * 7);
						newViewDate = new Date(this.viewDate);
						newViewDate.setUTCDate(this.viewDate.getUTCDate() + dir * 7);
					}
					if (this.dateWithinRange(newDate)){
						this.date = newDate;
						this.viewDate = newViewDate;
						this.setValue();
						this.update();
						e.preventDefault();
						dateChanged = true;
					}
					break;
				case 13: 
					this.hide();
					e.preventDefault();
					break;
				case 9: 
					this.hide();
					break;
			}
			if (dateChanged){
				this.element.trigger({
					type: 'changeDate',
					date: this.date
				});
				var element;
				if (this.isInput) {
					element = this.element;
				} else if (this.component){
					element = this.element.find('input');
				}
				if (element) {
					element.change();
				}
			}
		},

		showMode: function(dir) {
			if (dir) {
				this.viewMode = Math.max(this.minViewMode, Math.min(2, this.viewMode + dir));
			}
		
			this.picker.find('>div').hide().filter('.datepicker-'+DPGlobal.modes[this.viewMode].clsName).css('display', 'block');
			this.updateNavArrows();
		}
	};

	$.fn.datepicker = function ( option ) {
		var args = Array.apply(null, arguments);
		args.shift();
		return this.each(function () {
			var $this = $(this),
				data = $this.data('datepicker'),
				options = typeof option == 'object' && option;
			if (!data) {
				$this.data('datepicker', (data = new Datepicker(this, $.extend({}, $.fn.datepicker.defaults,options))));
			}
			if (typeof option == 'string' && typeof data[option] == 'function') {
				data[option].apply(data, args);
			}
		});
	};

	$.fn.datepicker.defaults = {
	};
	$.fn.datepicker.Constructor = Datepicker;
	var dates = $.fn.datepicker.dates = {
		en: {
			days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
			daysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
			daysMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"],
			months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
			monthsShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
			today: "Today"
		}
	};

	var DPGlobal = {
		modes: [
			{
				clsName: 'days',
				navFnc: 'Month',
				navStep: 1
			},
			{
				clsName: 'months',
				navFnc: 'FullYear',
				navStep: 1
			},
			{
				clsName: 'years',
				navFnc: 'FullYear',
				navStep: 10
		}],
		isLeapYear: function (year) {
			return (((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0));
		},
		getDaysInMonth: function (year, month) {
			return [31, (DPGlobal.isLeapYear(year) ? 29 : 28), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][month];
		},
		validParts: /dd?|DD?|mm?|MM?|yy(?:yy)?/g,
		nonpunctuation: /[^ -\/:-@\[\u3400-\u9fff-`{-~\t\n\r]+/g,
		parseFormat: function(format){
			
			var separators = format.replace(this.validParts, '\0').split('\0'),
				parts = format.match(this.validParts);
			if (!separators || !separators.length || !parts || parts.length === 0){
				throw new Error("Invalid date format.");
			}
			return {separators: separators, parts: parts};
		},
		parseDate: function(date, format, language) {
			if (date instanceof Date) return date;
			if (/^[\-+]\d+[dmwy]([\s,]+[\-+]\d+[dmwy])*$/.test(date)) {
				var part_re = /([\-+]\d+)([dmwy])/,
					parts = date.match(/([\-+]\d+)([dmwy])/g),
					part, dir;
				date = new Date();
				for (var i=0; i<parts.length; i++) {
					part = part_re.exec(parts[i]);
					dir = parseInt(part[1]);
					switch(part[2]){
						case 'd':
							date.setUTCDate(date.getUTCDate() + dir);
							break;
						case 'm':
							date = Datepicker.prototype.moveMonth.call(Datepicker.prototype, date, dir);
							break;
						case 'w':
							date.setUTCDate(date.getUTCDate() + dir * 7);
							break;
						case 'y':
							date = Datepicker.prototype.moveYear.call(Datepicker.prototype, date, dir);
							break;
					}
				}
				return UTCDate(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate(), 0, 0, 0);
			}
			var parts = date && date.match(this.nonpunctuation) || [],
				date = new Date(),
				parsed = {},
				setters_order = ['yyyy', 'yy', 'M', 'MM', 'm', 'mm', 'd', 'dd'],
				setters_map = {
					yyyy: function(d,v){ return d.setUTCFullYear(v); },
					yy: function(d,v){ return d.setUTCFullYear(2000+v); },
					m: function(d,v){
						v -= 1;
						while (v<0) v += 12;
						v %= 12;
						d.setUTCMonth(v);
						while (d.getUTCMonth() != v)
							d.setUTCDate(d.getUTCDate()-1);
						return d;
					},
					d: function(d,v){ return d.setUTCDate(v); }
				},
				val, filtered, part;
			setters_map['M'] = setters_map['MM'] = setters_map['mm'] = setters_map['m'];
			setters_map['dd'] = setters_map['d'];
			date = UTCDate(date.getFullYear(), date.getMonth(), date.getDate(), 0, 0, 0);
			var fparts = format.parts.slice();
		
			if (parts.length != fparts.length) {
				fparts = $(fparts).filter(function(i,p){
					return $.inArray(p, setters_order) !== -1;
				}).toArray();
			}
		
			if (parts.length == fparts.length) {
				for (var i=0, cnt = fparts.length; i < cnt; i++) {
					val = parseInt(parts[i], 10);
					part = fparts[i];
					if (isNaN(val)) {
						switch(part) {
							case 'MM':
								filtered = $(dates[language].months).filter(function(){
									var m = this.slice(0, parts[i].length),
										p = parts[i].slice(0, m.length);
									return m == p;
								});
								val = $.inArray(filtered[0], dates[language].months) + 1;
								break;
							case 'M':
								filtered = $(dates[language].monthsShort).filter(function(){
									var m = this.slice(0, parts[i].length),
										p = parts[i].slice(0, m.length);
									return m == p;
								});
								val = $.inArray(filtered[0], dates[language].monthsShort) + 1;
								break;
						}
					}
					parsed[part] = val;
				}
				for (var i=0, s; i<setters_order.length; i++){
					s = setters_order[i];
					if (s in parsed && !isNaN(parsed[s]))
						setters_map[s](date, parsed[s]);
				}
			}
			return date;
		},
		formatDate: function(date, format, language){
			var val = {
				d: date.getUTCDate(),
				D: dates[language].daysShort[date.getUTCDay()],
				DD: dates[language].days[date.getUTCDay()],
				m: date.getUTCMonth() + 1,
				M: dates[language].monthsShort[date.getUTCMonth()],
				MM: dates[language].months[date.getUTCMonth()],
				yy: date.getUTCFullYear().toString().substring(2),
				yyyy: date.getUTCFullYear()
			};
			val.dd = (val.d < 10 ? '0' : '') + val.d;
			val.mm = (val.m < 10 ? '0' : '') + val.m;
			var date = [],
				seps = $.extend([], format.separators);
			for (var i=0, cnt = format.parts.length; i < cnt; i++) {
				if (seps.length)
					date.push(seps.shift());
				date.push(val[format.parts[i]]);
			}
			return date.join('');
		},
		headTemplate: '<thead>'+
							'<tr>'+
								'<th class="prev"><i class="icon-arrow-left"/></th>'+
								'<th colspan="5" class="switch"></th>'+
								'<th class="next"><i class="icon-arrow-right"/></th>'+
							'</tr>'+
						'</thead>',
		contTemplate: '<tbody><tr><td colspan="7"></td></tr></tbody>',
		footTemplate: '<tfoot><tr><th colspan="7" class="today"></th></tr></tfoot>'
	};
	DPGlobal.template = '<div class="datepicker">'+
							'<div class="datepicker-days">'+
								'<table class=" table-condensed">'+
									DPGlobal.headTemplate+
									'<tbody></tbody>'+
									DPGlobal.footTemplate+
								'</table>'+
							'</div>'+
							'<div class="datepicker-months">'+
								'<table class="table-condensed">'+
									DPGlobal.headTemplate+
									DPGlobal.contTemplate+
									DPGlobal.footTemplate+
								'</table>'+
							'</div>'+
							'<div class="datepicker-years">'+
								'<table class="table-condensed">'+
									DPGlobal.headTemplate+
									DPGlobal.contTemplate+
									DPGlobal.footTemplate+
								'</table>'+
							'</div>'+
						'</div>';

	$.fn.datepicker.DPGlobal = DPGlobal;

}( window.jQuery );

(function () {
  
    function addEvent(el, type, fn){
        if (el.addEventListener) {
            el.addEventListener(type, fn, false);
        } else if (el.attachEvent) {
            el.attachEvent('on' + type, function(){
                fn.call(el);
	        });
	    } else {
            throw new Error('not supported or DOM not loaded');
        }
    }   
    
   
    function addResizeEvent(fn){
        var timeout;
               
	    addEvent(window, 'resize', function(){
            if (timeout){
                clearTimeout(timeout);
            }
            timeout = setTimeout(fn, 100);                        
        });
    }    
    
    if (document.documentElement.getBoundingClientRect){
        
        var getOffset = function(el){
            var box = el.getBoundingClientRect();
            var doc = el.ownerDocument;
            var body = doc.body;
            var docElem = doc.documentElement; 
            var clientTop = docElem.clientTop || body.clientTop || 0;
            var clientLeft = docElem.clientLeft || body.clientLeft || 0;
             
          
            var zoom = 1;            
            if (body.getBoundingClientRect) {
                var bound = body.getBoundingClientRect();
                zoom = (bound.right - bound.left) / body.clientWidth;
            }
            
            if (zoom > 1) {
                clientTop = 0;
                clientLeft = 0;
            }
            
            var top = box.top / zoom + (window.pageYOffset || docElem && docElem.scrollTop / zoom || body.scrollTop / zoom) - clientTop, left = box.left / zoom + (window.pageXOffset || docElem && docElem.scrollLeft / zoom || body.scrollLeft / zoom) - clientLeft;
            
            return {
                top: top,
                left: left
            };
        };        
    } else {
       
        var getOffset = function(el){
            var top = 0, left = 0;
            do {
                top += el.offsetTop || 0;
                left += el.offsetLeft || 0;
                el = el.offsetParent;
            } while (el);
            
            return {
                left: left,
                top: top
            };
        };
    }
    
   
    function getBox(el){
        var left, right, top, bottom;
        var offset = getOffset(el);
        left = offset.left;
        top = offset.top;
        
        right = left + el.offsetWidth;
        bottom = top + el.offsetHeight;
        
        return {
            left: left,
            right: right,
            top: top,
            bottom: bottom
        };
    }
    
  
  
    function addStyles(el, styles){
        for (var name in styles) {
            if (styles.hasOwnProperty(name)) {
                el.style[name] = styles[name];
            }
        }
    }
        
      
    function copyLayout(from, to){
	    var box = getBox(from);
        
        addStyles(to, {
	        position: 'absolute',                    
	        left : box.left + 'px',
	        top : box.top + 'px',
	        width : from.offsetWidth + 'px',
	        height : from.offsetHeight + 'px'
	    });        
    }

 
    var toElement = (function(){
        var div = document.createElement('div');
        return function(html){
            div.innerHTML = html;
            var el = div.firstChild;
            return div.removeChild(el);
        };
    })();
            
    
    var getUID = (function(){
        var id = 0;
        return function(){
            return 'ValumsAjaxUpload' + id++;
        };
    })();        
 
    
    function fileFromPath(file){
        return file.replace(/.*(\/|\\)/, "");
    }
    
     
    function getExt(file){
        return (-1 !== file.indexOf('.')) ? file.replace(/.*[.]/, '') : '';
    }

    function hasClass(el, name){        
        var re = new RegExp('\\b' + name + '\\b');        
        return re.test(el.className);
    }    
    function addClass(el, name){
        if ( ! hasClass(el, name)){   
            el.className += ' ' + name;
        }
    }    
    function removeClass(el, name){
        var re = new RegExp('\\b' + name + '\\b');                
        el.className = el.className.replace(re, '');        
    }
    
    function removeNode(el){
        el.parentNode.removeChild(el);
    }

   
    window.AjaxUpload = function(button, options){
        this._settings = {
        
            action: 'upload.php',
          
            name: 'userfile',
           
            multiple: false,
            
            data: {},
           
            autoSubmit: true,
          
           
            responseType: false,
            
            hoverClass: 'hover',
            
            focusClass: 'focus',
          
            disabledClass: 'disabled',            
            			
            onChange: function(file, extension){
            },
        
            onSubmit: function(file, extension){
            },
           
            onComplete: function(file, response){
            }
        };
        
        for (var i in options) {
            if (options.hasOwnProperty(i)){
                this._settings[i] = options[i];
            }
        }
                
        
        if (button.jquery){
      
            button = button[0];
        } else if (typeof button == "string") {
            if (/^#.*/.test(button)){
         					
                button = button.slice(1);                
            }
            
            button = document.getElementById(button);
        }
        
        if ( ! button || button.nodeType !== 1){
            throw new Error("Please make sure that you're passing a valid element"); 
        }
                
        if ( button.nodeName.toUpperCase() == 'A'){
                            
            addEvent(button, 'click', function(e){
                if (e && e.preventDefault){
                    e.preventDefault();
                } else if (window.event){
                    window.event.returnValue = false;
                }
            });
        }
                    
     
        this._button = button;        
                  
        this._input = null;
      
        this._disabled = false;
        
     
        this.enable();        
        
        this._rerouteClicks();
    };
    
 
    AjaxUpload.prototype = {
        setData: function(data){
            this._settings.data = data;
        },
        disable: function(){            
            addClass(this._button, this._settings.disabledClass);
            this._disabled = true;
            
            var nodeName = this._button.nodeName.toUpperCase();            
            if (nodeName == 'INPUT' || nodeName == 'BUTTON'){
                this._button.setAttribute('disabled', 'disabled');
            }            
            
           
            if (this._input){
                if (this._input.parentNode) {
               
                    this._input.parentNode.style.visibility = 'hidden';
                }
            }
        },
        enable: function(){
            removeClass(this._button, this._settings.disabledClass);
            this._button.removeAttribute('disabled');
            this._disabled = false;
            
        },
     
        _createInput: function(){ 
            var self = this;
                        
            var input = document.createElement("input");
            input.setAttribute('type', 'file');
            input.setAttribute('name', this._settings.name);
            if(this._settings.multiple) input.setAttribute('multiple', 'multiple');
            
            addStyles(input, {
                'position' : 'absolute',
                
                'right' : 0,
                'margin' : 0,
                'padding' : 0,
                'fontSize' : '480px',
              
                'height' : '150px',
                'cursor' : 'pointer'
            });            

            var div = document.createElement("div");                        
            addStyles(div, {
                'display' : 'block',
                'position' : 'absolute',
                'overflow' : 'hidden',
                'margin' : 0,
                'padding' : 0,                
                'opacity' : 0,
             
                'direction' : 'ltr',
               
                'zIndex': 2147483583
            });
            
                   
            if ( div.style.opacity !== "0") {
                if (typeof(div.filters) == 'undefined'){
                    throw new Error('Opacity not supported by the browser');
                }
                div.style.filter = "alpha(opacity=0)";
            }            
            
            addEvent(input, 'change', function(){
                 
                if ( ! input || input.value === ''){                
                    return;                
                }
                            
                var file = fileFromPath(input.value);
                                
                if (false === self._settings.onChange.call(self, file, getExt(file))){
                    self._clearInput();                
                    return;
                }
                
                if (self._settings.autoSubmit) {
                    self.submit();
                }
            });            

            addEvent(input, 'mouseover', function(){
                addClass(self._button, self._settings.hoverClass);
            });
            
            addEvent(input, 'mouseout', function(){
                removeClass(self._button, self._settings.hoverClass);
                removeClass(self._button, self._settings.focusClass);
                
                if (input.parentNode) {
                   
                    input.parentNode.style.visibility = 'hidden';
                }
            });   
                        
            addEvent(input, 'focus', function(){
                addClass(self._button, self._settings.focusClass);
            });
            
            addEvent(input, 'blur', function(){
                removeClass(self._button, self._settings.focusClass);
            });
            
	        div.appendChild(input);
            document.body.appendChild(div);
              
            this._input = input;
        },
        _clearInput : function(){
            if (!this._input){
                return;
            }            
                                                           
            removeNode(this._input.parentNode);
            this._input = null;                                                                   
            this._createInput();
            
            removeClass(this._button, this._settings.hoverClass);
            removeClass(this._button, this._settings.focusClass);
        },
       
        _rerouteClicks: function(){
            var self = this;
            
            

            addEvent(self._button, 'mouseover', function(){
                if (self._disabled){
                    return;
                }
                                
                if ( ! self._input){
	                self._createInput();
                }
                
                var div = self._input.parentNode;                            
                copyLayout(self._button, div);
                div.style.visibility = 'visible';
                                
            });
            
            
                     
                                         
        },
        
        _createIframe: function(){
            
            var id = getUID();            
             
                                
 
            var iframe = toElement('<iframe name="' + id + '" />');
                     
            iframe.setAttribute('id', id);

            
            iframe.style.display = 'none';
            document.body.appendChild(iframe);
            
            return iframe;
        },
      
        _createForm: function(iframe){
            var settings = this._settings;
                        
                           
            var form = toElement('<form method="post" enctype="multipart/form-data"></form>');
                        
            form.setAttribute('action', settings.action);
            form.setAttribute('target', iframe.name);                                   
            form.style.display = 'none';
            document.body.appendChild(form);
            
            for (var prop in settings.data) {
                if (settings.data.hasOwnProperty(prop)){
                    var el = document.createElement("input");
                    el.setAttribute('type', 'hidden');
                    el.setAttribute('name', prop);
                    el.setAttribute('value', settings.data[prop]);
                    form.appendChild(el);
                }
            }
            return form;
        },
        
        _getResponse : function(iframe, file){            
      
            var toDeleteFlag = false, self = this, settings = this._settings;   
               
            addEvent(iframe, 'load', function(){                
                
                if (
                    iframe.src == "javascript:'%3Chtml%3E%3C/html%3E';" ||
                
                    iframe.src == "javascript:'<html></html>';"){                                                                        
                      
                        
                        if (toDeleteFlag) {
                         
                            setTimeout(function(){
                                removeNode(iframe);
                            }, 0);
                        }
                                                
                        return;
                }
                
                var doc = iframe.contentDocument ? iframe.contentDocument : window.frames[iframe.id].document;
                
             
                if (doc.readyState && doc.readyState != 'complete') {
              
                   return;
                }
              
                if (doc.body && doc.body.innerHTML == "false") {
                   
                    return;
                }
                
                var response;
                
                if (doc.XMLDocument) {
                   
                    response = doc.XMLDocument;
                } else if (doc.body){
              
                    response = doc.body.innerHTML;
                    
                    if (settings.responseType && settings.responseType.toLowerCase() == 'json') {
                        
                        if (doc.body.firstChild && doc.body.firstChild.nodeName.toUpperCase() == 'PRE') {
                            doc.normalize();
                            response = doc.body.firstChild.firstChild.nodeValue;
                        }
                        
                        if (response) {
                            response = eval("(" + response + ")");
                        } else {
                            response = {};
                        }
                    }
                } else {
                  
                    response = doc;
                }
                
                settings.onComplete.call(self, file, response);
                
              
                toDeleteFlag = true;
                
                iframe.src = "javascript:'<html></html>';";
            });            
        },        
       
        submit: function(){                        
            var self = this, settings = this._settings;
            
            if ( ! this._input || this._input.value === ''){                
                return;                
            }
                                    
            var file = fileFromPath(this._input.value);
            
          
            if (false === settings.onSubmit.call(this, file, getExt(file))){
                this._clearInput();                
                return;
            }
            
              
            var iframe = this._createIframe();
            var form = this._createForm(iframe);
            
           
            removeNode(this._input.parentNode);            
            removeClass(self._button, self._settings.hoverClass);
            removeClass(self._button, self._settings.focusClass);
                        
            form.appendChild(this._input);
                        
            form.submit();

                          
            removeNode(form); form = null;                          
            removeNode(this._input); this._input = null;            

            this._getResponse(iframe, file);            

                       
            this._createInput();
        }
    };
})();

;(function(window, document, $) {

	var isInputSupported = 'placeholder' in document.createElement('input'),
	    isTextareaSupported = 'placeholder' in document.createElement('textarea'),
	    prototype = $.fn,
	    valHooks = $.valHooks,
	    hooks,
	    placeholder;

	if (isInputSupported && isTextareaSupported) {

		placeholder = prototype.placeholder = function() {
			return this;
		};

		placeholder.input = placeholder.textarea = true;

	} else {

		placeholder = prototype.placeholder = function() {
			var $this = this;
			$this
				.filter((isInputSupported ? 'textarea' : ':input') + '[placeholder]')
				.not('.placeholder')
				.bind({
					'focus.placeholder': clearPlaceholder,
					'blur.placeholder': setPlaceholder
				})
				.data('placeholder-enabled', true)
				.trigger('blur.placeholder');
			return $this;
		};

		placeholder.input = isInputSupported;
		placeholder.textarea = isTextareaSupported;

		hooks = {
			'get': function(element) {
				var $element = $(element);
				return $element.data('placeholder-enabled') && $element.hasClass('placeholder') ? '' : element.value;
			},
			'set': function(element, value) {
				var $element = $(element);
				if (!$element.data('placeholder-enabled')) {
					return element.value = value;
				}
				if (value == '') {
					element.value = value;
					if (element != document.activeElement) {
						setPlaceholder.call(element);
					}
				} else if ($element.hasClass('placeholder')) {
					clearPlaceholder.call(element, true, value) || (element.value = value);
				} else {
					element.value = value;
				}
				return $element;
			}
		};

		isInputSupported || (valHooks.input = hooks);
		isTextareaSupported || (valHooks.textarea = hooks);

		$(function() {
		
			$(document).delegate('form', 'submit.placeholder', function() {
			
				var $inputs = $('.placeholder', this).each(clearPlaceholder);
				setTimeout(function() {
					$inputs.each(setPlaceholder);
				}, 10);
			});
		});

	
		$(window).bind('beforeunload.placeholder', function() {
			$('.placeholder').each(function() {
				this.value = '';
			});
		});

	}

	function args(elem) {
	
		var newAttrs = {},
		    rinlinejQuery = /^jQuery\d+$/;
		$.each(elem.attributes, function(i, attr) {
			if (attr.specified && !rinlinejQuery.test(attr.name)) {
				newAttrs[attr.name] = attr.value;
			}
		});
		return newAttrs;
	}

	function clearPlaceholder(event, value) {
		var input = this,
		    $input = $(input);
		if (input.value == $input.attr('placeholder') && $input.hasClass('placeholder')) {
			if ($input.data('placeholder-password')) {
				$input = $input.hide().next().show().attr('id', $input.removeAttr('id').data('placeholder-id'));
				if (event === true) {
					return $input[0].value = value;
				}
				$input.focus();
			} else {
				input.value = '';
				$input.removeClass('placeholder');
				input == document.activeElement && input.select();
			}
		}
	}

	function setPlaceholder() {
		var $replacement,
		    input = this,
		    $input = $(input),
		    $origInput = $input,
		    id = this.id;
		if (input.value == '') {
			if (input.type == 'password') {
				if (!$input.data('placeholder-textinput')) {
					try {
						$replacement = $input.clone().attr({ 'type': 'text' });
					} catch(e) {
						$replacement = $('<input>').attr($.extend(args(this), { 'type': 'text' }));
					}
					$replacement
						.removeAttr('name')
						.data({
							'placeholder-password': true,
							'placeholder-id': id
						})
						.bind('focus.placeholder', clearPlaceholder);
					$input
						.data({
							'placeholder-textinput': $replacement,
							'placeholder-id': id
						})
						.before($replacement);
				}
				$input = $input.removeAttr('id').hide().prev().attr('id', id).show();
			
			}
			$input.addClass('placeholder');
			$input[0].value = $input.attr('placeholder');
		} else {
			$input.removeClass('placeholder');
		}
	}

}(this, document, jQuery));

(function ($) {
    "use strict";
  
    $.fn.extend({
        maxlength: function (options, callback) {

            var documentBody = $('body'),
                defaults = {
                    alwaysShow: false, 
                    threshold: 10, 
                    warningClass: "badge badge-success",
                    limitReachedClass: "badge badge-important",
                    separator: ' / ',
                    preText: '',
                    postText: '',
                    placement: 'bottom',
                    validate: false
                         
                };

            if ($.isFunction(options) && !callback) {
                callback = options;
                options = {};
            }
            options = $.extend(defaults, options);

        
            function inputLength(input) {
                var text = input.val(),
                    matches = text.match(/\n/g),
                    breaks = matches ? matches.length : 0;
                return input.val().length + breaks;
            }

        
            function charsLeftThreshold(input, thereshold, maxlength) {
                var output = true;
                if (!options.alwaysShow && (maxlength - inputLength(input) > thereshold)) {
                    output = false;
                }
                return output;
            }


            function remainingChars(input, maxlength) {
                var length = maxlength - inputLength(input);
                return length;
            }

         
            function showRemaining(indicator) {
                indicator.css({
                    display: 'block'
                });
            }

        
            function hideRemaining(indicator) {
                indicator.css({
                    display: 'none'
                });
            }

        
            function updateMaxLengthHTML(maxLengthThisInput, typedChars) {
                var output = '';
                if (options.preText) {
                    output += options.preText;
                }
                output = output + typedChars + options.separator + maxLengthThisInput;
                if (options.postText) {
                    output += options.postText;
                }
                return output;
            }

        
            function manageRemainingVisibility(remaining, currentInput, maxLengthCurrentInput, maxLengthIndicator) {
                maxLengthIndicator.html(updateMaxLengthHTML(maxLengthCurrentInput, remaining));

                if (remaining > 0) {
                    if (charsLeftThreshold(currentInput, options.threshold, maxLengthCurrentInput)) {
                        showRemaining(maxLengthIndicator.removeClass(options.limitReachedClass).addClass(options.warningClass));
                    } else {
                        hideRemaining(maxLengthIndicator);
                    }
                } else {
                    showRemaining(maxLengthIndicator.removeClass(options.warningClass).addClass(options.limitReachedClass));
                }
            }

      
            function getPosition(currentInput) {
                var el = currentInput[0];
                return $.extend({}, (typeof el.getBoundingClientRect === 'function') ? el.getBoundingClientRect() : {
                    width: el.offsetWidth,
                    height: el.offsetHeight
                }, currentInput.offset());
            }

      
            function place(currentInput, maxLengthIndicator) {
                var pos = getPosition(currentInput),
                    offset = currentInput.offset(),
                    inputOuter = currentInput.outerWidth(),
                    outerWidth = maxLengthIndicator.outerWidth(),
                    actualWidth = maxLengthIndicator.width(),
                    actualHeight = maxLengthIndicator.height();

                switch (options.placement) {
                case 'bottom':
                    maxLengthIndicator.css({top: offset.top + pos.height, left: offset.left + pos.width / 2 - actualWidth / 2});
                    break;
                case 'top':
                    maxLengthIndicator.css({top: pos.top - actualHeight, left: pos.left + pos.width / 2 - actualWidth / 2});
                    break;
                case 'left':
                    maxLengthIndicator.css({top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left - actualWidth});
                    break;
                case 'right':
                    maxLengthIndicator.css({top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left + pos.width});
                    break;
                case 'bottom-right':
                    maxLengthIndicator.css({top: pos.top + pos.height, left: pos.left + pos.width});
                    break;
                case 'top-right':
                    maxLengthIndicator.css({top: offset.top - actualHeight, left: offset.left + inputOuter});
                    break;
                case 'top-left':
                    maxLengthIndicator.css({top: offset.top - actualHeight, left: offset.left - outerWidth});
                    break;
                case 'bottom-left':
                    maxLengthIndicator.css({top: offset.top + currentInput.outerHeight(), left: offset.left - outerWidth});
                    break;
                case 'centered-right':
                    maxLengthIndicator.css({top: offset.top + (actualHeight / 2), left: offset.left + inputOuter - outerWidth - 3});
                    break;
                }
            }

          
            function getMaxLength(currentInput) {
                return currentInput.attr('maxlength') || currentInput.attr('size');
            }

            return this.each(function() {

                var currentInput = $(this),
                    maxLengthCurrentInput = getMaxLength(currentInput),
                    maxLengthIndicator = $('<span></span>').css({
                        display: 'none',
                        position: 'absolute',
                        whiteSpace: 'nowrap',
                        zIndex: 999
                    }).html(updateMaxLengthHTML(maxLengthCurrentInput, '0'));

                documentBody.append(maxLengthIndicator);

                currentInput.focus(function() {
                    var remaining = remainingChars(currentInput, maxLengthCurrentInput = getMaxLength(currentInput));
                    maxLengthIndicator.css({
                        zIndex: 99999
                    });

                    manageRemainingVisibility(remaining, currentInput, maxLengthCurrentInput, maxLengthIndicator);
                    place(currentInput, maxLengthIndicator);
                });

                currentInput.blur(function() {
                    maxLengthIndicator.css('display', 'none');
                });

                currentInput.keyup(function() {
                    var remaining = remainingChars(currentInput, maxLengthCurrentInput = getMaxLength(currentInput)),
                        output = true;
                    if (options.validate && remaining < 0) {
                        output = false;
                    } else {
                        manageRemainingVisibility(remaining, currentInput, maxLengthCurrentInput, maxLengthIndicator);
                    }
                    return output;
                });
                currentInput.keydown(function(event) {
                    var remaining = remainingChars(currentInput, maxLengthCurrentInput = getMaxLength(currentInput));
                    if (remaining <= 0 && (event.keyCode !== 46 && event.keyCode !== 8)) {
                        return false;
                    }
                });
            });
        }
    });
}(jQuery));

$(document).ready(function() {
    $('.row-fluid ul.thumbnails li.span6:nth-child(2n + 3)').css('margin-left','0px');
    $('.row-fluid ul.thumbnails li.span4:nth-child(3n + 4)').css('margin-left','0px');
    $('.row-fluid ul.thumbnails li.span3:nth-child(4n + 5)').css('margin-left','0px');
    $('.row-fluid ul.thumbnails li.span2:nth-child(6n + 7)').css('margin-left','0px'); 
	
    $('.row-fluid .span6:nth-child(2n + 3)').css('margin-left','0px');
    $('.row-fluid .span4:nth-child(3n + 4)').css('margin-left','0px');
    $('.row-fluid .span3:nth-child(4n + 5)').css('margin-left','0px');
    $('.row-fluid .span2:nth-child(6n + 7)').css('margin-left','0px'); 
    
	if ($('.masonry-container').length>0){
	  $('.masonry-container').masonry({
		itemSelector: '.masonry-item',
		columnWidth: 100,
		isAnimated: true,
		isFitWidth: true
	  });		
	}	
	
	if ($('.masonry-media-container').length>0){
	  $('.masonry-media-container').masonry({
		itemSelector: '.masonry-media-item',
		columnWidth: 480,
		isAnimated: true,
		isFitWidth: true
	  });		
	}	
});

$(window).on('load', function() {
	$('input, textarea').placeholder();
	
	if ($('.masonry-container').length>0){
		$('.masonry-container').fadeIn();		
	}
	
	if ($('.maxlength').length>0){
		$('.maxlength').maxlength({
	        alwaysShow: true,
	        threshold: 10,
	        warningClass: "label label-success",
	        limitReachedClass: "label label-important"
	    });
	}
	
	if ($('#sortByDistance').length>0){
		$('body').on('click', '#sortByDistance',
			function(){
				if(geo_position_js.init()){
					showWaitOverlay();
					geo_position_js.getCurrentPosition(sortbydistance_success_callback,sortbydistance_error_callback,{enableHighAccuracy:true});
				}else
					hideWaitOverlay();
				
				return false;
			}
		);
	}
	

	if($('#uploadCredential').length>0){
	        var campaignId = $('#uploadCredential').attr('campaignId');
	        var session = window.location.href;
	        console.log(session);
            session = session.split('jobapplication/')[1];
        
            session = session.split('/false')[0];
          
            session = session.split('/')[0];
            
			$('#uploadCredential').fileinput({
			    
			    uploadUrl: '/files/uploadcomputer/'+session,
			    uploadAsync: true,
			    browseOnZoneClick: true,
			    showUpload: false,
			    showCancel: false,
			    showRemove: false,
			    showClose: false,
			    previewFileIcon: '<i class="fa fa-file"></i>',
			    allowedPreviewTypes: null,
			    allowedPreviewMimeTypes: null,
			    previewFileIconSettings: {
			        'doc': '<i class="fa fa-file-word-o"></i>',
			        'xls': '<i class="fa fa-file-excel-o"></i>',
			        'ppt': '<i class="fa fa-file-powerpoint-o"></i>',
			        'jpg': '<i class="fa fa-file-photo-o"></i>',
			        'pdf': '<i class="fa fa-file-pdf-o"></i>',
			        'zip': '<i class="fa fa-file-archive-o"></i>',
			    },
			    fileActionSettings: {
			    	showUpload: false,
			    	showRemove: false,
			    	showZoom: false
			    },
			    uploadExtraData: function(previewId, index) {
			    	var obj = {};
			    	if(index != null){
			    		var files = $('#uploadCredential').fileinput('getFileStack');
			        	obj = {type: 'FILE', name: files[index].name};
			    	}
			        return obj;
			    }
			}).on('filebatchselected', function(event, files) {
				$('#uploadCredential').fileinput('upload');
			}).on('fileuploaded', function(event, data, previewId, index) {
				if(data.response.status=='success'){
				    console.log('Sucess Generate');
				    
					$('#fileId').val(data.response.id);
					$('#caption').text(data.response.name);
					$('#captionFormModal').modal('show').on('hidden.bs.modal', function(e){
						$('#uploadCredential').fileinput('clear');
					});
					
					if ($('#expressApplicationsForm').length>0){
						var url = $('#expressApplicationsForm').attr('action');
						var data = $('#expressApplicationsForm').serializeObject();
						var postUrl = url+'?validate=false';
						
						$.ajax({
							url: postUrl,
							data: data,
							dataType: 'json',
							type: 'post',
							async: false,
							cache: false,
							success: function (json) {
								;
							}
						});	
					}
					
					
					
				}else{
				    
				    console.log('Error Generate');
				    
					alert(data.response.errorMessage);	
					$('#uploadCredential').fileinput('clear').fileinput('refresh').fileinput('enable');
				}
			});
	    }
	
	$('.datepicker').datepicker({
		format: 'yyyy-mm-dd',
		autoclose: true
	});
	
});

function sortbydistance_success_callback(p)
{
	var href = $('#sortByDistance').attr('href');
	var lat = p.coords.latitude.toFixed(2);
	var lng = p.coords.longitude.toFixed(2);
	window.location.href=href+'&lat='+lat+'&lng='+lng;
}

function sortbydistance_error_callback(p)
{
	hideWaitOverlay();
}