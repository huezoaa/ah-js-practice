def title(text='')
  15.times{print '@'}
  puts "\n"
  puts text
  puts "*" * 15
  1.times{puts "\n"}
end
##########################################

# Lambda with 2 of 2 arguments
title('Lambda with 2 of 2 arguments')
my_lambda = -> (x,y) {puts x * y}
my_lambda.call 3,4


puts "\r\n"