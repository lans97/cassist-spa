import { ApiUser } from '../types/api/user'
import { FrontUser } from '../types/front/user'

function mapApiUserToFrontend(apiUser: ApiUser): FrontUser {
    return {
        id: apiUser.id,
        uuid: apiUser.uuid,
        email: apiUser.email,
        role: apiUser.role.name,
        displayName: apiUser.displayName,
    }
}

