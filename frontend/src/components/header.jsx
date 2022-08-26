import Styled from 'styled-components';
import DataUsageIcon from '@mui/icons-material/DataUsage';
import DescriptionIcon from '@mui/icons-material/Description';
import GpsFixedIcon from '@mui/icons-material/GpsFixed';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import { NavLink } from 'react-router-dom';

function header() {
    return (
        <Header>
            <NavLink
                to={`/`}
                className={(isActive) => (isActive ? '' : 'whiteColor')}
            >
                <GpsFixedIcon />
            </NavLink>
            <NavLink
                to={`Vessel_Route`}
                className={(isActive) => (isActive ? '' : 'whiteColor')}
            >
                <DataUsageIcon />
            </NavLink>
            <NavLink
                to={`overfishing`}
                className={(isActive) => (isActive ? '' : 'whiteColor')}
            >
                <LibraryBooksIcon />
            </NavLink>
            <NavLink
                to={`reports`}
                className={(isActive) => (isActive ? '' : 'whiteColor')}
            >
                <DescriptionIcon />
            </NavLink>
            <NavLink
                to={`prediction`}
                className={(isActive) => (isActive ? '' : 'whiteColor')}
            >
                <QueryStatsIcon />
            </NavLink>
            {/* <NavLink to={`/`}>
        <MonetizationOnIcon />
      </NavLink> */}
        </Header>
    );
}

const Header = Styled.div`
    position: absolute;
    top: 0;
    width: 50px;
    height: 100vh;
    padding: 10px 0;
    display: grid;
    justify-content: center;
    margin: 0px 0vw;
    background-color: #28ACEA;
    border-radius: 0px;
    color: #fff;
    .whiteColor {
      * {
      color: #fff;
      }
    }
`;

export default header;
