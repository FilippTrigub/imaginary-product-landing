program args_sum
  implicit none
  integer :: argc, i, value, total, ios
  character(len=256) :: arg

  total = 0
  argc = command_argument_count()

  if (argc == 0) then
    print *, 'Usage: ./args_sum <int> <int> ...'
    stop 2
  end if

  do i = 1, argc
    call get_command_argument(i, arg)
    read (arg, *, iostat=ios) value
    if (ios /= 0) then
      print *, 'Invalid integer argument: ', trim(arg)
      stop 2
    end if
    total = total + value
  end do

  print *, 'Sum =', total
end program args_sum

