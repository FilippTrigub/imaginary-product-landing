#!/usr/bin/env perl
# Hello World using Perl's exotic features

use strict;
use warnings;
use feature 'say';

# Using tie
package HelloTie;
sub TIESCALAR { bless {}, shift }
sub FETCH { "Hello, World!" }

package main;
tie my $hello, 'HelloTie';
say $hello;

# Using autoload
package AutoHello;
our $AUTOLOAD;
sub AUTOLOAD {
    return "Hello, World!" if $AUTOLOAD =~ /::world$/;
}

package main;
say AutoHello->world();

# Using source filter (symbolic reference)
no strict 'refs';
*{'hello'} = sub { "Hello, World!" };
say hello();
use strict 'refs';

# Using regex with code execution
"x" =~ /(?{ print "Hello, World!\n" })/;

# Using map with side effects
map { say "Hello, World!" } (1);

# Using do block
say do { "Hello, World!" };

# Using ternary operator chain
say 1 ? "Hello, World!" : "Goodbye";

# Using goto (computed goto)
goto HELLO;
HELLO: say "Hello, World!";

# Using symbolic reference with glob
{
    no strict 'refs';
    ${'main::greeting'} = "Hello, World!";
    say $main::greeting;
}

# Using flip-flop operator
for (1..3) {
    say "Hello, World!" if 1..1;
}

# Using smartmatch (deprecated but exotic)
no warnings 'experimental::smartmatch';
say "Hello, World!" if "world" ~~ /world/;

# Using state variable
{
    use feature 'state';
    sub greet_once {
        state $greeted = 0;
        say "Hello, World!" unless $greeted++;
    }
    greet_once();
    greet_once(); # Won't print again
}

# Using subroutine with explicit parameter
sub hello_proto {
    my ($name) = @_;
    say "Hello, $name!";
}
hello_proto("World");
