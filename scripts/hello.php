#!/usr/bin/env php
<?php
$args = array_slice($argv, 1);
if (count($args) > 0) {
    echo "Hello, " . implode(' ', $args) . "!\n";
} else {
    echo "Hello, world!\n";
}
