# Example of calling lambdas:

def title(text='')
  30.times{print '*'}
  puts "\n", text

  2.times{puts "\n"}
end

title('Example of calling lambdas')
my_lambda = lambda { puts "Lambda called."}

my_lambda.call
my_lambda.()
my_lambda[]
my_lambda.===


# Lambda with arguments
title('Lambda with one argument')

times_two = ->(x) { x * 2 }
puts times_two.call(10)


# Lambda with 2 of 2 arguments
title('Lambda with 2 of 2 arguments')
my_lambda = ->(x,y){puts x * y}
my_lambda.call(2,3)

# Proc with 2 of 2 arguments
title('Proc with 2 of 2 arguments')
my_proc = Proc.new {|x,y| puts x * y}
my_proc.call(3,4)
