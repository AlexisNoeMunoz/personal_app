
module IntegerValidator
    def validate_integer(field, name = "", config = {}, values = {})
        values[:min] ||= -2_147_483_647
        values[:max] ||= 2_147_483_647    
        
        config[:presence].nil? && config[:presence] = true
        config[:round_decimals] ||= false
        
        Print.name(name, @color)
        validate_presence(field, name, config[:presence])       
        validate_integer_min(field, name, values[:min])        
        validate_integer_max(field, name, values[:max])
                
        validate_integer_round_decimals(
            field, name, 
            values[:max], 
            config[:round_decimals]
        )
    end
end