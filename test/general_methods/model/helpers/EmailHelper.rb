
module EmailHelper
    def validate_email_format(field, name)
        @data[field] = 'test'
        validate(
            "No se esta respetando el campo debe tener formato de email",
            "Campo sin formato de email",
            name,
            false
        )
    end
    def validate_email_max_length(field, name, length)
        @data[field] = "#{"a" * (length - 9 + 1)}@test.com"
        validate(
            "No se esta respetando el limite de caracteres en el campo",
            "El campo supera el limite de caracteres",
            name,
            false
        )
        @data[field] = "#{"a" * (length - 9)}@test.com"
        validate(
            "No se esta respetando el limite de caracteres en el campo",
            "El campo esta al limite de caracteres",
            name
        )
    end
end