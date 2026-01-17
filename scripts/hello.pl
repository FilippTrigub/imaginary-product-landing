#!/usr/bin/env perl
# Simple Hello World in Perl
use strict;
use warnings;

my $name = @ARGV ? join(' ', @ARGV) : 'world';
print "Hello, $name!\n";
