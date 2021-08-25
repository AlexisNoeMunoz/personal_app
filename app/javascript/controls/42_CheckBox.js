
import { bool, string } from "prop-types"
import { useComboBoxHandler } from "controls/hooks"
import { forwardRef } from "react"

const CheckBox = forwardRef(({
    className = '',    
    value = false,
    ...props }, ref) => {

    const { status, $input } = useComboBoxHandler(ref, value)

    className += ' CHECKBOX'
    if(status !== '') className += ` CHECKBOX--${status}`    
    return (
        <input {...props} 
            type='checkbox' 
            className={className} 
            defaultChecked={value}                        
            ref={$input}             
        />
    )
})

CheckBox.propTypes = {
    className: string,
    value: bool,
}

CheckBox.displayName = 'CheckBox'
export { CheckBox }