
module ForeignIDWithBooleanValidator
    def validate_foreign_id_with_boolean(id_field, bool_field, id_name = "", bool_name = "", config = {}, values = {})
        values[:id] ||= 1
        values[:id_cross] ||= 2  
        values[:bool].nil? && values[:bool] = true
        values[:bool_cross] ||= false            
        config[:presence] = true
        
        Print.name(name, @color)
        #FOREIGN ID
        @data[bool_field] = values[:bool]
        validate_presence(id_field, id_name, config[:presence])                        
        validate_foreign_id_existence(id_field, id_name)            
        
        #BOTH 
        validate_index_double_unique(
            [id_field, bool_field], 
            [id_name, bool_name],
            [values[:id], values[:bool]],
            [values[:id_cross], values[:bool_cross]]
        )                                        
    end
end