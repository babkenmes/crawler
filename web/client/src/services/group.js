import { handleErrors } from "../utils/errorHandling"
export const createGroup = (data) => {
    return fetch("/api/groups", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify(data)
    }).then(handleErrors).then(res => res.json())
}
export const editGroup = (data) => {
    return fetch(`/api/groups/${data._id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }).then(handleErrors).then(res => res.json())
}
export const deleteGroup = (id) => {
    return fetch(`/api/groups/${id}`, {
        method: 'DELETE'
    }).then(handleErrors).then(res => res.json())
}
export const getAll = () => fetch("/api/groups").then(handleErrors).then(response => response.json())

export const getGroup = (id) => fetch(`/api/groups/${id}`).then(handleErrors).then(response => response.json())

export const getAnimationGroups = () => fetch(`/api/groups/getByType/Animation`).then(handleErrors).then(response => response.json())
export const getDeviceGroups = () => fetch(`/api/groups/getByType/Device`).then(handleErrors).then(response => response.json())
