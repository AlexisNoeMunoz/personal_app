
module EmailValidator
    def validate_email(field, name = "", config = {}, values = {})
        config[:presence].nil? && config[:presence] = true
        config[:allow_duplicated].nil? && config[:allow_duplicated] = true
        config[:case_sensitive] ||= false

        values[:email] ||= 'Test@Test.com'
        values[:email_insensitive] ||= 'test@test.com'
        values[:max_length] ||= 255                

        Print.name(name, @color)
        validate_presence(field, name, config[:presence])
        validate_duplicated(field, name, values[:email], config[:allow_duplicated])        
        validate_string_duplicated_sensitive(
            field, name, 
            values[:email_insensitive], 
            config[:case_sensitive],
            config[:allow_duplicated]
        )    
        validate_email_format(field, name)  
        validate_email_max_length(field, name, values[:max_length])  
    end            
end