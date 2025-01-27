<script>

      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
$(document).ready(function() {
    let prevHoveredItem = null;

    $('li.mega-menu-item.mega-menu-flyout').on('mouseenter', function() {
        if (prevHoveredItem && prevHoveredItem !== this) {
            $(prevHoveredItem).removeClass('hovered');
        }
        $(this).addClass('hovered');
        prevHoveredItem = this;
    });

    $('li.mega-menu-item.mega-menu-flyout').on('mouseleave', function(event) {
        // Check if the mouse is moving to a descendant element
        if (!$(event.relatedTarget).closest('li.mega-menu-item.mega-menu-flyout').length) {
            $(this).removeClass('hovered');
            prevHoveredItem = null;
        }
    });

    $('ul.mega-sub-menu').on('mouseenter', function() {
        // Do nothing when entering the sub-menu
    });

    $('ul.mega-sub-menu').on('mouseleave', function(event) {
        // Check if the mouse is moving outside of the mega-menu-item
        if (!$(event.relatedTarget).closest('li.mega-menu-item.mega-menu-flyout').length) {
            $(this).closest('li.mega-menu-item.mega-menu-flyout').removeClass('hovered');
            prevHoveredItem = null;
        }
    });
});


$(document).ready(function(){
var totalCount=$(".alljobsBlock  .span8  ul.nav-tabs  li").length;
$(".alljobspage-job-count.q").text('('+totalCount+')');
}); 
</script>

<script>
$(window).resize(function() {
    console.log('resize!');
    var parentW = $('.slick-track').parent().width();
    var width = $('.racecourses__slide').outerWidth();
    $('.slick-track').css('width', Math.ceil(parentW + 3));
    $('.slick-slide').css('width', Math.ceil(parentW / 4));
    console.log('more than 1200');
});

$( window ).on("load", function() {
     console.log('resize!');
    var parentW = $('.slick-track').parent().width();
    var width = $('.racecourses__slide').outerWidth();
    $('.slick-track').css('width', Math.ceil(parentW + 3));
    $('.slick-slide').css('width', Math.ceil(parentW / 4));
    console.log('more than 1200');
});


$(window).on("load", function () {
    setTimeout(function () {
        if($('.alljobspage-job-count').text() == '()'){
            $('.alljobspage-job-count').text('(0)');
        }
        
        if($('.jobcategoriesBlock-Job-Count').text() == '()'){
            $('.jobcategoriesBlock-Job-Count').text('(0)');
        }
        
        if($('.joblocationsBlock-Span-count').text() == '()'){
            $('.joblocationsBlock-Span-count').text('(0)');
        }
        
        if($('.jobtypesBlock-Span-count').text() == '()'){
            $('.jobtypesBlock-Span-count').text('(0)');
        }
    }, 1000);
});
</script>

