#!/usr/bin/env ruby

# Hello World in Ruby
# Demonstrates Ruby's elegant syntax and features

# Basic hello world
def hello_world
  puts "Hello, World!"
end

# Personalized greeting
def hello_name(name)
  puts "Hello, #{name}!"
end

# Hello with timestamp
def hello_with_time
  puts "Hello, World! Current time: #{Time.now}"
end

# Class-based hello world
class Greeter
  attr_accessor :name
  
  def initialize(name = "World")
    @name = name
  end
  
  def greet
    puts "Hello, #{@name}!"
  end
  
  def fancy_greet
    puts "✨ Greetings, #{@name}! ✨"
  end
end

# Main execution
if __FILE__ == $0
  puts "=== Ruby Hello World Program ===\n\n"
  
  # Basic hello world
  hello_world
  
  # Personalized greeting
  name = ARGV[0] || "Developer"
  hello_name(name)
  
  # Hello with timestamp
  hello_with_time
  
  # Class-based greeting
  greeter = Greeter.new("Ruby Enthusiast")
  greeter.greet
  greeter.fancy_greet
  
  # Array iteration
  puts "\nGreeting multiple people:"
  ["Alice", "Bob", "Charlie"].each do |person|
    puts "  👋 Hello, #{person}!"
  end
  
  puts "\nRuby program executed successfully!"
end
