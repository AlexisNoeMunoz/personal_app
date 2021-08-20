

module GeneralHelper
    def validate_presence(field, name, presence)
        @data[field] = nil
        validate(
            presence ? 
                "No se esta respetando que el campo es obligatorio" :
                "No se esta respetando que el campo puede estar vacio",
            "Campo vacio",
            name,
            !presence
        )
    end
    def validate_duplicated(field, name, value, allow_duplicated)
        @data[field] = value
        validate(
            allow_duplicated ? 
                "No se esta respetando que puede haber campos duplicados" :
                "No se esta respetando el campo unico",              
            "Campo repetido",
            name,
            allow_duplicated
        )        
    end
end