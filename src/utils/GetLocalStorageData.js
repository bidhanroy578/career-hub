function SetLocalStorageData(id) {
    let savedJob = GetSavedJob()
    let alreadySaved = savedJob.find(i => i === id)
    if (!alreadySaved) {
        savedJob.push(id)
        localStorage.setItem('jobID' , JSON.stringify(savedJob))
    }
    return alreadySaved
}

function GetSavedJob() {
    let storedJob = localStorage.getItem('jobID')
    if (storedJob) {
        return JSON.parse(storedJob)
    } else { return [] }
}

export { SetLocalStorageData } 