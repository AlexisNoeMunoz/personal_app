
module ForeignIDHelper
    def validate_foreign_id_existence(field, name)
        @data[field] = 1000
        validate(
            "No se esta respetando que el campo debe ser existente",
            "Campo inexistente",
            name,
            false
        )
    end    
end