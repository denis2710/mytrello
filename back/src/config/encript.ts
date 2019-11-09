class ConfigEncrypt { 
    public saltingRounds: number
    public options: Object
    
    constructor(){ 
        this.saltingRounds = 10
        this.options = {
            expiresIn: '2d'
        }
    }

    
}

export default new ConfigEncrypt()