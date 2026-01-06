#!/usr/bin/env perl
# Hello World in Perl - Multiple approaches

use strict;
use warnings;
use v5.10;

# Basic print
print "Hello, World!\n";
say "Hello, World!";  # say adds newline automatically

# Using variables
my $name = "World";
print "Hello, $name!\n";

# Subroutine
sub greet {
    my $name = shift // "World";
    return "Hello, $name!";
}

say greet();
say greet("Perl");

# Array iteration
my @names = ("Alice", "Bob", "Charlie");
foreach my $name (@names) {
    say "Hello, $name!";
}

# Hash (associative array)
my %greetings = (
    english => "Hello",
    spanish => "Hola",
    french  => "Bonjour",
    german  => "Guten Tag"
);

foreach my $lang (keys %greetings) {
    say "$greetings{$lang}, World! ($lang)";
}

# Regular expression
my $text = "Hello, World!";
if ($text =~ /Hello, (\w+)!/) {
    say "Found greeting for: $1";
}

# Object-oriented approach
package Greeter;

sub new {
    my ($class, $greeting) = @_;
    $greeting //= "Hello";
    my $self = {
        greeting => $greeting
    };
    bless $self, $class;
    return $self;
}

sub greet {
    my ($self, $name) = @_;
    $name //= "World";
    return "$self->{greeting}, $name!";
}

package main;

my $greeter = Greeter->new();
say $greeter->greet();
say $greeter->greet("Developer");

# Map function
my @greetings_list = map { "Hello, $_!" } @names;
say join(" | ", @greetings_list);

# Grep function
my @long_names = grep { length($_) > 3 } @names;
say "Long names: " . join(", ", @long_names);

# Here document
print << "END_MESSAGE";
=========================
Multi-line Hello World
Hello, World!
From Perl Script
=========================
END_MESSAGE

# Anonymous subroutine
my $hello = sub {
    my $name = shift // "World";
    return "Hello, $name!";
};

say $hello->("Anonymous Sub");

# List context
my ($greeting, $target) = ("Hello", "World");
say "$greeting, $target!";

say "\n=== Perl Hello World Complete ===";
