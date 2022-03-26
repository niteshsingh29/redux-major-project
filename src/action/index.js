export const collectStudentList = ()=> {
    return{
        type: 'StudentList',
    }

}
export const collectStudentInput = (event)=> {
    return{
        type: 'StudentList',
        payLoad: event
    }

}