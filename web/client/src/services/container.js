import { handleErrors } from "../utils/errorHandling"

export const getAll = () => fetch("/api/containers").then(handleErrors).then(response => response.json())
export const getRegions = () => fetch("/api/regions").then(handleErrors).then(response => response.json())

export const changeRegion = (id) => fetch(`/api/containers/changeregion/${id}`).then(handleErrors).then(response => response.json())

export const getgRegionTags = () => fetch("/api/containers/getregiontags").then(handleErrors).then(response => response.json())
