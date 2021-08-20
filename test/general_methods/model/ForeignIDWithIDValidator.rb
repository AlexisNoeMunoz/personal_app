
module ForeignIDWithIDValidator
    
    def validate_foreign_id_with_id(field, second_field, name = "", second_name = "", config = {}, values = {})
        values[:id] ||= 1
        values[:id_cross] ||= 2  
        values[:second_id] ||= 1
        values[:second_id_cross] ||= 2    
        
        config[:second_cross_valid].nil? && config[:second_cross_valid] = true
        config[:presence] = true
            
        Print.name(name, @color)
        #FIRST ID
        @data[second_field] = values[:second_id]    
        validate_presence(field, name, config[:presence])       
        validate_foreign_id_existence(field, name) 
            
        #SECOND ID
        @data[field] = values[:id]
        validate_presence(second_field, second_name, config[:presence])
        validate_foreign_id_existence(second_field, second_name)   
        
        #BOTH
        validate_index_double_unique(
            [field, second_field],
            [name, second_name],
            [values[:id], values[:second_id]],
            [values[:id_cross], values[:second_id_cross]],
            config[:second_cross_valid]
        )       
    end
end