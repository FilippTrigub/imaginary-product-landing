# Use gfortran by default even if make's built-in FC is set.
FC = gfortran
FFLAGS ?= -O2 -Wall -Wextra -std=f2008

.PHONY: all clean

all: hello_name args_sum stats_demo

hello_name: hello_name.f90
	$(FC) $(FFLAGS) -o $@ $<

args_sum: args_sum.f90
	$(FC) $(FFLAGS) -o $@ $<

stats_demo: stats_demo.f90 math_utils.f90
	$(FC) $(FFLAGS) -o $@ math_utils.f90 stats_demo.f90

clean:
	rm -f hello_name args_sum stats_demo *.o *.mod