<script>
$(window).on("load", function () {
    setTimeout(function () {
        $(".hasSimilarJobs .multipleselect").attr("multiple", true);
        $(".hasSimilarJobs .multipleselect").selectpicker({
            style: "form-control input-lg",
            liveSearch: true,
            showTick: true,
            showCaption: false,
        });
    }, 1000);
});
   
    
    $(window).on("load", function () {
        setTimeout(function () {
            $(".hasJobCategories-Menu option[value='']").remove();
            $(".SEARCH_AGENT_ALL_LOCATIONS-Menu option[value='']").remove();
            $(".hasJobTypes-Menu option[value='']").remove();
            
            $("select#tags option").each(function(index) {
			    var storevalue = this.text;
				$(this).val(storevalue);
			});
			
            $("option[value='All Categories']").remove();
            $(".SEARCH_AGENT_ALL_LOCATIONS-Menu option[value='']").remove();
            $(".select#jobTypes option[value='']").remove();
        
            $(".hasSimilarJobs select#tags").selectpicker("refresh");
            $(".hasSimilarJobs select#locations").selectpicker("refresh");
            $(".hasSimilarJobs select#jobTypes").selectpicker("refresh");
            
        }, 1500);
    });


    {{#jobsearchresultsBlock}}
    $(window).on("load", function () {
        setTimeout(function () {
            $(".hasJobCategories-Menu option[value='']").remove();
            $(".SEARCH_AGENT_ALL_LOCATIONS-Menu option[value='']").remove();
            $(".hasJobTypes-Menu option[value='']").remove();
            
            $("select#tags option").each(function(index) {
			    var storevalue = this.text;
				$(this).val(storevalue);
			});
			
            $("option[value='All Categories']").remove();
            $(".SEARCH_AGENT_ALL_LOCATIONS-Menu option[value='']").remove();
            
            $("select#tags").selectpicker("refresh");
            $("select#locations").selectpicker("refresh");
            
            {{#hasJobCategories}}
            var hasJobCategoriesMenu = $('.hasJobCategories-Menu select').attr('current').length;
            console.log(hasJobCategoriesMenu);
            {{/hasJobCategories}}
            
            {{#jobLocations}}
            var search_agent_all_locations = $('.SEARCH_AGENT_ALL_LOCATIONS-Menu select').attr('current').length;
            console.log(search_agent_all_locations);
            {{/jobLocations}}
            
            {{#hasJobTypes}}
            var hasjobtypes = $('.hasJobTypes-Menu select').attr('current').length;
            console.log(hasjobtypes);
            {{/hasJobTypes}}
            
            
            var jobDaysElapsed = $('.jobDaysElapsed-Menu .filter-option').text().length;
            console.log(jobDaysElapsed);
            
            if(hasJobCategoriesMenu > 0 || search_agent_all_locations > 0 || hasjobtypes > 0 || jobDaysElapsed > 17){
                console.log('Condition True');
                $('.Advanced-button').trigger('click');
                
                
                {{#hasJobCategories}}
                if(hasJobCategoriesMenu > 0){
                    var tagsstore = $("#tags").attr("current");
                    var tagstringsotre = tagsstore.split(",");
                    for (var i = 0; i < tagstringsotre.length; i++) {
                        var tagstringpass = "[value='" + tagstringsotre[i] + "'"+"]";
                        $(tagstringpass).attr("selected", "selected");
                        $("select#tags").selectpicker("refresh");
                    }
                }else{
                    
                }
                {{/hasJobCategories}}
                
                
                {{#hasJobTypes}}
                if(hasjobtypes > 0){
                    var jobTypesstore = $("#jobTypes").attr("current");
                    var jobTypesnewstore = jobTypesstore.replaceAll("<br/>", ",");
                    var jobTypesstringsotre = jobTypesnewstore.split(",");
                    for (var i = 0; i < jobTypesstringsotre.length; i++) {
                        console.log(jobTypesstringsotre[i]);
                        var jobTypesstringpass = "[value='" + jobTypesstringsotre[i] + "'"+"]";
                        console.log(jobTypesstringpass);
                        $(jobTypesstringpass).attr("selected", "selected");
                        $("select#jobTypes").selectpicker("refresh");
                    }
                }else{
                    
                }
                {{/hasJobTypes}}
                
                {{#jobLocations}}
                if(search_agent_all_locations > 0){
                    var store = $("#locations").attr("current");
                    var newstore = store.replaceAll("<br/>", ",");
                    var stringsotre = newstore.split(",");
                    for (var i = 0; i < stringsotre.length; i++) {
                        console.log(stringsotre[i]);
                        var stringpass = "[value=" + stringsotre[i] + "]";
                        console.log(stringpass);
                        $(stringpass).attr("selected", "selected");
                        $("select#locations").selectpicker("refresh");
                    }
                    
                }else{
                    
                }
                {{/jobLocations}}
                
                
            }
        }, 1500);
    });
    {{/jobsearchresultsBlock}}
    
    {{#indexBlock}}
    $(window).on("load", function () {
        setTimeout(function () {
            $('#daysElapsed').selectpicker('val', '');
            $('#tags').selectpicker('val', '');
            $('#locations').selectpicker('val', '');
            $('#jobTypes').selectpicker('val', '');
        }, 1500);
        
        if(navigator.userAgent.indexOf('Safari') !=-1 && navigator.userAgent.indexOf('Chrome') == -1){
            setTimeout(function () {
                $('#daysElapsed').selectpicker('val', '');
                $('#tags').selectpicker('val', '');
                $('#locations').selectpicker('val', '');
                $('#jobTypes').selectpicker('val', '');
            }, 1500);
        }
    });
    
    window.addEventListener("pageshow", function(evt){
            if(evt.persisted){
            setTimeout(function(){
                window.location.reload();
            },10);
        }
    }, false);
    {{/indexBlock}}
    
    {{#jobcategoriesBlock}}
    $(window).on("load", function () {
        setTimeout(function () {
            $('#daysElapsed').selectpicker('val', '');
            $('#tags').selectpicker('val', '');
            $('#locations').selectpicker('val', '');
            $('#jobTypes').selectpicker('val', '');
        }, 1500);
        
        if(navigator.userAgent.indexOf('Safari') !=-1 && navigator.userAgent.indexOf('Chrome') == -1){
            setTimeout(function () {
                $('#daysElapsed').selectpicker('val', '');
                $('#tags').selectpicker('val', '');
                $('#locations').selectpicker('val', '');
                $('#jobTypes').selectpicker('val', '');
            }, 1500);
        }
    });
    
    window.addEventListener("pageshow", function(evt){
            if(evt.persisted){
            setTimeout(function(){
                window.location.reload();
            },10);
        }
    }, false);
    {{/jobcategoriesBlock}}
    
    {{#joblocationsBlock}}
    $(window).on("load", function () {
        setTimeout(function () {
            $('#daysElapsed').selectpicker('val', '');
            $('#tags').selectpicker('val', '');
            $('#locations').selectpicker('val', '');
            $('#jobTypes').selectpicker('val', '');
        }, 1500);
        
        if(navigator.userAgent.indexOf('Safari') !=-1 && navigator.userAgent.indexOf('Chrome') == -1){
            setTimeout(function () {
                $('#daysElapsed').selectpicker('val', '');
                $('#tags').selectpicker('val', '');
                $('#locations').selectpicker('val', '');
                $('#jobTypes').selectpicker('val', '');
            }, 1500);
        }
    });
    
    window.addEventListener("pageshow", function(evt){
            if(evt.persisted){
            setTimeout(function(){
                window.location.reload();
            },10);
        }
    }, false);
    {{/joblocationsBlock}}
    
    {{#jobtypesBlock}}
    $(window).on("load", function () {
        setTimeout(function () {
            $('#daysElapsed').selectpicker('val', '');
            $('#tags').selectpicker('val', '');
            $('#locations').selectpicker('val', '');
            $('#jobTypes').selectpicker('val', '');
        }, 1500);
        
        if(navigator.userAgent.indexOf('Safari') !=-1 && navigator.userAgent.indexOf('Chrome') == -1){
            setTimeout(function () {
                $('#daysElapsed').selectpicker('val', '');
                $('#tags').selectpicker('val', '');
                $('#locations').selectpicker('val', '');
                $('#jobTypes').selectpicker('val', '');
            }, 1500);
        }
    });
    
    window.addEventListener("pageshow", function(evt){
            if(evt.persisted){
            setTimeout(function(){
                window.location.reload();
            },10);
        }
    }, false);
    {{/jobtypesBlock}}
    
    {{#childindexBlock}}
    $(window).on("load", function () {
        setTimeout(function () {
            $('#daysElapsed').selectpicker('val', '');
            $('#tags').selectpicker('val', '');
            $('#locations').selectpicker('val', '');
            $('#jobTypes').selectpicker('val', '');
        }, 1500);
        
        if(navigator.userAgent.indexOf('Safari') !=-1 && navigator.userAgent.indexOf('Chrome') == -1){
            setTimeout(function () {
                $('#daysElapsed').selectpicker('val', '');
                $('#tags').selectpicker('val', '');
                $('#locations').selectpicker('val', '');
                $('#jobTypes').selectpicker('val', '');
            }, 1500);
        }
    });
    
    window.addEventListener("pageshow", function(evt){
            if(evt.persisted){
            setTimeout(function(){
                window.location.reload();
            },10);
        }
    }, false);
    {{/childindexBlock}}
    
    {{#alljobsBlock}}
    $(window).on("load", function () {
        setTimeout(function () {
            $('#daysElapsed').selectpicker('val', '');
            $('#tags').selectpicker('val', '');
            $('#locations').selectpicker('val', '');
            $('#jobTypes').selectpicker('val', '');
        }, 1500);
        
        if(navigator.userAgent.indexOf('Safari') !=-1 && navigator.userAgent.indexOf('Chrome') == -1){
            setTimeout(function () {
                $('#daysElapsed').selectpicker('val', '');
                $('#tags').selectpicker('val', '');
                $('#locations').selectpicker('val', '');
                $('#jobTypes').selectpicker('val', '');
            }, 1500);
        }
    });
    
    window.addEventListener("pageshow", function(evt){
            if(evt.persisted){
            setTimeout(function(){
                window.location.reload();
            },10);
        }
    }, false);
    {{/alljobsBlock}}

    $(document).ready(function () {
        $(window).scroll(function () {
	    	if($(this).scrollTop() > 50)
	        	$('#back-to-top').fadeIn();
	        else
	        	$('#back-to-top').fadeOut();
	    });
	     
	    $('#back-to-top').click(function () {
	    	$('body,html').animate({
	        	scrollTop: 0
	        }, 800);
	    	return false;
	    });	
	    
	    $(".jobsearchActionUri .Advanced-submit").click(function () {
	        
	    });
	    
        $(".Advanced-button").click(function () {
            $(this).text(function(i, v){
               return v == 'Simple' ? 'Advanced' : 'Simple'
            });
            
            $('.multipleselect option[value=""]').remove();
            
            $(".jobsearchActionUri").slideToggle();
            
         
        });
        
          $('.jobsubmittedblock .carousel').slick({
			autoplay: true,
			dots: true,
			infinite: true,
			mobileFirst: true,
			arrows: false,
		  	slidesToShow: 4,
		  	adaptiveHeight: true,
		  	responsive: [
		  	    {
		  	      breakpoint: 768,
		  	      settings: {
		  	        slidesToShow: 4
		  	      }
		  	    },
		  	    {
		  	      breakpoint: 480,
		  	      settings: {
		  	        slidesToShow: 2
		  	      }
		  	    },
		  	    {
		  	      breakpoint: 0,
		  	      settings: {
		  	        slidesToShow: 1
		  	      }
		  	    }
		  	]
		});
        
        $('.jobinteractivemapBlock .carousel').slick({
			autoplay: true,
			dots: true,
			infinite: true,
			mobileFirst: true,
			arrows: false,
		  	slidesToShow: 4,
		  	adaptiveHeight: true,
		  	responsive: [
		  	    {
		  	      breakpoint: 768,
		  	      settings: {
		  	        slidesToShow: 4
		  	      }
		  	    },
		  	    {
		  	      breakpoint: 480,
		  	      settings: {
		  	        slidesToShow: 2
		  	      }
		  	    },
		  	    {
		  	      breakpoint: 0,
		  	      settings: {
		  	        slidesToShow: 1
		  	      }
		  	    }
		  	]
		});
		
	
		{{#expressapplicationsBlock}}
		$(".expressapplicationsBlock .expressapplicationsBlock-Pointer").click(function () {
	        if($('.expressapplicationsBlock-Heading').hasClass('DescriptionClickable')){
	            
	        }else{
	            $('#descriptionModal').modal('show');
	        }
	    });
        {{/expressapplicationsBlock}}
        
	
        if (navigator.userAgent.indexOf("Safari") != -1 && navigator.userAgent.indexOf("Chrome") == -1) {
            $("body").addClass("safari");
        }
        
        $("#loginToggle").click(function (e) {
            e.preventDefault();
            $("#loginToggle").toggleClass("showing");
            $("div#headerQuickLinks").toggleClass("show");
            $(body).toggleClass("-clip");
        });

        $(document).ready(function () {
            $("#sm_menu_ham").click(function () {
                $(".sm_menu_outer").toggleClass("active");
                $(".last-overlay").toggleClass("active");
                $(this).toggleClass("active");
            });

            $(".last-overlay").click(function () {
                $(".sm_menu_outer").removeClass("active");
                $(this).removeClass("active");
                $("#sm_menu_ham").removeClass("active");
            });
        });
    });
</script>

<script>
    $(document).ready(function () {
        {{#childindexBlock}}
	
		var imagelenth = $('.Align-Ment-Image img').attr('src').length;
		if(imagelenth > 0){
		    $('.Align-Ment-Image').addClass('is-active');
		    $('.Align-Ment-Image').css('display','block');
		}else{
		    $('.Align-Ment-Image').css('display','none');
		    $('.Align-Ment-Image').removeClass('is-active');
		}
		{{/childindexBlock}}
    });
    
    $(window).on('load', function() {
        $(".JOBS_BY_TYPES").each(function() {
            $(this).html(function(index, text) {
                return text.replace('Full-Time', 'Full Time');
            });
            
            $(this).html(function(index, text) {
                return text.replace('Part-Time', 'Part Time');
            });
        });
    });
    
    $(window).on("load", function () {
        {{#hasGeneralJobApplication}}
            var general = $(".expressapplicationsBlock-Pointer").text();
            if (general == "Australian Turf Club Careers STAGING " || general == "Australian Turf Club Careers ") {
                $('.expressapplicationsBlock-Heading').addClass('DescriptionClickable')
                $('.expressapplicationsBlock-Pointer').addClass('DescriptionPointer')
                $('.expressapplicationsBlock-Pointer').text('Australian Turf Club - Expressions of Interest ');
            } else {
            
            }
        {{/hasGeneralJobApplication}}
    });
</script>

{{#languageIsoLong}}
<script>
var addToHomeConfig = {
	message:'{{languageIsoLong}}'
};
</script>
{{/languageIsoLong}}
{{{RESOURCES.addtohomescreenJs}}}



{{#gotoValidationId}}
<script>
$(window).load(function(){
	if(contentscroll!=null) contentscroll.scrollToElement('#validation-{{gotoValidationId}}', '1s');
});
</script>
{{/gotoValidationId}}

{{#promptForLocation}}
<script>
if(geo_position_js.init())
	geo_position_js.getCurrentPosition(success_callback,error_callback,{enableHighAccuracy:false});
else
	no_geo_position();

function success_callback(p)
{
	var lat = p.coords.latitude.toFixed(2);
	var lng = p.coords.longitude.toFixed(2);
	$.ajax({
		url: '/cgps',
		data: 'spottingId={{spottingId}}&campaignId={{campaignId}}&latitude=' + lat + '&longitude=' + lng,
		dataType: 'json',
		type: 'post',
		cache: false,
		success: function(json){}
	});
	
	{{#startWithJobListings}}
		{{^geo}}
			var path = window.location.pathname.substring(1);
			var currentUrl = window.location.href;
			var ts = new Date().getTime();
			if(path!=null && path.length==0){
				if(currentUrl.indexOf('lat')==-1 || currentUrl.indexOf('lng')==-1)
				    window.location.href = '{{homeUri}}?lat=' + lat + '&lng=' + lng + '&ts=' + ts;
			}
		{{/geo}}
	{{/startWithJobListings}}
}

function no_geo_position()
{
	$.ajax({
		url: '/cgps',
		data: 'spottingId={{spottingId}}&campaignId={{campaignId}}',
		dataType: 'json',
		type: 'post',
		cache: false,
		success: function(json){}
	});	
}

function error_callback(p)
{
	no_geo_position();
}
</script>
{{/promptForLocation}}

{{#jobinteractivemapBlock}}
<link rel="stylesheet" href="https://d85d2091fbd9099e9848-baf6a8d764ee3356bb2df97581153978.ssl.cf1.rackcdn.com/leaflet.css">
<script src="https://d85d2091fbd9099e9848-baf6a8d764ee3356bb2df97581153978.ssl.cf1.rackcdn.com/leaflet.js"></script>
<link rel="stylesheet" href="https://d85d2091fbd9099e9848-baf6a8d764ee3356bb2df97581153978.ssl.cf1.rackcdn.com/MarkerCluster.css">
<link rel="stylesheet" href="https://d85d2091fbd9099e9848-baf6a8d764ee3356bb2df97581153978.ssl.cf1.rackcdn.com/MarkerCluster.Default.css">
<script src="https://d85d2091fbd9099e9848-baf6a8d764ee3356bb2df97581153978.ssl.cf1.rackcdn.com/leaflet.markercluster.js"></script>
<link rel="stylesheet" href="https://d85d2091fbd9099e9848-baf6a8d764ee3356bb2df97581153978.ssl.cf1.rackcdn.com/map.css">
<style> .leaflet-pane {z-index:0 !important;} </style>
<script type = "text/javascript">
    var tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }),
    
    latlng = L.latLng(-28.6506323, 133.0790443);
    
    var map = L.map('map', {
      center: latlng,
      zoom: 4,
      layers: [tiles]
    });
    
    var markers = L.markerClusterGroup();
    var url = "/l/recruiting/jobswithlocations/{{campaignId}}";
    $.getJSON(url, function(json) {
      $.each(json.jobs, function(i, job) {
        if (job.latitude != null && job.longitude != null) {
          var title = '<a target="_blank" href="' + job.keyword + '">' + job.name + "</a><br/>" + job.cityRegionCountry;
          var marker = L.marker(new L.LatLng(job.latitude, job.longitude), {
            title: title
          });
          marker.bindPopup(title);
          markers.addLayer(marker);
        }
    });
});
map.addLayer(markers);
</script>
{{/jobinteractivemapBlock}}