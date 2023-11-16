import { ButtonContainer, FormContainer, InputContainer, LoginContainer, LoginHeader, LoginItem1, LoginItem2, StyledImage } from "./Login.styles"
import cityImage from '../../assets/images/city.jpeg'
import Input from "../../Components/HtmlElements/input/Input.component"
import { useState } from "react"
import { Button, LinearProgress, Paper } from "@mui/material"
import { useDispatch, useSelector } from "react-redux"
import { loginAsync } from "../../slices/loginSlice"
import { RootState } from "../../store/store"

export interface ILogin {
    emailId: string;
    password: string;
}


const Login = () => {
    const dispatch = useDispatch()
    const { status } = useSelector((state: RootState) => state.login)

    const [loginData, setLoginData] = useState<ILogin>({
        emailId: '',
        password: ''
    })

    const changeHandlerLoginData = (e: any) => {
        setLoginData({ ...loginData, [e.target.name]: e.target.value })
    }

    const submitHandlerLoginData = (e: any) => {
        e.preventDefault();
        if (loginData.emailId && loginData.password) {
            dispatch<any>(loginAsync(loginData))
        }

    }

    const inputStyle: React.CSSProperties = {
        width: '100%'
    }



    return (
        <>
            <LoginContainer>
                <LoginItem1>
                    <StyledImage src={cityImage} alt="Login" />
                </LoginItem1>
                <LoginItem2>

                    <Paper elevation={4} sx={{ width: '400px' }} >
                        {status === 'loading' &&

                            <LinearProgress />
                        }
                        <div style={{ padding: '25px', height: '40vh' }}>


                            <LoginHeader>

                                Login
                            </LoginHeader>


                            <form onSubmit={submitHandlerLoginData} >
                                <FormContainer>

                                    <InputContainer>
                                        <Input
                                            style={inputStyle}
                                            name="emailId"
                                            label="Email"
                                            size="medium"
                                            type="email"
                                            value={loginData.emailId}
                                            onChange={changeHandlerLoginData}
                                        />
                                    </InputContainer>

                                    <InputContainer>
                                        <Input
                                            style={inputStyle}
                                            name="password"
                                            label="Password"
                                            size="medium"
                                            value={loginData.password}
                                            onChange={changeHandlerLoginData}
                                        />
                                    </InputContainer>

                                    <ButtonContainer>
                                        <Button variant="contained" size="large" sx={{ width: '100%' }} type="submit" >Submit</Button>
                                    </ButtonContainer>

                                </FormContainer>
                            </form>
                        </div>
                    </Paper>
                </LoginItem2>
            </LoginContainer>
        </>
    )
}


export default Login 