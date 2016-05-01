# Example of calling lambdas:

def dashes
  30.times{print '*'}
  puts
end

my_lambda = lambda { puts "Lambda called."}

my_lambda.call
my_lambda.()
my_lambda[]
my_lambda.===


# Lambda with arguments

times_two = ->(x) { x * 2 }
puts times_two.call(10)


my_lambda = ->(x,y){puts x * y}
my_lambda.call(2,3)

my_proc = Proc.new {|x,y| puts x * y}
my_proc.call(3,4)
