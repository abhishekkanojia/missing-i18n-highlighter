# Missing::I18n::Highlighter

Missing::I18n::Highlighter highlights missing translations on page with color provided as parameter. Default color is `#729adb` which is `sky blue`. It also shows a popup over the translation missing.

## Preview
Here is how it highlights page with missing translation:

![missing-i18n-highlighter](https://github.com/abhishekkanojia/images/raw/master/missing-translation.png)

## Usage

Add this line to your application's Gemfile:

```ruby
gem 'missing-i18n-highlighter'
```

And then execute:

    $ bundle

Or install it yourself as:

    $ gem install missing-i18n-highlighter

## Require js and css file

In `application.js`

```ruby
//= require missing_i18n_highlighter
```

and In `application.css`

```ruby
*= require missing_i18n_highlighter
```

## Yeah That's it ! !

Restart your rails server to see the changes and visit the page you want to highlight missing translations on.

## Development
#### Any new feature you want ??
create an issue or create a pull request for your feature.

## Contributing
> Make sure you install and configure Js Lint and Align tab to validate js that you write.
Bug reports and pull requests are welcome on GitHub at https://github.com/abhishekkanojia/missing-i18n-highlighter.

## License
The gem is available as open source under the terms of the [MIT License](https://opensource.org/licenses/MIT).
