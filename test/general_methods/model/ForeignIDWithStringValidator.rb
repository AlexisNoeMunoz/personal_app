
module ForeignIDWithStringValidator
    def validate_foreign_id_with_string(id_field, string_field, id_name = "", string_name = "", config = {}, values = {})
        values[:string] ||= 'Test'    
        values[:string_insensitive] ||='test'
        values[:string_cross] ||= 'Test2'
        values[:string_cross_insensitive] ||= 'test2'
        values[:id] ||= 1
        values[:id_cross] ||= 2
        values[:string_max_length] ||= 255
        
        config[:case_sensitive] ||= false
        config[:presence] = true
        
        Print.name(name, @color)
        #FOREIGN ID
        @data[string_field] = values[:string]
        validate_presence(id_field, id_name, config[:presence])                        
        validate_foreign_id_existence(id_field, id_name)                                    
            
        #STRING
        @data[id_field] = values[:id]
        validate_presence(string_field, string_name, config[:presence])            
        validate_string_max_length(string_field, string_name, values[:string_max_length])                
        
        #BOTH
        validate_index_double_unique(
            [id_field, string_field],
            [id_name, string_name],
            [values[:id], values[:string]],
            [values[:id_cross], values[:string_cross]]
        )
        validate_index_double_unique_sensitive(
            [id_field, string_field],
            [id_name, string_name],
            [values[:id], values[:string_insensitive]],
            [values[:id_cross], values[:string_cross_insensitive]],
            config[:case_sensitive]
        )        
    end
end