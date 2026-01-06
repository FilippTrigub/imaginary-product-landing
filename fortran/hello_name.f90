program hello_name
  implicit none
  character(len=100) :: name

  write (*, '(a)', advance='no') 'Enter your name: '
  read (*, '(a)') name

  if (len_trim(name) == 0) then
    print *, 'Hello, World!'
  else
    print *, 'Hello, ' // trim(name) // '!'
  end if
end program hello_name

