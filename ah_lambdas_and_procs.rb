# Example of calling lambdas:

def title(text='')
  15.times{print '*'}
  puts "*" * 15
  puts text
  2.times{puts "\n"}
end

# Example of how to call lambdas:
title('Example of calling lambdas')
my_lambda = -> { puts "Lambda called."}

my_lambda.call
my_lambda.()
my_lambda[]
my_lambda.===


# Lambda with arguments
title('Lambda with one argument')

times_two = ->(x) { x * 2 }
puts times_two.call(10)

times_three = lambda{ |y| y * 3}
puts times_three.call(3)


# Lambda with 2 of 2 arguments
title('Lambda with 2 of 2 arguments')
my_lambda = ->(x,y){puts x * y}
my_lambda.call(2,3)

# Proc with 2 of 2 arguments
title('Proc with 2 of 2 arguments')
my_proc = Proc.new {|x,y| puts x * y}
my_proc.call(3,4)
my_proc.(3,4)
my_proc[3,4]
# # Lambda with 1 of 2 arguments. Error expected
# title('Lambda with only 1 of 2 arguments.  Error expected')
# my_lambda = ->(x,y){puts "No errors here!"}
# my_lambda.call(5)

# Proc with 1 of 2 arguments.  No error expected
title('Proc with 1 of 2 arguments. No error expected')
my_proc = Proc.new {|x,y| puts "No errors here!"}
my_proc.call(6)


