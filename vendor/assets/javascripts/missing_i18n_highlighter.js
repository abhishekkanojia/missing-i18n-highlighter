function MissingI18nHighlighter(data) {
  var options = data || {};
  this.highlightColor      = options.color || MissingI18nHighlighter.DEFAULT.color;
  this.translationSelector = options.selector || MissingI18nHighlighter.DEFAULT.selector;
}

MissingI18nHighlighter.DEFAULT = {
  color    : '#ffa500',
  selector : '.translation_missing'
};

MissingI18nHighlighter.prototype.highlightAll = function(elements) {
  var _this = this;

  elements.forEach(function(element){
    element.style.backgroundColor = _this.highlightColor;
  });
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
