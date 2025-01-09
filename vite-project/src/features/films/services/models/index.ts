export interface ApiOneFilmResult {
    uid: number
    description: string
    properties: {
        title: string,
        episode_id: number
    }
}

export interface ApiFilmsResult {
    result: ApiOneFilmResult[]
}