import { User } from './user'

export class Employee extends User {

    private companyNname: string

    constructor (id: number, name: string, companName: string) {
        super(id, name)
        this.companyNname = companName
    }

    /**
     * returns company name
     */
    getCompnayName(): string {
        return this.companyNname
    }

    /**
     * set company name
     * @param value - company name
     */
    setCompanyNname (value: string) {
        this.companyNname = value
    }

}