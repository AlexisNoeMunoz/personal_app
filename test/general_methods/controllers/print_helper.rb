def print_controller(message)
    colors = [
      :green, :light_green, :yellow, :light_cyan,  :cyan,  
      :light_yellow, :light_blue, :light_magenta,
    ]
    @color = colors[rand(colors.length - 1)]
    puts ""
    print_division message, @color
end


def print_sub_controller(message)
    colors = [
      :green, :light_green, :yellow, :light_cyan,  :cyan,  
      :light_yellow, :light_blue, :light_magenta,
    ]
    @color == nil && @color = colors[rand(colors.length - 1)]
    puts ""
    puts "-----------> #{message} -------------------------------".colorize(@color)
end