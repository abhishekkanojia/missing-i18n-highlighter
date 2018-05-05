function TranslationHighlighter(data) {
  this.highlightColor      = data.bgcolor;
  this.translationSelector = data.selector;
}

TranslationHighlighter.prototype.highlightAll = function(elements) {
  var _this = this;

  elements.forEach(function(element){
    element.style.backgroundColor = _this.highlightColor;
  });
};

TranslationHighlighter.prototype.selectAndHighlight = function() {
  var elements = document.querySelectorAll(this.translationSelector);
  this.highlightAll(elements);
};

TranslationHighlighter.prototype.init = function() {
  var _this = this;
  window.addEventListener('load', function() { _this.selectAndHighlight(); });
};

(function(){
  var highlighter = new TranslationHighlighter({
    selector : '.translation_missing',
    bgcolor  : '#ffa500'
  });

  highlighter.init();
})();
