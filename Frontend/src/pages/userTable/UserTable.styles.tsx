import styled from 'styled-components'

export const RoleChip = styled.div<{ $role: string }>`
    min-width: 60px;
    max-width: fit-content;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border: 2px solid ${props => props.$role.trim().toLowerCase() === 'admin' ? '#3498db' : '#2ecc71'} ;
    color: ${props => props.$role.trim().toLowerCase() === 'admin' ? '#3498db' : '#2ecc71'} ;
    font-size: 12px;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    border-radius: 4px  ;
`

export const UserTableContainer = styled.div`
    margin-top: 60px;

`


export const StatusChip = styled.div<{ $status: string }>`
    min-width: 60px;
    max-width: fit-content;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border: none;
    height: 20px;
    border-radius: 10px;
    color: white;
    font-size: 12px;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    background-color: ${props => props.$status.trim().toLowerCase() === 'active' ? '#00FF00' : '#FF0000'};
`