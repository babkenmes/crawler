import { handleErrors } from "../utils/errorHandling"
export const createDevice = (data) => {
    return fetch("/api/devices", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify(data)
    }).then(handleErrors).then(res => res.json())
}
export const editDevice = (data) => {
    return fetch(`/api/devices/${data._id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }).then(handleErrors).then(res => res.json())
}
export const deleteDevice = (id) => {
    return fetch(`/api/devices/${id}`, {
        method: 'DELETE'
    }).then(handleErrors).then(res => res.json())
}
export const getAll = () => fetch("/api/devices").then(handleErrors).then(response => response.json())

export const getDevice = (id) => () => fetch(`/api/devices/${id}`).then(handleErrors).then(response => response.json())