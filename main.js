var Elixir = require('laravel-elixir');
require('laravel53-elixir-behat');

var Path = require('path');

Elixir.config.appPath = Path.normalize('src');
Elixir.config.viewPath = Path.normalize('support/resources/views');
Elixir.config.assetsPath = Path.normalize('support/resources/assets/');
Elixir.config.testing.phpSpec.path = Path.normalize('support/spec');
Elixir.config.testing.phpSpec.command = Path.normalize('bin/phpspec') + ' run';
Elixir.config.testing.behat.path = Path.normalize('support/features');
Elixir.config.testing.behat.command = Path.normalize('bin/behat');
