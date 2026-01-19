#!/usr/bin/env perl
# Hello World in Perl

use strict;
use warnings;

# Simple print
print "Hello, World!\n";

# Using say (requires Perl 5.10+)
use feature 'say';
say "Hello, World!";

# Using printf
printf "Hello, %s!\n", "World";

# Using here-doc
print <<'END';
Hello, World!
END

# Using array join
my @chars = ('H', 'e', 'l', 'l', 'o', ',', ' ', 'W', 'o', 'r', 'l', 'd', '!');
say join('', @chars);

# Using map and chr
say join('', map { chr($_) } (72, 101, 108, 108, 111, 44, 32, 87, 111, 114, 108, 100, 33));

# Using regex substitution
my $text = "Goodbye, Universe!";
$text =~ s/Goodbye/Hello/;
$text =~ s/Universe/World/;
say $text;

# Using STDOUT
print STDOUT "Hello, World!\n";
