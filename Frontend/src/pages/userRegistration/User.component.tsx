
import { Icons } from "../../constants/Icons"
import { StatusChip } from "../userTable/UserTable.styles"
import { IconContainer, UserDetailsContainer, UserDetailsDiv } from "./UserRegistration.styles"


type UserProps = {
    name: string,
    email: string,
    role: string,
    date: string
    status: string
}

const User = ({ name, email, role, date, status }: UserProps) => {
    return (
        <>
            <UserDetailsContainer>
                <UserDetailsDiv>
                    <IconContainer>
                        {Icons.person}
                    </IconContainer>
                    {name}
                </UserDetailsDiv>

                <UserDetailsDiv>
                    <IconContainer>
                        {Icons.email}
                    </IconContainer>
                    {email}
                </UserDetailsDiv>

                <UserDetailsDiv>
                    <IconContainer>
                        {Icons.role}
                    </IconContainer>
                    {role}
                </UserDetailsDiv>

                <UserDetailsDiv>
                    <IconContainer>
                        {Icons.event}
                    </IconContainer>
                    {date}
                </UserDetailsDiv>

                <UserDetailsDiv>
                    <IconContainer>
                        {Icons.status}
                    </IconContainer>
                    <StatusChip $status={status}>{status}</StatusChip>
                </UserDetailsDiv>
            </UserDetailsContainer>
        </>
    )
}

export default User