
module IndexHelper
    def validate_index_double_unique(fields=[], names=[], values=[], cross_values=[], second_cross_valid=true)
        field_names = "#{names[0]}, #{names[1]}",
        @data[fields[0]] = values[0]
        @data[fields[1]] = values[1]
        validate(
            "No se esta respetando que los campos son unicos en grupo",
            "Campos repetidos en grupo (1)",
            field_names,
            false
        )
        @data[fields[0]] = cross_values[0]
        @data[fields[1]] = cross_values[1]
        validate(
            "No se esta respetando que los campos son unicos en grupo",
            "Campos repetidos en grupo (2)",
            field_names,
            false
        )
        @data[fields[0]] = values[0]
        @data[fields[1]] = cross_values[1]
        validate(
            "No se esta respetando que los campos son unicos en grupo",
            "Campos validos en grupo (1)",
            field_names
        )
        
        @data[fields[0]] = cross_values[0]
        @data[fields[1]] = values[1]
        validate(
            second_cross_valid ?
                "No se esta respetando que los campos son unicos en grupo" :
                "No se esta respetando que los campos no se pueden cruzar",
            "Campos validos en grupo (2)",
            field_names,
            second_cross_valid
        )
    end    
    def validate_index_double_unique_sensitive(fields=[], names=[], values=[], cross_values=[], case_sensitive=false)
        field_names = "#{names[0]}, #{names[1]}",
        @data[fields[0]] = values[0]
        @data[fields[1]] = values[1]
        validate(
            case_sensitive ? 
                "No se esta respetando que los campos en grupo son sensibles a mayusculas" :
                "No se esta respetando que los campos en grupo son sin sensibilidad a mayusculas",
            "Campos repetidos en grupo con diferentes mayusculas (1)",
            field_names,
            case_sensitive
        )

        @data[fields[0]] = cross_values[0]
        @data[fields[1]] = cross_values[1]
        validate(
            case_sensitive ? 
                "No se esta respetando que los campos en grupo son sensibles a mayusculas" :
                "No se esta respetando que los campos en grupo son sin sensibilidad a mayusculas",        
            "Campos repetidos en grupo con diferentes mayusculas (2)",
            field_names,
            case_sensitive
        )
    end    

end