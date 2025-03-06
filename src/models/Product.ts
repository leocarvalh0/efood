class Product {
    title: string
    description: string
    image: string
    id: number
    avalition?: number
    infos?: string[]
    buttonValue: string

    constructor(
        id: number,
        title: string,
        description: string,
        image: string,
        avalition: number,
        infos: string[],
        buttonValue: string
    ) {
        this.id = id
        this.title = title
        this.description = description
        this.image = image
        this.avalition = avalition
        this.infos = infos
        this.buttonValue = buttonValue
    }
}

export default Product