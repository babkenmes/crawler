import { handleErrors } from "../utils/errorHandling"


export const createKeyword = (data) => {
    return fetch("/api/keywords", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify(data)
    }).then(handleErrors).then(res => res.json())
}
export const editKeyword = (data) => {
    return fetch(`/api/keywords/${data._id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }).then(handleErrors).then(res => res.json())
}
export const deleteKeyword = (id) => {
    return fetch(`/api/keywords/${id}`, {
        method: 'DELETE'
    }).then(handleErrors).then(res => res.json())
}
export const markStopped = (id) => {
    return fetch(`/api/keywords/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ running: false })
    }).then(handleErrors).then(res => res.json())
}


export const getAll = (page = 0,page_size=5, sort = 'created') => fetch(`/api/keywords/all/${page}/${page_size}/${sort}`).then(handleErrors).then(response => response.json())
export const getRunning = (page = 0,page_size=5, sort = 'created') => fetch(`/api/keywords/running/${page}/${page_size}/${sort}`).then(handleErrors).then(response => response.json())
export const getLanded = (page = 0,page_size=5, sort = 'created') => fetch(`/api/keywords/landed/${page}/${page_size}/${sort}`).then(handleErrors).then(response => response.json())
export const getWaiting = (page = 0,page_size=5, sort = 'created') => fetch(`/api/keywords/waiting/${page}/${page_size}/${sort}`).then(handleErrors).then(response => response.json())
export const getWithErrors = (page = 0,page_size=5, sort = 'created') => fetch(`/api/keywords/errors/${page}/${page_size}/${sort}`).then(handleErrors).then(response => response.json())

export const getRegionstats = (region) => fetch(`/api/keywords/regionstats/${region}`).then(handleErrors).then(response => response.json())

<<<<<<< HEAD
export const resetByRegion = (region) => fetch(`/api/keywords/read/${region}`).then(handleErrors).then(response => response.json())

export const getNotReachedDetailedData = (region) => fetch(`/api/keywords/notreached_detailed/${region}`).then(handleErrors).then(response => response.json())
=======
>>>>>>> fe6ce9c5a653e331c9f3912ef5eabc35fdeeea6a

export const getKeyword = (id) => () => fetch(`/api/keywords/${id}`).then(handleErrors).then(response => response.json())

export const resumeAll = () => fetch("/api/keywords/resumeall").then(handleErrors).then(response => response.json())

