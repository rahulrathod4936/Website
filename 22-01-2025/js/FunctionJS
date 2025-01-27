function validEmail(email){
	var valid = true;
	$.ajax({
		url: '/availability/validemail',
		data: 'address='+email,
		dataType: 'json',
		type: 'get',
		async: false,
		cache: false,
		success: function (json) {
   			valid = json.message;
		}
	});
	return valid;
}

(function($,undefined){
  '$:nomunge';
  $.fn.serializeObject = function(){
    var obj = {};
    
    $.each( this.serializeArray(), function(i,o){
      if(o.name!='_wysihtml5_mode' && o.name!='days'){
	      var n = o.name,
	        v = o.value;
	
	        obj[n] = obj[n] === undefined ? v
	          : $.isArray( obj[n] ) ? obj[n].concat( v )
	          : [ obj[n], v ];
      }
    });
    
    return obj;
  };
  
})(jQuery);

function loadmore(containerClass, itemClass){
	showWaitOverlay();
	curpage = curpage + 1;
	$('#load').load($('#page-nav a').attr('href')+curpage+' .'+containerClass, function(){
		var content = $(this).children('.'+containerClass).children('.'+itemClass);
		var more = $(this).children('.'+containerClass).attr('more');
		if(content.length>0){
			$.each(content, function(key, value) { 
				$('.'+containerClass).append(value); 
			});
			$('#load').empty();
			
			if(more==''){
				$('#loadmore').hide();
				$('.loadmore-container').hide();
			}
		}else{
			$('#loadmore').hide();
			$('.loadmore-container').hide();
		}
		hideWaitOverlay();
	});
}

function showWaitOverlay(){

	var $overlay = '<div class="processbar-new"><div class="overlay-container"><div class="overlay-position"><div class="container-fluid"><div class="row"><div class="col-xs-10 col-xs-offset-1 col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-2 col-lg-6 col-lg-offset-3 text-center"><div class="progress"><div class="progress-bar progress-bar-striped active" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style="width: 100%;"><span class="sr-only"></span></div></div></div></div></div></div></div></div>';
	$('BODY').prepend($overlay);
}

function hideWaitOverlay(){
	$('.overlay-container').remove();
}

(function( $ ){

  "use strict";

  $.fn.fitVids = function( options ) {
    var settings = {
      customSelector: null
    };

    if(!document.getElementById('fit-vids-style')) {

      var div = document.createElement('div'),
          ref = document.getElementsByTagName('base')[0] || document.getElementsByTagName('script')[0];

      div.className = 'fit-vids-style';
      div.id = 'fit-vids-style';
      div.style.display = 'none';
      div.innerHTML = '&shy;<style>         \
        .fluid-width-video-wrapper {        \
           width: 100%;                     \
           position: relative;              \
           padding: 0;                      \
        }                                   \
                                            \
        .fluid-width-video-wrapper iframe,  \
        .fluid-width-video-wrapper object,  \
        .fluid-width-video-wrapper embed {  \
           position: absolute;              \
           top: 0;                          \
           left: 0;                         \
           width: 100%;                     \
           height: 100%;                    \
        }                                   \
      </style>';

      ref.parentNode.insertBefore(div,ref);

    }

    if ( options ) {
      $.extend( settings, options );
    }

    return this.each(function(){
      var selectors = [
        "iframe[src*='player.vimeo.com']",
        "iframe[src*='youtube.com']",
        "iframe[src*='youtube-nocookie.com']",
        "iframe[src*='kickstarter.com'][src*='video.html']",
        "iframe[src*='youku.com']",
        "iframe[src*='tudou.com']",
        "object",
        "embed"
      ];

      if (settings.customSelector) {
        selectors.push(settings.customSelector);
      }

      var $allVideos = $(this).find(selectors.join(','));
      $allVideos = $allVideos.not("object object");

      $allVideos.each(function(){
        var $this = $(this);
        if (this.tagName.toLowerCase() === 'embed' && $this.parent('object').length || $this.parent('.fluid-width-video-wrapper').length) { return; }
        var height = ( this.tagName.toLowerCase() === 'object' || ($this.attr('height') && !isNaN(parseInt($this.attr('height'), 10))) ) ? parseInt($this.attr('height'), 10) : $this.height(),
            width = !isNaN(parseInt($this.attr('width'), 10)) ? parseInt($this.attr('width'), 10) : $this.width(),
            aspectRatio = height / width;
        if(!$this.attr('id')){
          var videoID = 'fitvid' + Math.floor(Math.random()*999999);
          $this.attr('id', videoID);
        }
        $this.wrap('<div class="fluid-width-video-wrapper"></div>').parent('.fluid-width-video-wrapper').css('padding-top', (aspectRatio * 100)+"%");
        $this.removeAttr('height').removeAttr('width');
      });
    });
  };
})( jQuery );

