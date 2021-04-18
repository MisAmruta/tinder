import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import React,{useState } from 'react'
import './LandingPage.css'
import axios from './axios'
import {useDataLayerValue } from './DataLayer'
import {useHistory } from 'react-router-dom'


function LandingPage() {
    const history = useHistory()
    const[name,setName] = useState('')
    const[email,setEmail] = useState('')
    const[password,setPassword] = useState('')
    const[url,setUrl] = useState('')
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isLogin, setIsLogin] = useState(false);
    const [{user}, dispatch] = useDataLayerValue();
    

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen)
    }

    const uploadFields=()=>{

            axios.post('/signup',{
                name,
                email,
                password,
                pic:url
            }) 
             .then(result=>{
                 setName('')
                 setEmail('')
                 setPassword('')
                 setUrl('')
                 setIsLogin(true)
                //  console.log(result.data)
             }) 
    }
    const login=()=>{
            axios.post('/signin',{
                email,
                password
            }) .then(result=>{ 
                // console.log(result.data.user)
                dispatch({
                    type : 'SET_USER',
                    user:result.data.user
                })
                    history.push('/home')
            })
    }

    console.log(user)
    return (
        <div className="landingPage">
            <div className="tinder-logo">
                <div>
                    <img alt="svgImg" src="https://res.cloudinary.com/saaho-insta/image/upload/v1615702704/tinder-logo_epchxh.jpg" />

                </div>
                <div>
                    <button className="loginBtn" onClick={() => {
                        setIsLogin(true)
                        toggleModal()
                    }}
                    >Log In</button>
                </div>
            </div>
            <div className="tinder-body">
                <div className="body">

                    <h1>Start something epic.</h1>
                    <div>
                        <button className="registerBtn" onClick={() => {
                            setIsLogin(false)
                            toggleModal()
                        }}  >Create Account</button>
                    </div>
                </div>


                <Modal className="parentModal" isOpen={isModalOpen} toggle={toggleModal}>

                    <ModalHeader toggle={toggleModal}>{!isLogin ? 'Register' : 'Login'}</ModalHeader>
                    <ModalBody>

                        {!isLogin ? (
                            <>
                                <input className="input" type="text" placeholder="Enter name" value={name} onChange={e => setName(e.target.value)} />
                                <input className="input" type="email" placeholder="Enter email" value={email} onChange={e => setEmail(e.target.value)} />
                                <input className="input" type="password" placeholder="Enter password" value={password} onChange={e => setPassword(e.target.value)} />
                                <input className="input" type="text" placeholder="Enter image url" value={url} onChange={e => setUrl(e.target.value)} />
                            </>
                        )
                            :
                            (
                                <>
                                    <input className="input" type="email" placeholder="Enter email" value={email} onChange={e => setEmail(e.target.value)} />
                                    <input className="input" type="password" placeholder="Enter password" value={password} onChange={e => setPassword(e.target.value)} />
                                </>
                            )
                        }

                    </ModalBody>
                    <ModalFooter>
                    <button className="submitBtn" onClick={() => !isLogin ? uploadFields() : login()}  >{!isLogin ? 'Submit' : 'Login'}</button>
                    </ModalFooter>
                </Modal>

            </div>
        </div>
    )
}

export default LandingPage
