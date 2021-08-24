
module IntegerHelper
    def validate_integer_min(field, name, min)
        @data[field] = min - 1
        validate(
            "No se esta respetando el valor minimo permitido",
            "Valor menor al minimo permitido",
            name,
            false
        )
        @data[field] = min
        validate(
            "No se esta respetando que el valor minimo permitido",
            "Valor minimo permitido",
            name
        )
    end
    def validate_integer_max(field, name, max)
        @data[field] = max + 1
        validate(
            "No se esta respetando el valor maximo permitido",
            "Valor mayor al maximo permitido",
            name,
            false
        )        
        @data[field] = max
        validate(
            "No se esta respetando que el valor maximo permitido",
            "Valor maximo permitido",
            name
        )
    end
    def validate_integer_round_decimals(field, name, max, round_decimals)
        @data[field] = max - 0.5
        validate(
            round_decimals ?
                "No se esta respetando que el campo si puede redondear decimales a enteros" :
                "No se esta respetando que el campo no puede redondear decimales a enteros",        
            "Valor con decimales",
            name,
            !round_decimals
        )
    end
end