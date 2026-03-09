export class Restaurant {
  description: string
  image: string
  avaliation: string
  title: string
  id: number

  constructor(
    description: string,
    image: string,
    avaliation: string,
    title: string,
    id: number
  ) {
    this.description = description
    this.image = image
    this.avaliation = avaliation
    this.title = title
    this.id = id
  }
}
