import { Item } from './item'

export class Planet extends Item {
    private width: number

    constructor(width: number, id: number, label: string) {
        super(id, label)
        this.width = width
    }
}