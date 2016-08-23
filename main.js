var Elixir = require('laravel-elixir');
require('laravel53-elixir-behat');

var Path = require('path');

elixir.config.appPath = Path.normalize('src');
elixir.config.viewPath = Path.normalize('support/resources/views');
elixir.config.assetsPath = Path.normalize('support/resources/assets/');
elixir.config.testing.phpSpec.path = Path.normalize('support/spec');
elixir.config.testing.phpSpec.command = Path.normalize('bin/phpspec') + ' run';
elixir.config.testing.behat.path = Path.normalize('support/features');
elixir.config.testing.behat.command = Path.normalize('bin/behat');
