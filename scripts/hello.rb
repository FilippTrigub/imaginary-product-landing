#!/usr/bin/env ruby
# Simple Hello World in Ruby
name = ARGV.empty? ? 'world' : ARGV.join(' ')
puts "Hello, #{name}!"
