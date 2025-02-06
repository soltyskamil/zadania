first_case = {
    name: 'first_case',
    created_task: new Date('2021-10-26T19:48:12+00:00'),
    end_task: null
}
second_case = {
    name: 'second_case',
    created_task: new Date('2021-09-26T19:48:12+00:00'),
    end_task: new Date('2021-10-26T19:48:12+00:00')
}
function retrieveSeconds(obj){
    const created = obj.created_task.getTime() / 1000
    if(obj.end_task == null || obj.end_task == 'None') {
        console.log("błąd w obiekcie")
        return
    }

    const ended = obj.end_task.getTime() / 1000
    return ended - created;
}

retrieveSeconds(second_case)