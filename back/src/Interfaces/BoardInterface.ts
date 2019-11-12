import { Document } from "mongoose";
import UserInterface from "./UserInterface";
import IPrivacity from "../enums/PrivacityEnum";

interface BoardInterface { 
    id?: string, 
    title: string, 
    description?: string, 
    color?: string, 
    bgImage?: string, 
    creathor_id : string, 
    creathor?: UserInterface, 
    members?: [UserInterface], 
    privaicty: IPrivacity
}

export default BoardInterface