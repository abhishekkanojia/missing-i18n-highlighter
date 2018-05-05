
lib = File.expand_path("../lib", __FILE__)
$LOAD_PATH.unshift(lib) unless $LOAD_PATH.include?(lib)
require "missing/i18n/highlighter/version"

Gem::Specification.new do |spec|
  spec.name          = "missing-i18n-highlighter"
  spec.version       = Missing::I18n::Highlighter::VERSION
  spec.authors       = ["Abhishek kanojia"]
  spec.email         = ["abhishekka3193@gmail.com"]

  spec.summary       = %q{ This gem highlights missing translations on page with background color. }
  spec.description   = %q{ This gem highlights missing translations on page with background color. }
  spec.homepage      = 'https://github.com/abhishekkanojia/missing-i18n-highlighter'
  spec.license       = "MIT"

  spec.files         = `git ls-files -z`.split("\x0").reject do |f|
    f.match(%r{^(test|spec|features)/})
  end
  spec.bindir        = "exe"
  spec.executables   = spec.files.grep(%r{^exe/}) { |f| File.basename(f) }
  spec.require_paths = ["lib"]

  spec.add_development_dependency "bundler", "~> 1.16"
  spec.add_development_dependency "rake", "~> 10.0"
end