if (navigator.appName != 'Microsoft Internet Explorer') {	

	(function() {
	  var Quo;

	  Quo = (function() {
	    var $$, EMPTY_ARRAY, Q;

	    EMPTY_ARRAY = [];
	    $$ = function(selector, children) {
	      var dom;

	      if (!selector) {
	        return Q();
	      } else if ($$.toType(selector) === "function") {
	        return $$(document).ready(selector);
	      } else {
	        dom = $$.getDOMObject(selector, children);
	        return Q(dom, selector);
	      }
	    };
	    Q = function(dom, selector) {
	      dom = dom || EMPTY_ARRAY;
	      dom.__proto__ = Q.prototype;
	      dom.selector = selector || '';
	      return dom;
	    };
	    $$.extend = function(target) {
	      Array.prototype.slice.call(arguments, 1).forEach(function(source) {
	        var key, _results;

	        _results = [];
	        for (key in source) {
	          _results.push(target[key] = source[key]);
	        }
	        return _results;
	      });
	      return target;
	    };
	    Q.prototype = $$.fn = {};
	    return $$;
	  })();

	  window.Quo = Quo;

	  "$$" in window || (window.$$ = Quo);

	}).call(this);

	(function() {
	  (function($$) {
	    var DEFAULT, JSONP_ID, MIME_TYPES, _isJsonP, _parseResponse, _xhrError, _xhrForm, _xhrHeaders, _xhrStatus, _xhrSuccess, _xhrTimeout;

	    DEFAULT = {
	      TYPE: "GET",
	      MIME: "json"
	    };
	    MIME_TYPES = {
	      script: "text/javascript, application/javascript",
	      json: "application/json",
	      xml: "application/xml, text/xml",
	      html: "text/html",
	      text: "text/plain"
	    };
	    JSONP_ID = 0;
	    $$.ajaxSettings = {
	      type: DEFAULT.TYPE,
	      async: true,
	      success: {},
	      error: {},
	      context: null,
	      dataType: DEFAULT.MIME,
	      headers: {},
	      xhr: function() {
	        return new window.XMLHttpRequest();
	      },
	      crossDomain: false,
	      timeout: 0
	    };
	    $$.ajax = function(options) {
	      var abortTimeout, error, settings, xhr;

	      settings = $$.mix($$.ajaxSettings, options);
	      if (settings.type === DEFAULT.TYPE) {
	        settings.url += $$.serializeParameters(settings.data, "?");
	      } else {
	        settings.data = $$.serializeParameters(settings.data);
	      }
	      if (_isJsonP(settings.url)) {
	        return $$.jsonp(settings);
	      }
	      xhr = settings.xhr();
	      xhr.onreadystatechange = function() {
	        if (xhr.readyState === 4) {
	          clearTimeout(abortTimeout);
	          return _xhrStatus(xhr, settings);
	        }
	      };
	      xhr.open(settings.type, settings.url, settings.async);
	      _xhrHeaders(xhr, settings);
	      if (settings.timeout > 0) {
	        abortTimeout = setTimeout((function() {
	          return _xhrTimeout(xhr, settings);
	        }), settings.timeout);
	      }
	      try {
	        xhr.send(settings.data);
	      } catch (_error) {
	        error = _error;
	        xhr = error;
	        _xhrError("Resource not found", xhr, settings);
	      }
	      if (settings.async) {
	        return xhr;
	      } else {
	        return _parseResponse(xhr, settings);
	      }
	    };
	    $$.jsonp = function(settings) {
	      var abortTimeout, callbackName, script, xhr;

	      if (settings.async) {
	        callbackName = "jsonp" + (++JSONP_ID);
	        script = document.createElement("script");
	        xhr = {
	          abort: function() {
	            $$(script).remove();
	            if (callbackName in window) {
	              return window[callbackName] = {};
	            }
	          }
	        };
	        abortTimeout = void 0;
	        window[callbackName] = function(response) {
	          clearTimeout(abortTimeout);
	          $$(script).remove();
	          delete window[callbackName];
	          return _xhrSuccess(response, xhr, settings);
	        };
	        script.src = settings.url.replace(RegExp("=\\?"), "=" + callbackName);
	        $$("head").append(script);
	        if (settings.timeout > 0) {
	          abortTimeout = setTimeout((function() {
	            return _xhrTimeout(xhr, settings);
	          }), settings.timeout);
	        }
	        return xhr;
	      } else {
	        return console.error("QuoJS.ajax: Unable to make jsonp synchronous call.");
	      }
	    };
	    $$.get = function(url, data, success, dataType) {
	      return $$.ajax({
	        url: url,
	        data: data,
	        success: success,
	        dataType: dataType
	      });
	    };
	    $$.post = function(url, data, success, dataType) {
	      return _xhrForm("POST", url, data, success, dataType);
	    };
	    $$.put = function(url, data, success, dataType) {
	      return _xhrForm("PUT", url, data, success, dataType);
	    };
	    $$["delete"] = function(url, data, success, dataType) {
	      return _xhrForm("DELETE", url, data, success, dataType);
	    };
	    $$.json = function(url, data, success) {
	      return $$.ajax({
	        url: url,
	        data: data,
	        success: success,
	        dataType: DEFAULT.MIME
	      });
	    };
	    $$.serializeParameters = function(parameters, character) {
	      var parameter, serialize;

	      if (character == null) {
	        character = "";
	      }
	      serialize = character;
	      for (parameter in parameters) {
	        if (parameters.hasOwnProperty(parameter)) {
	          if (serialize !== character) {
	            serialize += "&";
	          }
	          serialize += "" + (encodeURIComponent(parameter)) + "=" + (encodeURIComponent(parameters[parameter]));
	        }
	      }
	      if (serialize === character) {
	        return "";
	      } else {
	        return serialize;
	      }
	    };
	    _xhrStatus = function(xhr, settings) {
	      if ((xhr.status >= 200 && xhr.status < 300) || xhr.status === 0) {
	        if (settings.async) {
	          _xhrSuccess(_parseResponse(xhr, settings), xhr, settings);
	        }
	      } else {
	        _xhrError("QuoJS.ajax: Unsuccesful request", xhr, settings);
	      }
	    };
	    _xhrSuccess = function(response, xhr, settings) {
	      settings.success.call(settings.context, response, xhr);
	    };
	    _xhrError = function(type, xhr, settings) {
	      settings.error.call(settings.context, type, xhr, settings);
	    };
	    _xhrHeaders = function(xhr, settings) {
	      var header;

	      if (settings.contentType) {
	        settings.headers["Content-Type"] = settings.contentType;
	      }
	      if (settings.dataType) {
	        settings.headers["Accept"] = MIME_TYPES[settings.dataType];
	      }
	      for (header in settings.headers) {
	        xhr.setRequestHeader(header, settings.headers[header]);
	      }
	    };
	    _xhrTimeout = function(xhr, settings) {
	      xhr.onreadystatechange = {};
	      xhr.abort();
	      _xhrError("QuoJS.ajax: Timeout exceeded", xhr, settings);
	    };
	    _xhrForm = function(method, url, data, success, dataType) {
	      return $$.ajax({
	        type: method,
	        url: url,
	        data: data,
	        success: success,
	        dataType: dataType,
	        contentType: "application/x-www-form-urlencoded"
	      });
	    };
	    _parseResponse = function(xhr, settings) {
	      var error, response;

	      response = xhr.responseText;
	      if (response) {
	        if (settings.dataType === DEFAULT.MIME) {
	          try {
	            response = JSON.parse(response);
	          } catch (_error) {
	            error = _error;
	            response = error;
	            _xhrError("QuoJS.ajax: Parse Error", xhr, settings);
	          }
	        } else {
	          if (settings.dataType === "xml") {
	            response = xhr.responseXML;
	          }
	        }
	      }
	      return response;
	    };
	    return _isJsonP = function(url) {
	      return RegExp("=\\?").test(url);
	    };
	  })(Quo);

	}).call(this);

	(function() {
	  (function($$) {
	    var EMPTY_ARRAY, HTML_CONTAINERS, IS_HTML_FRAGMENT, OBJECT_PROTOTYPE, TABLE, TABLE_ROW, _compact, _flatten;

	    EMPTY_ARRAY = [];
	    OBJECT_PROTOTYPE = Object.prototype;
	    IS_HTML_FRAGMENT = /^\s*<(\w+|!)[^>]*>/;
	    TABLE = document.createElement('table');
	    TABLE_ROW = document.createElement('tr');
	    HTML_CONTAINERS = {
	      "tr": document.createElement("tbody"),
	      "tbody": TABLE,
	      "thead": TABLE,
	      "tfoot": TABLE,
	      "td": TABLE_ROW,
	      "th": TABLE_ROW,
	      "*": document.createElement("div")
	    };
	    $$.toType = function(obj) {
	      return OBJECT_PROTOTYPE.toString.call(obj).match(/\s([a-z|A-Z]+)/)[1].toLowerCase();
	    };
	    $$.isOwnProperty = function(object, property) {
	      return OBJECT_PROTOTYPE.hasOwnProperty.call(object, property);
	    };
	    $$.getDOMObject = function(selector, children) {
	      var domain, elementTypes, type;

	      domain = null;
	      elementTypes = [1, 9, 11];
	      type = $$.toType(selector);
	      if (type === "array") {
	        domain = _compact(selector);
	      } else if (type === "string" && IS_HTML_FRAGMENT.test(selector)) {
	        domain = $$.fragment(selector.trim(), RegExp.$1);
	        selector = null;
	      } else if (type === "string") {
	        domain = $$.query(document, selector);
	        if (children) {
	          if (domain.length === 1) {
	            domain = $$.query(domain[0], children);
	          } else {
	            domain = $$.map(function() {
	              return $$.query(domain, children);
	            });
	          }
	        }
	      } else if (elementTypes.indexOf(selector.nodeType) >= 0 || selector === window) {
	        domain = [selector];
	        selector = null;
	      }
	      return domain;
	    };
	    $$.map = function(elements, callback) {
	      var i, key, value, values;

	      values = [];
	      i = void 0;
	      key = void 0;
	      if ($$.toType(elements) === "array") {
	        i = 0;
	        while (i < elements.length) {
	          value = callback(elements[i], i);
	          if (value != null) {
	            values.push(value);
	          }
	          i++;
	        }
	      } else {
	        for (key in elements) {
	          value = callback(elements[key], key);
	          if (value != null) {
	            values.push(value);
	          }
	        }
	      }
	      return _flatten(values);
	    };
	    $$.each = function(elements, callback) {
	      var i, key;

	      i = void 0;
	      key = void 0;
	      if ($$.toType(elements) === "array") {
	        i = 0;
	        while (i < elements.length) {
	          if (callback.call(elements[i], i, elements[i]) === false) {
	            return elements;
	          }
	          i++;
	        }
	      } else {
	        for (key in elements) {
	          if (callback.call(elements[key], key, elements[key]) === false) {
	            return elements;
	          }
	        }
	      }
	      return elements;
	    };
	    $$.mix = function() {
	      var arg, argument, child, len, prop;

	      child = {};
	      arg = 0;
	      len = arguments.length;
	      while (arg < len) {
	        argument = arguments[arg];
	        for (prop in argument) {
	          if ($$.isOwnProperty(argument, prop) && argument[prop] !== undefined) {
	            child[prop] = argument[prop];
	          }
	        }
	        arg++;
	      }
	      return child;
	    };
	    $$.fragment = function(markup, tag) {
	      var container;

	      if (tag == null) {
	        tag = "*";
	      }
	      if (!(tag in HTML_CONTAINERS)) {
	        tag = "*";
	      }
	      container = HTML_CONTAINERS[tag];
	      container.innerHTML = "" + markup;
	      return $$.each(Array.prototype.slice.call(container.childNodes), function() {
	        return container.removeChild(this);
	      });
	    };
	    $$.fn.map = function(fn) {
	      return $$.map(this, function(el, i) {
	        return fn.call(el, i, el);
	      });
	    };
	    $$.fn.instance = function(property) {
	      return this.map(function() {
	        return this[property];
	      });
	    };
	    $$.fn.filter = function(selector) {
	      return $$([].filter.call(this, function(element) {
	        return element.parentNode && $$.query(element.parentNode, selector).indexOf(element) >= 0;
	      }));
	    };
	    $$.fn.forEach = EMPTY_ARRAY.forEach;
	    $$.fn.indexOf = EMPTY_ARRAY.indexOf;
	    _compact = function(array) {
	      return array.filter(function(item) {
	        return item !== void 0 && item !== null;
	      });
	    };
	    return _flatten = function(array) {
	      if (array.length > 0) {
	        return [].concat.apply([], array);
	      } else {
	        return array;
	      }
	    };
	  })(Quo);

	}).call(this);

	(function() {
	  (function($$) {
	    $$.fn.attr = function(name, value) {
	      if (this.length === 0) {
	        null;
	      }
	      if ($$.toType(name) === "string" && value === void 0) {
	        return this[0].getAttribute(name);
	      } else {
	        return this.each(function() {
	          return this.setAttribute(name, value);
	        });
	      }
	    };
	    $$.fn.removeAttr = function(name) {
	      return this.each(function() {
	        return this.removeAttribute(name);
	      });
	    };
	    $$.fn.data = function(name, value) {
	      return this.attr("data-" + name, value);
	    };
	    $$.fn.removeData = function(name) {
	      return this.removeAttr("data-" + name);
	    };
	    $$.fn.val = function(value) {
	      if ($$.toType(value) === "string") {
	        return this.each(function() {
	          return this.value = value;
	        });
	      } else {
	        if (this.length > 0) {
	          return this[0].value;
	        } else {
	          return null;
	        }
	      }
	    };
	    $$.fn.show = function() {
	      return this.style("display", "block");
	    };
	    $$.fn.hide = function() {
	      return this.style("display", "none");
	    };
	    $$.fn.height = function() {
	      var offset;

	      offset = this.offset();
	      return offset.height;
	    };
	    $$.fn.width = function() {
	      var offset;

	      offset = this.offset();
	      return offset.width;
	    };
	    $$.fn.offset = function() {
	      var bounding;

	      bounding = this[0].getBoundingClientRect();
	      return {
	        left: bounding.left + window.pageXOffset,
	        top: bounding.top + window.pageYOffset,
	        width: bounding.width,
	        height: bounding.height
	      };
	    };
	    return $$.fn.remove = function() {
	      return this.each(function() {
	        if (this.parentNode != null) {
	          return this.parentNode.removeChild(this);
	        }
	      });
	    };
	  })(Quo);

	}).call(this);

	(function() {
	  (function($$) {
	    var IS_WEBKIT, SUPPORTED_OS, _current, _detectBrowser, _detectEnvironment, _detectOS, _detectScreen;

	    _current = null;
	    IS_WEBKIT = /WebKit\/([\d.]+)/;
	    SUPPORTED_OS = {
	      Android: /(Android)\s+([\d.]+)/,
	      ipad: /(iPad).*OS\s([\d_]+)/,
	      iphone: /(iPhone\sOS)\s([\d_]+)/,
	      Blackberry: /(BlackBerry|BB10|Playbook).*Version\/([\d.]+)/,
	      FirefoxOS: /(Mozilla).*Mobile[^\/]*\/([\d\.]*)/,
	      webOS: /(webOS|hpwOS)[\s\/]([\d.]+)/
	    };
	    $$.isMobile = function() {
	      _current = _current || _detectEnvironment();
	      return _current.isMobile && _current.os.name !== "firefoxOS";
	    };
	    $$.environment = function() {
	      _current = _current || _detectEnvironment();
	      return _current;
	    };
	    $$.isOnline = function() {
	      return navigator.onLine;
	    };
	    _detectEnvironment = function() {
	      var environment, user_agent;

	      user_agent = navigator.userAgent;
	      environment = {};
	      environment.browser = _detectBrowser(user_agent);
	      environment.os = _detectOS(user_agent);
	      environment.isMobile = !!environment.os;
	      environment.screen = _detectScreen();
	      return environment;
	    };
	    _detectBrowser = function(user_agent) {
	      var is_webkit;

	      is_webkit = user_agent.match(IS_WEBKIT);
	      if (is_webkit) {
	        return is_webkit[0];
	      } else {
	        return user_agent;
	      }
	    };
	    _detectOS = function(user_agent) {
	      var detected_os, os, supported;

	      detected_os = null;
	      for (os in SUPPORTED_OS) {
	        supported = user_agent.match(SUPPORTED_OS[os]);
	        if (supported) {
	          detected_os = {
	            name: (os === "iphone" || os === "ipad" ? "ios" : os),
	            version: supported[2].replace("_", ".")
	          };
	          break;
	        }
	      }
	      return detected_os;
	    };
	    return _detectScreen = function() {
	      return {
	        width: window.innerWidth,
	        height: window.innerHeight
	      };
	    };
	  })(Quo);

	}).call(this);

	(function() {
	  (function($$) {
	    var ELEMENT_ID, EVENTS_DESKTOP, EVENT_METHODS, HANDLERS, READY_EXPRESSION, _createProxy, _createProxyCallback, _environmentEvent, _findHandlers, _getElementId, _subscribe, _unsubscribe;

	    ELEMENT_ID = 1;
	    HANDLERS = {};
	    EVENT_METHODS = {
	      preventDefault: "isDefaultPrevented",
	      stopImmediatePropagation: "isImmediatePropagationStopped",
	      stopPropagation: "isPropagationStopped"
	    };
	    EVENTS_DESKTOP = {
	      touchstart: "mousedown",
	      touchmove: "mousemove",
	      touchend: "mouseup",
	      touch: "click",
	      doubletap: "dblclick",
	      orientationchange: "resize"
	    };
	    READY_EXPRESSION = /complete|loaded|interactive/;
	    $$.fn.on = function(event, selector, callback) {
	      if (selector === "undefined" || $$.toType(selector) === "function") {
	        return this.bind(event, selector);
	      } else {
	        return this.delegate(selector, event, callback);
	      }
	    };
	    $$.fn.off = function(event, selector, callback) {
	      if (selector === "undefined" || $$.toType(selector) === "function") {
	        return this.unbind(event, selector);
	      } else {
	        return this.undelegate(selector, event, callback);
	      }
	    };
	    $$.fn.ready = function(callback) {
	      if (READY_EXPRESSION.test(document.readyState)) {
	        return callback($$);
	      } else {
	        return $$.fn.addEvent(document, "DOMContentLoaded", function() {
	          return callback($$);
	        });
	      }
	    };
	    $$.Event = function(type, touch) {
	      var event, property;

	      event = document.createEvent("Events");
	      event.initEvent(type, true, true, null, null, null, null, null, null, null, null, null, null, null, null);
	      if (touch) {
	        for (property in touch) {
	          event[property] = touch[property];
	        }
	      }
	      return event;
	    };
	    $$.fn.bind = function(event, callback) {
	      return this.each(function() {
	        _subscribe(this, event, callback);
	      });
	    };
	    $$.fn.unbind = function(event, callback) {
	      return this.each(function() {
	        _unsubscribe(this, event, callback);
	      });
	    };
	    $$.fn.delegate = function(selector, event, callback) {
	      return this.each(function(i, element) {
	        _subscribe(element, event, callback, selector, function(fn) {
	          return function(e) {
	            var evt, match;

	            match = $$(e.target).closest(selector, element).get(0);
	            if (match) {
	              evt = $$.extend(_createProxy(e), {
	                currentTarget: match,
	                liveFired: element
	              });
	              return fn.apply(match, [evt].concat([].slice.call(arguments, 1)));
	            }
	          };
	        });
	      });
	    };
	    $$.fn.undelegate = function(selector, event, callback) {
	      return this.each(function() {
	        _unsubscribe(this, event, callback, selector);
	      });
	    };
	    $$.fn.trigger = function(event, touch, originalEvent) {
	      if ($$.toType(event) === "string") {
	        event = $$.Event(event, touch);
	      }
	      if (originalEvent != null) {
	        event.originalEvent = originalEvent;
	      }
	      return this.each(function() {
	        this.dispatchEvent(event);
	      });
	    };
	    $$.fn.addEvent = function(element, event_name, callback) {
	      if (element.addEventListener) {
	        return element.addEventListener(event_name, callback, false);
	      } else if (element.attachEvent) {
	        return element.attachEvent("on" + event_name, callback);
	      } else {
	        return element["on" + event_name] = callback;
	      }
	    };
	    $$.fn.removeEvent = function(element, event_name, callback) {
	      if (element.removeEventListener) {
	        return element.removeEventListener(event_name, callback, false);
	      } else if (element.detachEvent) {
	        return element.detachEvent("on" + event_name, callback);
	      } else {
	        return element["on" + event_name] = null;
	      }
	    };
	    _subscribe = function(element, event, callback, selector, delegate_callback) {
	      var delegate, element_handlers, element_id, handler;

	      event = _environmentEvent(event);
	      element_id = _getElementId(element);
	      element_handlers = HANDLERS[element_id] || (HANDLERS[element_id] = []);
	      delegate = delegate_callback && delegate_callback(callback, event);
	      handler = {
	        event: event,
	        callback: callback,
	        selector: selector,
	        proxy: _createProxyCallback(delegate, callback, element),
	        delegate: delegate,
	        index: element_handlers.length
	      };
	      element_handlers.push(handler);
	      return $$.fn.addEvent(element, handler.event, handler.proxy);
	    };
	    _unsubscribe = function(element, event, callback, selector) {
	      var element_id;

	      event = _environmentEvent(event);
	      element_id = _getElementId(element);
	      return _findHandlers(element_id, event, callback, selector).forEach(function(handler) {
	        delete HANDLERS[element_id][handler.index];
	        return $$.fn.removeEvent(element, handler.event, handler.proxy);
	      });
	    };
	    _getElementId = function(element) {
	      return element._id || (element._id = ELEMENT_ID++);
	    };
	    _environmentEvent = function(event) {
	      var environment_event;

	      environment_event = ($$.isMobile() ? event : EVENTS_DESKTOP[event]);
	      return environment_event || event;
	    };
	    _createProxyCallback = function(delegate, callback, element) {
	      var proxy;

	      callback = delegate || callback;
	      proxy = function(event) {
	        var result;

	        result = callback.apply(element, [event].concat(event.data));
	        if (result === false) {
	          event.preventDefault();
	        }
	        return result;
	      };
	      return proxy;
	    };
	    _findHandlers = function(element_id, event, fn, selector) {
	      return (HANDLERS[element_id] || []).filter(function(handler) {
	        return handler && (!event || handler.event === event) && (!fn || handler.callback === fn) && (!selector || handler.selector === selector);
	      });
	    };
	    return _createProxy = function(event) {
	      var proxy;

	      proxy = $$.extend({
	        originalEvent: event
	      }, event);
	      $$.each(EVENT_METHODS, function(name, method) {
	        proxy[name] = function() {
	          this[method] = function() {
	            return true;
	          };
	          return event[name].apply(event, arguments);
	        };
	        return proxy[method] = function() {
	          return false;
	        };
	      });
	      return proxy;
	    };
	  })(Quo);

	}).call(this);

	(function() {
	  (function($$) {
	    var CURRENT_TOUCH, EVENT, FIRST_TOUCH, GESTURE, GESTURES, HOLD_DELAY, TAPS, TOUCH_TIMEOUT, _angle, _capturePinch, _captureRotation, _cleanGesture, _distance, _fingersPosition, _getTouches, _hold, _isSwipe, _listenTouches, _onTouchEnd, _onTouchMove, _onTouchStart, _parentIfText, _swipeDirection, _trigger;

	    TAPS = null;
	    EVENT = void 0;
	    GESTURE = {};
	    FIRST_TOUCH = [];
	    CURRENT_TOUCH = [];
	    TOUCH_TIMEOUT = void 0;
	    HOLD_DELAY = 650;
	    GESTURES = ["touch", "tap", "singleTap", "doubleTap", "hold", "swipe", "swiping", "swipeLeft", "swipeRight", "swipeUp", "swipeDown", "rotate", "rotating", "rotateLeft", "rotateRight", "pinch", "pinching", "pinchIn", "pinchOut", "drag", "dragLeft", "dragRight", "dragUp", "dragDown"];
	    GESTURES.forEach(function(event) {
	      $$.fn[event] = function(callback) {
	        var event_name;

	        event_name = event === "touch" ? "touchend" : event;
	        return $$(document.body).delegate(this.selector, event_name, callback);
	      };
	      return this;
	    });
	    $$(document).ready(function() {
	      return _listenTouches();
	    });
	    _listenTouches = function() {
	      var environment;

	      environment = $$(document.body);
	      environment.bind("touchstart", _onTouchStart);
	      environment.bind("touchmove", _onTouchMove);
	      environment.bind("touchend", _onTouchEnd);
	      return environment.bind("touchcancel", _cleanGesture);
	    };
	    _onTouchStart = function(event) {
	      var delta, fingers, now, touches;

	      EVENT = event;
	      now = Date.now();
	      delta = now - (GESTURE.last || now);
	      TOUCH_TIMEOUT && clearTimeout(TOUCH_TIMEOUT);
	      touches = _getTouches(event);
	      fingers = touches.length;
	      FIRST_TOUCH = _fingersPosition(touches, fingers);
	      GESTURE.el = $$(_parentIfText(touches[0].target));
	      GESTURE.fingers = fingers;
	      GESTURE.last = now;
	      if (!GESTURE.taps) {
	        GESTURE.taps = 0;
	      }
	      GESTURE.taps++;
	      if (fingers === 1) {
	        if (fingers >= 1) {
	          GESTURE.gap = delta > 0 && delta <= 250;
	        }
	        return setTimeout(_hold, HOLD_DELAY);
	      } else if (fingers === 2) {
	        GESTURE.initial_angle = parseInt(_angle(FIRST_TOUCH), 10);
	        GESTURE.initial_distance = parseInt(_distance(FIRST_TOUCH), 10);
	        GESTURE.angle_difference = 0;
	        return GESTURE.distance_difference = 0;
	      }
	    };
	    _onTouchMove = function(event) {
	      var fingers, is_swipe, touches;

	      EVENT = event;
	      if (GESTURE.el) {
	        touches = _getTouches(event);
	        fingers = touches.length;
	        if (fingers === GESTURE.fingers) {
	          CURRENT_TOUCH = _fingersPosition(touches, fingers);
	          is_swipe = _isSwipe(event);
	          if (is_swipe) {
	            GESTURE.prevSwipe = true;
	          }
	          if (is_swipe || GESTURE.prevSwipe === true) {
	            _trigger("swiping");
	          }
	          if (fingers === 2) {
	            _captureRotation();
	            _capturePinch();
	            event.preventDefault();
	          }
	        } else {
	          _cleanGesture();
	        }
	      }
	      return true;
	    };
	    _isSwipe = function(event) {
	      var it_is, move_horizontal, move_vertical;

	      it_is = false;
	      if (CURRENT_TOUCH[0]) {
	        move_horizontal = Math.abs(FIRST_TOUCH[0].x - CURRENT_TOUCH[0].x) > 30;
	        move_vertical = Math.abs(FIRST_TOUCH[0].y - CURRENT_TOUCH[0].y) > 30;
	        it_is = GESTURE.el && (move_horizontal || move_vertical);
	      }
	      return it_is;
	    };
	    _onTouchEnd = function(event) {
	      var anyevent, drag_direction, pinch_direction, rotation_direction, swipe_direction;

	      EVENT = event;
	      _trigger("touch");
	      if (GESTURE.fingers === 1) {
	        if (GESTURE.taps === 2 && GESTURE.gap) {
	          _trigger("doubleTap");
	          _cleanGesture();
	        } else if (_isSwipe() || GESTURE.prevSwipe) {
	          _trigger("swipe");
	          swipe_direction = _swipeDirection(FIRST_TOUCH[0].x, CURRENT_TOUCH[0].x, FIRST_TOUCH[0].y, CURRENT_TOUCH[0].y);
	          _trigger("swipe" + swipe_direction);
	          _cleanGesture();
	        } else {
	          _trigger("tap");
	          if (GESTURE.taps === 1) {
	            TOUCH_TIMEOUT = setTimeout((function() {
	              _trigger("singleTap");
	              return _cleanGesture();
	            }), 100);
	          }
	        }
	      } else {
	        anyevent = false;
	        if (GESTURE.angle_difference !== 0) {
	          _trigger("rotate", {
	            angle: GESTURE.angle_difference
	          });
	          rotation_direction = GESTURE.angle_difference > 0 ? "rotateRight" : "rotateLeft";
	          _trigger(rotation_direction, {
	            angle: GESTURE.angle_difference
	          });
	          anyevent = true;
	        }
	        if (GESTURE.distance_difference !== 0) {
	          _trigger("pinch", {
	            angle: GESTURE.distance_difference
	          });
	          pinch_direction = GESTURE.distance_difference > 0 ? "pinchOut" : "pinchIn";
	          _trigger(pinch_direction, {
	            distance: GESTURE.distance_difference
	          });
	          anyevent = true;
	        }
	        if (!anyevent && CURRENT_TOUCH[0]) {
	          if (Math.abs(FIRST_TOUCH[0].x - CURRENT_TOUCH[0].x) > 10 || Math.abs(FIRST_TOUCH[0].y - CURRENT_TOUCH[0].y) > 10) {
	            _trigger("drag");
	            drag_direction = _swipeDirection(FIRST_TOUCH[0].x, CURRENT_TOUCH[0].x, FIRST_TOUCH[0].y, CURRENT_TOUCH[0].y);
	            _trigger("drag" + drag_direction);
	          }
	        }
	        _cleanGesture();
	      }
	      return EVENT = void 0;
	    };
	    _fingersPosition = function(touches, fingers) {
	      var i, result;

	      result = [];
	      i = 0;
	      touches = touches[0].targetTouches ? touches[0].targetTouches : touches;
	      while (i < fingers) {
	        result.push({
	          x: touches[i].pageX,
	          y: touches[i].pageY
	        });
	        i++;
	      }
	      return result;
	    };
	    _captureRotation = function() {
	      var angle, diff, i, symbol;

	      angle = parseInt(_angle(CURRENT_TOUCH), 10);
	      diff = parseInt(GESTURE.initial_angle - angle, 10);
	      if (Math.abs(diff) > 20 || GESTURE.angle_difference !== 0) {
	        i = 0;
	        symbol = GESTURE.angle_difference < 0 ? "-" : "+";
	        while (Math.abs(diff - GESTURE.angle_difference) > 90 && i++ < 10) {
	          eval("diff " + symbol + "= 180;");
	        }
	        GESTURE.angle_difference = parseInt(diff, 10);
	        return _trigger("rotating", {
	          angle: GESTURE.angle_difference
	        });
	      }
	    };
	    _capturePinch = function() {
	      var diff, distance;

	      distance = parseInt(_distance(CURRENT_TOUCH), 10);
	      diff = GESTURE.initial_distance - distance;
	      if (Math.abs(diff) > 10) {
	        GESTURE.distance_difference = diff;
	        return _trigger("pinching", {
	          distance: diff
	        });
	      }
	    };
	    _trigger = function(type, params) {
	      if (GESTURE.el) {
	        params = params || {};
	        if (CURRENT_TOUCH[0]) {
	          params.iniTouch = (GESTURE.fingers > 1 ? FIRST_TOUCH : FIRST_TOUCH[0]);
	          params.currentTouch = (GESTURE.fingers > 1 ? CURRENT_TOUCH : CURRENT_TOUCH[0]);
	        }
	        return GESTURE.el.trigger(type, params, EVENT);
	      }
	    };
	    _cleanGesture = function(event) {
	      FIRST_TOUCH = [];
	      CURRENT_TOUCH = [];
	      GESTURE = {};
	      return clearTimeout(TOUCH_TIMEOUT);
	    };
	    _angle = function(touches_data) {
	      var A, B, angle;

	      A = touches_data[0];
	      B = touches_data[1];
	      angle = Math.atan((B.y - A.y) * -1 / (B.x - A.x)) * (180 / Math.PI);
	      if (angle < 0) {
	        return angle + 180;
	      } else {
	        return angle;
	      }
	    };
	    _distance = function(touches_data) {
	      var A, B;

	      A = touches_data[0];
	      B = touches_data[1];
	      return Math.sqrt((B.x - A.x) * (B.x - A.x) + (B.y - A.y) * (B.y - A.y)) * -1;
	    };
	    _getTouches = function(event) {
	      if ($$.isMobile()) {
	        return event.touches;
	      } else {
	        return [event];
	      }
	    };
	    _parentIfText = function(node) {
	      if ("tagName" in node) {
	        return node;
	      } else {
	        return node.parentNode;
	      }
	    };
	    _swipeDirection = function(x1, x2, y1, y2) {
	      var xDelta, yDelta;

	      xDelta = Math.abs(x1 - x2);
	      yDelta = Math.abs(y1 - y2);
	      if (xDelta >= yDelta) {
	        if (x1 - x2 > 0) {
	          return "Left";
	        } else {
	          return "Right";
	        }
	      } else {
	        if (y1 - y2 > 0) {
	          return "Up";
	        } else {
	          return "Down";
	        }
	      }
	    };
	    return _hold = function() {
	      if (GESTURE.last && (Date.now() - GESTURE.last >= HOLD_DELAY)) {
	        _trigger("hold");
	        return GESTURE.taps = 0;
	      }
	    };
	  })(Quo);

	}).call(this);

	(function() {
	  (function($$) {
	    $$.fn.text = function(value) {
	      if (value || $$.toType(value) === "number") {
	        return this.each(function() {
	          return this.textContent = value;
	        });
	      } else {
	        return this[0].textContent;
	      }
	    };
	    $$.fn.html = function(value) {
	      var type;

	      type = $$.toType(value);
	      if (value || type === "number" || type === "string") {
	        return this.each(function() {
	          var element, _i, _len, _results;

	          if (type === "string" || type === "number") {
	            return this.innerHTML = value;
	          } else {
	            this.innerHTML = null;
	            if (type === "array") {
	              _results = [];
	              for (_i = 0, _len = value.length; _i < _len; _i++) {
	                element = value[_i];
	                _results.push(this.appendChild(element));
	              }
	              return _results;
	            } else {
	              return this.appendChild(value);
	            }
	          }
	        });
	      } else {
	        return this[0].innerHTML;
	      }
	    };
	    $$.fn.append = function(value) {
	      var type;

	      type = $$.toType(value);
	      return this.each(function() {
	        var _this = this;

	        if (type === "string") {
	          return this.insertAdjacentHTML("beforeend", value);
	        } else if (type === "array") {
	          return value.each(function(index, value) {
	            return _this.appendChild(value);
	          });
	        } else {
	          return this.appendChild(value);
	        }
	      });
	    };
	    $$.fn.prepend = function(value) {
	      var type;

	      type = $$.toType(value);
	      return this.each(function() {
	        var _this = this;

	        if (type === "string") {
	          return this.insertAdjacentHTML("afterbegin", value);
	        } else if (type === "array") {
	          return value.each(function(index, value) {
	            return _this.insertBefore(value, _this.firstChild);
	          });
	        } else {
	          return this.insertBefore(value, this.firstChild);
	        }
	      });
	    };
	    $$.fn.replaceWith = function(value) {
	      var type;

	      type = $$.toType(value);
	      this.each(function() {
	        var _this = this;

	        if (this.parentNode) {
	          if (type === "string") {
	            return this.insertAdjacentHTML("beforeBegin", value);
	          } else if (type === "array") {
	            return value.each(function(index, value) {
	              return _this.parentNode.insertBefore(value, _this);
	            });
	          } else {
	            return this.parentNode.insertBefore(value, this);
	          }
	        }
	      });
	      return this.remove();
	    };
	    return $$.fn.empty = function() {
	      return this.each(function() {
	        return this.innerHTML = null;
	      });
	    };
	  })(Quo);

	}).call(this);

	(function() {
	  (function($$) {
	    var CLASS_SELECTOR, ID_SELECTOR, PARENT_NODE, TAG_SELECTOR, _filtered, _findAncestors;

	    PARENT_NODE = "parentNode";
	    CLASS_SELECTOR = /^\.([\w-]+)$/;
	    ID_SELECTOR = /^#[\w\d-]+$/;
	    TAG_SELECTOR = /^[\w-]+$/;
	    $$.query = function(domain, selector) {
	      var elements;

	      selector = selector.trim();
	      if (CLASS_SELECTOR.test(selector)) {
	        elements = domain.getElementsByClassName(selector.replace(".", ""));
	      } else if (TAG_SELECTOR.test(selector)) {
	        elements = domain.getElementsByTagName(selector);
	      } else if (ID_SELECTOR.test(selector) && domain === document) {
	        elements = domain.getElementById(selector.replace("#", ""));
	        if (!elements) {
	          elements = [];
	        }
	      } else {
	        elements = domain.querySelectorAll(selector);
	      }
	      if (elements.nodeType) {
	        return [elements];
	      } else {
	        return Array.prototype.slice.call(elements);
	      }
	    };
	    $$.fn.find = function(selector) {
	      var result;

	      if (this.length === 1) {
	        result = Quo.query(this[0], selector);
	      } else {
	        result = this.map(function() {
	          return Quo.query(this, selector);
	        });
	      }
	      return $$(result);
	    };
	    $$.fn.parent = function(selector) {
	      var ancestors;

	      ancestors = (selector ? _findAncestors(this) : this.instance(PARENT_NODE));
	      return _filtered(ancestors, selector);
	    };
	    $$.fn.siblings = function(selector) {
	      var siblings_elements;

	      siblings_elements = this.map(function(index, element) {
	        return Array.prototype.slice.call(element.parentNode.children).filter(function(child) {
	          return child !== element;
	        });
	      });
	      return _filtered(siblings_elements, selector);
	    };
	    $$.fn.children = function(selector) {
	      var children_elements;

	      children_elements = this.map(function() {
	        return Array.prototype.slice.call(this.children);
	      });
	      return _filtered(children_elements, selector);
	    };
	    $$.fn.get = function(index) {
	      if (index === undefined) {
	        return this;
	      } else {
	        return this[index];
	      }
	    };
	    $$.fn.first = function() {
	      return $$(this[0]);
	    };
	    $$.fn.last = function() {
	      return $$(this[this.length - 1]);
	    };
	    $$.fn.closest = function(selector, context) {
	      var candidates, node;

	      node = this[0];
	      candidates = $$(selector);
	      if (!candidates.length) {
	        node = null;
	      }
	      while (node && candidates.indexOf(node) < 0) {
	        node = node !== context && node !== document && node.parentNode;
	      }
	      return $$(node);
	    };
	    $$.fn.each = function(callback) {
	      this.forEach(function(element, index) {
	        return callback.call(element, index, element);
	      });
	      return this;
	    };
	    _findAncestors = function(nodes) {
	      var ancestors;

	      ancestors = [];
	      while (nodes.length > 0) {
	        nodes = $$.map(nodes, function(node) {
	          if ((node = node.parentNode) && node !== document && ancestors.indexOf(node) < 0) {
	            ancestors.push(node);
	            return node;
	          }
	        });
	      }
	      return ancestors;
	    };
	    return _filtered = function(nodes, selector) {
	      if (selector === undefined) {
	        return $$(nodes);
	      } else {
	        return $$(nodes).filter(selector);
	      }
	    };
	  })(Quo);

	}).call(this);

	(function() {
	  (function($$) {
	    var VENDORS, _computedStyle, _existsClass;

	    VENDORS = ["-webkit-", "-moz-", "-ms-", "-o-", ""];
	    $$.fn.addClass = function(name) {
	      return this.each(function() {
	        if (!_existsClass(name, this.className)) {
	          this.className += " " + name;
	          return this.className = this.className.trim();
	        }
	      });
	    };
	    $$.fn.removeClass = function(name) {
	      return this.each(function() {
	        if (!name) {
	          return this.className = "";
	        } else {
	          if (_existsClass(name, this.className)) {
	            return this.className = this.className.replace(name, " ").replace(/\s+/g, " ").trim();
	          }
	        }
	      });
	    };
	    $$.fn.toggleClass = function(name) {
	      return this.each(function() {
	        if (_existsClass(name, this.className)) {
	          return this.className = this.className.replace(name, " ");
	        } else {
	          this.className += " " + name;
	          return this.className = this.className.trim();
	        }
	      });
	    };
	    $$.fn.hasClass = function(name) {
	      return _existsClass(name, this[0].className);
	    };
	    $$.fn.style = function(property, value) {
	      if (value) {
	        return this.each(function() {
	          return this.style[property] = value;
	        });
	      } else {
	        return this[0].style[property] || _computedStyle(this[0], property);
	      }
	    };
	    $$.fn.css = function(property, value) {
	      return this.style(property, value);
	    };
	    $$.fn.vendor = function(property, value) {
	      var vendor, _i, _len, _results;

	      _results = [];
	      for (_i = 0, _len = VENDORS.length; _i < _len; _i++) {
	        vendor = VENDORS[_i];
	        _results.push(this.style("" + vendor + property, value));
	      }
	      return _results;
	    };
	    _existsClass = function(name, className) {
	      var classes;

	      classes = className.split(/\s+/g);
	      return classes.indexOf(name) >= 0;
	    };
	    return _computedStyle = function(element, property) {
	      return document.defaultView.getComputedStyle(element, "")[property];
	    };
	  })(Quo);

	}).call(this);
}


