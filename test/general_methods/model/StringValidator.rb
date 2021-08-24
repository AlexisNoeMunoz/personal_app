
module StringValidator    
    def validate_string(field, name = "", config = {}, values = {})
        values[:string] ||= 'Test'
        values[:string_insensitive] ||= 'test'
        values[:max_length] ||= 255
        values[:min_length] ||= 0
        
        config[:presence].nil? && config[:presence] = true
        config[:allow_duplicated].nil? && config[:allow_duplicated] = true    
        config[:case_sensitive] ||= false
        
        Print.name(name, @color)
        validate_presence(field, name, config[:presence])        
        validate_duplicated(field, name, values[:string], config[:allow_duplicated])            
        validate_string_duplicated_sensitive(
            field, name,
            values[:string_insensitive],
            config[:case_sensitive],
            config[:allow_duplicated]
        )        
        validate_string_min_length(field, name, values[:min_length])       
        validate_string_max_length(field, name, values[:max_length])               
    end    
end
