# Fortran examples

Small Fortran programs to accompany `hello_world.f90`.

## Build

From repo root:

```sh
make -C fortran
```

Or compile one file directly:

```sh
gfortran -O2 -Wall -Wextra -std=f2008 -o hello_name fortran/hello_name.f90
```

## Run

```sh
./fortran/hello_name
./fortran/args_sum 10 20 30
./fortran/stats_demo
```