(function( window, $, undefined ){

  'use strict';

  
  var $event = $.event,
      resizeTimeout;

  $event.special.smartresize = {
    setup: function() {
      $(this).bind( "resize", $event.special.smartresize.handler );
    },
    teardown: function() {
      $(this).unbind( "resize", $event.special.smartresize.handler );
    },
    handler: function( event, execAsap ) {
    
      var context = this,
          args = arguments;

     
      event.type = "smartresize";

      if ( resizeTimeout ) { clearTimeout( resizeTimeout ); }
      resizeTimeout = setTimeout(function() {
        $event.dispatch.apply( context, args );

      }, execAsap === "execAsap"? 0 : 100 );
    }
  };

  $.fn.smartresize = function( fn ) {
    return fn ? this.bind( "smartresize", fn ) : this.trigger( "smartresize", ["execAsap"] );
  };



  $.Mason = function( options, element ){
    this.element = $( element );

    this._create( options );
    this._init();
  };

  $.Mason.settings = {
    isResizable: true,
    isAnimated: false,
    animationOptions: {
      queue: false,
      duration: 500
    },
    gutterWidth: 0,
    isRTL: false,
    isFitWidth: false,
    containerStyle: {
      position: 'relative'
    }
  };

  $.Mason.prototype = {

    _filterFindBricks: function( $elems ) {
      var selector = this.options.itemSelector;
   
      return !selector ? $elems : $elems.filter( selector ).add( $elems.find( selector ) );
    },

    _getBricks: function( $elems ) {
      var $bricks = this._filterFindBricks( $elems )
        .css({ position: 'absolute' })
        .addClass('masonry-brick');
      return $bricks;
    },
    
  
    _create : function( options ) {
      
      this.options = $.extend( true, {}, $.Mason.settings, options );
      this.styleQueue = [];

      
      var elemStyle = this.element[0].style;
      this.originalStyle = {
      
        height: elemStyle.height || ''
      };
     
      var containerStyle = this.options.containerStyle;
      for ( var prop in containerStyle ) {
        this.originalStyle[ prop ] = elemStyle[ prop ] || '';
      }

      this.element.css( containerStyle );

      this.horizontalDirection = this.options.isRTL ? 'right' : 'left';

      var x = this.element.css( 'padding-' + this.horizontalDirection );
      var y = this.element.css( 'padding-top' );
      this.offset = {
        x: x ? parseInt( x, 10 ) : 0,
        y: y ? parseInt( y, 10 ) : 0
      };
      
      this.isFluid = this.options.columnWidth && typeof this.options.columnWidth === 'function';

    
      var instance = this;
      setTimeout( function() {
        instance.element.addClass('masonry');
      }, 0 );
      
     
      if ( this.options.isResizable ) {
        $(window).bind( 'smartresize.masonry', function() { 
          instance.resize();
        });
      }


      this.reloadItems();

    },
  
    _init : function( callback ) {
      this._getColumns();
      this._reLayout( callback );
    },

    option: function( key, value ){
   
      if ( $.isPlainObject( key ) ){
        this.options = $.extend(true, this.options, key);
      } 
    },
    
 
    layout : function( $bricks, callback ) {

  
      for (var i=0, len = $bricks.length; i < len; i++) {
        this._placeBrick( $bricks[i] );
      }
      
   
      var containerSize = {};
      containerSize.height = Math.max.apply( Math, this.colYs );
      if ( this.options.isFitWidth ) {
        var unusedCols = 0;
        i = this.cols;
      
        while ( --i ) {
          if ( this.colYs[i] !== 0 ) {
            break;
          }
          unusedCols++;
        }
       
        containerSize.width = (this.cols - unusedCols) * this.columnWidth - this.options.gutterWidth;
      }
      this.styleQueue.push({ $el: this.element, style: containerSize });

      var styleFn = !this.isLaidOut ? 'css' : (
            this.options.isAnimated ? 'animate' : 'css'
          ),
          animOpts = this.options.animationOptions;

      var obj;
      for (i=0, len = this.styleQueue.length; i < len; i++) {
        obj = this.styleQueue[i];
        obj.$el[ styleFn ]( obj.style, animOpts );
      }

      this.styleQueue = [];

      if ( callback ) {
        callback.call( $bricks );
      }
      
      this.isLaidOut = true;
    },
    
    _getColumns : function() {
      var container = this.options.isFitWidth ? this.element.parent() : this.element,
          containerWidth = container.width();

                        
      this.columnWidth = this.isFluid ? this.options.columnWidth( containerWidth ) :
                
                    this.options.columnWidth ||
                   
                    this.$bricks.outerWidth(true) ||
                  
                    containerWidth;

      this.columnWidth += this.options.gutterWidth;

      this.cols = Math.floor( ( containerWidth + this.options.gutterWidth ) / this.columnWidth );
      this.cols = Math.max( this.cols, 1 );

    },

  
    _placeBrick: function( brick ) {
      var $brick = $(brick),
          colSpan, groupCount, groupY, groupColY, j;

 
      colSpan = Math.ceil( $brick.outerWidth(true) / this.columnWidth );
      colSpan = Math.min( colSpan, this.cols );

      if ( colSpan === 1 ) {
    
        groupY = this.colYs;
      } else {
        
        groupCount = this.cols + 1 - colSpan;
        groupY = [];

        for ( j=0; j < groupCount; j++ ) {
         
          groupColY = this.colYs.slice( j, j+colSpan );
        
          groupY[j] = Math.max.apply( Math, groupColY );
        }

      }

    
      var minimumY = Math.min.apply( Math, groupY ),
          shortCol = 0;
      
 
      for (var i=0, len = groupY.length; i < len; i++) {
        if ( groupY[i] === minimumY ) {
          shortCol = i;
          break;
        }
      }

    
      var position = {
        top: minimumY + this.offset.y
      };

      position[ this.horizontalDirection ] = this.columnWidth * shortCol + this.offset.x;
      this.styleQueue.push({ $el: $brick, style: position });

   
      var setHeight = minimumY + $brick.outerHeight(true),
          setSpan = this.cols + 1 - len;
      for ( i=0; i < setSpan; i++ ) {
        this.colYs[ shortCol + i ] = setHeight;
      }

    },
    
    
    resize: function() {
      var prevColCount = this.cols;
   
      this._getColumns();
      if ( this.isFluid || this.cols !== prevColCount ) {
     
        this._reLayout();
      }
    },
    
    
    _reLayout : function( callback ) {
     
      var i = this.cols;
      this.colYs = [];
      while (i--) {
        this.colYs.push( 0 );
      }
   
      this.layout( this.$bricks, callback );
    },
    
   
    reloadItems : function() {
      this.$bricks = this._getBricks( this.element.children() );
    },
    
    
    reload : function( callback ) {
      this.reloadItems();
      this._init( callback );
    },
    

    appended : function( $content, isAnimatedFromBottom, callback ) {
      if ( isAnimatedFromBottom ) {
        this._filterFindBricks( $content ).css({ top: this.element.height() });
        var instance = this;
        setTimeout( function(){
          instance._appended( $content, callback );
        }, 1 );
      } else {
        this._appended( $content, callback );
      }
    },
    
    _appended : function( $content, callback ) {
      var $newBricks = this._getBricks( $content );
    
      this.$bricks = this.$bricks.add( $newBricks );
      this.layout( $newBricks, callback );
    },
    
 
    remove : function( $content ) {
      this.$bricks = this.$bricks.not( $content );
      $content.remove();
    },
    
  
    destroy : function() {

      this.$bricks
        .removeClass('masonry-brick')
        .each(function(){
          this.style.position = '';
          this.style.top = '';
          this.style.left = '';
        });
      
      
      var elemStyle = this.element[0].style;
      for ( var prop in this.originalStyle ) {
        elemStyle[ prop ] = this.originalStyle[ prop ];
      }

      this.element
        .unbind('.masonry')
        .removeClass('masonry')
        .removeData('masonry');
      
      $(window).unbind('.masonry');

    }
    
  };
  
  



  
  $.fn.imagesLoaded = function( callback ) {
    var $this = this,
        $images = $this.find('img').add( $this.filter('img') ),
        len = $images.length,
        blank = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==',
        loaded = [];

    function triggerCallback() {
      callback.call( $this, $images );
    }

    function imgLoaded( event ) {
      var img = event.target;
      if ( img.src !== blank && $.inArray( img, loaded ) === -1 ){
        loaded.push( img );
        if ( --len <= 0 ){
          setTimeout( triggerCallback );
          $images.unbind( '.imagesLoaded', imgLoaded );
        }
      }
    }

    if ( !len ) {
      triggerCallback();
    }

    $images.bind( 'load.imagesLoaded error.imagesLoaded',  imgLoaded ).each( function() {
      var src = this.src;
   
      this.src = blank;
      this.src = src;
    });

    return $this;
  };


  var logError = function( message ) {
    if ( window.console ) {
      window.console.error( message );
    }
  };
  

  $.fn.masonry = function( options ) {
    if ( typeof options === 'string' ) {
    
      var args = Array.prototype.slice.call( arguments, 1 );

      this.each(function(){
        var instance = $.data( this, 'masonry' );
        if ( !instance ) {
          logError( "cannot call methods on masonry prior to initialization; " +
            "attempted to call method '" + options + "'" );
          return;
        }
        if ( !$.isFunction( instance[options] ) || options.charAt(0) === "_" ) {
          logError( "no such method '" + options + "' for masonry instance" );
          return;
        }
        
        instance[ options ].apply( instance, args );
      });
    } else {
      this.each(function() {
        var instance = $.data( this, 'masonry' );
        if ( instance ) {
      
          instance.option( options || {} );
          instance._init();
        } else {
      
          $.data( this, 'masonry', new $.Mason( options, this ) );
        }
      });
    }
    return this;
  };

})( window, jQuery );

