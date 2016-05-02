def return_binding
  foo = 100
  binding
end

puts return_binding.eval('foo')
# Remmember, foo is inside the method.
# we shouldn't have access to by name.

puts return_binding.class




