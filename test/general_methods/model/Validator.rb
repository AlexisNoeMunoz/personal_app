
require_relative 'helpers/GeneralHelper'
require_relative 'helpers/IntegerHelper'
require_relative 'helpers/StringHelper'
require_relative 'helpers/EmailHelper'
require_relative 'helpers/ForeignIDHelper'
require_relative 'helpers/IndexHelper'

module Validator           
    def start_validation(current_class)
        if $last_class != current_class
            $color = Print.select_color()               
            Print.divisor self.class.name, $color
            $last_class = current_class
        end
        @color = $color
    end
    def validate(message = "", test_title = "", field_name = "", validating = true)                
        Print.validation(validating, field_name, test_title, @color)               
        if !@data.valid?
            @data.errors.messages.values.flatten.uniq.each do |error|
                Print.error(error, @color)
            end
        end        
        puts ""
        message = "#{message} (#{field_name})"
        validating ? assert(@data.save, message) : assert_not(@data.save, message)
    end                   
    include GeneralHelper
    include IntegerHelper
    include StringHelper
    include EmailHelper
    include ForeignIDHelper
    include IndexHelper
end