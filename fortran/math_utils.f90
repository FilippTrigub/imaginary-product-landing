module math_utils
  implicit none
  private
  public :: mean
contains
  real function mean(values)
    real, intent(in) :: values(:)
    mean = sum(values) / real(size(values))
  end function mean
end module math_utils

