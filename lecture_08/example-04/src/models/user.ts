import { IModel } from '../interface/IModel'
import { runInThisContext } from 'vm'

export class User implements IModel {
    private userId: number
    private createdDate: Date
    private fullName: string

    constructor (id: number, name: string) {
        this.userId = id
        this.fullName = name
        this.createdDate = new Date()
    }

    /**
     * return user identifier
     */
    getId (): number {
        return this.userId
    }
    /**
     * set user identifier
     * @param value - user identifier
     */
    setId (value: number) {
        this.userId = value
    }

    /**
     * return user's full name
     */
    getFullName (): string {
        return this.fullName
    }

    /**
     * set user's full name
     * @param value - user's full name
     */
    setFullName (value: string) {
        this.fullName = value
    }

    /**
     * return date/timeclear of object creation
     */
    getDateCreated (): Date {
        return this.createdDate
    }

}