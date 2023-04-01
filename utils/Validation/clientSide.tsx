export const validateUsername = (username: string, min: number) => {
    if(username.length === 0){
        return {
            success: false,
            error: 'Feild empty'
        }
    }else if(username.length <= min){
        return {
            success: false,
            error: 'Username too short'
        }
    }else{
        return {
            success: true,
            error: ''
        }
    }
}

export const validateEmail = (email: string) => {
    const valid = email
    .toLowerCase()
    .match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
    if(valid === null){
        return {
            success: false,
            error: 'Invalid email'
        }
    }else{
        return {
            success: true,
            error: ''
        }
    }
}

export const validatePassword = (password: string, min: number) => {
    if(password.length === 0){
        return {
            success: false,
            error: 'Empty field'
        }
      }else if(!/^[A-Za-z0-9]+$/.test(password)){
        return {
            success: false,
            error: 'Password needs only letters and numbers'
        }
      }else if(password.length <= min){
        return {
            success: false,
            error: 'Password is too short'
        }
      }else{
        return {
            success: true,
            error: ''
        }
      }
}

export const validateDuplicatePassword = (password: string, originalPassword: string) => {
    if(password.length === 0){
        return {
            success: false,
            error: 'Empty field'
        }
    }else if(password !== originalPassword){
        return {
            success: false,
            error: 'Passwords did not match'
        }
    }else{
        return {
            success: true,
            error: ''
        }
    }
}