import { ApiFilmsResult } from "./models"

export async function getAllFilmsApiServices(): Promise<ApiFilmsResult> {
    const response = await fetch('https://swapi.tech/api/films')
    // ici mon code est asynchrone
    return await response.json()
}