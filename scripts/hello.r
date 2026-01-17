#!/usr/bin/env Rscript

args <- commandArgs(trailingOnly = TRUE)

if (length(args) > 0) {
  cat("Hello, ", paste(args, collapse = " "), "!\n", sep = "")
} else {
  cat("Hello, world!\n")
}
