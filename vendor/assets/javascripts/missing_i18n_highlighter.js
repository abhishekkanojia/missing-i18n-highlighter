function MissingI18nHighlighter(data) {
  var options              = data || {};
  this.showPopup           = options.popup !== false;
  this.highlightColor      = options.color || MissingI18nHighlighter.DEFAULT.color;
  this.translationSelector = options.selector || MissingI18nHighlighter.DEFAULT.selector;
}

MissingI18nHighlighter.DEFAULT = {
  color    : '#729adb',
  selector : '.translation_missing'
};

MissingI18nHighlighter.POPUP = {
  message      : 'Translation Missing',
  className    : 'popuptext',
  showClass    : 'show',
  wrapperClass : 'popup'
};

MissingI18nHighlighter.prototype.createPopup = function() {
  var popUp = document.createElement('span');
  popUp.innerText = MissingI18nHighlighter.POPUP.message;
  popUp.setAttribute('class', MissingI18nHighlighter.POPUP.className);
  popUp.classList.add(MissingI18nHighlighter.POPUP.showClass);
  return popUp;
};

MissingI18nHighlighter.prototype.addPopup = function(elements) {
  var _this = this;
  if(this.showPopup) {
    elements.forEach(function(element){
      element.classList.add(MissingI18nHighlighter.POPUP.wrapperClass);
      element.appendChild(_this.createPopup());
    });
  } else {
    elements.forEach(function(element){
      element.classList.remove(MissingI18nHighlighter.POPUP.wrapperClass);
    });
  }
};

MissingI18nHighlighter.prototype.highlightAll = function(elements) {
  var _this = this;

  elements.forEach(function(element){
    element.style.backgroundColor = _this.highlightColor;
  });
  this.addPopup(elements);
};

MissingI18nHighlighter.prototype.selectAndHighlight = function() {
  var elements = document.querySelectorAll(this.translationSelector);
  this.highlightAll(elements);
};

MissingI18nHighlighter.prototype.init = function() {
  var _this = this;
  window.addEventListener('load', function() { _this.selectAndHighlight(); });
};

(function(){

  var highlighter = new MissingI18nHighlighter();
  highlighter.init();

})();
