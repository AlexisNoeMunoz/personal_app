
module CoinValidator
    def validate_coin(field, name = "", config = {}, values = {})
        config[:presence].nil? && config[:presence] = true
    
        values[:min] ||= 0
        values[:max] ||= 999_999_999.99        
        
        Print.name(name, @color)
        validate_presence(field, name, config[:presence])                
        validate_integer_min(field, name, values[:min])
        validate_integer_max(field, name, values[:max])
    end    
end