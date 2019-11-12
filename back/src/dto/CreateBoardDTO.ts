interface CreateBoardDTO { 
    title: string, 
    description?: string, 
    color?: string, 
    bgImage?: string, 
    members_id?: [String], 
    privaicty: String
}

export default CreateBoardDTO