
const data = () => {
    let list = localStorage.getItem('jobID')

    let data = []
    list ? data = JSON.parse(list) : data ;
    return data
}
export {data}