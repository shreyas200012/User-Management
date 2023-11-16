
import { useEffect, useMemo } from 'react';
import { MaterialReactTable, MRT_ColumnDef } from 'material-react-table';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { getAllUsers } from '../../slices/userSlice';
import { RoleChip, StatusChip, UserTableContainer } from './UserTable.styles';
import { Avatar, Stack } from '@mui/material';
import { deepOrange } from '@mui/material/colors';
import User from '../userRegistration/User.component';
import UserEdit from './UserEdit.component';


export interface IUserObject {
    _id: string;
    userName: string;
    emailId: string;
    role: string;
    dateOfBirth: string;
    status: string;
}



const UserTable = () => {
    const dispatch = useDispatch()
    const { data, error, loading } = useSelector((state: RootState) => state.user)
    const { user } = useSelector((state: RootState) => state.login)

    useEffect(() => {
        if (loading === 'idle') {

            dispatch<any>(getAllUsers())
        }
    }, [loading])

    useEffect(() => {
        console.log(error)
    }, [error])

    const baseColumns: MRT_ColumnDef<IUserObject>[] = [
        {
            header: 'Name',
            accessorKey: 'userName',
            Cell: ({ row, renderedCellValue }) => {
                const getFirsTwoValue = () => {
                    let name = row.original.userName.trim().toUpperCase();
                    return name.substring(0, 2)
                }
                return (
                    <>
                        <Stack direction={'row'} columnGap={1} alignItems={'center'}>

                            <Avatar sx={{ bgcolor: deepOrange[500], fontSize: '14px', fontFamily: 'verdana' }}>{getFirsTwoValue()}</Avatar>
                            <span>{renderedCellValue}</span>
                        </Stack>
                    </>
                )
            }
        },
        {
            header: 'Email Id',
            accessorKey: 'emailId'
        },
        {
            header: 'Role',
            accessorKey: 'role',
            Cell: ({ renderedCellValue, row }) => {
                return (
                    <>
                        <RoleChip $role={row.original.role}>{renderedCellValue}</RoleChip>
                    </>
                )
            }
        },
        {
            header: 'Date Of Birth',
            accessorKey: 'dateOfBirth'
        },
        {
            header: 'Status',
            accessorKey: 'status',
            Cell: ({ renderedCellValue, row }) => {
                return (
                    <>
                        <StatusChip $status={row.original.status} >{renderedCellValue}</StatusChip>
                    </>
                )
            }
        }
    ]


    const columns = useMemo<MRT_ColumnDef<IUserObject>[]>(() => {
        const isAdmin = user && user.role.trim().toLowerCase() === 'admin'
        baseColumns;

        if (isAdmin) {


            baseColumns.push({
                header: 'actions',
                Cell: ({ row }) => {
                    return (
                        <>
                            <UserEdit data={row.original} />
                        </>
                    )
                },
                enableColumnActions: false
            })
        }
        return baseColumns
    }, [data])





    return (
        <>
            <UserTableContainer>

                <MaterialReactTable
                    columns={columns}
                    data={data ? data : []}
                    enableDensityToggle={false}
                    enableFullScreenToggle={false}
                    enableHiding={false}
                    enableStickyHeader
                    renderDetailPanel={({ row }) => (
                        <>
                            <User
                                name={row.original.userName}
                                email={row.original.emailId}
                                role={row.original.role}
                                date={row.original.dateOfBirth}
                                status={row.original.status}
                            />
                        </>
                    )}
                    initialState={{ density: 'compact', showGlobalFilter: true }}
                    state={
                        {
                            isLoading: loading === 'pending',
                            showProgressBars: loading === 'pending',
                        }
                    }
                    muiSearchTextFieldProps={
                        {
                            variant: 'outlined',
                            sx: {
                                '& .MuiOutlinedInput-root': {
                                    height: '40px',
                                    width: '300px'
                                },
                                '& .MuiTextField-root': {
                                    width: '100% !important',

                                }
                            }

                        }
                    }
                    muiTableContainerProps={{ sx: { height: '72vh' } }}
                    muiTablePaperProps={{ sx: { boxShadow: 'none' } }}
                    muiTableHeadCellProps={{ sx: { fontFamily: 'verdana', fontSize: '14px', fontWeight: 'bold' } }}
                    muiTableBodyCellProps={{ sx: { fontFamily: 'verdana', fontSize: '12px' } }}
                />
            </UserTableContainer>
        </>
    )
}

export default UserTable