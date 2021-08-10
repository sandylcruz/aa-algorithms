def largest_subsum(array)
  current = 0;
  max = 0;
  i = 0

  while i < array.length
    current += array[i]

    if current <= 0 || current <= max
      current = 0;
    else
      max = current
    end
    i += 1

  end
  max
end

puts largest_subsum([5, 3, -7])
puts largest_subsum([1, 2, 3, -6, 100, 23])