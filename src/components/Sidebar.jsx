import styled from "styled-components";
import logo from "../assets/react.svg";
import { NavLink } from "react-router-dom";
import { AiOutlineLeft, AiOutlineHome } from "react-icons/ai";
import { FaCalendarAlt } from "react-icons/fa";
import { MdWatchLater } from "react-icons/md";


const Sidebar = ({sidebarOpen, setSidebarOpen}) => {
    const ModSidebaropen=() => {
        setSidebarOpen(!sidebarOpen);
    }

    return (
        <Container isOpen = {sidebarOpen}>
            <button className="Sidebarbutton" onClick={ModSidebaropen}>
                <AiOutlineLeft />
            </button>
            <div className="Logocontent">
                <div className="imgcontent">
                    <img src={logo}/>
                </div>
                <h2>NewProject</h2>
            </div> 
            {linksArray.map(({icon, label, link}) =>(
                <div className="LinkContainer" key={label}>
                    <NavLink to={link} className={({isActive})=>`Links${isActive? ` active` : ``}`}>
                        <div className="Linkicon">{icon}</div>
                        {sidebarOpen && (<span className="Linklabel">{label}</span>)}
                    </NavLink>
                </div>
            ))}
            <Divider />
        </Container>
        
    );
};

const linksArray = [
    {
        label: "Home",
        icon: <AiOutlineHome />,
        link: "/"
    },
    {
        label: "Calendario",
        icon: <FaCalendarAlt />,
        link: "/calendario"
    },
    {
        label: "Disponibilidad",
        icon: <MdWatchLater />,
        link: "/disponibilidad"
    }
]


const Container = styled.div`
    color: ${(props) => props.theme.text};
    background: ${(props) => props.theme.bg};
    position: sticky;
    padding-top: 15px;
    .Sidebarbutton{
        position: absolute;
        top: 48px;
        right: -18px;
        width: 32px;
        height: 32px;
        border-radius: 50%;
        background: ${(props) => props.theme.bgtgderecha};
        box-shadow: 0 0 4px ${(props) => props.theme.bg3}, 0 0 7px ${(props) => props.theme.bg};
        display: flex;
        letter-spacing: inherit;
        text-align: inherit;
        padding: 0px;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        transition: all 0.3s;
        transform: ${({isOpen}) => (isOpen? `initial` : `rotate(180deg)`)};
        
    }
    .Logocontent {
        display: flex;
        justify-content: center;
        align-items: center;
        padding-bottom: 15px;
        padding-left: 15px;
        padding-right: 15px;
        overflow: hidden;
        .imgcontent{
            display: flex;
            cursor: pointer;         
            height: ${({ isOpen }) => (isOpen ? "55px" : "50px")};
            width: auto;
            transition: all 0.5s cubic-bezier(0.68, -0.55, 0.27, 1.55);

            img {
                max-width: 100%;
                height: auto;
                object-fit: contain;
                transition: inherit;
            }
        }
        h2{
            display: ${({ isOpen }) => (isOpen ? "block" : "none")};
            margin-left: 10px;
            font-size: 20px;
            transform: ${({ isOpen }) => isOpen ? 'scaleX(1)' : 'scaleX(0)'};
            transform-origin: left;
            transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            max-width: ${({ isOpen }) => (isOpen ? '200px' : '0')};
            overflow: hidden;
        }
    }
    .LinkContainer {
        margin: 8px 0;
        padding: 0 15%;
        :hover{
            background: ${(props) => props.theme.bg3};
        }
        .Links {
            display:flex;
            align-items: center;
            text-decoration: none;
            padding: 6px 0;
            .Linkicon {
                padding: 6px 0;
                padding-right: 10px;
                padding-left: 19px;
                display: flex;
                svg{
                    font-size: 24px;
                }
            }
            .Linklabel {
                transform: ${({ isOpen }) => isOpen ? 'scaleX(1)' : 'scaleX(0)'};
                transform-origin: left;
                transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                max-width: ${({ isOpen }) => (isOpen ? '200px' : '0')};
                overflow: hidden;
            }
            &.active{
                background: ${(props) => props.theme.bg3};
            }
        }
    }
`;
const Divider = styled.div`
    height: 1px;
    width: 100%;
    background: ${(props) => props.theme.bg3};
    margin: 24px 0;
`;
export default Sidebar;