import { User } from '../../models/user'

describe('Users Model', () => {
    it('should get the users full name', () => {
        const name = "Pera Peric";

        const usersData: User = new User(1, name)

        expect(usersData.getFullName()).toEqual(name)
    })
})
