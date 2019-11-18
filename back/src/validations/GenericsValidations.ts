class GerenericsValidations {
    /**
     * Check if string is empty 
     */
    public isEmpty = (str: string) : Boolean => {
        if(!str){
            return true
        }
        return str.trim().length === 0
    }

    /**
     * Check if string is lowest then  
     */
    public lThen = (str: string, n: number) : Boolean => {
        if(!str){
            return true
        }
         return str.trim().length < n 
    }

    /**
     * Check if string is greated then  
     */
    public gThen = (str: string, n: number) : Boolean => {
        if(!str){
            return true
        }
         return str.trim().length > n 
    }

    
}
export default new  GerenericsValidations()
