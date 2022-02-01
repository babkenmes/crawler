import { handleErrors } from "../utils/errorHandling"
export const createAnimation = (data) => {
    return fetch("/api/animations", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify(data)
    }).then(handleErrors).then(res => res.json())
}
export const editAnimation = (data) => {
    return fetch(`/api/animations/${data._id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }).then(handleErrors).then(res => res.json())
}
export const deleteAnimation = (id) => {
    return fetch(`/api/animations/${id}`, {
        method: 'DELETE'
    }).then(handleErrors).then(res => res.json())
}
export const getAll = () => fetch("/api/animations").then(handleErrors).then(response => response.json())

export const getAnimation = (id) => () => fetch(`/api/animations/${id}`).then(handleErrors).then(response => response.json())