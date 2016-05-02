# Example of closure. Pretty awesome

=begin
The trick in the following example is that there are two variables
with the same name:  'count'

One is inside the method definition
the other one is outside, where the proco is defined.

the proc 'puts' out the value of count.  Which count?
the 'count' at the level where the proc is defined.  It carried that
value with it...
=end

def call_proc(my_proc)
  count = 500
  my_proc.call
end

count = 1
my_proc = Proc.new { puts count }

puts call_proc(my_proc)