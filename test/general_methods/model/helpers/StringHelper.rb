
module StringHelper    
    def validate_string_duplicated_sensitive(field, name, value, case_sensitive, allow_duplicated)
        unless allow_duplicated
            @data[field] = value
            validate(
                case_sensitive ? 
                    "No se esta respetando que hay sensibilidad a mayusculas en los campos duplicados" :
                    "No se esta respetando que no hay sensibilidad a mayusculas en los campos duplicados",
                "Campo repetido con diferentes mayusculas",
                name,
                case_sensitive
            )
        end
    end
    def validate_string_max_length(field, name, length)
        @data[field] = '1' * (length + 1)
        validate(
            "No se esta respetando el limite de caracteres en el campo",
            "El campo supera el limite maximo de caracteres",
            name,
            false
        )
        
        @data[field] = '1' * length
        validate(
            "No se esta respetando el limite de caracteres en el campo",
            "El campo esta al limite maximo de caracteres",
            name
        )
    end
    def validate_string_min_length(field, name, length)        
        if length > 0
            @data[field] = '1' * (length - 1)
            validate(
                "No se esta respetando el minimo de caracteres requeridos en el campo",
                "El campo esta por debajo del minimo de caracteres requeridos",
                name,
                false
            )

            @data[field] = '1' * length
            validate(
                "No se esta respetando el minimo de caracteres requeridos en el campo",
                "El campo esta al limite minimo de caracteres",
                name
            )
        end                
    end
end