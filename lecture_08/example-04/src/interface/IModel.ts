/**
 * @description IModel represents interface for model classes
 */
export interface IModel {
    getId(): number
    setId(value: number)

    getFullName(): string
    setFullName(value: string)

    getDateCreated(): Date

  }
  