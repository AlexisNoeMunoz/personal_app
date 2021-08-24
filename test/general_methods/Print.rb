
module Print
    def self.select_color
        colors = [
            :green, :light_green, :yellow, :light_cyan,  :cyan,  
            :light_yellow, :light_blue, :light_magenta,
        ]                 
        return colors[rand(colors.length - 1)]                        
    end  
    def self.divisor(current_class = "", color = :default)
        puts "💲------------------------------------ #{current_class} -------------------------------------------💲".colorize(color)
    end
    def self.tab
        return "     "
    end
    def self.name(name="", color = :default)                
        puts "➖➖ ▶️  [ #{name} ] ◀️  ➖➖➖➖➖➖➖➖➖➖➖➖➖".colorize(color)
    end
    def self.validation(validating = true, field_name = "", test_title = "", color = :default)
        puts "#{self.tab()*2}|#{validating ? '✅  Validando ' : "❌ Invalidando"}| 〰️ (#{field_name}) #{test_title}".colorize(color)        
    end        
    def self.error(error = "", color = :default)
        puts "#{self.tab()*3}➖ #{error}".colorize(color)        
    end
end