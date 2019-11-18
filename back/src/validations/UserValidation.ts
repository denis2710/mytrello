import { Request, Response, NextFunction} from 'express'
import GValidations from "./GenericsValidations";

interface IResponseError { 
    code: number, 
    message: string
}

class CreateUserValidation { 

    public createUser  = (req : Request, res: Response, next: NextFunction) : void | Response => { 
        const { firstName, lastName, username, password, email } = req.body
        const errors : IResponseError[]  = []
        
        
        this.basicStringValidate(firstName, 'O nome').forEach((error) => { 
            errors.push(error)
        })

        this.basicStringValidate(lastName, 'O sobrenome').forEach((error) => { 
            errors.push(error)
        }) 

        this.basicStringValidate(username, 'O nome de usuário').forEach((error) => { 
            errors.push(error)
        })

        this.basicStringValidate(password, 'A senha').forEach((error) => { 
            errors.push(error)
        })

        this.basicStringValidate(email, 'O email').forEach((error) => { 
            errors.push(error)
        })

        if(errors.length > 0){ 
            const responseError = { 
                code: 401, 
                message: 'Ocorreram erros ao tentar gravar', 
                errors: errors
            }
            return res.status(401).send(responseError)
        }

        return next()
 
    }

    private getErrorMesage(code: number, message: string) : IResponseError { 
        return { code, message }
    }

    private basicStringValidate (value: string, fieldName: string) : IResponseError[] {
        const errors : {code: number, message: string}[] = []

        if(GValidations.isEmpty(value)){
            errors.push(this.getErrorMesage(401, `${fieldName} não pode ser vazio`))
        }

        if(GValidations.lThen(value, 3)){
            errors.push(this.getErrorMesage(401, ` ${fieldName} não pode conter menos de 3 caracteres `))            
        }

        if(GValidations.gThen(value, 50)){
            errors.push(this.getErrorMesage(401, ` ${fieldName} não pode ter mais de 50 caracteres`))            
        }

        return errors
        
    }

}

export default new CreateUserValidation()