require_relative 'Print'
require_relative 'model/Validator'
require_relative 'model/CoinValidator'
require_relative 'model/EmailValidator'
require_relative 'model/ForeignIDValidator'
require_relative 'model/ForeignIDWithBooleanValidator'
require_relative 'model/ForeignIDWithEmailValidator'
require_relative 'model/ForeignIDWithIDValidator'
require_relative 'model/ForeignIDWithStringValidator'
require_relative 'model/IntegerValidator'
require_relative 'model/StringValidator'

module ModelValidator          
    include Print    
    include Validator       
    include CoinValidator
    include EmailValidator
    include ForeignIDValidator
    include ForeignIDWithBooleanValidator
    include ForeignIDWithEmailValidator
    include ForeignIDWithIDValidator
    include ForeignIDWithStringValidator    
    include IntegerValidator   
    include StringValidator            
end