
module ForeignIDWithEmailValidator

    def validate_foreign_id_with_email(id_field, email_field, id_name = "", email_name = "", config = {}, values = {})
        values[:email] ||= 'Test@Test.com'
        values[:email_insensitive] ||= 'test@test.com'
        values[:email_cross] ||= 'Test2@Test2.com'
        values[:email_cross_insensitive] ||= 'test2@test2.com'
        values[:id] ||= 1
        values[:id_cross] ||= 2
        values[:email_max_length] ||= 255
        
        config[:case_sensitive] ||= false
        config[:presence] = true        
        
        Print.name(name, @color)
        # FOREIGN ID
        @data[email_field] = values[:email]
        validate_presence(id_field, id_name, config[:presence])        
        validate_foreign_id_existence(id_field, id_name)        
            
        # EMAIL
        @data[id_field] = values[:id]
        validate_presence(email_field, email_name, config[:presence])                    
        validate_email_format(email_field, email_name)
        validate_email_max_length(email_field, email_name, values[:email_max_length])                             
            
        #BOTH
        validate_index_double_unique(
            [id_field, email_field],
            [id_name, email_name],
            [values[:id], values[:email]],
            [values[:id_cross], values[:email_cross]]
        )
        validate_index_double_unique_sensitive(
            [id_field, email_field],
            [id_name, email_name],
            [values[:id], values[:email_insensitive]],
            [values[:id_cross], values[:email_cross_insensitive]],
            config[:case_sensitive]
        )    
    end       
end