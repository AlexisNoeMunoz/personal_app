
module ForeignIDValidator
    def validate_foreign_id(field, name = "", config = {}, values = {})        
        config[:presence].nil? && config[:presence] = true
        config[:allow_duplicated].nil? && config[:allow_duplicated] = true

        values[:id] ||= 1
        
        Print.name(name, @color)
        validate_presence(field, name, config[:presence])
        validate_foreign_id_existence(field, name)            
        validate_duplicated(field, name, values[:id], config[:allow_duplicated])
    end   
end