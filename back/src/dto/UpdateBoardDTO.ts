import IPrivacity from "../enums/PrivacityEnum";

interface UpdateBoardDTO {     
    title?: string, 
    description?: string, 
    color?: string, 
    bgImage?: string,    
    members?: [string], 
    privaicty: IPrivacity
}

export default UpdateBoardDTO