import styled from "styled-components";


const Login = (props) => {
    return (
        <Container>
            <Nav>
                <a href="/">
                    <img src="https://www.jobvite.com/wp-content/uploads/2020/09/linkedin-logo.png" alt="" />
                </a>
                <div>
                    <Join>
                        Join now
                    </Join>
                    <SignIn>Sign in</SignIn>
                </div>
            </Nav>
            <Section>
                <Hero>
                    <h1>Welcome to your professional community</h1>
                    <img src="https://static-exp1.licdn.com/sc/h/dxf91zhqd2z6b0bwg85ktm5s4" alt="" />
                </Hero>
                
            </Section>
        </Container>
    )
}


const Container = styled.div `
    padding: 0px;


`

const Nav = styled.nav `
    max-width: 1128px;
    margin: auto;
    padding: 12px 0 16px;
    display: flex;
    align-items: center;
    position: relative;
    justify-content: space-between;
    flex-wrap: nowrap;

    img{
        width: 120%;
    }

    & > a{
        width: 135px;
        height: 34px;

        @media (max-width: 768px){
            padding: 0 5px;
        }
    }

`

const Join = styled.a `
    font-size: 16px;
    padding: 10px 12px;
    text-decoration: none;
    color: rgba(0, 0, 0, 0.6);
    margin-right: 12px;
    border-radius: 4px;

    &:hover{
        background-color: rgba(0, 0, 0, 0.08);
        color: rgba(0, 0, 0, 0.6);
        text-decoration: none;
    }
`

const SignIn = styled.a `
    box-shadow: inset 0 0 0 1px #0a66c2;
    color: #0a66c2;
    border-radius: 24px;
    transition: 167ms;
    font-size: 16px;
    font-weight: 600;
    line-height: 40px;
    padding: 10px 24px;
    text-align: center;
    background-color: rgba(0, 0, 0, 0);

    &:hover{
        background-color: rgba(112, 181, 249, 0.15);
        color: #0a66c2;
        text-decoration: none;
    }
`

const Section = styled.section `
    display: flex;
    align-content: start;
    min-height: 700px;
    padding-bottom: 138px;
    padding-top: 40px;
    padding: 60px 0;
    position: relative;
    flex-wrap: wrap;
    width: 100%;
    max-width: 1128px;
    align-items: center;
    margin: auto;

    @media (max-width: 768px){
        margin: auto;
        min-height: 0px;
    }
`

const Hero = styled.div `
    width: 100%;
    h1{
        padding-bottom: 0;
        width: 55%;
        font-size: 56px;
        color: #8F5849;
        font-weight: lighter;
        line-height: 70px;

        @media (max-width: 768px){
            width: 100%;
            font-size: 20px;
            text-align: center;
            line-height: 2;
        }

    }

    img{
        z-index: -1;
        width: 700px;
        height: 670px;
        position: absolute;
        bottom: -2px;
        right: -150px;
        @media (max-width: 768px){
            top: 230px;
            width: initial;
            position: initial;
            height: initial;
        }
    }
`;


export default Login