export abstract class Item {
    id = 0
    label: string | undefined

    constructor(id: number, label: string) {
        this.id = id
        this.label = label
    }
}