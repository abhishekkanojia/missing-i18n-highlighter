function MissingI18nHighlighter(data) {
  this.highlightColor      = data.bgcolor;
  this.translationSelector = data.selector;
}

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
  var highlighter = new MissingI18nHighlighter({
    selector : '.translation_missing',
    bgcolor  : '#ffa500'
  });

  highlighter.init();
})();
