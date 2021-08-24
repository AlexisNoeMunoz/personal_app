
import Rails from '@rails/ujs'

const request = ({ method = 'GET', ...props }) => {             
    
    if(method === 'GET')
        props.data = new URLSearchParams(props.data).toString()
    else
        props.beforeSend = (xhr, options) => {                        
            if(props.contentType != false){
                if(typeof props.data !== 'object') props.data = {}                
                xhr.setRequestHeader('Content-Type', 'application/json; charset=UTF-8')                            
                options.data = JSON.stringify(props.data)                            
            }                
            return true        
        }    
    return new Promise((resolve, reject) => {        
        Rails.ajax({
            ...props,        
            type: method,
            success: (response) => resolve(response),
            error: (response, status, xhr) => reject({response, xhr})
        })                
    })
}

export { request }