(function ($) {
  'use strict';
 
  if (!$.event.special.destroyed) {
    $.event.special.destroyed = {
      remove: function (o) {
        if (o.handler) {
          o.handler();
        }
      }
    };
  }


  $.fn.extend({
    maxlength: function (options, callback) {
      var documentBody = $('body'),
        defaults = {
          showOnReady: false,
          alwaysShow: false, 
          threshold: 10, 
          warningClass: 'label label-success',
          limitReachedClass: 'label label-important label-danger',
          separator: ' / ',
          preText: '',
          postText: '',
          showMaxLength: true,
          placement: 'bottom',
          showCharsTyped: true,
          validate: false, 
        
          utf8: false, 
          appendToParent: false,
          twoCharLinebreak: true, 
          allowOverMax: false  
        };

      if ($.isFunction(options) && !callback) {
        callback = options;
        options = {};
      }
      options = $.extend(defaults, options);

     
      function inputLength(input) {
        var text = input.val();

        if (options.twoCharLinebreak) {
         
          text = text.replace(/\r(?!\n)|\n(?!\r)/g, '\r\n');
        } else {
       
          text = text.replace(new RegExp('\r?\n', 'g'), '\n');
        }

        var currentLength = 0;

        if (options.utf8) {
          currentLength = utf8Length(text);
        } else {
          currentLength = text.length;
        }
        return currentLength;
      }

      function truncateChars(input, maxlength) {
        var text = input.val();
        var newlines = 0;

        if (options.twoCharLinebreak) {
          text = text.replace(/\r(?!\n)|\n(?!\r)/g, '\r\n');

          if (text.substr(text.length - 1) === '\n' && text.length % 2 === 1) {
            newlines = 1;
          }
        }

        input.val(text.substr(0, maxlength - newlines));
      }

    
      function utf8Length(string) {
        var utf8length = 0;
        for (var n = 0; n < string.length; n++) {
          var c = string.charCodeAt(n);
          if (c < 128) {
            utf8length++;
          }
          else if ((c > 127) && (c < 2048)) {
            utf8length = utf8length + 2;
          }
          else {
            utf8length = utf8length + 3;
          }
        }
        return utf8length;
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

      
      function showRemaining(currentInput, indicator) {
        indicator.css({
          display: 'block'
        });
        currentInput.trigger('maxlength.shown');
      }

    
      function hideRemaining(currentInput, indicator) {
        indicator.css({
          display: 'none'
        });
        currentInput.trigger('maxlength.hidden');
      }

     
      function updateMaxLengthHTML(maxLengthThisInput, typedChars) {
        var output = '';
        if (options.message) {
          output = options.message.replace('%charsTyped%', typedChars)
              .replace('%charsRemaining%', maxLengthThisInput - typedChars)
              .replace('%charsTotal%', maxLengthThisInput);
        } else {
          if (options.preText) {
            output += options.preText;
          }
          if (!options.showCharsTyped) {
            output += maxLengthThisInput - typedChars;
          }
          else {
            output += typedChars;
          }
          if (options.showMaxLength) {
            output += options.separator + maxLengthThisInput;
          }
          if (options.postText) {
            output += options.postText;
          }
        }
        return output;
      }

     
      function manageRemainingVisibility(remaining, currentInput, maxLengthCurrentInput, maxLengthIndicator) {
        maxLengthIndicator.html(updateMaxLengthHTML(maxLengthCurrentInput, (maxLengthCurrentInput - remaining)));

        if (remaining > 0) {
          if (charsLeftThreshold(currentInput, options.threshold, maxLengthCurrentInput)) {
            showRemaining(currentInput, maxLengthIndicator.removeClass(options.limitReachedClass).addClass(options.warningClass));
          } else {
            hideRemaining(currentInput, maxLengthIndicator);
          }
        } else {
          showRemaining(currentInput, maxLengthIndicator.removeClass(options.warningClass).addClass(options.limitReachedClass));
        }

        if (options.allowOverMax) {
        
          if (remaining < 0) {
            currentInput.addClass('overmax');
          } else {
            currentInput.removeClass('overmax');
          }
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
          inputOuter = currentInput.outerWidth(),
          outerWidth = maxLengthIndicator.outerWidth(),
          actualWidth = maxLengthIndicator.width(),
          actualHeight = maxLengthIndicator.height();

        if (options.appendToParent) {
          pos.top -= currentInput.parent().offset().top;
          pos.left -= currentInput.parent().offset().left;
        }

        switch (options.placement) {
          case 'bottom':
            maxLengthIndicator.css({ top: pos.top + pos.height, left: pos.left + pos.width / 2 - actualWidth / 2 });
            break;
          case 'top':
            maxLengthIndicator.css({ top: pos.top - actualHeight, left: pos.left + pos.width / 2 - actualWidth / 2 });
            break;
          case 'left':
            maxLengthIndicator.css({ top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left - actualWidth });
            break;
          case 'right':
            maxLengthIndicator.css({ top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left + pos.width });
            break;
          case 'bottom-right':
            maxLengthIndicator.css({ top: pos.top + pos.height, left: pos.left + pos.width });
            break;
          case 'top-right':
            maxLengthIndicator.css({ top: pos.top - actualHeight, left: pos.left + inputOuter });
            break;
          case 'top-left':
            maxLengthIndicator.css({ top: pos.top - actualHeight, left: pos.left - outerWidth });
            break;
          case 'bottom-left':
            maxLengthIndicator.css({ top: pos.top + currentInput.outerHeight(), left: pos.left - outerWidth });
            break;
          case 'centered-right':
            maxLengthIndicator.css({ top: pos.top + (actualHeight / 2), left: pos.left + inputOuter - outerWidth - 3 });
            break;

          case 'bottom-right-inside':
            maxLengthIndicator.css({ top: pos.top + pos.height, left: pos.left + pos.width - outerWidth });
            break;
          case 'top-right-inside':
            maxLengthIndicator.css({ top: pos.top - actualHeight, left: pos.left + inputOuter - outerWidth });
            break;
          case 'top-left-inside':
            maxLengthIndicator.css({ top: pos.top - actualHeight, left: pos.left });
            break;
          case 'bottom-left-inside':
            maxLengthIndicator.css({ top: pos.top + currentInput.outerHeight(), left: pos.left });
            break;
        }
      }

   
      function getMaxLength(currentInput) {
        var attr = 'maxlength';
        if (options.allowOverMax) {
          attr = 'data-bs-mxl';
        }
        return currentInput.attr(attr) || currentInput.attr('size');
      }

      return this.each(function () {

        var currentInput = $(this),
          maxLengthCurrentInput,
          maxLengthIndicator;

        $(window).resize(function () {
          if (maxLengthIndicator) {
            place(currentInput, maxLengthIndicator);
          }
        });

        if (options.allowOverMax) {
          $(this).attr('data-bs-mxl', $(this).attr('maxlength'));
          $(this).removeAttr('maxlength');
        }

        function firstInit() {
          var maxlengthContent = updateMaxLengthHTML(maxLengthCurrentInput, '0');
          maxLengthCurrentInput = getMaxLength(currentInput);

          if (!maxLengthIndicator) {
            maxLengthIndicator = $('<span class="bootstrap-maxlength"></span>').css({
              display: 'none',
              position: 'absolute',
              whiteSpace: 'nowrap',
              zIndex: 1099
            }).html(maxlengthContent);
          }

          if (currentInput.is('textarea')) {
            currentInput.data('maxlenghtsizex', currentInput.outerWidth());
            currentInput.data('maxlenghtsizey', currentInput.outerHeight());

            currentInput.mouseup(function () {
              if (currentInput.outerWidth() !== currentInput.data('maxlenghtsizex') || currentInput.outerHeight() !== currentInput.data('maxlenghtsizey')) {
                place(currentInput, maxLengthIndicator);
              }

              currentInput.data('maxlenghtsizex', currentInput.outerWidth());
              currentInput.data('maxlenghtsizey', currentInput.outerHeight());
            });
          }

          if (options.appendToParent) {
            currentInput.parent().append(maxLengthIndicator);
            currentInput.parent().css('position', 'relative');
          } else {
            documentBody.append(maxLengthIndicator);
          }

          var remaining = remainingChars(currentInput, getMaxLength(currentInput));
          manageRemainingVisibility(remaining, currentInput, maxLengthCurrentInput, maxLengthIndicator);
          place(currentInput, maxLengthIndicator);
        }

        if (options.showOnReady) {
          currentInput.ready(function () {
            firstInit();
          });
        } else {
          currentInput.focus(function () {
            firstInit();
          });
        }

        currentInput.on('maxlength.reposition', function () {
          place(currentInput, maxLengthIndicator);
        });


        currentInput.on('destroyed', function () {
          if (maxLengthIndicator) {
            maxLengthIndicator.remove();
          }
        });

        currentInput.on('blur', function () {
          if (maxLengthIndicator && !options.showOnReady) {
            maxLengthIndicator.remove();
          }
        });

        currentInput.on('input', function () {
          var maxlength = getMaxLength(currentInput),
            remaining = remainingChars(currentInput, maxlength),
            output = true;

          if (options.validate && remaining < 0) {
            truncateChars(currentInput, maxlength);
            output = false;
          } else {
            manageRemainingVisibility(remaining, currentInput, maxLengthCurrentInput, maxLengthIndicator);
          }

          if (options.placement === 'bottom-right-inside' || options.placement === 'top-right-inside') {
            place(currentInput, maxLengthIndicator);
          }

          return output;
        });
      });
    }
  });
}(jQuery));



;(function (window, document, $, undefined) {
	
	$.swipebox = function(elem, options) {

		var defaults = {
			useCSS : true,
			initialIndexOnArray : 0,
			hideBarsDelay : 3000,
			videoMaxWidth : 1140,
			vimeoColor : 'CCCCCC',
			beforeOpen: null,
		      	afterClose: null
		},
		
		plugin = this,
		elements = [],
		elem = elem,
		selector = elem.selector,
		$selector = $(selector),
		isTouch = document.createTouch !== undefined || ('ontouchstart' in window) || ('onmsgesturechange' in window) || navigator.msMaxTouchPoints,
		supportSVG = !!(window.SVGSVGElement),
		winWidth = window.innerWidth ? window.innerWidth : $(window).width(),
		winHeight = window.innerHeight ? window.innerHeight : $(window).height(),
		html = '<div id="swipebox-overlay">\
				<div id="swipebox-slider"></div>\
				<div id="swipebox-caption"></div>\
				<div id="swipebox-action">\
					<a id="swipebox-close"></a>\
					<a id="swipebox-prev"></a>\
					<a id="swipebox-next"></a>\
				</div>\
		</div>';

		plugin.settings = {}

		plugin.init = function(){

			plugin.settings = $.extend({}, defaults, options);

			if ($.isArray(elem)) {

				elements = elem;
				ui.target = $(window);
				ui.init(plugin.settings.initialIndexOnArray);

			}else{

				$selector.click(function(e){
					elements = [];
					var index , relType, relVal;

					if (!relVal) {
						relType = 'rel';
						relVal  = $(this).attr(relType);
					}

					if (relVal && relVal !== '' && relVal !== 'nofollow') {
						$elem = $selector.filter('[' + relType + '="' + relVal + '"]');
					}else{
						$elem = $(selector);
					}

					$elem.each(function(){

						var title = null, href = null;
						
						if( $(this).attr('title') )
							title = $(this).attr('title');

						if( $(this).attr('href') )
							href = $(this).attr('href');

						elements.push({
							href: href,
							title: title
						});
					});
					
					index = $elem.index($(this));
					e.preventDefault();
					e.stopPropagation();
					ui.target = $(e.target);
					ui.init(index);
				});
			}
		}

		plugin.refresh = function() {
			if (!$.isArray(elem)) {
				ui.destroy();
				$elem = $(selector);
				ui.actions();
			}
		}

		var ui = {

			init : function(index){
				if (plugin.settings.beforeOpen) 
					plugin.settings.beforeOpen();
				this.target.trigger('swipebox-start');
				$.swipebox.isOpen = true;
				this.build();
				this.openSlide(index);
				this.openMedia(index);
				this.preloadMedia(index+1);
				this.preloadMedia(index-1);
			},

			build : function(){
				var $this = this;

				$('body').append(html);

				if($this.doCssTrans()){
					$('#swipebox-slider').css({
						'-webkit-transition' : 'left 0.4s ease',
						'-moz-transition' : 'left 0.4s ease',
						'-o-transition' : 'left 0.4s ease',
						'-khtml-transition' : 'left 0.4s ease',
						'transition' : 'left 0.4s ease'
					});
					$('#swipebox-overlay').css({
						'-webkit-transition' : 'opacity 1s ease',
						'-moz-transition' : 'opacity 1s ease',
						'-o-transition' : 'opacity 1s ease',
						'-khtml-transition' : 'opacity 1s ease',
						'transition' : 'opacity 1s ease'
					});
					$('#swipebox-action, #swipebox-caption').css({
						'-webkit-transition' : '0.5s',
						'-moz-transition' : '0.5s',
						'-o-transition' : '0.5s',
						'-khtml-transition' : '0.5s',
						'transition' : '0.5s'
					});
				}


				if(supportSVG){
					var bg = $('#swipebox-action #swipebox-close').css('background-image');
					bg = bg.replace('png', 'svg');
					$('#swipebox-action #swipebox-prev,#swipebox-action #swipebox-next,#swipebox-action #swipebox-close').css({
						'background-image' : bg
					});
				}
				
				$.each( elements,  function(){
					$('#swipebox-slider').append('<div class="slide"></div>');
				});

				$this.setDim();
				$this.actions();
				$this.keyboard();
				$this.gesture();
				$this.animBars();
				$this.resize();
				
			},

			setDim : function(){

				var width, height, sliderCss = {};
				
				if( "onorientationchange" in window ){

					window.addEventListener("orientationchange", function() {
						if( window.orientation == 0 ){
							width = winWidth;
							height = winHeight;
						}else if( window.orientation == 90 || window.orientation == -90 ){
							width = winHeight;
							height = winWidth;
						}
					}, false);
					
				
				}else{

					width = window.innerWidth ? window.innerWidth : $(window).width();
					height = window.innerHeight ? window.innerHeight : $(window).height();
				}

				sliderCss = {
					width : width,
					height : height
				}


				$('#swipebox-overlay').css(sliderCss);

			},

			resize : function (){
				var $this = this;
				
				$(window).resize(function() {
					$this.setDim();
				}).resize();
			},

			supportTransition : function() {
				var prefixes = 'transition WebkitTransition MozTransition OTransition msTransition KhtmlTransition'.split(' ');
				for(var i = 0; i < prefixes.length; i++) {
					if(document.createElement('div').style[prefixes[i]] !== undefined) {
						return prefixes[i];
					}
				}
				return false;
			},

			doCssTrans : function(){
				if(plugin.settings.useCSS && this.supportTransition() ){
					return true;
				}
			},

			gesture : function(){
				if ( isTouch ){
					var $this = this,
					distance = null,
					swipMinDistance = 10,
					startCoords = {},
					endCoords = {};
					var bars = $('#swipebox-caption, #swipebox-action');

					bars.addClass('visible-bars');
					$this.setTimeout();

					$('body').bind('touchstart', function(e){

						$(this).addClass('touching');

		  				endCoords = e.originalEvent.targetTouches[0];
		    				startCoords.pageX = e.originalEvent.targetTouches[0].pageX;

						$('.touching').bind('touchmove',function(e){
							e.preventDefault();
							e.stopPropagation();
		    					endCoords = e.originalEvent.targetTouches[0];

						});
			           			
			           			return false;

	           			}).bind('touchend',function(e){
	           				e.preventDefault();
					e.stopPropagation();
   				
   					distance = endCoords.pageX - startCoords.pageX;
	       				
	       				if( distance >= swipMinDistance ){
	       				
	       					$this.getPrev();
	       				
	       				}else if( distance <= - swipMinDistance ){
	       				
	       					$this.getNext();
	       				
	       				}else{
	       				
	       					if(!bars.hasClass('visible-bars')){
							$this.showBars();
							$this.setTimeout();
						}else{
							$this.clearTimeout();
							$this.hideBars();
						}

	       				}	

	       				$('.touching').off('touchmove').removeClass('touching');
						
					});

           				}
			},

			setTimeout: function(){
				if(plugin.settings.hideBarsDelay > 0){
					var $this = this;
					$this.clearTimeout();
					$this.timeout = window.setTimeout( function(){
						$this.hideBars() },
						plugin.settings.hideBarsDelay
					);
				}
			},
			
			clearTimeout: function(){	
				window.clearTimeout(this.timeout);
				this.timeout = null;
			},

			showBars : function(){
				var bars = $('#swipebox-caption, #swipebox-action');
				if(this.doCssTrans()){
					bars.addClass('visible-bars');
				}else{
					$('#swipebox-caption').animate({ top : 0 }, 500);
					$('#swipebox-action').animate({ bottom : 0 }, 500);
					setTimeout(function(){
						bars.addClass('visible-bars');
					}, 1000);
				}
			},

			hideBars : function(){
				var bars = $('#swipebox-caption, #swipebox-action');
				if(this.doCssTrans()){
					bars.removeClass('visible-bars');
				}else{
					$('#swipebox-caption').animate({ top : '-50px' }, 500);
					$('#swipebox-action').animate({ bottom : '-50px' }, 500);
					setTimeout(function(){
						bars.removeClass('visible-bars');
					}, 1000);
				}
			},

			animBars : function(){
				var $this = this;
				var bars = $('#swipebox-caption, #swipebox-action');
					
				bars.addClass('visible-bars');
				$this.setTimeout();
				
				$('#swipebox-slider').click(function(e){
					if(!bars.hasClass('visible-bars')){
						$this.showBars();
						$this.setTimeout();
					}
				});

				$('#swipebox-action').hover(function() {
				  		$this.showBars();
						bars.addClass('force-visible-bars');
						$this.clearTimeout();
					
					},function() { 
						bars.removeClass('force-visible-bars');
						$this.setTimeout();

				});
			},

			keyboard : function(){
				var $this = this;
				$(window).bind('keyup', function(e){
					e.preventDefault();
					e.stopPropagation();
					if (e.keyCode == 37){
						$this.getPrev();
					}
					else if (e.keyCode==39){
						$this.getNext();
					}
					else if (e.keyCode == 27) {
						$this.closeSlide();
					}
				});
			},

			actions : function(){
				var $this = this;
				
				if( elements.length < 2 ){
					$('#swipebox-prev, #swipebox-next').hide();
				}else{
					$('#swipebox-prev').bind('click touchend', function(e){
						e.preventDefault();
						e.stopPropagation();
						$this.getPrev();
						$this.setTimeout();
					});
					
					$('#swipebox-next').bind('click touchend', function(e){
						e.preventDefault();
						e.stopPropagation();
						$this.getNext();
						$this.setTimeout();
					});
				}

				$('#swipebox-close').bind('click touchend', function(e){
					$this.closeSlide();
				});
			},
			
			setSlide : function (index, isFirst){
				isFirst = isFirst || false;
				
				var slider = $('#swipebox-slider');
				
				if(this.doCssTrans()){
					slider.css({ left : (-index*100)+'%' });
				}else{
					slider.animate({ left : (-index*100)+'%' });
				}
				
				$('#swipebox-slider .slide').removeClass('current');
				$('#swipebox-slider .slide').eq(index).addClass('current');
				this.setTitle(index);

				if( isFirst ){
					slider.fadeIn();
				}

				$('#swipebox-prev, #swipebox-next').removeClass('disabled');
				if(index == 0){
					$('#swipebox-prev').addClass('disabled');
				}else if( index == elements.length - 1 ){
					$('#swipebox-next').addClass('disabled');
				}
			},
		
			openSlide : function (index){
				$('html').addClass('swipebox');
				$(window).trigger('resize'); 
				this.setSlide(index, true);
			},
		
			preloadMedia : function (index){
				var $this = this, src = null;

				if( elements[index] !== undefined )
					src = elements[index].href;

				if( !$this.isVideo(src) ){
					setTimeout(function(){
						$this.openMedia(index);
					}, 1000);
				}else{
					$this.openMedia(index);
				}
			},
			
			openMedia : function (index){
				var $this = this, src = null;

				if( elements[index] !== undefined )
					src = elements[index].href;

				if(index < 0 || index >= elements.length){
					return false;
				}

				if( !$this.isVideo(src) ){
					$this.loadMedia(src, function(){
						$('#swipebox-slider .slide').eq(index).html(this);
					});
				}else{
					$('#swipebox-slider .slide').eq(index).html($this.getVideo(src));
				}
				
			},

			setTitle : function (index, isFirst){
				var title = null;

				$('#swipebox-caption').empty();

				if( elements[index] !== undefined )
					title = elements[index].title;
				
				if(title){
					$('#swipebox-caption').append(title);
				}
			},

			isVideo : function (src){

				if( src ){
					if( 
						src.match(/youtube\.com\/watch\?v=([a-zA-Z0-9\-_]+)/) 
						|| src.match(/vimeo\.com\/([0-9]*)/)
						|| src.match(/v.youku.com\/v_show\/id_([a-zA-Z0-9\-_]+)/)
						|| src.match(/www.tudou.com\/programs\/view\/([a-zA-Z0-9\-_]+)/)
					){
						return true;
					}
				}
					
			},

			getVideo : function(url){
				var iframe = '';
				var output = '';
				var youtubeUrl = url.match(/watch\?v=([a-zA-Z0-9\-_]+)/);
				var vimeoUrl = url.match(/vimeo\.com\/([0-9]*)/);
				var youkuUrl = url.match(/v_show\/id_([a-zA-Z0-9\-_]+)/)
				var tudouUrl = url.match(/programs\/view\/([a-zA-Z0-9\-_]+)/)
				if( youtubeUrl ){
					iframe = '<iframe width="560" height="315" src="//www.youtube.com/embed/'+youtubeUrl[1]+'?controls=0&amp;showinfo=0&amp;showsearch=0&amp;modestbranding=1&amp;rel=0" frameborder="0" allowfullscreen></iframe>';
				}else if(vimeoUrl){
					iframe = '<iframe width="560" height="315"  src="http://player.vimeo.com/video/'+vimeoUrl[1]+'?byline=0&amp;portrait=0&amp;color='+plugin.settings.vimeoColor+'" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>';
				}else if(youkuUrl){
					iframe = '<iframe width="560" height="315"  src="http://player.youku.com/embed/'+youkuUrl[1]+'" frameborder="0" allowFullScreen></iframe>';
				}else if(tudouUrl){
					iframe = '<iframe width="560" height="315"  src="http://www.tudou.com/programs/view/html5embed.action?code='+tudouUrl[1]+'" allowtransparency="true" scrolling="no" border="0" frameborder="0" allowFullScreen></iframe>';
				}

				return '<div class="swipebox-video-container" style="max-width:'+plugin.settings.videomaxWidth+'px"><div class="swipebox-video">'+iframe+'</div></div>';
			},
			
			loadMedia : function (src, callback){
				if( !this.isVideo(src) ){
					var img = $('<img>').on('load', function(){
						callback.call(img);
					});
					
					img.attr('src',src);
				}	
			},
			
			getNext : function (){
				var $this = this;
				index = $('#swipebox-slider .slide').index($('#swipebox-slider .slide.current'));
				if(index+1 < elements.length){
					index++;
					$this.setSlide(index);
					$this.preloadMedia(index+1);
				}
				else{
					
					$('#swipebox-slider').addClass('rightSpring');
					setTimeout(function(){
						$('#swipebox-slider').removeClass('rightSpring');
					},500);
				}
			},
			
			getPrev : function (){
				index = $('#swipebox-slider .slide').index($('#swipebox-slider .slide.current'));
				if(index > 0){
					index--;
					this.setSlide(index);
					this.preloadMedia(index-1);
				}
				else{
					
					$('#swipebox-slider').addClass('leftSpring');
					setTimeout(function(){
						$('#swipebox-slider').removeClass('leftSpring');
					},500);
				}
			},


			closeSlide : function (){
				$('html').removeClass('swipebox');
				$(window).trigger('resize');
				this.destroy();
			},

			destroy : function(){
				$(window).unbind('keyup');
				$('body').unbind('touchstart');
				$('body').unbind('touchmove');
				$('body').unbind('touchend');
				$('#swipebox-slider').unbind();
				$('#swipebox-overlay').remove();
				if (!$.isArray(elem))
					elem.removeData('_swipebox');
				if ( this.target )
					this.target.trigger('swipebox-destroy');
				$.swipebox.isOpen = false;
				if (plugin.settings.afterClose) 
					plugin.settings.afterClose();
 			}

		};

		plugin.init();
		
	};

	$.fn.swipebox = function(options){
		if (!$.data(this, "_swipebox")) {
			var swipebox = new $.swipebox(this, options);
			this.data('_swipebox', swipebox);
		}
		return this.data('_swipebox');
	}

}(window, document, jQuery));

function loadMap(selector, lat, lng, zoom){    
	var cloudmadeUrl = 'http://{s}.mqcdn.com/tiles/1.0.0/osm/{z}/{x}/{y}.jpg',
		subDomains = ['otile1','otile2','otile3','otile4'],
		cloudmadeAttribution = '&copy; <a href="http://osm.org/copyright" target="_blank">OpenStreetMap</a> contributors',
		cloudmade = L.tileLayer(cloudmadeUrl, {maxZoom: 18, attribution: cloudmadeAttribution, subdomains: subDomains}),
		latlng = L.latLng(lat, lng);

	var map = L.map('map', {center: latlng, zoom: zoom, layers: [cloudmade]});
    return map;
}


;(function($) {



var CLOSE_EVENT = 'Close',
	BEFORE_CLOSE_EVENT = 'BeforeClose',
	AFTER_CLOSE_EVENT = 'AfterClose',
	BEFORE_APPEND_EVENT = 'BeforeAppend',
	MARKUP_PARSE_EVENT = 'MarkupParse',
	OPEN_EVENT = 'Open',
	CHANGE_EVENT = 'Change',
	NS = 'mfp',
	EVENT_NS = '.' + NS,
	READY_CLASS = 'mfp-ready',
	REMOVING_CLASS = 'mfp-removing',
	PREVENT_CLOSE_CLASS = 'mfp-prevent-close';



var mfp, 
	MagnificPopup = function(){},
	_isJQ = !!(window.jQuery),
	_prevStatus,
	_window = $(window),
	_body,
	_document,
	_prevContentType,
	_wrapClasses,
	_currPopupType;



var _mfpOn = function(name, f) {
		mfp.ev.on(NS + name + EVENT_NS, f);
	},
	_getEl = function(className, appendTo, html, raw) {
		var el = document.createElement('div');
		el.className = 'mfp-'+className;
		if(html) {
			el.innerHTML = html;
		}
		if(!raw) {
			el = $(el);
			if(appendTo) {
				el.appendTo(appendTo);
			}
		} else if(appendTo) {
			appendTo.appendChild(el);
		}
		return el;
	},
	_mfpTrigger = function(e, data) {
		mfp.ev.triggerHandler(NS + e, data);

		if(mfp.st.callbacks) {
			
			e = e.charAt(0).toLowerCase() + e.slice(1);
			if(mfp.st.callbacks[e]) {
				mfp.st.callbacks[e].apply(mfp, $.isArray(data) ? data : [data]);
			}
		}
	},
	_getCloseBtn = function(type) {
		if(type !== _currPopupType || !mfp.currTemplate.closeBtn) {
			mfp.currTemplate.closeBtn = $( mfp.st.closeMarkup.replace('%title%', mfp.st.tClose ) );
			_currPopupType = type;
		}
		return mfp.currTemplate.closeBtn;
	},

	_checkInstance = function() {
		if(!$.magnificPopup.instance) {
			mfp = new MagnificPopup();
			mfp.init();
			$.magnificPopup.instance = mfp;
		}
	},
	supportsTransitions = function() {
		var s = document.createElement('p').style, 
			v = ['ms','O','Moz','Webkit']; 

		if( s['transition'] !== undefined ) {
			return true; 
		}
			
		while( v.length ) {
			if( v.pop() + 'Transition' in s ) {
				return true;
			}
		}
				
		return false;
	};




MagnificPopup.prototype = {

	constructor: MagnificPopup,


	init: function() {
		var appVersion = navigator.appVersion;
		mfp.isIE7 = appVersion.indexOf("MSIE 7.") !== -1; 
		mfp.isIE8 = appVersion.indexOf("MSIE 8.") !== -1;
		mfp.isLowIE = mfp.isIE7 || mfp.isIE8;
		mfp.isAndroid = (/android/gi).test(appVersion);
		mfp.isIOS = (/iphone|ipad|ipod/gi).test(appVersion);
		mfp.supportsTransition = supportsTransitions();

		mfp.probablyMobile = (mfp.isAndroid || mfp.isIOS || /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent) );
		_document = $(document);

		mfp.popupsCache = {};
	},


	open: function(data) {

		if(!_body) {
			_body = $(document.body);
		}

		var i;

		if(data.isObj === false) { 
			mfp.items = data.items.toArray();

			mfp.index = 0;
			var items = data.items,
				item;
			for(i = 0; i < items.length; i++) {
				item = items[i];
				if(item.parsed) {
					item = item.el[0];
				}
				if(item === data.el[0]) {
					mfp.index = i;
					break;
				}
			}
		} else {
			mfp.items = $.isArray(data.items) ? data.items : [data.items];
			mfp.index = data.index || 0;
		}

		if(mfp.isOpen) {
			mfp.updateItemHTML();
			return;
		}
		
		mfp.types = []; 
		_wrapClasses = '';
		if(data.mainEl && data.mainEl.length) {
			mfp.ev = data.mainEl.eq(0);
		} else {
			mfp.ev = _document;
		}

		if(data.key) {
			if(!mfp.popupsCache[data.key]) {
				mfp.popupsCache[data.key] = {};
			}
			mfp.currTemplate = mfp.popupsCache[data.key];
		} else {
			mfp.currTemplate = {};
		}



		mfp.st = $.extend(true, {}, $.magnificPopup.defaults, data ); 
		mfp.fixedContentPos = mfp.st.fixedContentPos === 'auto' ? !mfp.probablyMobile : mfp.st.fixedContentPos;

		if(mfp.st.modal) {
			mfp.st.closeOnContentClick = false;
			mfp.st.closeOnBgClick = false;
			mfp.st.showCloseBtn = false;
			mfp.st.enableEscapeKey = false;
		}
		

		if(!mfp.bgOverlay) {

		
			mfp.bgOverlay = _getEl('bg').on('click'+EVENT_NS, function() {
				mfp.close();
			});

			mfp.wrap = _getEl('wrap').attr('tabindex', -1).on('click'+EVENT_NS, function(e) {
				if(mfp._checkIfClose(e.target)) {
					mfp.close();
				}
			});

			mfp.container = _getEl('container', mfp.wrap);
		}

		mfp.contentContainer = _getEl('content');
		if(mfp.st.preloader) {
			mfp.preloader = _getEl('preloader', mfp.container, mfp.st.tLoading);
		}


	
		var modules = $.magnificPopup.modules;
		for(i = 0; i < modules.length; i++) {
			var n = modules[i];
			n = n.charAt(0).toUpperCase() + n.slice(1);
			mfp['init'+n].call(mfp);
		}
		_mfpTrigger('BeforeOpen');


		if(mfp.st.showCloseBtn) {
		
			if(!mfp.st.closeBtnInside) {
				mfp.wrap.append( _getCloseBtn() );
			} else {
				_mfpOn(MARKUP_PARSE_EVENT, function(e, template, values, item) {
					values.close_replaceWith = _getCloseBtn(item.type);
				});
				_wrapClasses += ' mfp-close-btn-in';
			}
		}

		if(mfp.st.alignTop) {
			_wrapClasses += ' mfp-align-top';
		}

	

		if(mfp.fixedContentPos) {
			mfp.wrap.css({
				overflow: mfp.st.overflowY,
				overflowX: 'hidden',
				overflowY: mfp.st.overflowY
			});
		} else {
			mfp.wrap.css({ 
				top: _window.scrollTop(),
				position: 'absolute'
			});
		}
		if( mfp.st.fixedBgPos === false || (mfp.st.fixedBgPos === 'auto' && !mfp.fixedContentPos) ) {
			mfp.bgOverlay.css({
				height: _document.height(),
				position: 'absolute'
			});
		}

		

		if(mfp.st.enableEscapeKey) {
		
			_document.on('keyup' + EVENT_NS, function(e) {
				if(e.keyCode === 27) {
					mfp.close();
				}
			});
		}

		_window.on('resize' + EVENT_NS, function() {
			mfp.updateSize();
		});


		if(!mfp.st.closeOnContentClick) {
			_wrapClasses += ' mfp-auto-cursor';
		}
		
		if(_wrapClasses)
			mfp.wrap.addClass(_wrapClasses);


		var windowHeight = mfp.wH = _window.height();

		
		var windowStyles = {};

		if( mfp.fixedContentPos ) {
            if(mfp._hasScrollBar(windowHeight)){
                var s = mfp._getScrollbarSize();
                if(s) {
                    windowStyles.marginRight = s;
                }
            }
        }

		if(mfp.fixedContentPos) {
			if(!mfp.isIE7) {
				windowStyles.overflow = 'hidden';
			} else {
			
				$('body, html').css('overflow', 'hidden');
			}
		}

		
		
		var classesToadd = mfp.st.mainClass;
		if(mfp.isIE7) {
			classesToadd += ' mfp-ie7';
		}
		if(classesToadd) {
			mfp._addClassToMFP( classesToadd );
		}

	
		mfp.updateItemHTML();

		_mfpTrigger('BuildControls');

		$('html').css(windowStyles);
		
		mfp.bgOverlay.add(mfp.wrap).prependTo( mfp.st.prependTo || _body );

		mfp._lastFocusedEl = document.activeElement;
		
		setTimeout(function() {
			
			if(mfp.content) {
				mfp._addClassToMFP(READY_CLASS);
				mfp._setFocus();
			} else {
				mfp.bgOverlay.addClass(READY_CLASS);
			}
			
			_document.on('focusin' + EVENT_NS, mfp._onFocusIn);

		}, 16);

		mfp.isOpen = true;
		mfp.updateSize(windowHeight);
		_mfpTrigger(OPEN_EVENT);

		return data;
	},


	close: function() {
		if(!mfp.isOpen) return;
		_mfpTrigger(BEFORE_CLOSE_EVENT);

		mfp.isOpen = false;
	
		if(mfp.st.removalDelay && !mfp.isLowIE && mfp.supportsTransition )  {
			mfp._addClassToMFP(REMOVING_CLASS);
			setTimeout(function() {
				mfp._close();
			}, mfp.st.removalDelay);
		} else {
			mfp._close();
		}
	},


	_close: function() {
		_mfpTrigger(CLOSE_EVENT);

		var classesToRemove = REMOVING_CLASS + ' ' + READY_CLASS + ' ';

		mfp.bgOverlay.detach();
		mfp.wrap.detach();
		mfp.container.empty();

		if(mfp.st.mainClass) {
			classesToRemove += mfp.st.mainClass + ' ';
		}

		mfp._removeClassFromMFP(classesToRemove);

		if(mfp.fixedContentPos) {
			var windowStyles = {marginRight: ''};
			if(mfp.isIE7) {
				$('body, html').css('overflow', '');
			} else {
				windowStyles.overflow = '';
			}
			$('html').css(windowStyles);
		}
		
		_document.off('keyup' + EVENT_NS + ' focusin' + EVENT_NS);
		mfp.ev.off(EVENT_NS);

		mfp.wrap.attr('class', 'mfp-wrap').removeAttr('style');
		mfp.bgOverlay.attr('class', 'mfp-bg');
		mfp.container.attr('class', 'mfp-container');

		if(mfp.st.showCloseBtn &&
		(!mfp.st.closeBtnInside || mfp.currTemplate[mfp.currItem.type] === true)) {
			if(mfp.currTemplate.closeBtn)
				mfp.currTemplate.closeBtn.detach();
		}


		if(mfp._lastFocusedEl) {
			$(mfp._lastFocusedEl).focus(); 
		}
		mfp.currItem = null;	
		mfp.content = null;
		mfp.currTemplate = null;
		mfp.prevHeight = 0;

		_mfpTrigger(AFTER_CLOSE_EVENT);
	},
	
	updateSize: function(winHeight) {

		if(mfp.isIOS) {
		
			var zoomLevel = document.documentElement.clientWidth / window.innerWidth;
			var height = window.innerHeight * zoomLevel;
			mfp.wrap.css('height', height);
			mfp.wH = height;
		} else {
			mfp.wH = winHeight || _window.height();
		}
	
		if(!mfp.fixedContentPos) {
			mfp.wrap.css('height', mfp.wH);
		}

		_mfpTrigger('Resize');

	},


	updateItemHTML: function() {
		var item = mfp.items[mfp.index];

		mfp.contentContainer.detach();

		if(mfp.content)
			mfp.content.detach();

		if(!item.parsed) {
			item = mfp.parseEl( mfp.index );
		}

		var type = item.type;	

		_mfpTrigger('BeforeChange', [mfp.currItem ? mfp.currItem.type : '', type]);
	
		
		mfp.currItem = item;

		

		

		if(!mfp.currTemplate[type]) {
			var markup = mfp.st[type] ? mfp.st[type].markup : false;

			_mfpTrigger('FirstMarkupParse', markup);

			if(markup) {
				mfp.currTemplate[type] = $(markup);
			} else {
			
				mfp.currTemplate[type] = true;
			}
		}

		if(_prevContentType && _prevContentType !== item.type) {
			mfp.container.removeClass('mfp-'+_prevContentType+'-holder');
		}
		
		var newContent = mfp['get' + type.charAt(0).toUpperCase() + type.slice(1)](item, mfp.currTemplate[type]);
		mfp.appendContent(newContent, type);

		item.preloaded = true;

		_mfpTrigger(CHANGE_EVENT, item);
		_prevContentType = item.type;
		
		mfp.container.prepend(mfp.contentContainer);

		_mfpTrigger('AfterChange');
	},



	appendContent: function(newContent, type) {
		mfp.content = newContent;
		
		if(newContent) {
			if(mfp.st.showCloseBtn && mfp.st.closeBtnInside &&
				mfp.currTemplate[type] === true) {
			
				if(!mfp.content.find('.mfp-close').length) {
					mfp.content.append(_getCloseBtn());
				}
			} else {
				mfp.content = newContent;
			}
		} else {
			mfp.content = '';
		}

		_mfpTrigger(BEFORE_APPEND_EVENT);
		mfp.container.addClass('mfp-'+type+'-holder');

		mfp.contentContainer.append(mfp.content);
	},




	parseEl: function(index) {
		var item = mfp.items[index],
			type;

		if(item.tagName) {
			item = { el: $(item) };
		} else {
			type = item.type;
			item = { data: item, src: item.src };
		}

		if(item.el) {
			var types = mfp.types;

		
			for(var i = 0; i < types.length; i++) {
				if( item.el.hasClass('mfp-'+types[i]) ) {
					type = types[i];
					break;
				}
			}

			item.src = item.el.attr('data-mfp-src');
			if(!item.src) {
				item.src = item.el.attr('href');
			}
		}

		item.type = type || mfp.st.type || 'inline';
		item.index = index;
		item.parsed = true;
		mfp.items[index] = item;
		_mfpTrigger('ElementParse', item);

		return mfp.items[index];
	},


	addGroup: function(el, options) {
		var eHandler = function(e) {
			e.mfpEl = this;
			mfp._openClick(e, el, options);
		};

		if(!options) {
			options = {};
		} 

		var eName = 'click.magnificPopup';
		options.mainEl = el;
		
		if(options.items) {
			options.isObj = true;
			el.off(eName).on(eName, eHandler);
		} else {
			options.isObj = false;
			if(options.delegate) {
				el.off(eName).on(eName, options.delegate , eHandler);
			} else {
				options.items = el;
				el.off(eName).on(eName, eHandler);
			}
		}
	},
	_openClick: function(e, el, options) {
		var midClick = options.midClick !== undefined ? options.midClick : $.magnificPopup.defaults.midClick;


		if(!midClick && ( e.which === 2 || e.ctrlKey || e.metaKey ) ) {
			return;
		}

		var disableOn = options.disableOn !== undefined ? options.disableOn : $.magnificPopup.defaults.disableOn;

		if(disableOn) {
			if($.isFunction(disableOn)) {
				if( !disableOn.call(mfp) ) {
					return true;
				}
			} else { 
				if( _window.width() < disableOn ) {
					return true;
				}
			}
		}
		
		if(e.type) {
			e.preventDefault();

			
			if(mfp.isOpen) {
				e.stopPropagation();
			}
		}
			

		options.el = $(e.mfpEl);
		if(options.delegate) {
			options.items = el.find(options.delegate);
		}
		mfp.open(options);
	},



	updateStatus: function(status, text) {

		if(mfp.preloader) {
			if(_prevStatus !== status) {
				mfp.container.removeClass('mfp-s-'+_prevStatus);
			}

			if(!text && status === 'loading') {
				text = mfp.st.tLoading;
			}

			var data = {
				status: status,
				text: text
			};
		
			_mfpTrigger('UpdateStatus', data);

			status = data.status;
			text = data.text;

			mfp.preloader.html(text);

			mfp.preloader.find('a').on('click', function(e) {
				e.stopImmediatePropagation();
			});

			mfp.container.addClass('mfp-s-'+status);
			_prevStatus = status;
		}
	},



	_checkIfClose: function(target) {

		if($(target).hasClass(PREVENT_CLOSE_CLASS)) {
			return;
		}

		var closeOnContent = mfp.st.closeOnContentClick;
		var closeOnBg = mfp.st.closeOnBgClick;

		if(closeOnContent && closeOnBg) {
			return true;
		} else {

			if(!mfp.content || $(target).hasClass('mfp-close') || (mfp.preloader && target === mfp.preloader[0]) ) {
				return true;
			}

			if(  (target !== mfp.content[0] && !$.contains(mfp.content[0], target))  ) {
				if(closeOnBg) {
					if( $.contains(document, target) ) {
						return true;
					}
				}
			} else if(closeOnContent) {
				return true;
			}

		}
		return false;
	},
	_addClassToMFP: function(cName) {
		mfp.bgOverlay.addClass(cName);
		mfp.wrap.addClass(cName);
	},
	_removeClassFromMFP: function(cName) {
		this.bgOverlay.removeClass(cName);
		mfp.wrap.removeClass(cName);
	},
	_hasScrollBar: function(winHeight) {
		return (  (mfp.isIE7 ? _document.height() : document.body.scrollHeight) > (winHeight || _window.height()) );
	},
	_setFocus: function() {
		(mfp.st.focus ? mfp.content.find(mfp.st.focus).eq(0) : mfp.wrap).focus();
	},
	_onFocusIn: function(e) {
		if( e.target !== mfp.wrap[0] && !$.contains(mfp.wrap[0], e.target) ) {
			mfp._setFocus();
			return false;
		}
	},
	_parseMarkup: function(template, values, item) {
		var arr;
		if(item.data) {
			values = $.extend(item.data, values);
		}
		_mfpTrigger(MARKUP_PARSE_EVENT, [template, values, item] );

		$.each(values, function(key, value) {
			if(value === undefined || value === false) {
				return true;
			}
			arr = key.split('_');
			if(arr.length > 1) {
				var el = template.find(EVENT_NS + '-'+arr[0]);

				if(el.length > 0) {
					var attr = arr[1];
					if(attr === 'replaceWith') {
						if(el[0] !== value[0]) {
							el.replaceWith(value);
						}
					} else if(attr === 'img') {
						if(el.is('img')) {
							el.attr('src', value);
						} else {
							el.replaceWith( '<img src="'+value+'" class="' + el.attr('class') + '" />' );
						}
					} else {
						el.attr(arr[1], value);
					}
				}

			} else {
				template.find(EVENT_NS + '-'+key).html(value);
			}
		});
	},

	_getScrollbarSize: function() {
	
		if(mfp.scrollbarSize === undefined) {
			var scrollDiv = document.createElement("div");
			scrollDiv.id = "mfp-sbm";
			scrollDiv.style.cssText = 'width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;';
			document.body.appendChild(scrollDiv);
			mfp.scrollbarSize = scrollDiv.offsetWidth - scrollDiv.clientWidth;
			document.body.removeChild(scrollDiv);
		}
		return mfp.scrollbarSize;
	}

}; 




$.magnificPopup = {
	instance: null,
	proto: MagnificPopup.prototype,
	modules: [],

	open: function(options, index) {
		_checkInstance();	

		if(!options) {
			options = {};
		} else {
			options = $.extend(true, {}, options);
		}
			

		options.isObj = true;
		options.index = index || 0;
		return this.instance.open(options);
	},

	close: function() {
		return $.magnificPopup.instance && $.magnificPopup.instance.close();
	},

	registerModule: function(name, module) {
		if(module.options) {
			$.magnificPopup.defaults[name] = module.options;
		}
		$.extend(this.proto, module.proto);			
		this.modules.push(name);
	},

	defaults: {   

		disableOn: 0,	

		key: null,

		midClick: false,

		mainClass: '',

		preloader: true,

		focus: '', 
		
		closeOnContentClick: false,

		closeOnBgClick: true,

		closeBtnInside: true, 

		showCloseBtn: true,

		enableEscapeKey: true,

		modal: false,

		alignTop: false,
	
		removalDelay: 0,

		prependTo: null,
		
		fixedContentPos: 'auto', 
	
		fixedBgPos: 'auto',

		overflowY: 'auto',

		closeMarkup: '<button title="%title%" type="button" class="mfp-close">&times;</button>',

		tClose: '',

		tLoading: ''

	}
};



$.fn.magnificPopup = function(options) {
	_checkInstance();

	var jqEl = $(this);


	if (typeof options === "string" ) {

		if(options === 'open') {
			var items,
				itemOpts = _isJQ ? jqEl.data('magnificPopup') : jqEl[0].magnificPopup,
				index = parseInt(arguments[1], 10) || 0;

			if(itemOpts.items) {
				items = itemOpts.items[index];
			} else {
				items = jqEl;
				if(itemOpts.delegate) {
					items = items.find(itemOpts.delegate);
				}
				items = items.eq( index );
			}
			mfp._openClick({mfpEl:items}, jqEl, itemOpts);
		} else {
			if(mfp.isOpen)
				mfp[options].apply(mfp, Array.prototype.slice.call(arguments, 1));
		}

	} else {
	
		options = $.extend(true, {}, options);
		
	
		if(_isJQ) {
			jqEl.data('magnificPopup', options);
		} else {
			jqEl[0].magnificPopup = options;
		}

		mfp.addGroup(jqEl, options);

	}
	return jqEl;
};


var INLINE_NS = 'inline',
	_hiddenClass,
	_inlinePlaceholder, 
	_lastInlineElement,
	_putInlineElementsBack = function() {
		if(_lastInlineElement) {
			_inlinePlaceholder.after( _lastInlineElement.addClass(_hiddenClass) ).detach();
			_lastInlineElement = null;
		}
	};

$.magnificPopup.registerModule(INLINE_NS, {
	options: {
		hiddenClass: 'hide', 
		markup: '',
		tNotFound: 'Content not found'
	},
	proto: {

		initInline: function() {
			mfp.types.push(INLINE_NS);

			_mfpOn(CLOSE_EVENT+'.'+INLINE_NS, function() {
				_putInlineElementsBack();
			});
		},

		getInline: function(item, template) {

			_putInlineElementsBack();

			if(item.src) {
				var inlineSt = mfp.st.inline,
					el = $(item.src);

				if(el.length) {

					var parent = el[0].parentNode;
					if(parent && parent.tagName) {
						if(!_inlinePlaceholder) {
							_hiddenClass = inlineSt.hiddenClass;
							_inlinePlaceholder = _getEl(_hiddenClass);
							_hiddenClass = 'mfp-'+_hiddenClass;
						}
				
						_lastInlineElement = el.after(_inlinePlaceholder).detach().removeClass(_hiddenClass);
					}

					mfp.updateStatus('ready');
				} else {
					mfp.updateStatus('error', inlineSt.tNotFound);
					el = $('<div>');
				}

				item.inlineElement = el;
				return el;
			}

			mfp.updateStatus('ready');
			mfp._parseMarkup(template, {}, item);
			return template;
		}
	}
});


var AJAX_NS = 'ajax',
	_ajaxCur,
	_removeAjaxCursor = function() {
		if(_ajaxCur) {
			_body.removeClass(_ajaxCur);
		}
	},
	_destroyAjaxRequest = function() {
		_removeAjaxCursor();
		if(mfp.req) {
			mfp.req.abort();
		}
	};

$.magnificPopup.registerModule(AJAX_NS, {

	options: {
		settings: null,
		cursor: 'mfp-ajax-cur',
		tError: '<a href="%url%">The content</a> could not be loaded.'
	},

	proto: {
		initAjax: function() {
			mfp.types.push(AJAX_NS);
			_ajaxCur = mfp.st.ajax.cursor;

			_mfpOn(CLOSE_EVENT+'.'+AJAX_NS, _destroyAjaxRequest);
			_mfpOn('BeforeChange.' + AJAX_NS, _destroyAjaxRequest);
		},
		getAjax: function(item) {

			if(_ajaxCur)
				_body.addClass(_ajaxCur);

			mfp.updateStatus('loading');

			var opts = $.extend({
				url: item.src,
				success: function(data, textStatus, jqXHR) {
					var temp = {
						data:data,
						xhr:jqXHR
					};

					_mfpTrigger('ParseAjax', temp);

					mfp.appendContent( $(temp.data), AJAX_NS );

					item.finished = true;

					_removeAjaxCursor();

					mfp._setFocus();

					setTimeout(function() {
						mfp.wrap.addClass(READY_CLASS);
					}, 16);

					mfp.updateStatus('ready');

					_mfpTrigger('AjaxContentAdded');
				},
				error: function() {
					_removeAjaxCursor();
					item.finished = item.loadError = true;
					mfp.updateStatus('error', mfp.st.ajax.tError.replace('%url%', item.src));
				}
			}, mfp.st.ajax.settings);

			mfp.req = $.ajax(opts);

			return '';
		}
	}
});





	


var _imgInterval,
	_getTitle = function(item) {
		if(item.data && item.data.title !== undefined) 
			return item.data.title;

		var src = mfp.st.image.titleSrc;

		if(src) {
			if($.isFunction(src)) {
				return src.call(mfp, item);
			} else if(item.el) {
				return item.el.attr(src) || '';
			}
		}
		return '';
	};

$.magnificPopup.registerModule('image', {

	options: {
		markup: '<div class="mfp-figure">'+
					'<div class="mfp-close"></div>'+
					'<figure>'+
						'<div class="mfp-img"></div>'+
						'<figcaption>'+
							'<div class="mfp-bottom-bar">'+
								'<div class="mfp-title"></div>'+
								'<div class="mfp-counter"></div>'+
							'</div>'+
						'</figcaption>'+
					'</figure>'+
				'</div>',
		cursor: 'mfp-zoom-out-cur',
		titleSrc: 'title', 
		verticalFit: true,
		tError: '<a href="%url%">The image</a> could not be loaded.'
	},

	proto: {
		initImage: function() {
			var imgSt = mfp.st.image,
				ns = '.image';

			mfp.types.push('image');

			_mfpOn(OPEN_EVENT+ns, function() {
				if(mfp.currItem.type === 'image' && imgSt.cursor) {
					_body.addClass(imgSt.cursor);
				}
			});

			_mfpOn(CLOSE_EVENT+ns, function() {
				if(imgSt.cursor) {
					_body.removeClass(imgSt.cursor);
				}
				_window.off('resize' + EVENT_NS);
			});

			_mfpOn('Resize'+ns, mfp.resizeImage);
			if(mfp.isLowIE) {
				_mfpOn('AfterChange', mfp.resizeImage);
			}
		},
		resizeImage: function() {
			var item = mfp.currItem;
			if(!item || !item.img) return;

			if(mfp.st.image.verticalFit) {
				var decr = 0;
			
				if(mfp.isLowIE) {
					decr = parseInt(item.img.css('padding-top'), 10) + parseInt(item.img.css('padding-bottom'),10);
				}
				item.img.css('max-height', mfp.wH-decr);
			}
		},
		_onImageHasSize: function(item) {
			if(item.img) {
				
				item.hasSize = true;

				if(_imgInterval) {
					clearInterval(_imgInterval);
				}
				
				item.isCheckingImgSize = false;

				_mfpTrigger('ImageHasSize', item);

				if(item.imgHidden) {
					if(mfp.content)
						mfp.content.removeClass('mfp-loading');
					
					item.imgHidden = false;
				}

			}
		},

	
		findImageSize: function(item) {

			var counter = 0,
				img = item.img[0],
				mfpSetInterval = function(delay) {

					if(_imgInterval) {
						clearInterval(_imgInterval);
					}
					
					_imgInterval = setInterval(function() {
						if(img.naturalWidth > 0) {
							mfp._onImageHasSize(item);
							return;
						}

						if(counter > 200) {
							clearInterval(_imgInterval);
						}

						counter++;
						if(counter === 3) {
							mfpSetInterval(10);
						} else if(counter === 40) {
							mfpSetInterval(50);
						} else if(counter === 100) {
							mfpSetInterval(500);
						}
					}, delay);
				};

			mfpSetInterval(1);
		},

		getImage: function(item, template) {

			var guard = 0,

			
				onLoadComplete = function() {
					if(item) {
						if (item.img[0].complete) {
							item.img.off('.mfploader');
							
							if(item === mfp.currItem){
								mfp._onImageHasSize(item);

								mfp.updateStatus('ready');
							}

							item.hasSize = true;
							item.loaded = true;

							_mfpTrigger('ImageLoadComplete');
							
						}
						else {
							guard++;
							if(guard < 200) {
								setTimeout(onLoadComplete,100);
							} else {
								onLoadError();
							}
						}
					}
				},

			
				onLoadError = function() {
					if(item) {
						item.img.off('.mfploader');
						if(item === mfp.currItem){
							mfp._onImageHasSize(item);
							mfp.updateStatus('error', imgSt.tError.replace('%url%', item.src) );
						}

						item.hasSize = true;
						item.loaded = true;
						item.loadError = true;
					}
				},
				imgSt = mfp.st.image;


			var el = template.find('.mfp-img');
			if(el.length) {
				var img = document.createElement('img');
				img.className = 'mfp-img';
				item.img = $(img).on('load.mfploader', onLoadComplete).on('error.mfploader', onLoadError);
				img.src = item.src;

			
				if(el.is('img')) {
					item.img = item.img.clone();
				}

				img = item.img[0];
				if(img.naturalWidth > 0) {
					item.hasSize = true;
				} else if(!img.width) {										
					item.hasSize = false;
				}
			}

			mfp._parseMarkup(template, {
				title: _getTitle(item),
				img_replaceWith: item.img
			}, item);

			mfp.resizeImage();

			if(item.hasSize) {
				if(_imgInterval) clearInterval(_imgInterval);

				if(item.loadError) {
					template.addClass('mfp-loading');
					mfp.updateStatus('error', imgSt.tError.replace('%url%', item.src) );
				} else {
					template.removeClass('mfp-loading');
					mfp.updateStatus('ready');
				}
				return template;
			}

			mfp.updateStatus('loading');
			item.loading = true;

			if(!item.hasSize) {
				item.imgHidden = true;
				template.addClass('mfp-loading');
				mfp.findImageSize(item);
			} 

			return template;
		}
	}
});


var hasMozTransform,
	getHasMozTransform = function() {
		if(hasMozTransform === undefined) {
			hasMozTransform = document.createElement('p').style.MozTransform !== undefined;
		}
		return hasMozTransform;		
	};

$.magnificPopup.registerModule('zoom', {

	options: {
		enabled: false,
		easing: 'ease-in-out',
		duration: 300,
		opener: function(element) {
			return element.is('img') ? element : element.find('img');
		}
	},

	proto: {

		initZoom: function() {
			var zoomSt = mfp.st.zoom,
				ns = '.zoom',
				image;
				
			if(!zoomSt.enabled || !mfp.supportsTransition) {
				return;
			}

			var duration = zoomSt.duration,
				getElToAnimate = function(image) {
					var newImg = image.clone().removeAttr('style').removeAttr('class').addClass('mfp-animated-image'),
						transition = 'all '+(zoomSt.duration/1000)+'s ' + zoomSt.easing,
						cssObj = {
							position: 'fixed',
							zIndex: 9999,
							left: 0,
							top: 0,
							'-webkit-backface-visibility': 'hidden'
						},
						t = 'transition';

					cssObj['-webkit-'+t] = cssObj['-moz-'+t] = cssObj['-o-'+t] = cssObj[t] = transition;

					newImg.css(cssObj);
					return newImg;
				},
				showMainContent = function() {
					mfp.content.css('visibility', 'visible');
				},
				openTimeout,
				animatedImg;

			_mfpOn('BuildControls'+ns, function() {
				if(mfp._allowZoom()) {

					clearTimeout(openTimeout);
					mfp.content.css('visibility', 'hidden');

				
					image = mfp._getItemToZoom();

					if(!image) {
						showMainContent();
						return;
					}

					animatedImg = getElToAnimate(image); 
					
					animatedImg.css( mfp._getOffset() );

					mfp.wrap.append(animatedImg);

					openTimeout = setTimeout(function() {
						animatedImg.css( mfp._getOffset( true ) );
						openTimeout = setTimeout(function() {

							showMainContent();

							setTimeout(function() {
								animatedImg.remove();
								image = animatedImg = null;
								_mfpTrigger('ZoomAnimationEnded');
							}, 16); 

						}, duration); 

					}, 16); 


				}
			});
			_mfpOn(BEFORE_CLOSE_EVENT+ns, function() {
				if(mfp._allowZoom()) {

					clearTimeout(openTimeout);

					mfp.st.removalDelay = duration;

					if(!image) {
						image = mfp._getItemToZoom();
						if(!image) {
							return;
						}
						animatedImg = getElToAnimate(image);
					}
					
					
					animatedImg.css( mfp._getOffset(true) );
					mfp.wrap.append(animatedImg);
					mfp.content.css('visibility', 'hidden');
					
					setTimeout(function() {
						animatedImg.css( mfp._getOffset() );
					}, 16);
				}

			});

			_mfpOn(CLOSE_EVENT+ns, function() {
				if(mfp._allowZoom()) {
					showMainContent();
					if(animatedImg) {
						animatedImg.remove();
					}
					image = null;
				}	
			});
		},

		_allowZoom: function() {
			return mfp.currItem.type === 'image';
		},

		_getItemToZoom: function() {
			if(mfp.currItem.hasSize) {
				return mfp.currItem.img;
			} else {
				return false;
			}
		},

	
		_getOffset: function(isLarge) {
			var el;
			if(isLarge) {
				el = mfp.currItem.img;
			} else {
				el = mfp.st.zoom.opener(mfp.currItem.el || mfp.currItem);
			}

			var offset = el.offset();
			var paddingTop = parseInt(el.css('padding-top'),10);
			var paddingBottom = parseInt(el.css('padding-bottom'),10);
			offset.top -= ( $(window).scrollTop() - paddingTop );


		
			var obj = {
				width: el.width(),
			
				height: (_isJQ ? el.innerHeight() : el[0].offsetHeight) - paddingBottom - paddingTop
			};

		
			if( getHasMozTransform() ) {
				obj['-moz-transform'] = obj['transform'] = 'translate(' + offset.left + 'px,' + offset.top + 'px)';
			} else {
				obj.left = offset.left;
				obj.top = offset.top;
			}
			return obj;
		}

	}
});



var IFRAME_NS = 'iframe',
	_emptyPage = '//about:blank',
	
	_fixIframeBugs = function(isShowing) {
		if(mfp.currTemplate[IFRAME_NS]) {
			var el = mfp.currTemplate[IFRAME_NS].find('iframe');
			if(el.length) { 
				if(!isShowing) {
					el[0].src = _emptyPage;
				}

				if(mfp.isIE8) {
					el.css('display', isShowing ? 'block' : 'none');
				}
			}
		}
	};

$.magnificPopup.registerModule(IFRAME_NS, {

	options: {
		markup: '<div class="mfp-iframe-scaler">'+
					'<div class="mfp-close"></div>'+
					'<iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe>'+
				'</div>',

		srcAction: 'iframe_src',

		patterns: {
			youtube: {
				index: 'youtube.com', 
				id: 'v=', 
				src: '//www.youtube.com/embed/%id%?showinfo=0&amp;showsearch=0&amp;modestbranding=1&amp;rel=0'
			},
			vimeo: {
				index: 'vimeo.com/',
				id: '/',
				src: '//player.vimeo.com/video/%id%'
			},
			youku: {
				index: 'v.youku.com/v_show/',
				id: 'id_',
				src: 'http://player.youku.com/embed/%id%'
			},
			tudou: {
				index: 'tudou.com/programs/view/',
				id: '/',
				src: 'http://www.tudou.com/programs/view/html5embed.action?code=%id%'
			},
			gmaps: {
				index: '//maps.google.',
				src: '%id%&output=embed'
			}
		}
	},

	proto: {
		initIframe: function() {
			mfp.types.push(IFRAME_NS);

			_mfpOn('BeforeChange', function(e, prevType, newType) {
				if(prevType !== newType) {
					if(prevType === IFRAME_NS) {
						_fixIframeBugs();
					} else if(newType === IFRAME_NS) {
						_fixIframeBugs(true); 
					} 
				}
			});

			_mfpOn(CLOSE_EVENT + '.' + IFRAME_NS, function() {
				_fixIframeBugs();
			});
		},

		getIframe: function(item, template) {
			var embedSrc = item.src;
			var iframeSt = mfp.st.iframe;
				
			$.each(iframeSt.patterns, function() {
				if(embedSrc.indexOf( this.index ) > -1) {
					if(this.id) {
						if(typeof this.id === 'string') {
							embedSrc = embedSrc.substr(embedSrc.lastIndexOf(this.id)+this.id.length, embedSrc.length);
						} else {
							embedSrc = this.id.call( this, embedSrc );
						}
					}
					embedSrc = this.src.replace('%id%', embedSrc );
					return false;
				}
			});
			
			var dataObj = {};
			if(iframeSt.srcAction) {
				dataObj[iframeSt.srcAction] = embedSrc;
			}
			mfp._parseMarkup(template, dataObj, item);

			mfp.updateStatus('ready');

			return template;
		}
	}
});



var _getLoopedId = function(index) {
		var numSlides = mfp.items.length;
		if(index > numSlides - 1) {
			return index - numSlides;
		} else  if(index < 0) {
			return numSlides + index;
		}
		return index;
	},
	_replaceCurrTotal = function(text, curr, total) {
		return text.replace(/%curr%/gi, curr + 1).replace(/%total%/gi, total);
	};

$.magnificPopup.registerModule('gallery', {

	options: {
		enabled: false,
		arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
		preload: [0,2],
		navigateByImgClick: true,
		arrows: true,

		tPrev: 'Previous (Left arrow key)',
		tNext: 'Next (Right arrow key)',
		tCounter: '%curr% of %total%'
	},

	proto: {
		initGallery: function() {

			var gSt = mfp.st.gallery,
				ns = '.mfp-gallery',
				supportsFastClick = Boolean($.fn.mfpFastClick);

			mfp.direction = true;
			
			if(!gSt || !gSt.enabled ) return false;

			_wrapClasses += ' mfp-gallery';

			_mfpOn(OPEN_EVENT+ns, function() {

				if(gSt.navigateByImgClick) {
					mfp.wrap.on('click'+ns, '.mfp-img', function() {
						if(mfp.items.length > 1) {
							mfp.next();
							return false;
						}
					});
				}

				_document.on('keydown'+ns, function(e) {
					if (e.keyCode === 37) {
						mfp.prev();
					} else if (e.keyCode === 39) {
						mfp.next();
					}
				});
			});

			_mfpOn('UpdateStatus'+ns, function(e, data) {
				if(data.text) {
					data.text = _replaceCurrTotal(data.text, mfp.currItem.index, mfp.items.length);
				}
			});

			_mfpOn(MARKUP_PARSE_EVENT+ns, function(e, element, values, item) {
				var l = mfp.items.length;
				values.counter = l > 1 ? _replaceCurrTotal(gSt.tCounter, item.index, l) : '';
			});

			_mfpOn('BuildControls' + ns, function() {
				if(mfp.items.length > 1 && gSt.arrows && !mfp.arrowLeft) {
					var markup = gSt.arrowMarkup,
						arrowLeft = mfp.arrowLeft = $( markup.replace(/%title%/gi, gSt.tPrev).replace(/%dir%/gi, 'left') ).addClass(PREVENT_CLOSE_CLASS),			
						arrowRight = mfp.arrowRight = $( markup.replace(/%title%/gi, gSt.tNext).replace(/%dir%/gi, 'right') ).addClass(PREVENT_CLOSE_CLASS);

					var eName = supportsFastClick ? 'mfpFastClick' : 'click';
					arrowLeft[eName](function() {
						mfp.prev();
					});			
					arrowRight[eName](function() {
						mfp.next();
					});	

					if(mfp.isIE7) {
						_getEl('b', arrowLeft[0], false, true);
						_getEl('a', arrowLeft[0], false, true);
						_getEl('b', arrowRight[0], false, true);
						_getEl('a', arrowRight[0], false, true);
					}

					mfp.container.append(arrowLeft.add(arrowRight));
				}
			});

			_mfpOn(CHANGE_EVENT+ns, function() {
				if(mfp._preloadTimeout) clearTimeout(mfp._preloadTimeout);

				mfp._preloadTimeout = setTimeout(function() {
					mfp.preloadNearbyImages();
					mfp._preloadTimeout = null;
				}, 16);		
			});


			_mfpOn(CLOSE_EVENT+ns, function() {
				_document.off(ns);
				mfp.wrap.off('click'+ns);
			
				if(mfp.arrowLeft && supportsFastClick) {
					mfp.arrowLeft.add(mfp.arrowRight).destroyMfpFastClick();
				}
				mfp.arrowRight = mfp.arrowLeft = null;
			});

		}, 
		next: function() {
			mfp.direction = true;
			mfp.index = _getLoopedId(mfp.index + 1);
			mfp.updateItemHTML();
		},
		prev: function() {
			mfp.direction = false;
			mfp.index = _getLoopedId(mfp.index - 1);
			mfp.updateItemHTML();
		},
		goTo: function(newIndex) {
			mfp.direction = (newIndex >= mfp.index);
			mfp.index = newIndex;
			mfp.updateItemHTML();
		},
		preloadNearbyImages: function() {
			var p = mfp.st.gallery.preload,
				preloadBefore = Math.min(p[0], mfp.items.length),
				preloadAfter = Math.min(p[1], mfp.items.length),
				i;

			for(i = 1; i <= (mfp.direction ? preloadAfter : preloadBefore); i++) {
				mfp._preloadItem(mfp.index+i);
			}
			for(i = 1; i <= (mfp.direction ? preloadBefore : preloadAfter); i++) {
				mfp._preloadItem(mfp.index-i);
			}
		},
		_preloadItem: function(index) {
			index = _getLoopedId(index);

			if(mfp.items[index].preloaded) {
				return;
			}

			var item = mfp.items[index];
			if(!item.parsed) {
				item = mfp.parseEl( index );
			}

			_mfpTrigger('LazyLoad', item);

			if(item.type === 'image') {
				item.img = $('<img class="mfp-img" />').on('load.mfploader', function() {
					item.hasSize = true;
				}).on('error.mfploader', function() {
					item.hasSize = true;
					item.loadError = true;
					_mfpTrigger('LazyLoadError', item);
				}).attr('src', item.src);
			}


			item.preloaded = true;
		}
	}
});


var RETINA_NS = 'retina';

$.magnificPopup.registerModule(RETINA_NS, {
	options: {
		replaceSrc: function(item) {
			return item.src.replace(/\.\w+$/, function(m) { return '@2x' + m; });
		},
		ratio: 1 
	},
	proto: {
		initRetina: function() {
			if(window.devicePixelRatio > 1) {

				var st = mfp.st.retina,
					ratio = st.ratio;

				ratio = !isNaN(ratio) ? ratio : ratio();

				if(ratio > 1) {
					_mfpOn('ImageHasSize' + '.' + RETINA_NS, function(e, item) {
						item.img.css({
							'max-width': item.img[0].naturalWidth / ratio,
							'width': '100%'
						});
					});
					_mfpOn('ElementParse' + '.' + RETINA_NS, function(e, item) {
						item.src = st.replaceSrc(item, ratio);
					});
				}
			}

		}
	}
});



(function() {
	var ghostClickDelay = 1000,
		supportsTouch = 'ontouchstart' in window,
		unbindTouchMove = function() {
			_window.off('touchmove'+ns+' touchend'+ns);
		},
		eName = 'mfpFastClick',
		ns = '.'+eName;


	$.fn.mfpFastClick = function(callback) {

		return $(this).each(function() {

			var elem = $(this),
				lock;

			if( supportsTouch ) {

				var timeout,
					startX,
					startY,
					pointerMoved,
					point,
					numPointers;

				elem.on('touchstart' + ns, function(e) {
					pointerMoved = false;
					numPointers = 1;

					point = e.originalEvent ? e.originalEvent.touches[0] : e.touches[0];
					startX = point.clientX;
					startY = point.clientY;

					_window.on('touchmove'+ns, function(e) {
						point = e.originalEvent ? e.originalEvent.touches : e.touches;
						numPointers = point.length;
						point = point[0];
						if (Math.abs(point.clientX - startX) > 10 ||
							Math.abs(point.clientY - startY) > 10) {
							pointerMoved = true;
							unbindTouchMove();
						}
					}).on('touchend'+ns, function(e) {
						unbindTouchMove();
						if(pointerMoved || numPointers > 1) {
							return;
						}
						lock = true;
						e.preventDefault();
						clearTimeout(timeout);
						timeout = setTimeout(function() {
							lock = false;
						}, ghostClickDelay);
						callback();
					});
				});

			}

			elem.on('click' + ns, function() {
				if(!lock) {
					callback();
				}
			});
		});
	};

	$.fn.destroyMfpFastClick = function() {
		$(this).off('touchstart' + ns + ' click' + ns);
		if(supportsTouch) _window.off('touchmove'+ns+' touchend'+ns);
	};
})();


 _checkInstance(); })(window.jQuery || window.Zepto);