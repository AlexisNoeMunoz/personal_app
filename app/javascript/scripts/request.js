
import Rails from '@rails/ujs'

const request = ({ method = 'GET', ...props }) => {        
    props.beforeSend = (xhr, options) => {                        
        if(props.contentType != false){
            xhr.setRequestHeader('Content-Type', 'application/json; charset=UTF-8')
            if(typeof props.data !== 'object') props.data = {}
            options.data = JSON.stringify(props.data)
        }                
        return true        
    }
    return new Promise((resolve, reject) => {        
        Rails.ajax({
            ...props,        
            type: method,
            success: (response) => resolve(response),
            error: ({errors}, status, xhr) => reject({errors, xhr})
        })                
    })
}

export { request }