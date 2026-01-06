program stats_demo
  use math_utils, only: mean
  implicit none
  real :: values(5)

  values = (/ 1.0, 2.0, 3.5, 4.0, 10.0 /)
  print *, 'Values:', values
  print *, 'Mean  :', mean(values)
end program stats_demo

