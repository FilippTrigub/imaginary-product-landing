#!/usr/bin/env perl
# Perl Hello World Script
# Demonstrating various Perl idioms and styles

use strict;
use warnings;
use v5.10;  # Enable say function

# Simple print
print "Hello, World!\n";

# Using say (no newline needed)
say "Hello, World!";

# Using here-doc
print <<'END_MESSAGE';
Hello, World!
END_MESSAGE

# Using a subroutine
sub greet {
    my $name = shift // "World";
    return "Hello, $name!";
}

say greet();
say greet("Perl");

# Using printf
printf "Hello, %s!\n", "World";

# Array iteration
my @names = qw(World Perl Universe);
foreach my $name (@names) {
    say "Hello, $name!";
}

# One-liner style (map)
say for map { "Hello, $_!" } qw(World Perl);

# Object-oriented approach
package Greeter;
sub new {
    my ($class, $message) = @_;
    $message //= "Hello, World!";
    return bless { message => $message }, $class;
}

sub greet {
    my $self = shift;
    return $self->{message};
}

package main;
my $greeter = Greeter->new();
say $greeter->greet();
