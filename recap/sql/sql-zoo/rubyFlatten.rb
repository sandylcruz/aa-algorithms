def my_flatten(array)
  flattened = []

  array.each do |element|
    if element.class == Array
      flattened.concat(my_flatten(element))
    else
      flattened << element
    end
  end

  flattened
end

puts my_flatten([1, [2, 3]]) === [1, 2, 3]
puts my_flatten([1, [2, 3, [4, 5]]]) === [1, 2, 3, 4, 5]
puts my_flatten([1, [2, 3, [4, 5, [6], [7, [8]]]]]) === [1, 2, 3, 4, 5, 6, 7, 8]
puts my_flatten([[]]) === []
puts my_flatten([[], []]) === []
